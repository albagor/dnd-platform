<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { compendiumData as baseCompendiumData } from '@/data/dmCompendiumData.js'
import { auth, db } from '@/firebaseConfig'
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'
import { useToast } from 'vue-toastification'
import { useAdventureStore } from '@/stores/adventureStore'
import { storeToRefs } from 'pinia'
import MonsterDetails from './MonsterDetails.vue'
import CharacterStatBlock from './CharacterStatBlock.vue'
import ItemDetails from './ItemDetails.vue'

const toast = useToast()
const adventureStore = useAdventureStore()
const { adventuresList } = storeToRefs(adventureStore)

// Stato per la vista (Regole Rapide / Il Mio Mondo)
const currentView = ref('rules')

// --- LOGICA E STATO PER "REGOLE RAPIDE" ---
const searchTerm = ref('')
const openCategories = ref({})
const customRules = ref([]) // Conterrà SOLO le regole/categorie personalizzate
let rulesListener = null

// Combina le regole base (fisse) con quelle personalizzate (da Firestore)
const combinedRules = computed(() => {
  const base = JSON.parse(JSON.stringify(baseCompendiumData))
  base.forEach((cat) => cat.rules.forEach((rule) => (rule.isCustom = false))) // Assicura che le base non siano custom

  const custom = customRules.value.map((category) => ({
    ...category,
    isCustom: true,
    rules: category.rules.map((rule) => ({ ...rule, isCustom: true })),
  }))

  return [...base, ...custom]
})

// Filtra la lista combinata in base alla ricerca
const filteredData = computed(() => {
  if (!searchTerm.value) return combinedRules.value
  const lower = searchTerm.value.toLowerCase()
  return combinedRules.value
    .map((cat) => ({
      ...cat,
      rules: cat.rules.filter(
        (rule) =>
          rule.name.toLowerCase().includes(lower) || rule.description.toLowerCase().includes(lower),
      ),
    }))
    .filter((cat) => cat.rules.length > 0)
})

// --- LOGICA E STATO PER "IL MIO MONDO" (IL TUO CODICE, RIPRISTINATO) ---
const lorebook = ref({ groups: [] })
const newGroupName = ref('')
let lorebookListener = null
const isAddItemModalOpen = ref(false)
const currentGroupForAdding = ref(null)
const selectedAdventureId = ref(null)
const adventureDetails = ref(null)
const itemsToAdd = ref([])
const isMonsterDetailsModalOpen = ref(false)
const selectedMonsterForModal = ref(null)
const isItemDetailsModalOpen = ref(false)
const selectedItemForModal = ref(null)

// --- FUNZIONI DI GESTIONE ---

// Funzioni per REGOLE RAPIDE
async function saveCustomRules() {
  if (!auth.currentUser) return
  const docRef = doc(db, 'compendiums', auth.currentUser.uid)
  try {
    await setDoc(docRef, { rules: customRules.value })
  } catch (error) {
    console.error('Errore salvataggio compendio:', error)
    toast.error('Errore nel salvataggio delle regole personali.')
  }
}

let debounceTimer = null
watch(
  customRules,
  () => {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(saveCustomRules, 1500)
  },
  { deep: true },
)

function addCustomCategory() {
  const newCategoryName = prompt('Nome della nuova categoria personale:')
  if (
    newCategoryName &&
    newCategoryName.trim() !== '' &&
    !customRules.value.some((c) => c.category === newCategoryName)
  ) {
    customRules.value.unshift({ category: newCategoryName, rules: [] })
  }
}
function removeCustomCategory(categoryToRemove) {
  if (
    confirm(
      `Sei sicuro di voler eliminare la categoria "${categoryToRemove.category}" e tutte le sue regole?`,
    )
  ) {
    customRules.value = customRules.value.filter((c) => c !== categoryToRemove)
  }
}
function addRule(category) {
  let targetCategory = customRules.value.find((c) => c.category === category.category)
  if (!targetCategory) {
    targetCategory = { category: category.category, rules: [] }
    customRules.value.unshift(targetCategory)
  }
  targetCategory.rules.unshift({ name: 'Nuova Regola', description: 'Descrizione...' })
}
function removeRule(category, ruleToRemove) {
  let targetCategory = customRules.value.find((c) => c.category === category.category)
  if (targetCategory) {
    targetCategory.rules = targetCategory.rules.filter((r) => r !== ruleToRemove)
  }
}
function toggleCategory(categoryName) {
  openCategories.value[categoryName] = !openCategories.value[categoryName]
}

// Funzioni per IL MIO MONDO (IL TUO CODICE, RIPRISTINATO)
async function saveLorebook() {
  if (!auth.currentUser) return
  const docRef = doc(db, 'lorebooks', auth.currentUser.uid)
  try {
    await setDoc(docRef, JSON.parse(JSON.stringify(lorebook.value)))
    toast.success('Archivio salvato!')
  } catch (error) {
    toast.error("Errore nel salvataggio dell'archivio.")
  }
}
function addGroup() {
  if (!newGroupName.value.trim()) return
  if (!lorebook.value.groups) lorebook.value.groups = []
  lorebook.value.groups.push({ id: Date.now().toString(), name: newGroupName.value, items: [] })
  newGroupName.value = ''
  saveLorebook()
}
function removeGroup(groupId) {
  if (confirm('Sei sicuro di voler eliminare questo gruppo e tutti i suoi collegamenti?')) {
    lorebook.value.groups = lorebook.value.groups.filter((group) => group.id !== groupId)
    saveLorebook()
  }
}
function removeItemFromGroup(group, itemToRemove) {
  const groupIndex = lorebook.value.groups.findIndex((g) => g.id === group.id)
  if (groupIndex === -1) return
  const updatedItems = lorebook.value.groups[groupIndex].items.filter(
    (item) => item.itemId !== itemToRemove.itemId,
  )
  lorebook.value.groups[groupIndex].items = updatedItems
  saveLorebook()
}
async function openAddItemModal(group) {
  currentGroupForAdding.value = group
  selectedAdventureId.value = null
  adventureDetails.value = null
  itemsToAdd.value = []
  isAddItemModalOpen.value = true
}
watch(selectedAdventureId, async (newId) => {
  if (newId) {
    const advDoc = await getDoc(doc(db, 'adventures', newId))
    if (advDoc.exists()) {
      const defaultSections = {
        ambienti: [],
        png: [],
        mostri: [],
        tesori: [],
        mappe: [],
        immagini: [],
      }
      adventureDetails.value = { ...defaultSections, ...advDoc.data() }
    }
  } else {
    adventureDetails.value = null
  }
})
const itemCategories = computed(() => {
  if (!adventureDetails.value) return []
  return ['ambienti', 'png', 'mostri', 'tesori', 'mappe', 'immagini'].filter(
    (cat) => adventureDetails.value[cat] && adventureDetails.value[cat].length > 0,
  )
})
function toggleItemSelection(item, adventureId, type, isSelected) {
  const itemReference = { itemId: item.id, adventureId: adventureId, name: item.name, type: type }
  if (isSelected) {
    if (!itemsToAdd.value.find((i) => i.itemId === item.id)) {
      itemsToAdd.value.push(itemReference)
    }
  } else {
    itemsToAdd.value = itemsToAdd.value.filter((i) => i.itemId !== item.id)
  }
}
function addSelectedItemsToGroup() {
  const group = lorebook.value.groups.find((g) => g.id === currentGroupForAdding.value.id)
  if (!group) return
  if (!group.items) group.items = []
  itemsToAdd.value.forEach((itemToAdd) => {
    if (!group.items.some((existingItem) => existingItem.itemId === itemToAdd.itemId)) {
      group.items.push(itemToAdd)
    }
  })
  saveLorebook()
  isAddItemModalOpen.value = false
}
async function openLinkedItem(item) {
  const advDoc = await getDoc(doc(db, 'adventures', item.adventureId))
  if (advDoc.exists()) {
    const adventureData = advDoc.data()
    if (adventureData[item.type] && Array.isArray(adventureData[item.type])) {
      const fullItem = adventureData[item.type].find((i) => i.id === item.itemId)
      if (fullItem) {
        if (fullItem.ability_scores) {
          selectedMonsterForModal.value = fullItem
          isMonsterDetailsModalOpen.value = true
        } else {
          selectedItemForModal.value = fullItem
          isItemDetailsModalOpen.value = true
        }
      }
    }
  }
}

// --- GESTIONE ONMOUNTED / ONUNMOUNTED UNIFICATA ---
onMounted(() => {
  baseCompendiumData.forEach((cat) => {
    openCategories.value[cat.category] = true
  })
  if (auth.currentUser) {
    const uid = auth.currentUser.uid
    // Listener per Lorebook
    const lorebookDocRef = doc(db, 'lorebooks', uid)
    lorebookListener = onSnapshot(lorebookDocRef, (docSnap) => {
      lorebook.value = docSnap.exists() ? docSnap.data() : { groups: [] }
    })
    // Listener per Compendio Personale
    const rulesDocRef = doc(db, 'compendiums', uid)
    rulesListener = onSnapshot(rulesDocRef, (docSnap) => {
      if (docSnap.exists() && docSnap.data().rules) {
        customRules.value = docSnap.data().rules
        customRules.value.forEach((cat) => {
          openCategories.value[cat.category] = true
        })
      } else {
        customRules.value = []
      }
    })
  }
  if (adventuresList.value.length === 0) {
    adventureStore.subscribeToAdventures()
  }
})

onUnmounted(() => {
  if (lorebookListener) lorebookListener()
  if (rulesListener) rulesListener()
})
</script>

<template>
  <div class="compendium-container">
    <h1>Compendio del DM</h1>

    <div class="view-switcher">
      <button :class="{ active: currentView === 'rules' }" @click="currentView = 'rules'">
        Regole Rapide
      </button>
      <button :class="{ active: currentView === 'world' }" @click="currentView = 'world'">
        Il Mio Mondo
      </button>
    </div>

    <div v-if="currentView === 'rules'">
      <div class="search-bar">
        <input type="text" v-model="searchTerm" placeholder="Cerca una regola..." />
      </div>

      <div class="add-category-container">
        <button @click="addCustomCategory" class="add-category-btn">
          + Aggiungi Categoria Personale
        </button>
      </div>

      <div class="compendium-grid">
        <div
          v-for="category in filteredData.filter((c) => c.isCustom)"
          :key="category.category"
          class="category-section box custom-category"
        >
          <div class="category-header" @click="toggleCategory(category.category)">
            <input
              type="text"
              v-model="category.category"
              @click.stop
              class="category-title-input"
              placeholder="Nome Categoria"
            />
            <div class="header-buttons">
              <button
                @click.stop="removeCustomCategory(category)"
                class="delete-category-btn"
                title="Elimina Categoria"
              >
                🗑️
              </button>
              <span class="toggle-icon">{{ openCategories[category.category] ? '▼' : '▶' }}</span>
            </div>
          </div>
          <div v-if="openCategories[category.category]">
            <div v-for="(rule, index) in category.rules" :key="index" class="rule-block">
              <div class="rule-header">
                <input
                  type="text"
                  v-model="rule.name"
                  class="rule-name-input"
                  placeholder="Nome Regola"
                />
                <button
                  @click.stop="removeRule(category, rule)"
                  class="remove-rule-btn"
                  title="Elimina Regola"
                >
                  ×
                </button>
              </div>
              <textarea
                v-model="rule.description"
                class="rule-description-textarea"
                placeholder="Descrizione della regola..."
                rows="3"
              ></textarea>
            </div>
            <button @click="addRule(category)" class="add-rule-to-category-btn">
              + Aggiungi Nuova Regola
            </button>
          </div>
        </div>

        <div
          v-for="category in filteredData.filter((c) => !c.isCustom)"
          :key="category.category"
          class="category-section box"
        >
          <div class="category-header" @click="toggleCategory(category.category)">
            <h2>{{ category.category }}</h2>
            <span class="toggle-icon">{{ openCategories[category.category] ? '▼' : '▶' }}</span>
          </div>
          <div v-if="openCategories[category.category]">
            <div v-for="rule in category.rules" :key="rule.name" class="rule-block">
              <h3>{{ rule.name }}</h3>
              <p v-html="rule.description"></p>
            </div>
            <button @click="addRule(category)" class="add-rule-to-category-btn">
              + Aggiungi Regola Personale a Questa Categoria
            </button>
          </div>
        </div>
      </div>

      <div v-if="filteredData.length === 0 && searchTerm" class="no-results">
        <p>Nessuna regola trovata per "{{ searchTerm }}"</p>
      </div>
    </div>

    <div v-if="currentView === 'world'" class="lore-section">
      <div class="add-group-box box">
        <h3>Crea un Nuovo Gruppo</h3>
        <p>Raggruppa i tuoi elementi per luogo, fazione o qualsiasi altra categoria.</p>
        <div class="add-group-form">
          <input
            type="text"
            v-model="newGroupName"
            placeholder="Es. Triboar, La Gilda dei Ladri..."
            @keydown.enter="addGroup"
          />
          <button @click="addGroup">Crea Gruppo</button>
        </div>
      </div>
      <div v-for="group in lorebook.groups" :key="group.id" class="group-card box">
        <div class="group-header">
          <h3>{{ group.name }}</h3>
          <div class="group-actions">
            <button @click="openAddItemModal(group)" class="add-item-btn">Aggiungi Elemento</button>
            <button @click="removeGroup(group.id)" class="delete-group-btn" title="Elimina Gruppo">
              🗑️
            </button>
          </div>
        </div>
        <div class="group-content">
          <p v-if="!group.items || group.items.length === 0" class="no-items">
            Nessun elemento collegato a questo gruppo.
          </p>
          <ul v-else class="linked-item-list">
            <li v-for="item in group.items" :key="item.itemId">
              <div class="linked-item-info" @click="openLinkedItem(item)" title="Vedi Dettagli">
                <span class="item-name">{{ item.name }}</span>
                <span class="item-type">({{ item.type }})</span>
              </div>
              <button
                @click="removeItemFromGroup(group, item)"
                class="remove-linked-item-btn"
                title="Rimuovi collegamento"
              >
                ×
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="isAddItemModalOpen" class="modal-overlay" @click.self="isAddItemModalOpen = false">
      <div class="modal-content large">
        <h3>Collega Elementi a: {{ currentGroupForAdding.name }}</h3>
        <div class="adventure-selector">
          <label>Scegli un'avventura:</label>
          <select v-model="selectedAdventureId">
            <option :value="null" disabled>-- Seleziona --</option>
            <option v-for="adv in adventuresList" :key="adv.id" :value="adv.id">
              {{ adv.title }}
            </option>
          </select>
        </div>
        <div v-if="adventureDetails" class="item-selection-grid">
          <div v-for="category in itemCategories" :key="category" class="item-category">
            <h4>{{ category }}</h4>
            <ul>
              <li v-for="item in adventureDetails[category]" :key="item.id">
                <label>
                  <input
                    type="checkbox"
                    @change="
                      toggleItemSelection(
                        item,
                        selectedAdventureId,
                        category,
                        $event.target.checked,
                      )
                    "
                  />
                  {{ item.name }}
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-actions">
          <button @click="isAddItemModalOpen = false" class="btn-secondary">Annulla</button>
          <button @click="addSelectedItemsToGroup" class="btn-primary">Aggiungi Selezionati</button>
        </div>
      </div>
    </div>
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
  </div>
</template>

<style scoped>
/* Stili principali */
.compendium-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: #333;
  background-color: #fdfaf6;
  padding: 2rem;
  border-radius: 8px;
  border: 2px solid #bca789;
}
.box {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1.5rem;
  background-color: #fff;
  margin-bottom: 1.5rem;
}
h1 {
  text-align: center;
  font-family: serif;
  color: #5c3d03;
  border-bottom: 2px solid #bca789;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

/* Stili specifici per questo componente */
.view-switcher {
  display: flex;
  gap: 10px;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
}
.view-switcher button {
  background: #eee;
  border: 1px solid #ccc;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  border-radius: 5px;
}
.view-switcher button.active {
  background-color: #8e44ad;
  color: white;
  border-color: #8e44ad;
}
.search-bar {
  margin-bottom: 2rem;
}
.search-bar input {
  width: 100%;
  padding: 12px;
  font-size: 1.1em;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.compendium-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: flex-start;
}
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: -1.5rem -1.5rem 1rem -1.5rem;
  padding: 1rem 1.5rem;
}
.category-header:hover {
  background-color: #f8f9fa;
}
.category-section h2 {
  margin: 0;
  font-family: serif;
  color: #a04000;
  display: flex;
  align-items: center;
  gap: 10px;
}
.custom-badge {
  font-size: 0.6em;
  background-color: #8e44ad;
  color: white;
  padding: 2px 5px;
  border-radius: 3px;
  vertical-align: middle;
  font-family: sans-serif;
  font-weight: normal;
}
.header-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}
.delete-category-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  color: #999;
}
.delete-category-btn:hover {
  color: #e74c3c;
}
.toggle-icon {
  font-size: 1.5em;
  color: #666;
}
.rule-block {
  margin-bottom: 1rem;
  padding-left: 10px;
  border-left: 3px solid #f0e6d2;
}
.rule-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}
.rule-block h3 {
  margin: 0;
  font-size: 1.1em;
}
.remove-rule-btn {
  background: none;
  border: none;
  font-size: 1.2em;
  color: #ccc;
  cursor: pointer;
}
.remove-rule-btn:hover {
  color: #e74c3c;
}
.rule-block p {
  margin: 0;
  line-height: 1.5;
}
.no-results {
  text-align: center;
  font-style: italic;
  color: #888;
  margin-top: 2rem;
}
.section-separator {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0)
  );
  margin: 2rem 0;
}
.custom-category {
  border-left: 4px solid #8e44ad;
}
.category-title-input {
  font-family: serif;
  color: #8e44ad;
  font-size: 1.5em;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 4px;
  background: transparent;
  padding: 4px;
  width: 100%;
}
.category-title-input:focus {
  border-color: #ccc;
  background-color: #fafafa;
  outline: none;
}
.rule-name-input {
  font-size: 1.1em;
  font-weight: bold;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  padding: 4px;
  width: 100%;
  font-family: inherit;
}
.rule-name-input:focus {
  border-color: #3498db;
  background-color: #f8f9fa;
  outline: none;
}
.rule-description-textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  resize: vertical;
  min-height: 60px;
  font-family: inherit;
  line-height: 1.5;
}
.rule-description-textarea:focus {
  border-color: #3498db;
  background-color: #f8f9fa;
  outline: none;
}
.add-rule-to-category-btn {
  background: none;
  border: 1px dashed #ccc;
  color: #888;
  width: 100%;
  padding: 8px;
  margin-top: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
}
.add-rule-to-category-btn:hover {
  background-color: #f8f9fa;
  color: #333;
}
.add-category-container {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px dashed #ccc;
  border-radius: 6px;
}
.add-category-btn {
  background-color: #34495e;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
}
.add-group-box {
  background-color: #e8f6fd;
}
.add-group-form {
  display: flex;
  gap: 10px;
}
.add-group-form input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.add-group-form button {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.group-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.group-actions {
  display: flex;
  gap: 10px;
}
.add-item-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}
.delete-group-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
}
.no-items {
  color: #888;
  font-style: italic;
}
.linked-item-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}
.linked-item-list li {
  background: #f8f8f8;
  padding: 8px 12px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.linked-item-info {
  cursor: pointer;
  flex-grow: 1;
  transition: color 0.2s;
}
.linked-item-info:hover .item-name {
  color: #3498db;
}
.linked-item-list .item-name {
  font-weight: bold;
}
.linked-item-list .item-type {
  font-size: 0.8em;
  color: #777;
  margin-left: 5px;
}
.remove-linked-item-btn {
  background-color: #c0392b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.9em;
  line-height: 20px;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background-color: white;
  color: #000;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
}
.modal-content.large {
  max-width: 900px;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}
.btn-primary {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.btn-secondary {
  background-color: #bdc3c7;
  color: #2c3e50;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.adventure-selector {
  margin-bottom: 1.5rem;
}
.adventure-selector label {
  font-weight: bold;
  margin-right: 10px;
}
.item-selection-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-height: 400px;
  overflow-y: auto;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
}
.item-category h4 {
  margin-top: 0;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}
.item-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.item-category li {
  margin-bottom: 5px;
}
.item-category label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
@media (max-width: 768px) {
  .compendium-grid,
  .item-selection-grid {
    grid-template-columns: 1fr;
  }
  .add-group-form {
    flex-direction: column;
  }
}
</style>
