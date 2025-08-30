<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAdventureStore } from '@/stores/adventureStore'
import { useUserStore } from '@/stores/userStore'
import { useUiStore } from '@/stores/uiStore'
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toastification'
import { db } from '@/firebaseConfig'
import { doc, getDoc, setDoc, collection, onSnapshot, deleteDoc } from 'firebase/firestore'
import { uploadImage } from '@/services/storageService.js'
import Bestiary from './Bestiary.vue'
import MonsterDetails from './MonsterDetails.vue'
import CombatTracker from './combatTracker.vue'
import CharacterStatBlock from './CharacterStatBlock.vue'
import ItemDetails from './ItemDetails.vue'

// --- SETUP DEGLI STORE E ROUTER ---
const router = useRouter()
const adventureStore = useAdventureStore()
const { adventuresList, activeAdventureId } = storeToRefs(adventureStore)
const {
  subscribeToAdventures,
  createNewAdventure,
  deleteAdventure,
  addAccordionItem,
  setActiveAdventure,
  clearStore,
} = adventureStore
const userStore = useUserStore()
const uiStore = useUiStore()
const { isBestiaryOpen } = storeToRefs(uiStore)
const toast = useToast()

// --- STATO DEL COMPONENTE ---
const currentAdventure = ref(null)
const sharedItemIds = ref(new Set())
const playersInAdventure = ref([])
const activeSession = ref(null)
const inviteLink = ref('')
const monsterToAddInCombat = ref(null)
let sharedContentListener = null
let playersListener = null
let sessionListener = null

// --- STATO UI E MODALI ---
const isInviteModalOpen = ref(false)
const isDmNotesOpen = ref(true)
const isCombatTrackerOpen = ref(true)
const expandedChapterId = ref(null)
const accordionSections = ref([
  { name: 'Ambienti', id: 'ambienti' },
  { name: 'PNG', id: 'png' },
  { name: 'Mostri', id: 'mostri' },
  { name: 'Tesori', id: 'tesori' },
  { name: 'Mappe', id: 'mappe' },
  { name: 'Immagini', id: 'immagini' },
])
const isAdventuresOpen = ref(true)
const isDmDiceOpen = ref(true)
const activeAccordionPanel = ref(null)
const expandedItems = ref({})
const isCodeImportModalOpen = ref(false)
const codeToImport = ref('')
const importSectionId = ref('mostri')
const isMonsterDetailsModalOpen = ref(false)
const selectedMonsterForModal = ref(null)
const isCharacterDetailsModalOpen = ref(false)
const selectedCharacterForModal = ref(null)
const isItemDetailsModalOpen = ref(false)
const selectedItemForModal = ref(null)

// --- GESTIONE CICLO DI VITA ---
onMounted(() => {
  subscribeToAdventures()
  const sessionDocRef = doc(db, 'sessions', 'active_session')
  sessionListener = onSnapshot(sessionDocRef, (docSnap) => {
    activeSession.value = docSnap.exists() ? docSnap.data() : null
  })
})

// --- FUNZIONE `handleShowDetails` CORRETTA E DEFINITIVA ---
function handleShowDetails(item) {
  if (!item) return
  // Un 'combatant' ha una proprietà 'monsterData' o 'is_pc'. Un 'item' no.
  const dataToShow = item.monsterData || item

  if (dataToShow.is_pc) {
    openPlayerSheet(dataToShow.id)
  } else if (dataToShow.ability_scores) {
    // Riconosce Mostri e PNG
    selectedMonsterForModal.value = dataToShow
    isMonsterDetailsModalOpen.value = true
  } else {
    // Tutti gli altri (Ambienti, Tesori, etc.)
    selectedItemForModal.value = dataToShow
    isItemDetailsModalOpen.value = true
  }
}

// ...il resto del tuo script (incollo tutto per sicurezza)...

async function loadAdventure(adventureId) {
  setActiveAdventure(adventureId)
  activeAdventureId.value = adventureId
  if (sharedContentListener) sharedContentListener()
  if (playersListener) playersListener()
  const docRef = doc(db, 'adventures', adventureId)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    const data = docSnap.data()
    if (!data.combatState) {
      data.combatState = { combatants: [], combatTurn: 0, turnCount: 1 }
    }
    currentAdventure.value = { id: docSnap.id, ...data }
    const sharedContentRef = collection(db, 'adventures', adventureId, 'sharedContent')
    sharedContentListener = onSnapshot(sharedContentRef, (snapshot) => {
      sharedItemIds.value = new Set(snapshot.docs.map((doc) => doc.id))
    })
    const playersRef = collection(db, 'adventures', adventureId, 'players')
    playersListener = onSnapshot(playersRef, async (snapshot) => {
      const playerPromises = snapshot.docs.map(async (playerDoc) => {
        const characterSnap = await getDoc(doc(db, 'characterSheets', playerDoc.id))
        return characterSnap.exists() ? { id: playerDoc.id, ...characterSnap.data() } : null
      })
      playersInAdventure.value = (await Promise.all(playerPromises)).filter((p) => p)
    })
  } else {
    currentAdventure.value = null
    toast.error("Impossibile caricare l'avventura.")
  }
}
let debounceTimer = null
watch(
  currentAdventure,
  (modifiedData) => {
    if (modifiedData && activeAdventureId.value) {
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(async () => {
        try {
          const docRef = doc(db, 'adventures', activeAdventureId.value)
          const { id, ...dataToSave } = modifiedData
          await setDoc(docRef, dataToSave)
          toast.success('Modifiche salvate!', { timeout: 1500 })
        } catch (error) {
          toast.error('Errore durante il salvataggio.')
        }
      }, 2000)
    }
  },
  { deep: true },
)
async function confirmDeleteAdventure(adventure) {
  if (confirm(`Sei sicuro di voler eliminare l'avventura "${adventure.title}"?`)) {
    await deleteAdventure(adventure.id)
    if (activeAdventureId.value === adventure.id) {
      currentAdventure.value = null
      setActiveAdventure(null)
    }
    toast.success('Avventura eliminata.')
  }
}
const allPreparedItems = computed(() => {
  if (!currentAdventure.value) return []
  const items = []
  const sectionsToScan = ['ambienti', 'png', 'mostri', 'tesori', 'mappe', 'immagini']
  for (const sectionId of sectionsToScan) {
    if (currentAdventure.value[sectionId] && Array.isArray(currentAdventure.value[sectionId])) {
      currentAdventure.value[sectionId].forEach((item) => {
        const name = item.name
        if (name) {
          items.push({ name: name.toLowerCase(), item: item })
        }
      })
    }
  }
  return items
})
function renderLinkedText(text) {
  if (!text) return ''
  const keywords = allPreparedItems.value.map((i) =>
    i.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
  )
  if (keywords.length === 0) return text
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi')
  return text.replace(regex, (match) => {
    return `<span class="linked-item" data-item-name="${match.toLowerCase()}">${match}</span>`
  })
}
function showDetails(event) {
  const target = event.target
  if (target.classList.contains('linked-item')) {
    const itemName = target.dataset.itemName
    const found = allPreparedItems.value.find((i) => i.name === itemName)
    if (found) {
      handleShowDetails(found.item)
    }
  }
}
async function startSession() {
  /* ... */
}
async function endSession() {
  /* ... */
}
function openInviteModal() {
  /* ... */
}
function copyToClipboard() {
  /* ... */
}
async function shareItem(item, type, contentField, idSuffix = '') {
  /* ... */
}
async function unshareItem(itemId, idSuffix = '') {
  /* ... */
}
async function handleAdventureImageUpload(event, item, fieldName) {
  /* ... */
}
function addMonsterToCombat(monster) {
  /* ... */
}
function updateCombatState(newState) {
  /* ... */
}
async function removePlayer(playerId) {
  /* ... */
}
function addPlayersToCombat() {
  /* ... */
}
function importItemFromCode() {
  /* ... */
}
function toggleAdventures() {
  isAdventuresOpen.value = !isAdventuresOpen.value
}
function toggleAccordionPanel(panelId) {
  activeAccordionPanel.value = activeAccordionPanel.value === panelId ? null : panelId
}
function toggleItem(itemId) {
  expandedItems.value[itemId] = !expandedItems.value[itemId]
}
function getAbilityModifier(score) {
  /* ... */
}
const dmDiceHistory = ref([])
const dmDiceModifier = ref(0)
function rollDmDice(sides) {
  /* ... */
}
function toggleChapter(chapterId) {
  expandedChapterId.value = expandedChapterId.value === chapterId ? null : chapterId
}
function openPlayerSheet(playerId) {
  router.push({ path: '/', query: { charId: playerId } })
}
function addItemToSection(sectionId) {
  /* ... */
}
function removeItemFromSection(sectionId, itemToRemove) {
  /* ... */
}
function addChapter() {
  /* ... */
}
</script>

<template>
  <div class="adventure-sheet">
    <div class="sidebar adventures-list box">
      <div class="section-header" @click="toggleAdventures">
        <h3>Le Mie Avventure</h3>
        <button @click.stop="() => createNewAdventure()" class="add-btn small">+</button>
        <span class="toggle-icon">{{ isAdventuresOpen ? '▼' : '▶' }}</span>
      </div>
      <div v-if="isAdventuresOpen" class="section-content">
        <ul v-if="adventuresList.length > 0">
          <li v-for="adventure in adventuresList" :key="adventure.id" class="adventure-list-item">
            <span class="adventure-title" @click="loadAdventure(adventure.id)">{{
              adventure.title
            }}</span>
            <button @click.stop="confirmDeleteAdventure(adventure)" class="delete-adventure-btn">
              ×
            </button>
          </li>
        </ul>
        <p v-else>Crea la tua prima avventura usando il tasto +</p>
      </div>

      <div v-if="currentAdventure" class="players-section box">
        <div class="section-header"><h3>Giocatori in Sessione</h3></div>
        <div class="section-content">
          <ul v-if="playersInAdventure.length > 0" class="player-list">
            <li v-for="player in playersInAdventure" :key="player.id" class="player-card">
              <div class="player-card-main" @click="openPlayerSheet(player.id)">
                <strong class="player-name">{{ player.header.name }}</strong>
                <span class="player-info"
                  >{{ player.header.race }} {{ player.header.classes[0]?.name }} (Liv.
                  {{ player.header.classes.reduce((acc, cv) => acc + (cv.level || 0), 0) }})</span
                >
                <span class="player-hp"
                  >PF: {{ player.combat.hp.current }} / {{ player.combat.hp.max }}</span
                >
              </div>
              <button @click.stop="removePlayer(player.id)" class="remove-player-btn">×</button>
            </li>
          </ul>
          <p v-else class="no-players-message">
            Nessun giocatore si è ancora unito a questa sessione.
          </p>
        </div>
      </div>

      <div class="accordion-container" v-if="currentAdventure">
        <div v-for="section in accordionSections" :key="section.id" class="accordion-panel box">
          <div class="accordion-header section-header" @click="toggleAccordionPanel(section.id)">
            <h3>{{ section.name }}</h3>
            <span class="toggle-icon">{{ activeAccordionPanel === section.id ? '▼' : '▶' }}</span>
          </div>
          <div v-if="activeAccordionPanel === section.id" class="accordion-content">
            <div v-if="section.id === 'mostri' || section.id === 'png'">
              <div
                v-for="item in currentAdventure[section.id]"
                :key="item.id"
                class="accordion-item"
              >
                <div class="item-header" @click.stop="toggleItem(item.id)">
                  <input type="text" v-model="item.name" @click.stop class="title-input" />
                  <button
                    @click.stop="addMonsterToCombat(item)"
                    class="add-to-combat-btn"
                    title="Aggiungi a Combattimento"
                  >
                    ⚔️
                  </button>
                  <button
                    @click.stop="removeItemFromSection(section.id, item)"
                    class="remove-btn small"
                  >
                    -
                  </button>
                  <span class="toggle-icon">{{ expandedItems[item.id] ? '▼' : '▶' }}</span>
                </div>
                <div v-if="expandedItems[item.id]" class="stat-block-editor">
                  <div class="grid-item full-width">
                    <label>Immagine</label>
                    <img
                      v-if="item.image_url"
                      :src="item.image_url"
                      class="monster-editor-image"
                      alt="Anteprima"
                    />
                    <label :for="'monster-upload-' + item.id" class="upload-btn"
                      >Carica Immagine</label
                    >
                    <input
                      :id="'monster-upload-' + item.id"
                      type="file"
                      @change="handleAdventureImageUpload($event, item, 'image_url')"
                      accept="image/*"
                      style="display: none"
                    />

                    <div class="share-controls">
                      <button
                        v-if="item.image_url && !sharedItemIds.has(item.id + '_img')"
                        @click="shareItem(item, 'immagine', 'image_url', '_img')"
                        class="share-btn"
                      >
                        Condividi Immagine
                      </button>
                      <button
                        v-else-if="item.image_url"
                        @click="unshareItem(item.id, '_img')"
                        class="unshare-btn"
                      >
                        Nascondi Immagine
                      </button>
                    </div>
                  </div>
                  <div class="grid-item full-width">
                    <label>Descrizione (Lore, Aspetto)</label>
                    <textarea
                      rows="4"
                      v-model="item.description"
                      placeholder="Descrizione..."
                    ></textarea>
                    <div class="share-controls">
                      <button
                        v-if="!sharedItemIds.has(item.id + '_desc')"
                        @click="shareItem(item, 'descrizione', 'description', '_desc')"
                        class="share-btn"
                      >
                        Condividi Descrizione
                      </button>
                      <button v-else @click="unshareItem(item.id, '_desc')" class="unshare-btn">
                        Nascondi Descrizione
                      </button>
                    </div>
                  </div>
                  <div
                    v-if="section.id === 'png' || section.id === 'mostri'"
                    class="grid-item full-width"
                  >
                    <label>Spunto per il DM</label
                    ><textarea
                      rows="3"
                      v-model="item.dm_prompt"
                      placeholder="Segreti, missioni, agganci di trama..."
                    ></textarea>
                  </div>
                  <div class="monster-details-grid">
                    <div class="grid-item">
                      <label>Dimensioni</label><input type="text" v-model="item.size" />
                    </div>
                    <div class="grid-item">
                      <label>Tipo</label><input type="text" v-model="item.type" />
                    </div>
                    <div class="grid-item">
                      <label>Allineamento</label><input type="text" v-model="item.alignment" />
                    </div>
                    <div class="grid-item">
                      <label>Classe Armatura</label><input type="number" v-model.number="item.ac" />
                    </div>
                    <div class="grid-item">
                      <label>Punti Ferita</label><input type="number" v-model.number="item.hp" />
                    </div>
                    <div class="grid-item">
                      <label>Dadi Vita</label><input type="text" v-model="item.hp_dice" />
                    </div>
                    <div class="grid-item">
                      <label>Grado di Sfida</label
                      ><input type="text" v-model="item.challenge_rating" />
                    </div>
                    <div class="grid-item full-width">
                      <label>Velocità</label><input type="text" v-model="item.speed" />
                    </div>
                  </div>
                  <div class="stat-block-abilities-editor">
                    <div
                      v-for="(score, key) in item.ability_scores"
                      :key="key"
                      class="ability-editor"
                    >
                      <label>{{ key.toUpperCase() }}</label>
                      <input type="number" v-model.number="item.ability_scores[key]" />
                      <span>{{ getAbilityModifier(item.ability_scores[key]) }}</span>
                    </div>
                  </div>
                  <div class="grid-item full-width">
                    <label>Abilità</label
                    ><textarea
                      rows="2"
                      v-model="item.skills"
                      placeholder="Furtività +6, Percezione +4..."
                    ></textarea>
                  </div>
                  <div class="grid-item full-width">
                    <label>Sensi</label
                    ><textarea
                      rows="2"
                      v-model="item.senses"
                      placeholder="scurovisione 18 m, Percezione passiva 14..."
                    ></textarea>
                  </div>
                  <div class="grid-item full-width">
                    <label>Linguaggi</label
                    ><textarea
                      rows="2"
                      v-model="item.languages"
                      placeholder="Comune, Elfico..."
                    ></textarea>
                  </div>
                  <div class="grid-item full-width">
                    <label>Tratti</label
                    ><textarea
                      rows="4"
                      v-model="item.traits"
                      placeholder="Scrivi qui i tratti speciali..."
                    ></textarea>
                  </div>
                  <div class="grid-item full-width">
                    <label>Azioni</label
                    ><textarea
                      rows="4"
                      v-model="item.actions"
                      placeholder="Scrivi qui le azioni..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <button @click="addItemToSection(section.id)" class="add-btn small mt-10">
                + Aggiungi {{ section.id === 'mostri' ? 'Mostro' : 'PNG' }}
              </button>
            </div>
            <div v-else>
              <div
                v-for="item in currentAdventure[section.id]"
                :key="item.id"
                class="accordion-item"
              >
                <div class="item-header" @click.stop="toggleItem(item.id)">
                  <input type="text" v-model="item.name" @click.stop class="title-input" />
                  <button
                    @click.stop="removeItemFromSection(section.id, item)"
                    class="remove-btn small"
                  >
                    -
                  </button>
                  <span class="toggle-icon">{{ expandedItems[item.id] ? '▼' : '▶' }}</span>
                </div>
                <div v-if="expandedItems[item.id]" class="item-section">
                  <label>Visibile ai Giocatori:</label>
                  <textarea
                    v-model="item.shareNotes"
                    class="text-editor player-view"
                    rows="2"
                  ></textarea>
                  <div class="share-controls">
                    <button
                      v-if="!sharedItemIds.has(item.id)"
                      @click="shareItem(item, 'ambiente', 'shareNotes')"
                      class="share-btn"
                    >
                      Condividi
                    </button>
                    <button v-else @click="unshareItem(item.id)" class="unshare-btn">
                      Nascondi
                    </button>
                  </div>
                  <label>Note per il DM:</label>
                  <textarea v-model="item.dmNotes" class="text-editor dm-view" rows="2"></textarea>
                  <label>Immagine</label>
                  <img
                    v-if="item.imageUrl"
                    :src="item.imageUrl"
                    alt="Immagine dell'oggetto"
                    class="item-image"
                  />
                  <label :for="'item-upload-' + item.id" class="upload-btn">Carica Immagine</label>
                  <input
                    :id="'item-upload-' + item.id"
                    type="file"
                    @change="handleAdventureImageUpload($event, item, 'imageUrl')"
                    accept="image/*"
                    style="display: none"
                  />

                  <div class="share-controls">
                    <button
                      v-if="item.imageUrl && !sharedItemIds.has(item.id + '_img')"
                      @click="
                        shareItem(
                          { id: item.id + '_img', name: item.name, content: item.imageUrl },
                          'immagine',
                          'content',
                        )
                      "
                      class="share-btn"
                    >
                      Condividi Img
                    </button>
                    <button
                      v-if="item.imageUrl && sharedItemIds.has(item.id + '_img')"
                      @click="unshareItem(item.id + '_img')"
                      class="unshare-btn"
                    >
                      Nascondi Img
                    </button>
                  </div>
                </div>
              </div>
              <button @click="addItemToSection(section.id)" class="add-btn small mt-10">
                + Aggiungi
              </button>
            </div>
          </div>
        </div>
        <button @click="isCodeImportModalOpen = true" class="import-btn">Importa da Codice</button>
      </div>
    </div>
    <div class="main-content">
      <div v-if="currentAdventure">
        <section class="adventure-block box">
          <div class="section-header">
            <input
              type="text"
              v-model="currentAdventure.title"
              class="chapter-title-input"
              style="font-size: 1.5em"
            />
          </div>
          <div class="adventure-controls">
            <button
              v-if="!activeSession || activeSession.adventureId !== currentAdventure.id"
              @click="startSession"
              class="invite-btn start-session"
            >
              Avvia Sessione
            </button>
            <button v-else @click="endSession" class="invite-btn end-session">
              Termina Sessione
            </button>
            <button @click="openInviteModal" class="invite-btn">Invita Giocatori</button>
            <button class="add-chapter-btn" @click="addChapter">+ Aggiungi Capitolo</button>
          </div>
          <div class="section-content">
            <h4>Background</h4>
            <textarea
              v-model="currentAdventure.background"
              class="text-editor"
              placeholder="Scrivi qui il background dell'avventura..."
            ></textarea>
          </div>
        </section>
        <section
          v-for="chapter in currentAdventure.chapters"
          :key="chapter.id"
          class="adventure-block box"
        >
          <div class="section-header" @click="toggleChapter(chapter.id)">
            <h3>
              Capitolo:
              <input type="text" @click.stop v-model="chapter.title" class="chapter-title-input" />
            </h3>
            <span class="toggle-icon">{{ expandedChapterId === chapter.id ? '▼' : '▶' }}</span>
          </div>
          <div v-if="expandedChapterId === chapter.id" class="section-content">
            <h4>Contenuto per il DM</h4>
            <textarea
              v-model="chapter.content"
              class="text-editor"
              placeholder="Scrivi qui il contenuto del capitolo..."
            ></textarea>
            <div
              class="linked-text-preview"
              v-html="renderLinkedText(chapter.content)"
              @click="showDetails"
            ></div>
            <h4>Testo da condividere con i giocatori</h4>
            <textarea
              v-model="chapter.shareContent"
              class="text-editor share-content-editor"
              placeholder="Questo è il testo che vuoi mostrare ai tuoi giocatori."
            ></textarea>
            <div class="share-controls">
              <button
                v-if="!sharedItemIds.has(chapter.id)"
                @click="shareItem(chapter, 'capitolo', 'shareContent')"
                class="share-btn"
              >
                Condividi
              </button>
              <button v-else @click="unshareItem(chapter.id)" class="unshare-btn">Nascondi</button>
            </div>
            <div
              class="linked-text-preview player-view"
              v-html="renderLinkedText(chapter.shareContent)"
              @click="showDetails"
            ></div>
          </div>
        </section>
      </div>
      <div v-else class="empty-state">
        <p>Seleziona un'avventura dalla lista a sinistra o creane una nuova per iniziare.</p>
      </div>
    </div>
    <div class="right-sidebar">
      <section v-if="currentAdventure" class="dm-notes-panel box">
        <div class="section-header" @click="isDmNotesOpen = !isDmNotesOpen">
          <h3>Note per il DM</h3>
          <span class="toggle-icon">{{ isDmNotesOpen ? '▼' : '▶' }}</span>
        </div>
        <div v-if="isDmNotesOpen" class="section-content">
          <textarea
            v-model="currentAdventure.dmNotes"
            class="text-editor"
            placeholder="Appunti privati per il Dungeon Master..."
          ></textarea>
        </div>
      </section>
      <section class="dm-dice-roller box">
        <div class="section-header" @click="isDmDiceOpen = !isDmDiceOpen">
          <h3>Tira Dadi DM</h3>
          <span class="toggle-icon">{{ isDmDiceOpen ? '▼' : '▶' }}</span>
        </div>
        <div v-if="isDmDiceOpen" class="section-content">
          <div class="dice-tray">
            <button @click="rollDmDice(4)">d4</button><button @click="rollDmDice(6)">d6</button
            ><button @click="rollDmDice(8)">d8</button><button @click="rollDmDice(10)">d10</button
            ><button @click="rollDmDice(12)">d12</button><button @click="rollDmDice(20)">d20</button
            ><button @click="rollDmDice(100)">d100</button>
          </div>
          <div class="dice-modifier">
            <label>Modificatore:</label
            ><input type="number" v-model.number="dmDiceModifier" class="modifier-input" />
          </div>
          <div class="dm-dice-history">
            <h4>Cronologia</h4>
            <ul>
              <li v-for="roll in dmDiceHistory" :key="roll.id">
                {{ roll.description }}: {{ roll.diceResult }} + {{ roll.modifier }} =<strong>{{
                  roll.result
                }}</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="combat-tracker box">
        <CombatTracker
          v-if="currentAdventure && currentAdventure.combatState"
          :isCombatTrackerOpen="isCombatTrackerOpen"
          :monsterToAdd="monsterToAddInCombat"
          :combatState="currentAdventure.combatState"
          @update:combatState="updateCombatState"
          @toggle-combat-tracker="isCombatTrackerOpen = !isCombatTrackerOpen"
          @show-details="handleShowDetails"
          @toggle-bestiary="uiStore.toggleBestiary(true)"
          @add-players="addPlayersToCombat"
        />
      </section>
    </div>
    <div v-if="isInviteModalOpen" class="modal-overlay" @click.self="isInviteModalOpen = false">
      <div class="modal-content">
        <h3>Invita Giocatori alla Sessione</h3>
        <p>Condividi questo link con i tuoi giocatori per farli entrare nella sessione corretta.</p>
        <div class="invite-link-wrapper">
          <input type="text" :value="inviteLink" readonly />
          <button @click="copyToClipboard" class="copy-btn">Copia</button>
        </div>
        <div class="modal-actions">
          <button @click="isInviteModalOpen = false" class="btn-secondary">Chiudi</button>
        </div>
      </div>
    </div>
    <Bestiary
      v-if="isBestiaryOpen"
      @close="uiStore.toggleBestiary(false)"
      @addMonster="addMonsterToCombat"
      @show-details="handleShowDetails"
    />
    <MonsterDetails
      v-if="isMonsterDetailsModalOpen"
      :monster="selectedMonsterForModal"
      @close="isMonsterDetailsModalOpen = false"
    />
    <ItemDetails
      v-if="isItemDetailsModalOpen"
      :item="selectedItemForModal"
      @close="isItemDetailsModalOpen = false"
    />

    <CharacterStatBlock
      v-if="isCharacterDetailsModalOpen"
      :character="selectedCharacterForModal"
      @close="isCharacterDetailsModalOpen = false"
    />
  </div>
</template>

<style scoped>
.adventure-sheet {
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  padding: 15px;
  width: 1100px;
  font-family: serif;
  margin: 2rem auto;
  display: flex;
  gap: 15px;
}
.box {
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
}
.sidebar,
.right-sidebar {
  flex-shrink: 0;
  overflow-y: auto;
  position: sticky;
  top: 2rem;
  align-self: flex-start;
  max-height: calc(100vh - 4rem);
}
.sidebar {
  flex-basis: 300px;
  background-color: #f8f9fa;
  color: #000;
}
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar li {
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 5px;
  transition: background-color 0.2s;
}
.sidebar li:hover {
  background-color: #e9ecef;
}
.sidebar li.active {
  background-color: #646cff;
  color: white;
}
.right-sidebar {
  flex-basis: 300px;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex-grow: 1;
}
.section-header {
  padding: 0;
}
.section-header h3 {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.toggle-icon {
  font-size: 1.5em;
  color: #666;
}
.section-content {
  padding-top: 15px;
  margin-top: 10px;
  border-top: 1px solid #ddd;
}
.add-btn.small {
  width: auto;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 0.9em;
}
.add-chapter-btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}
.text-editor {
  width: 100%;
  min-height: 200px;
  padding: 10px;
  font-family: serif;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
  color: #000;
  box-sizing: border-box;
}
.share-content-editor {
  min-height: 100px;
}
.chapter-title-input {
  width: 100%;
  background: none;
  border: none;
  color: #000;
  font-size: inherit;
  font-family: inherit;
  box-sizing: border-box;
}
.adventure-block {
  margin-bottom: 20px;
}
.empty-state {
  text-align: center;
  color: #888;
  font-size: 1.5rem;
  margin-top: 50px;
}
.accordion-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #fff;
  color: #000;
}
.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 10px;
  cursor: pointer;
}
.title-input {
  flex-grow: 1;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px;
  font-size: 1.1em;
  font-weight: bold;
  box-sizing: border-box;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  min-width: 0;
}
.title-input:hover,
.title-input:focus {
  border: 1px solid #ccc;
  background-color: #f0f0f0;
}
.item-section,
.stat-block-editor {
  padding: 10px;
  border-top: 1px solid #ddd;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.item-section label,
.stat-block-editor label {
  font-size: 0.7em;
  font-weight: bold;
  text-transform: uppercase;
  color: #555;
}
.monster-details-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 8px;
}
.stat-block-abilities-editor {
  display: flex;
  justify-content: space-between;
  gap: 5px;
  background: #f4f4f4;
  padding: 5px;
  border-radius: 4px;
}
.ability-editor {
  text-align: center;
  width: 15%;
}
.ability-editor label {
  font-size: 0.8em;
  font-weight: bold;
}
.ability-editor input {
  width: 100%;
  text-align: center;
  padding: 2px;
}
.ability-editor span {
  font-size: 0.9em;
  font-weight: bold;
  color: #555;
}
.remove-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1.2em;
  cursor: pointer;
}

/* --- INIZIO STILI MIGLIORATI --- */
.combat-controls {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
.combat-controls button {
  background-color: #34495e;
  color: #ecf0f1;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  font-family: sans-serif;
  font-weight: bold;
  transition: background-color 0.2s;
}
.combat-controls button:hover {
  background-color: #4e6a85;
}
.combat-controls button:disabled {
  background-color: #95a5a6;
  color: #bdc3c7;
  cursor: not-allowed;
}
.bestiary-btn {
  background-color: #c0392b !important; /* !important per sovrascrivere lo stile base */
  color: white !important;
}
.bestiary-btn:hover {
  background-color: #e74c3c !important;
}

.dm-dice-roller .section-content {
  background-color: #34495e;
  padding: 15px;
  border-radius: 6px;
}
.dm-dice-roller h4 {
  color: #ecf0f1;
  margin-top: 10px;
  margin-bottom: 5px;
  border-bottom: 1px solid #7f8c8d;
  padding-bottom: 5px;
}
.dice-tray {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}
.dice-tray button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}
.dice-tray button:hover {
  background-color: #4e6a85;
}
.dice-modifier {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.dice-modifier label {
  color: #bdc3c7;
  font-weight: bold;
}
.modifier-input {
  width: 50px;
  padding: 5px;
  text-align: center;
  border: 1px solid #7f8c8d;
  border-radius: 4px;
  background-color: #2c3e50;
  color: white;
}
.dm-dice-history {
  height: 100px;
  overflow-y: auto;
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 10px;
  border-radius: 5px;
  font-family: monospace;
}
.dm-dice-history ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9em;
}
/* --- FINE STILI MIGLIORATI --- */

.adventure-controls {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 10px 0 10px; /* Aggiunge un po' di spazio */
  flex-wrap: wrap; /* Assicura che i pulsanti vadano a capo su schermi piccoli */
}

.invite-btn {
  background-color: #8e44ad;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-family: serif;
  font-weight: bold;
}
.start-session {
  background-color: #27ae60; /* Verde */
}
.end-session {
  background-color: #c0392b; /* Rosso */
}
.invite-link-wrapper {
  display: flex;
  gap: 10px;
  margin-top: 1rem;
}
.invite-link-wrapper input {
  flex-grow: 1;
  background-color: #eee;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  font-family: monospace;
}
.copy-btn {
  padding: 8px 15px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
/* Stili generici per modali (potrebbero essere già nel tuo file) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
  color: #000;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}
.btn-secondary {
  background-color: #bdc3c7;
  color: #2c3e50;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
/* --- INIZIO NUOVI STILI PER LA LISTA GIOCATORI --- */
.players-section {
  margin-top: 15px;
}
.player-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.player-card {
  display: flex;
  flex-direction: column;
  background-color: #e9ecef;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.player-card:hover {
  background-color: #dee2e6;
}
.player-name {
  font-weight: bold;
  font-size: 1.1em;
  color: #333;
}
.player-info {
  font-size: 0.9em;
  color: #555;
}
.player-hp {
  font-size: 0.9em;
  font-weight: bold;
  margin-top: 5px;
  color: #2c3e50;
}
.no-players-message {
  font-size: 0.9em;
  font-style: italic;
  color: #888;
  text-align: center;
}
.invite-btn {
  background-color: #8e44ad;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-family: serif;
  font-weight: bold;
  margin: 0 5px;
}
.start-session {
  background-color: #27ae60; /* Verde */
}
.end-session {
  background-color: #c0392b; /* Rosso */
}
.invite-link-wrapper {
  display: flex;
  gap: 10px;
  margin-top: 1rem;
}
.invite-link-wrapper input {
  flex-grow: 1;
  background-color: #eee;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  font-family: monospace;
}
.copy-btn {
  padding: 8px 15px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
/* --- STILI AGGIUNTI PER I PULSANTI DI CONDIVISIONE --- */
.share-controls {
  margin-top: 8px;
  display: flex;
  gap: 10px;
}
.share-btn,
.unshare-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8em;
  font-weight: bold;
}
.share-btn {
  background-color: #27ae60; /* Verde */
  color: white;
}
.unshare-btn {
  background-color: #e74c3c; /* Rosso */
  color: white;
}
.player-card {
  display: flex; /* Modificato */
  justify-content: space-between; /* Modificato */
  align-items: center; /* Modificato */
  background-color: #e9ecef;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 8px;
  transition: background-color 0.2s;
}
.player-card-main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  cursor: pointer;
}
.player-card:hover {
  background-color: #dee2e6;
}
.remove-player-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  flex-shrink: 0;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<style>
/* Stile globale necessario per i link generati dinamicamente con v-html */
.linked-item {
  background-color: #e3f2fd;
  color: #0d47a1;
  padding: 2px 4px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}
.linked-item:hover {
  background-color: #bbdefb;
}
.import-btn {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #f39c12;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
.import-controls {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 1rem;
}
.code-textarea {
  width: 100%;
  height: 200px;
  background-color: #1e1e1e;
  color: #d4d4d4;
  border: 1px solid #555;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9em;
}
.details-modal .modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
