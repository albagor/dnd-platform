<script setup>
import { ref, onUnmounted, computed, watch } from 'vue' // Aggiungi 'computed' e 'watch'
import { db, auth } from '@/firebaseConfig'
import { collection, query, onSnapshot, addDoc, orderBy, serverTimestamp } from 'firebase/firestore'
import { useAdventureStore } from '@/stores/adventureStore'
import { useSessionStore } from '@/stores/sessionStore' // Importa lo store del giocatore
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toastification'

const adventureStore = useAdventureStore()
const sessionStore = useSessionStore() // Attiva lo store del giocatore
const toast = useToast()

const { activeAdventureId: dmAdventureId } = storeToRefs(adventureStore)
const { joinedSession: playerSession } = storeToRefs(sessionStore)

// NUOVO: Un computed property che trova l'ID corretto, che tu sia DM o Giocatore
const activeId = computed(() => {
  if (dmAdventureId.value) return dmAdventureId.value // Priorità al DM
  if (playerSession.value) return playerSession.value.adventureId // Fallback sul giocatore
  return null
})

const entries = ref([])
const newEntryText = ref('')
let journalListener = null

function cleanupListener() {
  if (journalListener) {
    journalListener()
    journalListener = null
  }
}

// Ora il watch osserva il nostro ID unificato
watch(
  activeId,
  (newId) => {
    cleanupListener()
    entries.value = []

    if (newId) {
      const journalRef = collection(db, 'adventures', newId, 'journal')
      const q = query(journalRef, orderBy('timestamp', 'desc'))
      journalListener = onSnapshot(
        q,
        (snapshot) => {
          entries.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        },
        (error) => {
          console.error('Errore di permessi sul diario:', error)
          toast.error('Non hai i permessi per visualizzare questo diario.')
        },
      )
    }
  },
  { immediate: true },
)

onUnmounted(() => {
  cleanupListener()
})

async function addEntry() {
  if (!newEntryText.value.trim() || !activeId.value) return

  const journalRef = collection(db, 'adventures', activeId.value, 'journal')
  try {
    await addDoc(journalRef, {
      content: newEntryText.value,
      authorId: auth.currentUser.uid,
      author: auth.currentUser.email,
      timestamp: serverTimestamp(),
    })
    newEntryText.value = ''
    toast.success('Voce del diario aggiunta!')
  } catch (error) {
    toast.error("Errore nell'aggiungere la voce.")
    console.error('Errore:', error)
  }
}

function formatDate(timestamp) {
  if (!timestamp) return '...'
  return new Date(timestamp.seconds * 1000).toLocaleString('it-IT')
}
</script>

<template>
  <div class="journal-container">
    <h1>Diario di Campagna</h1>
    <div v-if="activeId" class="journal-content">
      <div class="new-entry-box box">
        <h3>Aggiungi una nuova voce</h3>
        <textarea
          v-model="newEntryText"
          placeholder="Cosa è successo durante la sessione?"
        ></textarea>
        <button @click="addEntry">Aggiungi</button>
      </div>
      <div class="entries-list">
        <h3>Voci Precedenti</h3>
        <div v-for="entry in entries" :key="entry.id" class="entry-card box">
          <p class="entry-text">{{ entry.text }}</p>
          <div class="entry-meta">
            <span><strong>Autore:</strong> {{ entry.author }}</span>
            <span><strong>Data:</strong> {{ formatDate(entry.timestamp) }}</span>
          </div>
        </div>
        <p v-if="entries.length === 0" class="no-entries">
          Nessuna voce nel diario per questa avventura.
        </p>
      </div>
    </div>
    <div v-else class="no-adventure-selected">
      <p>Per usare il diario, seleziona prima un'avventura dalla pagina "Avventure".</p>
    </div>
  </div>
</template>

<style scoped>
.journal-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
  background-color: #fdfaf6;
  padding: 2rem;
  border-radius: 8px;
  border: 2px solid #bca789;
}
.box {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1.5rem;
  background-color: #fff;
  margin-bottom: 1.5rem;
}
h1 {
  text-align: center;
  font-family: serif;
  color: #5c3d03;
  border-bottom: 2px solid #bca789;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}
.new-entry-box textarea {
  width: 100%;
  min-height: 100px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 10px;
  font-family: sans-serif;
}
.new-entry-box button {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  display: block;
  width: 100%;
}
.entries-list h3 {
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 15px;
}
.entry-card {
  margin-bottom: 1rem;
}
.entry-text {
  white-space: pre-wrap;
  line-height: 1.6;
}
.entry-meta {
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px dotted #ccc;
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  color: #777;
}
.no-adventure-selected,
.no-entries {
  text-align: center;
  color: #888;
  font-style: italic;
  padding: 2rem;
}
</style>
