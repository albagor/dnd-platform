<script setup>
import { ref, computed } from 'vue'
import { dndEquipment } from '@/data/dndEquipment.js'

const props = defineProps({
  character: { type: Object, required: true },
})

// Stato per la finestra modale dell'oggetto custom
const isCustomItemModalOpen = ref(false)
const newCustomItem = ref({ name: '', quantity: 1, weight: 0, description: '' })

// NUOVO STATO per la modale della descrizione
const isDescriptionModalOpen = ref(false)
const selectedItemForDescription = ref(null)

const itemToAdd = ref(null)

const groupedEquipment = computed(() => {
  return dndEquipment.reduce((acc, item) => {
    const category = item.category || 'Varie'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(item)
    return acc
  }, {})
})

function addItem() {
  if (!itemToAdd.value) return
  const itemData = dndEquipment.find((e) => e.name === itemToAdd.value)
  if (!itemData) return

  const newItem = {
    ...itemData,
    id: Date.now(),
    quantity: 1,
    status: 'carried',
    description: itemData.description || '',
  }

  props.character.equipment.inventory.push(newItem)
  itemToAdd.value = null
}

function removeItem(itemId) {
  props.character.equipment.inventory = props.character.equipment.inventory.filter(
    (i) => i.id !== itemId,
  )
}

function toggleStatus(item) {
  item.status = item.status === 'carried' ? 'stored' : 'carried'
}

function openCustomItemModal() {
  newCustomItem.value = { name: '', quantity: 1, weight: 0, description: '' }
  isCustomItemModalOpen.value = true
}

function addCustomItem() {
  if (!newCustomItem.value.name) return
  const itemToAdd = {
    ...newCustomItem.value,
    id: Date.now(),
    status: 'carried',
    category: 'Manuale',
  }
  props.character.equipment.inventory.push(itemToAdd)
  isCustomItemModalOpen.value = false
}

// NUOVA FUNZIONE per aprire la modale della descrizione
function showDescription(item) {
  selectedItemForDescription.value = item
  isDescriptionModalOpen.value = true
}
</script>

<template>
  <div class="inventory-section">
    <div class="treasure-grid">
      <div class="money-section">
        <h4>Monete</h4>
        <div class="money-inputs">
          <div class="coin-input">
            <label>MR</label><input type="number" v-model.number="character.equipment.money.cp" />
          </div>
          <div class="coin-input">
            <label>MA</label><input type="number" v-model.number="character.equipment.money.sp" />
          </div>
          <div class="coin-input">
            <label>MO</label><input type="number" v-model.number="character.equipment.money.gp" />
          </div>
          <div class="coin-input">
            <label>MP</label><input type="number" v-model.number="character.equipment.money.pp" />
          </div>
        </div>
      </div>
      <div class="other-treasure-section">
        <h4>Altri Tesori</h4>
        <textarea
          v-model="character.equipment.otherTreasure"
          rows="3"
          placeholder="Gemme, opere d'arte, ..."
        ></textarea>
      </div>
    </div>

    <div class="equipment-section">
      <h4>Equipaggiamento</h4>
      <div class="add-item-section">
        <select v-model="itemToAdd">
          <option :value="null" disabled>-- Aggiungi dalla lista --</option>
          <optgroup v-for="(items, category) in groupedEquipment" :key="category" :label="category">
            <option v-for="item in items" :key="item.name" :value="item.name">
              {{ item.name }}
            </option>
          </optgroup>
        </select>
        <button @click="addItem" class="add-btn small">+</button>
        <button @click="openCustomItemModal" class="add-btn small manual-btn">Manuale</button>
      </div>

      <div class="inventory-list">
        <div class="inventory-header">
          <span>Nome</span><span>Qt.</span><span>Peso (kg)</span><span>Stato</span
          ><span>Azioni</span>
        </div>
        <div v-for="item in character.equipment.inventory" :key="item.id" class="inventory-row">
          <input type="text" v-model="item.name" class="name-input" />
          <input type="number" v-model.number="item.quantity" class="quantity-input" />
          <input type="number" v-model.number="item.weight" class="weight-input" />
          <button @click="toggleStatus(item)" :class="['status-btn', item.status]">
            {{ item.status === 'carried' ? 'Trasportato' : 'Depositato' }}
          </button>
          <div class="actions-cell">
            <button @click="showDescription(item)" v-if="item.description" class="view-btn">
              Vedi
            </button>
            <button @click="removeItem(item.id)" class="remove-btn small">-</button>
          </div>
        </div>
      </div>
    </div>

    <div class="notes-section">
      <h4>Note sull'Equipaggiamento</h4>
      <textarea v-model="character.equipment.notes" rows="4"></textarea>
    </div>

    <div
      v-if="isCustomItemModalOpen"
      class="modal-overlay"
      @click.self="isCustomItemModalOpen = false"
    ></div>

    <div
      v-if="isDescriptionModalOpen"
      class="modal-overlay"
      @click.self="isDescriptionModalOpen = false"
    >
      <div class="modal-content">
        <h3 class="description-title">{{ selectedItemForDescription.name }}</h3>
        <p class="description-text">{{ selectedItemForDescription.description }}</p>
        <div class="modal-actions">
          <button @click="isDescriptionModalOpen = false" class="btn-secondary">Chiudi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.treasure-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.money-inputs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.coin-input {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.coin-input input {
  max-width: 60px;
  text-align: center;
  padding: 4px;
}
.inventory-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.add-item-section {
  display: flex;
  gap: 0.5rem;
}
.add-item-section select {
  flex-grow: 1;
}
.inventory-list {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}
.inventory-header,
.inventory-row {
  display: grid;
  grid-template-columns: 3fr 0.5fr 1fr 1.2fr 1fr;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
.inventory-header {
  font-weight: bold;
  font-size: 0.8em;
  text-transform: uppercase;
  color: #555;
}
.name-input {
  width: 100%;
}
.quantity-input {
  width: 50px;
  text-align: center;
  padding: 4px;
}
.weight-input {
  width: 60px;
  text-align: center;
  padding: 4px;
}
.status-btn {
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 0.8em;
}
.status-btn.carried {
  background-color: #27ae60;
}
.status-btn.stored {
  background-color: #7f8c8d;
}
.notes-section {
  margin-top: 1.5rem;
}
.add-btn.small {
  padding: 8px 12px;
}
.remove-btn.small {
  width: 28px;
  height: 28px;
  align-self: center;
}
.manual-btn {
  background-color: #95a5a6;
} /* Stile aggiunto per il pulsante manuale */

/* --- INIZIO NUOVI STILI --- */
.actions-cell {
  display: flex;
  align-items: center;
  gap: 5px;
}
.view-btn {
  padding: 4px 8px;
  font-size: 0.8em;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.modal-content .description-title {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.modal-content .description-text {
  white-space: pre-wrap; /* Mantiene la formattazione e gli a-capo */
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 4px;
  min-height: 100px;
}
/* Stili per la modale di inserimento (dal genitore) */
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
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}
.grid-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.grid-item.full-width {
  grid-column: 1 / -1;
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
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}
.btn-secondary {
  background-color: #bdc3c7;
  color: #2c3e50;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}
</style>
