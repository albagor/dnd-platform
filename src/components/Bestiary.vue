<script setup>
import { ref, computed } from 'vue';
import { dndMonsters } from '@/data/dndMonsters.js';

const emit = defineEmits(['close', 'addMonster', 'showDetails']);

// Variabili reattive per la ricerca
const searchTerm = ref('');
const searchBy = ref('name'); // Criterio di ricerca predefinito

// Funzione per impostare il termine di ricerca e il criterio
function setSearchTerm(value, criteria) {
 searchTerm.value = value;
 searchBy.value = criteria;
}

// Proprietà computata per generare le liste di suggerimenti unici
const uniqueNames = computed(() => {
 const names = dndMonsters.map(m => m.name);
 return [...new Set(names)].sort((a, b) => a.localeCompare(b));
});

const uniqueTypes = computed(() => {
 const types = dndMonsters.map(m => m.type);
 const unique = [...new Set(types)];
 return unique.sort((a, b) => a.localeCompare(b));
});

const uniqueEnvironments = computed(() => {
 const environments = dndMonsters.map(m => m.environment);
 const allEnvironments = environments.flatMap(env => env.split(',').map(s => s.trim()));
 const unique = [...new Set(allEnvironments)];
 return unique.filter(e => e).sort((a, b) => a.localeCompare(b));
});

// Proprietà computata per filtrare i suggerimenti in base al termine di ricerca
const filteredSuggestions = computed(() => {
 if (!searchTerm.value) {
  return [];
 }

 const term = searchTerm.value.toLowerCase();
 let suggestions = [];

 // Aggiungi suggerimenti per il nome
 if (searchBy.value === 'name' || searchBy.value === 'all') {
  suggestions = suggestions.concat(uniqueNames.value.filter(name => name.toLowerCase().includes(term)));
 }
 // Aggiungi suggerimenti per il tipo
 if (searchBy.value === 'type' || searchBy.value === 'all') {
  suggestions = suggestions.concat(uniqueTypes.value.filter(type => type.toLowerCase().includes(term)));
 }
 // Aggiungi suggerimenti per l'ambiente
 if (searchBy.value === 'environment' || searchBy.value === 'all') {
  suggestions = suggestions.concat(uniqueEnvironments.value.filter(env => env.toLowerCase().includes(term)));
 }

 // Rimuovi duplicati e limita il numero di suggerimenti
 return [...new Set(suggestions)].slice(0, 10);
});

// La logica di filtro principale rimane la stessa
const filteredMonsters = computed(() => {
 if (!searchTerm.value) {
  return dndMonsters;
 }

 const term = searchTerm.value.toLowerCase();

 return dndMonsters.filter(monster => {
  switch (searchBy.value) {
   case 'name':
    return monster.name.toLowerCase().includes(term);
   case 'type':
    return monster.type.toLowerCase().includes(term);
   case 'challenge_rating':
    return String(monster.challenge_rating).includes(term);
   case 'environment':
    return monster.environment.toLowerCase().includes(term);
   default:
    return true;
  }
 });
});

function addMonster(monster) {
 emit('addMonster', monster);
}
</script>

<template>
 <div class="modal-overlay" @click.self="$emit('close')">
  <div class="bestiary-modal">
   <div class="bestiary-header">
    <h2>Bestiario</h2>
    <button @click="$emit('close')" class="close-btn">×</button>
   </div>

   <div class="bestiary-controls">
    <div class="search-container">
     <input type="text" v-model="searchTerm" placeholder="Cerca creatura..." class="search-input">
     <ul v-if="searchTerm && filteredSuggestions.length" class="suggestions-list">
      <li v-for="suggestion in filteredSuggestions" :key="suggestion" @click="setSearchTerm(suggestion, searchBy)">
       {{ suggestion }}
      </li>
     </ul>
    </div>
    <select v-model="searchBy" class="search-select">
     <option value="name">Nome</option>
     <option value="type">Tipo</option>
     <option value="challenge_rating">Grado Sfida</option>
     <option value="environment">Ambiente</option>
     <option value="all">Tutto</option>
    </select>
   </div>

   <div class="monster-list-container">
        <div v-for="monster in filteredMonsters" :key="monster.name" class="monster-entry" @click="$emit('showDetails', monster)">
     <div class="monster-info">
      <div class="monster-title">
       <strong class="monster-name">{{ monster.name }}</strong>
       <span>{{ monster.size }} {{ monster.type }}, {{ monster.alignment }}</span>
      </div>
      <p class="monster-description">
       <strong>CA:</strong> {{ monster.ac }} | <strong>PF:</strong> {{ monster.hp }} ({{ monster.hp_dice }}) | <strong>Velocità:</strong> {{ monster.speed }}
      </p>
     </div>
          <button @click.stop="addMonster(monster)" class="add-monster-btn">+</button>
    </div>
   </div>
  </div>
 </div>
</template>

<style scoped>
/* Stili esistenti */
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex; justify-content: center; align-items: center; z-index: 1000;
}
.bestiary-modal {
  width: 90%; max-width: 600px; height: 80vh;
  background-color: #fdfaf6; color: #333;
  border-radius: 8px; border: 2px solid #bca789;
  box-shadow: 0 5px 20px rgba(0,0,0,0.4);
  display: flex; flex-direction: column;
}
.bestiary-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px 20px; border-bottom: 2px solid #bca789;
}
.bestiary-header h2 { margin: 0; font-family: serif; }
.close-btn { background: none; border: none; font-size: 2rem; cursor: pointer; color: #888; }
.bestiary-controls {
  display: flex;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
/* Nuovo stile per il container di ricerca e suggerimenti */
.search-container {
  position: relative;
  flex-grow: 1;
}
.search-input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.suggestions-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fdfaf6;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1001;
  list-style: none;
  padding: 0;
  margin: 0;
}
.suggestions-list li {
  padding: 8px;
  cursor: pointer;
}
.suggestions-list li:hover {
  background-color: #e0e0e0;
}
.search-select { padding: 8px; border-radius: 4px; border: 1px solid #ccc; cursor: pointer; }
.monster-list-container { overflow-y: auto; flex-grow: 1; padding: 10px; }
.monster-entry { display: flex; align-items: center; padding: 10px; border-bottom: 1px dotted #ccc; }
.monster-info { flex-grow: 1; }
.monster-title { margin-bottom: 5px; }
.monster-name { font-size: 1.2em; font-family: serif; color: #a04000; }
.monster-description { font-size: 0.9em; color: #555; margin: 0; }
.add-monster-btn {
  background-color: #c0392b; color: white;
  border: none; border-radius: 50%;
  width: 30px; height: 30px;
  font-size: 1.5em; cursor: pointer; flex-shrink: 0; margin-left: 15px;
}
</style>