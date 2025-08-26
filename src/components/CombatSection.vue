<script setup>
import { ref, computed } from 'vue'
import { useCombat } from '@/composables/useCombat.js'
import { dndWeapons } from '@/data/dndWeapons.js'

const props = defineProps({
 character: { type: Object, required: true },
 abilityModifiers: { type: Object, required: true },
 proficiencyBonus: { type: Number, required: true }
})

const { 
 getToHitBonus, 
 getDamageBonus, 
 makeAttackRoll, 
 makeDamageRoll,
 getWeaponDamageDie
} = useCombat(props.character, props.abilityModifiers, props.proficiencyBonus)

// Inizializza le proprietà se non esistono
if (!props.character.equipment.weapons) props.character.equipment.weapons = [];
if (props.character.combat.isRaging === undefined) props.character.combat.isRaging = false;


const weaponToAdd = ref(null)
const isCustomWeaponModalOpen = ref(false)
const newCustomWeapon = ref({ 
  name: '', 
  damage: '1d4', 
  damageType: 'contundente', 
  properties: [], 
  category: 'Manuale', 
  weight: 0 // <-- BUG FIX: Aggiunto peso di default
})

const groupedWeapons = computed(() => dndWeapons.reduce((acc, weapon) => {
 if (!acc[weapon.category]) acc[weapon.category] = [];
 acc[weapon.category].push(weapon);
 return acc;
}, {}));

function addWeapon() {
 if (!weaponToAdd.value) return;
 const weaponData = dndWeapons.find(w => w.name === weaponToAdd.value);
 if (!weaponData) return;
 const newWeaponInstance = { ...weaponData, id: Date.now(), enhancementBonus: 0, isTwoHanding: false, ammunition: weaponData.properties.some(p => p.startsWith('munizioni')) ? 20 : null };
 props.character.equipment.weapons.push(newWeaponInstance);
 weaponToAdd.value = null;
}

function removeWeapon(weaponId) {
 const index = props.character.equipment.weapons.findIndex(w => w.id === weaponId);
 if (index !== -1) props.character.equipment.weapons.splice(index, 1);
}

function addCustomWeapon() {
 if (!newCustomWeapon.value.name || !newCustomWeapon.value.damage) return;
 const customWeaponInstance = { ...newCustomWeapon.value, id: Date.now(), enhancementBonus: 0, isTwoHanding: false, ammunition: null };
 props.character.equipment.weapons.push(customWeaponInstance);
 newCustomWeapon.value = { name: '', damage: '1d4', damageType: 'contundente', properties: [], category: 'Manuale', weight: 0 };
 isCustomWeaponModalOpen.value = false;
}
</script>

<template>
 <div class="combat-section">
  <div class="combat-states">
   <label class="state-label">
    <input type="checkbox" v-model="character.combat.isRaging">
    In Ira
   </label>
   </div>

  <div class="add-weapon-section">
   <select v-model="weaponToAdd">
    <option :value="null" disabled>-- Seleziona un'arma --</option>
    <optgroup v-for="(group, category) in groupedWeapons" :label="category">
     <option v-for="weapon in group" :key="weapon.name" :value="weapon.name">{{ weapon.name }}</option>
    </optgroup>
   </select>
   <button @click="addWeapon" class="add-btn small">+ Aggiungi</button>
   <button @click="isCustomWeaponModalOpen = true" class="add-btn small manual-btn">Manuale</button>
  </div>

  <div class="weapon-list">
      <div class="weapon-list-header">
        <span>Arma</span>
        <span>Bonus TxC</span>
        <span>Danno</span>
        <span>Azioni</span>
      </div>

   <div v-for="weapon in character.equipment.weapons" :key="weapon.id" class="weapon-row">
        <div class="weapon-details">
          <div class="weapon-main-line">
            <span class="weapon-name">{{ weapon.name }}</span>
            <div class="enhancement-wrapper">+<input type="number" class="enhancement-input" v-model.number="weapon.enhancementBonus"></div>
            <label v-if="weapon.properties.some(p => p.startsWith('versatile'))" class="versatile-label">
              <input type="checkbox" v-model="weapon.isTwoHanding"> Due Mani
            </label>
            <div v-if="weapon.ammunition !== null" class="weapon-ammo">
              <input type="number" v-model.number="weapon.ammunition"> Mun.
            </div>
          </div>
          <div class="weapon-properties">{{ weapon.properties.join(', ') }}</div>
        </div>

        <div class="stat-block-compact">
          +{{ getToHitBonus(weapon) }}
        </div>

        <div class="stat-block-compact damage-type" :data-damage-type="weapon.damageType">
          {{ getWeaponDamageDie(weapon) }} + {{ getDamageBonus(weapon) }}
        </div>
        
            <div class="weapon-actions">
     <button class="action-btn" @click="makeAttackRoll(weapon)">TxC</button>
     <button class="action-btn" @click="makeDamageRoll(weapon)">Danno</button>
    </div>

            <button @click="removeWeapon(weapon.id)" class="remove-btn small">-</button>
   </div>
   <div v-if="!character.equipment.weapons.length" class="no-weapons-placeholder">Nessuna arma equipaggiata.</div>
  </div>

  <div v-if="isCustomWeaponModalOpen" class="modal-overlay" @click.self="isCustomWeaponModalOpen = false">
      <div class="modal-content">
        <h3>Aggiungi Arma Personalizzata</h3>
        <div class="form-grid">
          <div class="grid-item full-width">
            <label>Nome Arma</label>
            <input type="text" v-model="newCustomWeapon.name" placeholder="Es. Spada Lunga Elfica">
          </div>
          <div class="grid-item">
            <label>Dado Danno</label>
            <input type="text" v-model="newCustomWeapon.damage" placeholder="Es. 1d8">
          </div>
          <div class="grid-item">
            <label>Tipo Danno</label>
            <input type="text" v-model="newCustomWeapon.damageType" placeholder="Es. tagliente">
          </div>
          <div class="grid-item">
            <label>Peso (kg)</label>
            <input type="number" v-model.number="newCustomWeapon.weight" placeholder="Es. 1.5">
          </div>
          <div class="grid-item full-width">
            <label>Proprietà (separate da virgola)</label>
            <input 
              type="text" 
              :value="newCustomWeapon.properties.join(', ')" 
              @input="newCustomWeapon.properties = $event.target.value.split(',').map(p => p.trim())"
              placeholder="Es. versatile (1d10), finesse"
            >
          </div>
        </div>
        <div class="modal-actions">
          <button @click="isCustomWeaponModalOpen = false" class="btn-secondary">Annulla</button>
          <button @click="addCustomWeapon" class="btn-primary">Aggiungi</button>
        </div>
      </div>
  </div>
 </div>
</template>

<style scoped>
/* Stili principali... */
.combat-section { display: flex; flex-direction: column; gap: 1.5rem; }
.combat-states { display: flex; gap: 1rem; padding: 0.5rem; background-color: #f1c40f20; border-radius: 6px; }
.state-label { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; }
.add-weapon-section { display: flex; gap: 0.5rem; align-items: center; }
.add-weapon-section select { flex-grow: 1; }
.weapon-list { display: flex; flex-direction: column; gap: 0.25rem; } /* Ridotto gap */

/* NUOVI STILI PER LAYOUT COMPATTO */
.weapon-list-header {
  display: grid;
  grid-template-columns: 3fr 1fr 1.5fr 1.5fr auto;
  gap: 1rem;
  padding: 0 0.75rem 0.5rem 0.75rem;
  font-weight: bold;
  font-size: 0.8em;
  text-transform: uppercase;
  color: #555;
  border-bottom: 2px solid #ddd;
  align-items: center;
}
.weapon-list-header > span:nth-child(2),
.weapon-list-header > span:nth-child(3) {
  text-align: center;
}

.weapon-row { 
  display: grid;
  grid-template-columns: 3fr 1fr 1.5fr 1.5fr auto; /* Colonne ricalibrate */
  gap: 1rem; 
  align-items: center; 
  padding: 0.5rem 0.75rem; /* Padding ridotto */
  background-color: #f9f9f9; 
  border-radius: 6px; 
  border: 1px solid #eee;
}
.weapon-row:hover {
  background-color: #f1f1f1;
}

.weapon-details {
  display: flex;
  flex-direction: column;
}

.weapon-main-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.weapon-name { font-weight: bold; font-size: 1.1em; }
.enhancement-wrapper { display: flex; align-items: center; background-color: #e0e0e0; border-radius: 4px; padding: 0 4px; }
.enhancement-input { width: 35px; text-align: center; font-size: 0.9em; border: none; background: transparent; -moz-appearance: textfield; }
.enhancement-input::-webkit-outer-spin-button, .enhancement-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.versatile-label { font-size: 0.8em; color: #3498db; cursor: pointer; display: flex; align-items: center; gap: 0.3rem; white-space: nowrap; }

.weapon-ammo {
  display: flex;
  align-items: center;
  font-size: 0.8em;
  gap: 4px;
}
.weapon-ammo input {
  width: 40px;
  padding: 2px;
  font-size: 0.9em;
  text-align: center;
}

.weapon-properties { 
  font-size: 0.8em; 
  color: #666; 
  font-style: italic;
  margin-top: 2px;
  line-height: 1.2;
}

.stat-block-compact {
  font-weight: bold;
  font-size: 1.1em;
  text-align: center;
  position: relative;
}

.damage-type::after {
  content: attr(data-damage-type);
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.7em;
  color: #555;
  font-weight: normal;
}

.weapon-actions { display: flex; gap: 0.5rem; justify-content: center; }
.action-btn { background-color: #3498db; color: white; border: none; padding: 6px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; } /* Font ridotto */

.remove-btn.small { width: 28px; height: 28px; align-self: center; }
.no-weapons-placeholder { text-align: center; color: #888; font-style: italic; padding: 1rem; }
.manual-btn { background-color: #95a5a6; }
.add-btn.small { padding: 8px 12px; font-size: 0.9em; }
/* ... altri stili ... */

/* Stili per Modale Arma Custom (riutilizzati da HP modal) */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6); display: flex; justify-content: center; align-items: center; z-index: 1000; }
.modal-content { background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); width: 90%; max-width: 500px; color: #000; }
.modal-content h3 { margin-top: 0; text-align: center; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem; }
.grid-item { display: flex; flex-direction: column; gap: 0.25rem; }
.grid-item label { font-weight: bold; font-size: 0.8em; }
.grid-item.full-width { grid-column: 1 / -1; }
.modal-content input { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
.properties-group { display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; }
.properties-group label { display: flex; align-items: center; gap: 0.3rem; }
.modal-actions { display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1.5rem; }
.btn-primary, .btn-secondary { padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 1em; }
.btn-primary { background-color: #2ecc71; color: white; }
.btn-secondary { background-color: #bdc3c7; color: #2c3e50; }
</style>