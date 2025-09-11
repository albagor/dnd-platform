<script setup>
import { ref, computed } from 'vue'
import { dndFeatureChoices } from '@/data/dndFeatureChoices.js'

defineProps({
  racialTraits: { type: Array, required: true },
  baseClassFeatures: { type: Array, required: true },
  subclassFeatures: { type: Array, required: true },
  chosenSubclasses: { type: Array, required: true },
  chosenFeats: { type: Array, default: () => [] }, // <-- AGGIUNGI QUESTA RIGA

  armorProficiencies: { type: Array, required: true },
  weaponProficiencies: { type: Array, required: true },
  character: { type: Object, required: true },
})

const isModalOpen = ref(false)
const modalType = ref('trait') // 'trait', 'feature', 'armor', 'weapon', 'tool', 'language', 'other'
const newEntry = ref({})

function removeCustomEntry(list, entry) {
  const index = list.indexOf(entry)
  if (index > -1) {
    list.splice(index, 1)
  }
}

// Questa funzione ora accetta l'oggetto 'character' intero
function removeProficiency(character, listName, entry) {
  const list = character.proficiencies[listName]
  if (list) {
    const index = list.indexOf(entry)
    if (index > -1) {
      list.splice(index, 1)
    }
  }
}
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
      // Controllo di sicurezza: se l'array non esiste, lo crea
      if (!character.customRacialTraits) {
        character.customRacialTraits = []
      }
      if (newEntry.value.name && newEntry.value.description)
        character.customRacialTraits.push({ ...newEntry.value })
      break

    case 'feature':
      // Controllo di sicurezza: se l'array non esiste, lo crea
      if (!character.customClassFeatures) {
        character.customClassFeatures = []
      }
      if (newEntry.value.name && newEntry.value.description)
        character.customClassFeatures.push({ ...newEntry.value })
      break

    case 'armor':
      if (newEntry.value.text) {
        if (!character.proficiencies.manualArmor) character.proficiencies.manualArmor = []
        character.proficiencies.manualArmor.push(newEntry.value.text)
      }
      break

    case 'weapon':
      if (newEntry.value.text) {
        if (!character.proficiencies.manualWeapons) character.proficiencies.manualWeapons = []
        character.proficiencies.manualWeapons.push(newEntry.value.text)
      }
      break

    case 'tool':
      if (newEntry.value.text) {
        if (!character.proficiencies.manualTools) character.proficiencies.manualTools = []
        character.proficiencies.manualTools.push(newEntry.value.text)
      }
      break

    case 'language':
      if (newEntry.value.text) {
        if (!character.proficiencies.manualLanguages) character.proficiencies.manualLanguages = []
        character.proficiencies.manualLanguages.push(newEntry.value.text)
      }
      break

    case 'other':
      if (newEntry.value.text) {
        if (!character.proficiencies.manualOther) character.proficiencies.manualOther = []
        character.proficiencies.manualOther.push(newEntry.value.text)
      }
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
    case 'other':
      return 'Aggiungi altre competenze'
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
          <div class="prof-list-container">
            <span v-for="prof in armorProficiencies" :key="prof" class="prof-item">
              {{ prof }}
              <button
                v-if="character.proficiencies.manualArmor.includes(prof)"
                @click="removeProficiency(character, 'manualArmor', prof)"
                class="remove-entry-btn"
              >
                ×
              </button>
            </span>
            <span v-if="!armorProficiencies.length" class="placeholder">Nessuna</span>
          </div>
        </div>
        <div class="sub-section">
          <div class="column-header">
            <h4>Competenze Armi</h4>
            <button @click="openModal('weapon')" class="add-btn-small">+</button>
          </div>
          <div class="prof-list-container">
            <span v-for="prof in weaponProficiencies" :key="prof" class="prof-item">
              {{ prof }}
              <button
                v-if="character.proficiencies.manualWeapons.includes(prof)"
                @click="removeProficiency('manualWeapons', prof)"
                class="remove-entry-btn"
              >
                ×
              </button>
            </span>
            <span v-if="!weaponProficiencies.length" class="placeholder">Nessuna</span>
          </div>
        </div>
        <div class="sub-section">
          <div class="column-header">
            <h4>Competenze Strumenti</h4>
            <button @click="openModal('tool')" class="add-btn-small">+</button>
          </div>
          <div class="prof-list-container">
            <span v-for="tool in character.proficiencies.manualTools" :key="tool" class="prof-item">
              {{ tool }}
              <button
                @click="removeProficiency(character, 'manualTools', tool)"
                class="remove-entry-btn"
              >
                ×
              </button>
            </span>
            <span
              v-if="
                !character.proficiencies.manualTools ||
                character.proficiencies.manualTools.length === 0
              "
              class="placeholder"
              >Nessuna</span
            >
          </div>
        </div>
        <div class="sub-section">
          <div class="column-header">
            <h4>Linguaggi</h4>
            <button @click="openModal('language')" class="add-btn-small">+</button>
          </div>
          <div class="prof-list-container">
            <span
              v-for="lang in character.proficiencies.manualLanguages"
              :key="lang"
              class="prof-item"
            >
              {{ lang }}
              <button
                @click="removeProficiency(character, 'manualLanguages', lang)"
                class="remove-entry-btn"
              >
                ×
              </button>
            </span>
            <span
              v-if="
                !character.proficiencies.manualLanguages ||
                character.proficiencies.manualLanguages.length === 0
              "
              class="placeholder"
              >Nessuno</span
            >
          </div>
        </div>
        <div class="sub-section">
          <div class="column-header">
            <h4>Altre competenze</h4>
            <button @click="openModal('other')" class="add-btn-small">+</button>
          </div>
          <div class="prof-list-container">
            <span
              v-for="other in character.proficiencies.manualOther"
              :key="other"
              class="prof-item"
            >
              {{ other }}
              <button
                @click="removeProficiency(character, 'manualOther', other)"
                class="remove-entry-btn"
              >
                ×
              </button>
            </span>
            <span
              v-if="
                !character.proficiencies.manualOther ||
                character.proficiencies.manualOther.length === 0
              "
              class="placeholder"
              >Nessuna</span
            >
          </div>
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
              <div class="feature-content">
                <strong>{{ trait.name }}:</strong> {{ trait.description }}
              </div>
              <button
                v-if="character.customRacialTraits.includes(trait)"
                @click="removeCustomEntry(character.customRacialTraits, trait)"
                class="remove-entry-btn"
              >
                ×
              </button>
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
            </li>
            <li v-for="feature in subclassFeatures" :key="feature.name">
              <strong>{{ feature.name }} ({{ feature.subclassName }}):</strong>
              {{ feature.description }}
            </li>

            <li
              v-for="feature in character.customClassFeatures"
              :key="feature.name"
              class="custom-feature"
            >
              <div class="feature-content">
                <strong>{{ feature.name }} (Manuale):</strong> {{ feature.description }}
              </div>
              <button
                @click="removeCustomEntry(character.customClassFeatures, feature)"
                class="remove-entry-btn"
              >
                ×
              </button>
            </li>

            <li
              v-if="
                !baseClassFeatures.length &&
                !subclassFeatures.length &&
                (!character.customClassFeatures || character.customClassFeatures.length === 0)
              "
              class="placeholder"
            >
              Nessun privilegio di classe.
            </li>
          </ul>
        </div>
      </div>

      <div class="column">
        <div class="sub-section">
          <div class="column-header">
            <h4>Talenti</h4>
          </div>
          <ul class="feature-list">
            <li v-for="feat in chosenFeats" :key="feat.name">
              <div class="feature-content">
                <strong>{{ feat.name }}:</strong> {{ feat.description }}
              </div>
            </li>
            <li v-if="!chosenFeats || !chosenFeats.length" class="placeholder">
              Nessun talento selezionato.
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
  grid-template-columns: repeat(4, 1fr); /* 4 colonne su schermi grandi */
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
/* --- REGOLE RESPONSIVE AGGIUNTE E MODIFICATE --- */
@media (max-width: 1200px) {
  .main-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 colonne su tablet */
  }
}

@media (max-width: 768px) {
  .main-grid {
    grid-template-columns: 1fr; /* 1 colonna su mobile */
    gap: 1.5rem;
  }
}
.custom-feature {
  background-color: #f0f8ff; /* Un leggero sfondo azzurro */
  border-left: 3px solid #87ceeb; /* Una barra laterale per evidenziare */
  padding-left: 10px;
}
.prof-list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.prof-item {
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #e9ecef;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}
.feature-list li {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
}
.feature-content {
  flex-grow: 1;
}
.remove-entry-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.9em;
  line-height: 18px;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
