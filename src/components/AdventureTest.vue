<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useAdventureStore } from '@/stores/adventureStore';
import { storeToRefs } from 'pinia';
import { useToast } from 'vue-toastification';
import { db } from '@/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// Store per avere la lista e creare nuove avventure
const adventureStore = useAdventureStore();
const { adventuresList } = storeToRefs(adventureStore);
const { subscribeToAdventures, createNewAdventure, clearStore } = adventureStore;

const toast = useToast();

// Logica di caricamento/salvataggio (copiata da CharacterSheet.vue)
const activeAdventureId = ref(null);
const currentAdventure = ref(null);

onMounted(() => {
  subscribeToAdventures();
});

onUnmounted(() => {
  clearStore();
});

async function loadAdventure(adventureId) {
  console.log(`[TEST] Chiamata loadAdventure con ID: ${adventureId}`);
  activeAdventureId.value = adventureId;
  const docRef = doc(db, 'adventures', adventureId);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("[TEST] Documento caricato:", docSnap.data());
      currentAdventure.value = { id: docSnap.id, ...docSnap.data() };
    } else {
      console.error("[TEST] Documento non trovato!");
    }
  } catch (error) {
    console.error("[TEST] Errore caricamento documento:", error);
  }
}

let debounceTimer = null;
watch(currentAdventure, (modifiedData) => {
  if (modifiedData && activeAdventureId.value) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      try {
        console.log("[TEST] Salvataggio in corso...");
        const docRef = doc(db, 'adventures', activeAdventureId.value);
        const { id, ...dataToSave } = modifiedData;
        await setDoc(docRef, dataToSave);
        toast.success("SALVATO!");
      } catch (error) {
        console.error("[TEST] Errore salvataggio:", error);
        toast.error("Errore salvataggio.");
      }
    }, 1500);
  }
}, { deep: true });
</script>

<template>
  <div class="test-container">
    <h2>Banco di Prova Avventure</h2>
    <div class="test-layout">
      
      <div class="adventure-list">
        <h3>Lista Avventure</h3>
<button @click="() => createNewAdventure()" class="add-button">Crea Nuova Avventura (+)</button>        <ul>
          <li 
            v-for="adventure in adventuresList" 
            :key="adventure.id" 
            @click="loadAdventure(adventure.id)"
            :class="{ active: activeAdventureId === adventure.id }"
          >
            {{ adventure.title }} (ID: ...{{ adventure.id.slice(-4) }})
          </li>
        </ul>
      </div>

      <div class="adventure-editor">
        <h3>Editor (Solo Titolo)</h3>
        <div v-if="currentAdventure">
          <label>Modifica il titolo dell'avventura selezionata:</label>
          <input type="text" v-model="currentAdventure.title" placeholder="Modifica il titolo qui">
        </div>
        <div v-else>
          <p>Seleziona un'avventura dalla lista a sinistra per iniziare.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.test-container {
  background-color: #333;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
}
.test-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}
.add-button {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 0.5rem;
  border: 1px solid #555;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  cursor: pointer;
}
li.active {
  background-color: #646cff;
  border-color: #646cff;
}
.adventure-editor input {
  width: 100%;
  padding: 0.75rem;
  font-size: 1.2rem;
  background-color: #242424;
  border: 1px solid #555;
  color: white;
  margin-top: 0.5rem;
}
</style>