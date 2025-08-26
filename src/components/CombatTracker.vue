<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
 isCombatTrackerOpen: {
  type: Boolean,
  required: true
 },
 monsterToAdd: {
  type: Object,
  default: null
 }
})
const emit = defineEmits(['toggle-combat-tracker', 'showDetails', 'toggleBestiary']);

const combatants = ref([
 // Modifica: aggiunto is_pc per distinguere i personaggi
 { id: 1, name: 'Personaggio 1', hp: 25, maxHp: 25, conditions: [], initiative: 15, type: "umanoide", is_pc: true },
 { id: 2, name: 'Goblin 1', hp: 10, maxHp: 10, conditions: [], initiative: 12, type: "umanoide", is_pc: false },
 { id: 3, name: 'Goblin 2', hp: 10, maxHp: 10, conditions: [], initiative: 10, type: "umanoide", is_pc: false },
])

const combatTurn = ref(0)
const turnOrder = ref([])
const turnCount = ref(0)

const conditions = [
 'Accecato', 'Assordato', 'Avvelenato', 'Affascinato', 'Spaventato',
 'Fermo', 'Impedito', 'Incapacitato', 'Invisibile', 'Prono',
 'Privo di sensi', 'Trattenuto', 'Stordito', 'Spossato'
]
const newCombatant = ref({ name: '', hp: null, maxHp: null, initiative: null, conditions: [], is_pc: false })

function addCombatant(combatantData) {
 if (combatantData) {
  const monsterData = {
   id: Date.now(),
   name: combatantData.name,
   hp: combatantData.hp,
   maxHp: combatantData.hp,
   conditions: [],
   initiative: null,
   monsterData: combatantData,
   type: combatantData.type,
   is_pc: false
  }
  combatants.value.push(monsterData);
 } else if (newCombatant.value.name && newCombatant.value.hp !== null) {
  combatants.value.push({ ...newCombatant.value, id: Date.now(), maxHp: newCombatant.value.hp });
  newCombatant.value = { name: '', hp: null, maxHp: null, initiative: null, conditions: [], is_pc: false };
 }
}

function removeCombatant(id) {
 const index = combatants.value.findIndex(c => c.id === id);
 if (index !== -1) {
  combatants.value.splice(index, 1);
 }
}

function applyDamage(combatant, amount) {
 combatant.hp = Math.max(0, combatant.hp - amount);
}

function applyHealing(combatant, amount) {
 combatant.hp = Math.min(combatant.maxHp, combatant.hp + amount);
}

function toggleCondition(combatant, condition) {
 const index = combatant.conditions.indexOf(condition);
 if (index === -1) {
  combatant.conditions.push(condition);
 } else {
  combatant.conditions.splice(index, 1);
 }
}

function rollInitiative() {
 combatants.value.forEach(c => {
  c.initiative = Math.floor(Math.random() * 20) + 1;
 })
 turnOrder.value = [...combatants.value].sort((a, b) => b.initiative - a.initiative)
 combatTurn.value = 0
 turnCount.value = 1
}

function nextTurn() {
 combatTurn.value = (combatTurn.value + 1) % turnOrder.value.length
 if (combatTurn.value === 0) {
  turnCount.value++
 }
}

function selectCombatant(index) {
 combatTurn.value = index;
}

function handleShowDetails(combatant) {
 emit('showDetails', combatant.monsterData || combatant);
}


watch(() => props.monsterToAdd, (newMonster) => {
 if (newMonster) {
  addCombatant(newMonster)
 }
})

watch(combatants, () => {
 turnOrder.value = [...combatants.value].sort((a, b) => (b.initiative || 0) - (a.initiative || 0));
}, { deep: true })
</script>

<template>
 <section class="combat-tracker box">
  <div class="section-header" @click="emit('toggle-combat-tracker')">
   <h3>Tracker Combattimento</h3>
   <span class="toggle-icon">{{ isCombatTrackerOpen ? '▼' : '▶' }}</span>
  </div>
  <div v-if="isCombatTrackerOpen" class="section-content">
   <div class="add-combatant-section">
    <input type="text" v-model="newCombatant.name" placeholder="Nome" class="input-combatant">
    <input type="number" v-model.number="newCombatant.hp" placeholder="HP" class="input-combatant-hp">
    <input type="number" v-model.number="newCombatant.initiative" placeholder="Ini" class="input-combatant-ini">
    <button @click="addCombatant(null)" class="add-combatant-btn">+</button>
   </div>

   <div class="combat-controls">
    <button @click="rollInitiative">Tira Iniziativa</button>
    <button @click="nextTurn" :disabled="turnOrder.length === 0">Turno Successivo ({{ turnCount }})</button>
    <button @click="emit('toggleBestiary')" class="bestiary-btn">Apri Bestiario</button>
   </div>
   
   <div v-if="turnOrder.length > 0" class="turn-order-display">
    Turno di: <strong class="active-name" @click="handleShowDetails(turnOrder[combatTurn])">{{ turnOrder[combatTurn]?.name }}</strong>
   </div>

   <ul class="combatants-list">
    <li v-for="(combatant, index) in turnOrder" :key="combatant.id" :class="{ 'active-turn': index === combatTurn }">
     
          <span class="combatant-name" @click="handleShowDetails(combatant)">
      {{ combatant.name }}
     </span>

          <div class="stats-group">
      <div class="stat-hp">
       <span>HP:</span>
       <input type="number" v-model.number="combatant.hp" class="hp-input">
       <span class="max-hp">/ {{ combatant.maxHp }}</span>
      </div>
      <div class="stat-ini">
       <span>Ini:</span>
       <input type="number" v-model.number="combatant.initiative" class="ini-input">
      </div>
     </div>
     
          <div class="action-group">
      <button @click.stop="applyDamage(combatant, 1)" class="action-btn-damage">-1 HP</button>
      <button @click.stop="applyHealing(combatant, 1)" class="action-btn-heal">+1 HP</button>
      <button @click.stop="removeCombatant(combatant.id)" class="action-btn-remove">x</button>
     </div>

          <div class="condition-list">
      <span v-for="condition in conditions" :key="condition" 
       :class="['condition-pill', { 'active': combatant.conditions.includes(condition) }]" 
       @click.stop="toggleCondition(combatant, condition)" 
       :title="condition"
      >
       {{ condition.slice(0, 3) }}
      </span>
     </div>
    </li>
   </ul>
  </div>
 </section>
</template>



<style scoped>
/* Stili aggiornati */
.combat-tracker { 
 background-color: #f8f9fa; 
 color: #000; 
 border: 2px solid #ddd;
 border-radius: 8px; 
 padding: 10px;
}
.section-header h3 { color: #000; }
.section-header .toggle-icon { color: #666; }

.combat-controls { 
 display: flex; 
 gap: 10px; 
 margin-bottom: 15px; 
}
.turn-order-display { margin-bottom: 1rem; }
.active-name { cursor: pointer; color: #3498db; }
.active-name:hover { text-decoration: underline; }

.add-combatant-section {
 display: flex;
 flex-wrap: wrap;
 gap: 5px;
 margin-bottom: 15px;
 align-items: center;
}
.input-combatant, .input-combatant-hp, .input-combatant-ini {
 padding: 5px;
 border: 1px solid #ccc;
 border-radius: 4px;
 font-size: 0.9em;
}
.input-combatant { flex-grow: 1; }
.input-combatant-hp, .input-combatant-ini { width: 50px; }
.add-combatant-btn {
 background-color: #2ecc71;
 color: white;
 border: none;
 border-radius: 50%;
 width: 30px;
 height: 30px;
 font-size: 1.5em;
 cursor: pointer;
 flex-shrink: 0;
}

.combatants-list { list-style: none; padding: 0; }

.combatants-list li { 
 display: grid;
 grid-template-columns: 1fr 1.2fr 1.2fr;
 grid-template-areas:
  "name name actions"
  "stats stats actions"
  "conditions conditions conditions";
 gap: 5px 15px;
 align-items: center; 
 padding: 10px; 
 border-bottom: 1px solid #ddd;
 position: relative;
 transition: background-color 0.3s;
}

.combatants-list li.active-turn { 
 background-color: #e6f7ff; 
 border-left: 5px solid #3498db;
 padding-left: 5px;
}
.combatant-name {
 font-weight: bold;
 grid-area: name;
 cursor: pointer;
}

.stats-group { 
 display: flex; 
 gap: 15px;
 grid-area: stats;
 flex-wrap: wrap;
}
.stat-hp, .stat-ini {
 display: flex;
 align-items: center;
 gap: 5px;
}
.hp-input, .ini-input {
 width: 45px;
 text-align: center;
 border: 1px solid #ccc;
 border-radius: 4px;
 font-size: 0.9em;
}
.max-hp { font-size: 0.9em; color: #555; }
.action-group {
 grid-area: actions;
 display: flex;
 gap: 5px;
 justify-content: flex-end;
}
.action-btn-damage, .action-btn-heal, .action-btn-remove {
 padding: 5px 8px;
 border: none;
 border-radius: 4px;
 cursor: pointer;
 font-size: 0.8em;
 color: white;
}
.action-btn-damage { background-color: #e74c3c; }
.action-btn-heal { background-color: #2ecc71; }
.action-btn-remove { background-color: #95a5a6; }

.condition-list {
 grid-area: conditions;
 display: flex;
 flex-wrap: wrap;
 gap: 5px;
 margin-top: 5px;
}
.condition-pill {
 font-size: 0.7em;
 padding: 2px 5px;
 background-color: #bdc3c7;
 color: #2c3e50;
 border-radius: 4px;
 cursor: pointer;
}
.condition-pill.active {
 background-color: #e74c3c;
 color: white;
}
</style>