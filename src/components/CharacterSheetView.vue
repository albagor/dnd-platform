<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { auth, db } from '@/firebaseConfig'
import { doc, setDoc, onSnapshot } from 'firebase/firestore'
import { useUserStore } from '@/stores/userStore'
import { useToast } from 'vue-toastification'
import CharacterSheet from './CharacterSheet.vue'

// --- SETUP ---
const route = useRoute()
const toast = useToast()
const userStore = useUserStore()
const character = ref(null)
let characterListener = null
let debounceTimer = null

// --- LOGICA DI CARICAMENTO E ASCOLTO ---
function setupCharacterListener(userId) {
  if (characterListener) characterListener() // Interrompe l'ascolto precedente

  const docRef = doc(db, 'characterSheets', userId)
  characterListener = onSnapshot(
    docRef,
    (docSnap) => {
      if (docSnap.exists()) {
        character.value = { id: docSnap.id, ...docSnap.data() }
      } else {
        // Se non esiste, crea una nuova scheda vuota per l'utente.
        // La struttura 'defaultCharacter' sarà definita in CharacterSheet.vue
        character.value = { id: userId }
      }
    },
    (error) => {
      toast.error('Errore di sincronizzazione della scheda.')
    },
  )
}

// --- LOGICA DI SALVATAGGIO ---
function handleCharacterUpdate(newCharacterState) {
  character.value = newCharacterState // Aggiorna lo stato locale

  if (!character.value || !character.value.id) return

  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(async () => {
    const { id, ...dataToSave } = character.value
    const docRef = doc(db, 'characterSheets', id)
    try {
      await setDoc(docRef, dataToSave)
      // Non mostriamo un toast a ogni salvataggio per non essere invasivi
    } catch (error) {
      toast.error('Errore nel salvataggio della scheda.')
    }
  }, 1500)
}

// --- MOTORE PRINCIPALE ---
// Questo watch è l'unico punto che decide quale scheda caricare.
watch(
  () => route.fullPath,
  () => {
    if (auth.currentUser) {
      const targetUserId =
        route.query.charId && userStore.isDM ? route.query.charId : auth.currentUser.uid

      if (character.value?.id !== targetUserId) {
        setupCharacterListener(targetUserId)
      }
    }
  },
  { immediate: true },
)

onUnmounted(() => {
  if (characterListener) characterListener()
})
</script>

<template>
  <div v-if="character">
    <CharacterSheet :initial-character="character" @update:character="handleCharacterUpdate" />
  </div>
  <div v-else class="loading-screen">
    <p>Caricamento scheda in corso...</p>
  </div>
</template>

<style scoped>
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 1.5em;
  color: #aaa;
  font-style: italic;
}
</style>
