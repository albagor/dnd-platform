<script setup>
import { ref, computed } from 'vue'
import { dndSpells } from '@/data/dndSpells.js'

const emit = defineEmits(['close', 'addSpell'])

const searchTerm = ref('')
const selectedLevel = ref(null)
const selectedClass = ref(null)
const selectedSchool = ref(null)

// STEP 1: Creiamo una lista di incantesimi UNICI partendo dai dati "sporchi".
const uniqueSpells = computed(() => {
  const seen = new Set()
  return dndSpells.filter((spell) => {
    const isDuplicate = seen.has(spell.name)
    seen.add(spell.name)
    return !isDuplicate
  })
})

// Genera dinamicamente le opzioni per i filtri (usando la lista pulita)
const allSpellClasses = computed(() => {
  const classes = new Set()
  uniqueSpells.value.forEach(
    (spell) => spell.classes && spell.classes.forEach((c) => classes.add(c)),
  )
  return Array.from(classes).sort()
})
const allSpellSchools = computed(() => {
  const schools = new Set(uniqueSpells.value.map((spell) => spell.school))
  return Array.from(schools).sort()
})

// STEP 2: La logica di filtraggio ora lavora sulla lista di incantesimi UNICI.
const filteredSpells = computed(() => {
  const spells = uniqueSpells.value.filter((spell) => {
    const matchesSearch = spell.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    const matchesLevel = selectedLevel.value === null || spell.level === selectedLevel.value
    const matchesClass =
      selectedClass.value === null || (spell.classes && spell.classes.includes(selectedClass.value))
    const matchesSchool = selectedSchool.value === null || spell.school === selectedSchool.value
    return matchesSearch && matchesLevel && matchesClass && matchesSchool
  })
  // Aggiungiamo l'ordinamento per avere sempre una lista consistente
  return spells.sort((a, b) => a.name.localeCompare(b.name))
})

function addSpell(spell) {
  emit('addSpell', { level: spell.level, name: spell.name })
}
</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="grimoire-modal">
      <div class="grimoire-header">
        <h2>Grimorio</h2>
        <button @click="$emit('close')" class="close-btn">×</button>
      </div>
      <div class="grimoire-controls">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Cerca per nome..."
          class="search-input"
        />
        <select v-model.number="selectedLevel" class="level-filter">
          <option :value="null">Tutti i Livelli</option>
          <option v-for="n in 10" :key="n - 1" :value="n - 1">Livello {{ n - 1 }}</option>
        </select>
        <select v-model="selectedClass" class="level-filter">
          <option :value="null">Tutte le Classi</option>
          <option v-for="className in allSpellClasses" :key="className" :value="className">
            {{ className }}
          </option>
        </select>
        <select v-model="selectedSchool" class="level-filter">
          <option :value="null">Tutte le Scuole</option>
          <option v-for="school in allSpellSchools" :key="school" :value="school">
            {{ school }}
          </option>
        </select>
      </div>
      <div class="spell-list-container">
        <div v-for="spell in filteredSpells" :key="spell.name" class="spell-entry">
          <div class="spell-info">
            <div class="spell-title">
              <strong class="spell-name">{{ spell.name }}</strong>
              <span v-if="spell.concentration" class="concentration-badge">Concentrazione</span>
              <span>(Liv. {{ spell.level }} - {{ spell.school }})</span>
            </div>
            <div class="spell-details">
              <span><strong>Tempo di Lancio:</strong> {{ spell.casting_time }}</span>
              <span><strong>Raggio:</strong> {{ spell.range }}</span>
              <span><strong>Bersaglio:</strong> {{ spell.target }}</span>
              <span><strong>Componenti:</strong> {{ spell.components.join(', ') }}</span>
              <span v-if="spell.material"><strong>Materiale:</strong> {{ spell.material }}</span>
              <span><strong>Durata:</strong> {{ spell.duration }}</span>
            </div>
            <p class="spell-description">{{ spell.description }}</p>
            <p v-if="spell.higher_level" class="spell-higher-level">
              <strong>A Livelli Superiori:</strong> {{ spell.higher_level }}
            </p>
          </div>
          <button @click="addSpell(spell)" class="add-spell-btn">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.grimoire-modal {
  width: 90%;
  max-width: 800px;
  height: 80vh;
  background-color: #fdfaf6;
  color: #333;
  border-radius: 8px;
  border: 2px solid #bca789;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
}
.grimoire-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 2px solid #bca789;
}
.grimoire-header h2 {
  margin: 0;
  font-family: serif;
}
.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  color: #888;
}
.grimoire-controls {
  display: flex;
  flex-wrap: wrap; /* Permette di andare a capo su schermi piccoli */
  padding: 10px;
  gap: 10px;
  border-bottom: 1px solid #ddd;
}
.search-input,
.level-filter {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-family: sans-serif;
}
.search-input {
  flex-grow: 1;
}
.spell-list-container {
  overflow-y: auto;
  flex-grow: 1;
  padding: 10px;
}
.spell-entry {
  display: flex;
  align-items: flex-start; /* Allinea all'inizio per descrizioni lunghe */
  padding: 15px 10px;
  border-bottom: 1px dotted #ccc;
}
.spell-entry:last-child {
  border-bottom: none;
}
.spell-info {
  flex-grow: 1;
}
.spell-title {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 8px;
}
.spell-name {
  font-size: 1.2em;
  font-family: serif;
  color: #5c3d03;
}
.spell-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.8em;
  background-color: #f3f0e9;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
}
.spell-description {
  font-size: 0.9em;
  color: #333;
  margin: 5px 0 0 0;
  line-height: 1.4;
}
.spell-higher-level {
  font-size: 0.85em;
  color: #555;
  margin-top: 8px;
  font-style: italic;
}
.add-spell-btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1.5em;
  cursor: pointer;
  flex-shrink: 0;
  margin-left: 15px;
  margin-top: 5px;
}
.concentration-badge {
  background: #f7d358;
  color: #b30000;
  font-weight: bold;
  border-radius: 4px;
  padding: 2px 6px;
  margin-left: 10px;
  font-size: 0.9em;
  border: 1px solid #b30000;
}
.bersaglio {
  color: #0055a5;
  font-weight: bold;
}
.materiale {
  color: #b30000;
  font-weight: bold;
}
</style>
