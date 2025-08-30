<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { compendiumData } from '@/data/dmCompendiumData.js'
import { auth, db } from '@/firebaseConfig'
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'
import { useToast } from 'vue-toastification'
import { useAdventureStore } from '@/stores/adventureStore'
import { storeToRefs } from 'pinia'
import MonsterDetails from './MonsterDetails.vue'
import CharacterStatBlock from './CharacterStatBlock.vue'
import ItemDetails from './ItemDetails.vue' // <-- 1. IMPORTA IL COMPONENTE MANCANTE

const toast = useToast()
const adventureStore = useAdventureStore()
const { adventuresList } = storeToRefs(adventureStore)

// Stato per la vista e le regole
const currentView = ref('rules')
const searchTerm = ref('')
const openCategories = ref({})

// Stato per l'archivio "Il Mio Mondo"
const lorebook = ref({ groups: [] })
const newGroupName = ref('')
let lorebookListener = null

// Stato per la modale "Aggiungi Elemento"
const isAddItemModalOpen = ref(false)
const currentGroupForAdding = ref(null)
const selectedAdventureId = ref(null)
const adventureDetails = ref(null)
const itemsToAdd = ref([])

// Stato per la modale "Dettagli Elemento"
const isMonsterDetailsModalOpen = ref(false)
const selectedMonsterForModal = ref(null)
const isItemDetailsModalOpen = ref(false) // <-- 2. AGGIUNGI STATO
const selectedItemForModal = ref(null) // <-- 2. AGGIUNGI STATO

onMounted(() => {
  compendiumData.forEach((cat) => {
    openCategories.value[cat.category] = true
  })
  if (auth.currentUser) {
    const docRef = doc(db, 'lorebooks', auth.currentUser.uid)
    lorebookListener = onSnapshot(docRef, (docSnap) => {
      lorebook.value = docSnap.exists() ? docSnap.data() : { groups: [] }
    })
  }
  if (adventuresList.value.length === 0) {
    adventureStore.subscribeToAdventures()
  }
})

onUnmounted(() => {
  if (lorebookListener) lorebookListener()
})

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
        // --- LOGICA DI SMISTAMENTO ---
        if (fullItem.ability_scores) {
          // È un Mostro o un PNG
          selectedMonsterForModal.value = fullItem
          isMonsterDetailsModalOpen.value = true
        } else {
          // È un Ambiente, Tesoro, ecc.
          selectedItemForModal.value = fullItem
          isItemDetailsModalOpen.value = true
        }
      }
    }
  }
}
const filteredData = computed(() => {
  if (!searchTerm.value) return compendiumData
  const lowerCaseSearch = searchTerm.value.toLowerCase()
  return compendiumData
    .map((category) => {
      const filteredRules = category.rules.filter(
        (rule) =>
          rule.name.toLowerCase().includes(lowerCaseSearch) ||
          rule.description.toLowerCase().includes(lowerCaseSearch),
      )
      return { ...category, rules: filteredRules }
    })
    .filter((category) => category.rules.length > 0)
})
function toggleCategory(categoryName) {
  openCategories.value[categoryName] = !openCategories.value[categoryName]
}
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
      <div class="compendium-grid">
        <div v-for="category in filteredData" :key="category.category" class="category-section box">
          <div class="category-header" @click="toggleCategory(category.category)">
            <h2>{{ category.category }}</h2>
            <span class="toggle-icon">{{ openCategories[category.category] ? '▼' : '▶' }}</span>
          </div>
          <div v-if="openCategories[category.category]">
            <div v-for="rule in category.rules" :key="rule.name" class="rule-block">
              <h3>{{ rule.name }}</h3>
              <p v-html="rule.description"></p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="filteredData.length === 0" class="no-results">
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
  padding: 1.5rem;
}
.category-header:hover {
  background-color: #f8f9fa;
}
.category-section h2 {
  margin: 0;
  font-family: serif;
  color: #a04000;
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
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
.rule-block:last-child {
  margin-bottom: 0;
}
.rule-block h3 {
  margin: 0 0 5px 0;
  font-size: 1.1em;
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
