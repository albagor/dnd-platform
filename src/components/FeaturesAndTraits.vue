<script setup>
import { ref, computed } from 'vue'
import { dndFeatureChoices } from '@/data/dndFeatureChoices.js'

defineProps({
  racialTraits: { type: Array, required: true },
  baseClassFeatures: { type: Array, required: true },
  subclassFeatures: { type: Array, required: true },
  chosenSubclasses: { type: Array, required: true },
  armorProficiencies: { type: Array, required: true },
  weaponProficiencies: { type: Array, required: true },
  character: { type: Object, required: true },
})

const isModalOpen = ref(false)
const modalType = ref('trait') // 'trait', 'feature', 'armor', 'weapon', 'tool', 'language'
const newEntry = ref({})

function openModal(type) {
  modalType.value = type
  if (type === 'trait' || type === 'feature') {
    newEntry.value = { name: '', description: '' }
  } else {
    newEntry.value = { text: '' }
  }
  isModalOpen.value = true
}

function addEntry(character) {
  switch (modalType.value) {
    case 'trait':
      if (newEntry.value.name && newEntry.value.description)
        character.customRacialTraits.push({ ...newEntry.value })
      break
    case 'feature':
      if (newEntry.value.name && newEntry.value.description)
        character.customClassFeatures.push({ ...newEntry.value })
      break
    case 'armor':
      if (newEntry.value.text) character.proficiencies.manualArmor.push(newEntry.value.text)
      break
    case 'weapon':
      if (newEntry.value.text) character.proficiencies.manualWeapons.push(newEntry.value.text)
      break
    case 'tool':
      if (newEntry.value.text) character.proficiencies.manualTools.push(newEntry.value.text)
      break
    case 'language':
      if (newEntry.value.text) character.proficiencies.manualLanguages.push(newEntry.value.text)
      break
  }
  isModalOpen.value = false
}

const modalTitle = computed(() => {
  switch (modalType.value) {
    case 'trait':
      return 'Aggiungi Tratto Razziale'
    case 'feature':
      return 'Aggiungi Privilegio di Classe'
    case 'armor':
      return 'Aggiungi Competenza Armatura'
    case 'weapon':
      return 'Aggiungi Competenza Arma'
    case 'tool':
      return 'Aggiungi Competenza Strumento'
    case 'language':
      return 'Aggiungi Linguaggio'
    default:
      return 'Aggiungi Voce'
  }
})
</script>

<template>
  <div>
    <div class="main-grid">
      <div class="column">
        <div class="sub-section">
          <div class="column-header">
            <h4>Competenze Armature</h4>
            <button @click="openModal('armor')" class="add-btn-small">+</button>
          </div>
          <p class="prof-list">{{ armorProficiencies.join(', ') || 'Nessuna' }}</p>
        </div>
        <div class="sub-section">
          <div class="column-header">
            <h4>Competenze Armi</h4>
            <button @click="openModal('weapon')" class="add-btn-small">+</button>
          </div>
          <p class="prof-list">{{ weaponProficiencies.join(', ') || 'Nessuna' }}</p>
        </div>
        <div class="sub-section">
          <div class="column-header">
            <h4>Competenze Strumenti</h4>
            <button @click="openModal('tool')" class="add-btn-small">+</button>
          </div>
          <p class="prof-list">{{ character.proficiencies.manualTools.join(', ') || 'Nessuna' }}</p>
        </div>
        <div class="sub-section">
          <div class="column-header">
            <h4>Linguaggi</h4>
            <button @click="openModal('language')" class="add-btn-small">+</button>
          </div>
          <p class="prof-list">
            {{ character.proficiencies.manualLanguages.join(', ') || 'Nessuno' }}
          </p>
        </div>
      </div>

      <div class="column">
        <div class="sub-section">
          <div class="column-header">
            <h4>Tratti Razziali</h4>
            <button @click="openModal('trait')" class="add-btn-small">+</button>
          </div>
          <ul class="feature-list">
            <li v-for="trait in racialTraits" :key="trait.name">
              <strong>{{ trait.name }}:</strong> {{ trait.description }}
            </li>
            <li v-if="!racialTraits.length" class="placeholder">Nessun tratto razziale.</li>
          </ul>
        </div>
      </div>

      <div class="column">
        <div class="sub-section">
          <div class="column-header">
            <h4>Privilegi di Classe</h4>
            <button @click="openModal('feature')" class="add-btn-small">+</button>
          </div>
          <ul class="feature-list">
            <li v-for="feature in baseClassFeatures" :key="feature.name">
              <strong>{{ feature.name }}:</strong> {{ feature.description }}
              <div
                v-if="feature.name === 'Stile di Combattimento' && dndFeatureChoices[feature.name]"
                class="choice-box"
              >
                <select v-model="character.combat.fightingStyles[0]">
                  <option :value="undefined" disabled>-- Scegli uno stile --</option>
                  <option
                    v-for="style in dndFeatureChoices['Stile di Combattimento'].options"
                    :key="style.name"
                    :value="style.name"
                  >
                    {{ style.name }}
                  </option>
                </select>
              </div>
            </li>
            <li v-if="!baseClassFeatures.length" class="placeholder">
              Nessun privilegio di classe base.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="chosenSubclasses.length > 0" class="subclass-spotlight">
      <div v-for="subclass in chosenSubclasses" :key="subclass.subclassName" class="subclass-block">
        <h4>Privilegi di: {{ subclass.subclassName }} ({{ subclass.className }})</h4>
        <ul class="feature-list">
          <li v-for="feature in subclassFeatures" :key="feature.name">
            <strong>{{ feature.name }}:</strong> {{ feature.description }}
          </li>
        </ul>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal-overlay" @click.self="isModalOpen = false">
      <div class="modal-content">
        <h3>{{ modalTitle }}</h3>
        <div v-if="modalType === 'trait' || modalType === 'feature'">
          <div class="form-item">
            <label>Nome</label><input type="text" v-model="newEntry.name" />
          </div>
          <div class="form-item">
            <label>Descrizione</label><textarea v-model="newEntry.description" rows="3"></textarea>
          </div>
        </div>
        <div v-else>
          <div class="form-item">
            <label>Testo</label><input type="text" v-model="newEntry.text" />
          </div>
        </div>
        <div class="modal-actions">
          <button @click="isModalOpen = false" class="btn-secondary">Annulla</button>
          <button @click="addEntry(character)" class="btn-primary">Aggiungi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: flex-start;
}
.column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.sub-section {
}
.column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
}
h4 {
  font-family: serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
}
.add-btn-small {
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 1.2em;
  cursor: pointer;
  line-height: 24px;
  flex-shrink: 0;
}
.prof-list {
  font-size: 0.9em;
  color: #333;
  margin: 0;
}
.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.feature-list li {
  margin-bottom: 1rem;
  font-size: 0.9em;
  line-height: 1.4;
}
.feature-list li strong {
  color: #333;
}
.placeholder {
  color: #888;
  font-style: italic;
}
.choice-box {
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: #f0f0f0;
  border-radius: 4px;
  border: 1px solid #ddd;
}
.choice-box select {
  width: 100%;
}
.subclass-spotlight {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid #888;
}
.subclass-block h4 {
  color: #8e44ad;
}
/* Stili Modale */
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
  color: #000;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
}
.modal-content h3 {
  margin-top: 0;
  text-align: center;
}
.form-item {
  margin-bottom: 1rem;
}
.form-item label {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.8em;
  font-weight: bold;
}
.form-item input,
.form-item textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}
.btn-primary,
.btn-secondary {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}
.btn-primary {
  background-color: #2ecc71;
  color: white;
}
.btn-secondary {
  background-color: #bdc3c7;
  color: #2c3e50;
}

/* --- REGOLE RESPONSIVE AGGIUNTE --- */
@media (max-width: 768px) {
  .main-grid {
    grid-template-columns: 1fr; /* Le 3 colonne diventano 1 */
    gap: 1.5rem; /* Riduciamo lo spazio tra le sezioni */
  }
}
</style>
