<script setup>
import { ref, computed } from 'vue'
import { dndEquipment } from '@/data/dndEquipment.js'

const props = defineProps({
  character: { type: Object, required: true }
})

// Usiamo defineEmits per una gestione degli eventi più pulita e standard
const emit = defineEmits(['updateCharacter'])

const itemToAdd = ref(null)

// NUOVA COMPUTED per raggruppare l'equipaggiamento per categoria
const groupedEquipment = computed(() => {
  return dndEquipment.reduce((acc, item) => {
    const category = item.category || 'Varie';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});
});

function updateCharacter(newCharacterState) {
  emit('updateCharacter', newCharacterState)
}

function addItem() {
  if (!itemToAdd.value) return;
  const itemData = dndEquipment.find(e => e.name === itemToAdd.value);
  if (!itemData) return;
  
  const newItem = {
    ...itemData,
    id: Date.now(),
    quantity: 1,
    status: 'carried'
  };
  
  const newCharacter = { ...props.character };
  newCharacter.equipment.inventory.push(newItem);
  updateCharacter(newCharacter);
  itemToAdd.value = null;
}

function removeItem(itemId) {
  const newCharacter = { ...props.character };
  newCharacter.equipment.inventory = newCharacter.equipment.inventory.filter(i => i.id !== itemId);
  updateCharacter(newCharacter);
}

function toggleStatus(item) {
  const newCharacter = { ...props.character };
  const itemInInventory = newCharacter.equipment.inventory.find(i => i.id === item.id);
  if (itemInInventory) {
    itemInInventory.status = itemInInventory.status === 'carried' ? 'stored' : 'carried';
  }
  updateCharacter(newCharacter);
}
</script>

<template>
  <div class="inventory-section">
    <div class="treasure-grid">
      <div class="money-section">
        <h4>Monete</h4>
        <div class="money-inputs">
          <div class="coin-input"><label>MR</label><input type="number" v-model.number="character.equipment.money.cp"></div>
          <div class="coin-input"><label>MA</label><input type="number" v-model.number="character.equipment.money.sp"></div>
          <div class="coin-input"><label>MO</label><input type="number" v-model.number="character.equipment.money.gp"></div>
          <div class="coin-input"><label>MP</label><input type="number" v-model.number="character.equipment.money.pp"></div>
        </div>
      </div>
      <div class="other-treasure-section">
        <h4>Altri Tesori</h4>
        <textarea v-model="character.equipment.otherTreasure" rows="3" placeholder="Gemme, opere d'arte, ..."></textarea>
      </div>
    </div>

    <div class="equipment-section">
      <h4>Equipaggiamento</h4>
      <div class="add-item-section">
        <select v-model="itemToAdd">
          <option :value="null" disabled>-- Aggiungi un oggetto --</option>
          <optgroup v-for="(items, category) in groupedEquipment" :key="category" :label="category">
            <option v-for="item in items" :key="item.name" :value="item.name">{{ item.name }}</option>
          </optgroup>
        </select>
        <button @click="addItem" class="add-btn small">+</button>
      </div>

      <div class="inventory-list">
        <div class="inventory-header">
          <span>Nome</span><span>Qt.</span><span>Peso (kg)</span><span>Stato</span><span></span>
        </div>
        <div v-for="item in character.equipment.inventory" :key="item.id" class="inventory-row">
          <span>{{ item.name }}</span>
          <input type="number" v-model.number="item.quantity" class="quantity-input">
          <span>{{ (item.weight * item.quantity).toFixed(2) }}</span>
          <button @click="toggleStatus(item)" :class="['status-btn', item.status]">{{ item.status === 'carried' ? 'Trasportato' : 'Depositato' }}</button>
          <button @click="removeItem(item.id)" class="remove-btn small">-</button>
        </div>
      </div>
    </div>
    
    <div class="notes-section">
      <h4>Note sull'Equipaggiamento</h4>
      <textarea v-model="character.equipment.notes" rows="4"></textarea>
    </div>
  </div>
</template>

<style scoped>
.treasure-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
.money-inputs { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.coin-input { display: flex; flex-direction: column; align-items: center; }
.coin-input input { max-width: 60px; text-align: center; padding: 4px; }
.inventory-section { display: flex; flex-direction: column; gap: 1rem; }
.add-item-section { display: flex; gap: 0.5rem; }
.add-item-section select { flex-grow: 1; }
.inventory-list { display: flex; flex-direction: column; margin-top: 1rem; }
.inventory-header, .inventory-row { display: grid; grid-template-columns: 3fr 0.5fr 1fr 1.2fr auto; gap: 1rem; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid #eee; }
.inventory-header { font-weight: bold; font-size: 0.8em; text-transform: uppercase; color: #555; }
.quantity-input { width: 50px; text-align: center; padding: 4px; }
.status-btn { padding: 4px 8px; border: none; border-radius: 4px; color: white; cursor: pointer; font-size: 0.8em; }
.status-btn.carried { background-color: #27ae60; }
.status-btn.stored { background-color: #7f8c8d; }
.notes-section { margin-top: 1.5rem; }
.add-btn.small { padding: 8px 12px; }
.remove-btn.small { width: 28px; height: 28px; align-self: center; }
</style>