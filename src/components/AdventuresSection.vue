<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
import { useAdventureStore } from '@/stores/adventureStore'
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toastification'
import { db } from '@/firebaseConfig'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import Bestiary from './Bestiary.vue'
import MonsterDetails from './MonsterDetails.vue'
import CombatTracker from './combatTracker.vue'
import CharacterStatBlock from './CharacterStatBlock.vue' // IMPORTA IL NUOVO COMPONENTE

// --- Setup dello Store (solo per la lista) ---
const adventureStore = useAdventureStore()
const { adventuresList } = storeToRefs(adventureStore)
const { subscribeToAdventures, createNewAdventure, deleteAdventure, clearStore } = adventureStore
const toast = useToast()

// --- Logica interna del componente ---
const activeAdventureId = ref(null)
const currentAdventure = ref(null)

onMounted(() => {
  subscribeToAdventures()
})

onUnmounted(() => {
  clearStore()
})

// Funzione che carica i dati dell'avventura da Firestore
async function loadAdventure(adventureId) {
  activeAdventureId.value = adventureId
  const docRef = doc(db, 'adventures', adventureId)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    currentAdventure.value = { id: docSnap.id, ...docSnap.data() }
  } else {
    toast.error("Impossibile caricare l'avventura.")
    currentAdventure.value = null
  }
}

// Watcher che salva automaticamente ogni modifica
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
          console.error('Errore nel salvataggio:', error)
          toast.error('Errore durante il salvataggio.')
        }
      }, 2000)
    }
  },
  { deep: true },
)

// --- Funzioni per modificare i dati locali ---
const monsterToAddInCombat = ref(null)

function addItemToSection(sectionId) {
  if (!currentAdventure.value) return
  let newItem
  if (sectionId === 'mostri' || sectionId === 'png') {
    newItem = {
      id: Date.now().toString(),
      name: `Nuovo ${sectionId === 'mostri' ? 'Mostro' : 'PNG'}`,
      size: 'Media',
      type: 'umanoide',
      alignment: 'qualsiasi allineamento',
      ac: 10,
      hp: 10,
      hp_dice: '2d8',
      speed: '9 m',
      ability_scores: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
      skills: '',
      senses: '',
      languages: '',
      challenge_rating: '1/8',
      description: '',
      image_url: '',
      traits: '',
      actions: '',
    }
  } else {
    newItem = {
      id: Date.now().toString(),
      name: `Nuovo ${sectionId.slice(0, -1)}`,
      shareNotes: '',
      dmNotes: '',
      imageUrl: '',
    }
  }
  if (!currentAdventure.value[sectionId]) {
    currentAdventure.value[sectionId] = []
  }
  currentAdventure.value[sectionId].push(newItem)
}

// Funzione che riceve il mostro dal bestiario e lo passa al combat tracker
function addMonsterToCombat(monster) {
  monsterToAddInCombat.value = monster
  toast.success(`${monster.name} aggiunto al combattimento!`)
}

function removeItemFromSection(sectionId, itemToRemove) {
  if (!currentAdventure.value || !currentAdventure.value[sectionId]) return
  const index = currentAdventure.value[sectionId].findIndex((item) => item.id === itemToRemove.id)
  if (index !== -1) {
    currentAdventure.value[sectionId].splice(index, 1)
  }
}

function addChapter() {
  if (!currentAdventure.value) return
  const newChapter = {
    id: Date.now().toString(),
    title: `Nuovo Capitolo`,
    content: '',
    shareContent: '',
  }
  if (!currentAdventure.value.chapters) {
    currentAdventure.value.chapters = []
  }
  currentAdventure.value.chapters.push(newChapter)
}

// --- STATO E FUNZIONI UI (DAL TUO CODICE ORIGINALE) ---
const isDmNotesOpen = ref(true)
const isCombatTrackerOpen = ref(true)
const isBestiaryOpen = ref(false)
const isStatBlockModalOpen = ref(false)
const selectedCombatantForModal = ref(null)
const expandedChapterId = ref(null)
const isDetailsModalOpen = ref(false)
const selectedItemForModal = ref(null)
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
const allPreparedItems = computed(() => {
  if (!currentAdventure.value) return []
  const items = []
  for (const section of accordionSections.value) {
    const sectionId = section.id
    if (currentAdventure.value[sectionId]) {
      currentAdventure.value[sectionId].forEach((item) => {
        const name = item.title || item.name
        if (name) {
          items.push({ name: name.toLowerCase(), item: item })
        }
      })
    }
  }
  return items
})
function importItemFromCode() {
  if (!codeToImport.value) return
  try {
    const cleanedCode = codeToImport.value.trim().replace(/,\s*$/, '')
    const item = JSON.parse(cleanedCode)
    if (!currentAdventure.value[importSectionId.value]) {
      currentAdventure.value[importSectionId.value] = []
    }
    currentAdventure.value[importSectionId.value].push({ ...item, id: Date.now().toString() })
    toast.success(`"${item.name || 'Oggetto'}" importato con successo!`)
    isCodeImportModalOpen.value = false
    codeToImport.value = ''
  } catch (error) {
    console.error('Errore nel parsing del codice:', error)
    toast.error('Errore: il codice inserito non è valido.')
  }
}
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
      selectedItemForModal.value = found.item
      isDetailsModalOpen.value = true
    }
  }
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
function openStatBlockModal(combatant) {
  if (combatant.type) {
    selectedCombatantForModal.value = combatant
    isStatBlockModalOpen.value = true
  }
}
function getAbilityModifier(score) {
  const mod = Math.floor(((Number(score) || 10) - 10) / 2)
  return mod >= 0 ? `+${mod}` : mod
}
const dmDiceHistory = ref([])
const dmDiceModifier = ref(0)
function rollDmDice(sides) {
  const result = Math.floor(Math.random() * sides) + 1
  const total = result + Number(dmDiceModifier.value)
  const description = `Tiro d${sides}`
  dmDiceHistory.value.unshift({
    id: Date.now(),
    result: total,
    sides,
    description,
    diceResult: result,
    modifier: Number(dmDiceModifier.value),
  })
}
function toggleChapter(chapterId) {
  expandedChapterId.value = expandedChapterId.value === chapterId ? null : chapterId
}
// -----------------------------------------------------------
// Nuovi stati e funzioni per gestire la schermata dei dettagli del mostro e del personaggio
// -----------------------------------------------------------
const isMonsterDetailsModalOpen = ref(false)
const selectedMonsterForModal = ref(null)
const isCharacterDetailsModalOpen = ref(false)
const selectedCharacterForModal = ref(null)

function handleShowDetails(item) {
  if (!item) return

  if (item.is_pc) {
    selectedCharacterForModal.value = item
    isCharacterDetailsModalOpen.value = true
  } else if (item.monsterData || item.type) {
    selectedMonsterForModal.value = item.monsterData || item
    isMonsterDetailsModalOpen.value = true
  }
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
          <li
            v-for="adventure in adventuresList"
            :key="adventure.id"
            :class="{ active: activeAdventureId === adventure.id }"
          >
            <div class="adventure-item-wrapper" @click="loadAdventure(adventure.id)">
              {{ adventure.title }}
            </div>
            <button @click.stop="deleteAdventure(adventure.id)" class="remove-btn-adventure small">
              x
            </button>
          </li>
        </ul>
        <p v-else>Crea la tua prima avventura usando il tasto +</p>
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
                    <label>URL Immagine</label>
                    <input
                      type="text"
                      v-model="item.image_url"
                      placeholder="http://esempio.com/immagine.png"
                    />
                    <img
                      v-if="item.image_url"
                      :src="item.image_url"
                      class="monster-editor-image"
                      alt="Anteprima"
                    />
                  </div>
                  <div class="grid-item full-width">
                    <label>Descrizione (Lore, Aspetto)</label>
                    <textarea
                      rows="4"
                      v-model="item.description"
                      placeholder="Descrizione..."
                    ></textarea>
                  </div>
                  <div v-if="section.id === 'png'" class="grid-item full-width">
                    <label>Spunto per il DM</label>
                    <textarea
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
                      <span>{{ getAbilityModifier(score) }}</span>
                    </div>
                  </div>
                  <div class="grid-item full-width">
                    <label>Abilità</label>
                    <textarea
                      rows="2"
                      v-model="item.skills"
                      placeholder="Furtività +6, Percezione +4..."
                    ></textarea>
                  </div>
                  <div class="grid-item full-width">
                    <label>Sensi</label>
                    <textarea
                      rows="2"
                      v-model="item.senses"
                      placeholder="scurovisione 18 m, Percezione passiva 14..."
                    ></textarea>
                  </div>
                  <div class="grid-item full-width">
                    <label>Linguaggi</label>
                    <textarea
                      rows="2"
                      v-model="item.languages"
                      placeholder="Comune, Elfico..."
                    ></textarea>
                  </div>
                  <div class="grid-item full-width">
                    <label>Tratti</label>
                    <textarea
                      rows="4"
                      v-model="item.traits"
                      placeholder="Scrivi qui i tratti speciali..."
                    ></textarea>
                  </div>
                  <div class="grid-item full-width">
                    <label>Azioni</label>
                    <textarea
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
                  <label>Note per il DM:</label>
                  <textarea v-model="item.dmNotes" class="text-editor dm-view" rows="2"></textarea>
                  <label>URL Immagine:</label>
                  <input type="text" v-model="item.imageUrl" class="url-input" />
                  <img
                    v-if="item.imageUrl"
                    :src="item.imageUrl"
                    alt="Immagine dell'oggetto"
                    class="item-image"
                  />
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
                {{ roll.description }}: {{ roll.diceResult }} + {{ roll.modifier }} =
                <strong>{{ roll.result }}</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="combat-tracker box">
        <CombatTracker
          :isCombatTrackerOpen="isCombatTrackerOpen"
          :monsterToAdd="monsterToAddInCombat"
          @toggle-combat-tracker="isCombatTrackerOpen = !isCombatTrackerOpen"
          @show-details="handleShowDetails"
          @toggle-bestiary="isBestiaryOpen = !isBestiaryOpen"
        />
      </section>
    </div>

    <Bestiary
      v-if="isBestiaryOpen"
      @close="isBestiaryOpen = false"
      @addMonster="addMonsterToCombat"
      @show-details="handleShowDetails"
    />

    <MonsterDetails
      v-if="isMonsterDetailsModalOpen"
      :monster="selectedMonsterForModal"
      @close="isMonsterDetailsModalOpen = false"
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
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
