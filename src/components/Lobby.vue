<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@/stores/sessionStore'
import { db } from '@/firebaseConfig'
import { doc, onSnapshot } from 'firebase/firestore'

const router = useRouter()
const sessionStore = useSessionStore()
const activeSession = ref(null)
const isLoading = ref(true)
let sessionListener = null

function joinSession(sessionData) {
  sessionStore.setJoinedSession(sessionData)
  router.push(`/sessione/${sessionData.adventureId}`)
}

onMounted(() => {
  const sessionDocRef = doc(db, 'sessions', 'active_session')
  sessionListener = onSnapshot(sessionDocRef, (docSnap) => {
    if (docSnap.exists()) {
      activeSession.value = docSnap.data()
    } else {
      activeSession.value = null
    }
    isLoading.value = false
  })
})

onUnmounted(() => {
  if (sessionListener) sessionListener()
})
</script>

<template>
  <div class="lobby-container">
    <h1>Sessioni Attive</h1>
    <div v-if="isLoading" class="loading-message">
      <p>Ricerca di sessioni in corso...</p>
    </div>
    <div v-else>
      <div v-if="activeSession" class="session-card">
        <h3>{{ activeSession.adventureTitle }}</h3>
        <p>
          Partita gestita da: <strong>{{ activeSession.dmName }}</strong>
        </p>
        <button class="join-button" @click="joinSession(activeSession)">
          Partecipa alla Sessione
        </button>
      </div>
      <div v-else class="waiting-message">
        <p>Nessuna sessione attiva al momento. Attendi che il tuo DM avvii una partita!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Il tuo stile rimane invariato, è già perfetto */
.lobby-container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  color: #333;
  background-color: #fdfaf6;
  padding: 2rem;
  border-radius: 8px;
  border: 2px solid #bca789;
  text-align: center;
}
h1 {
  font-family: serif;
  color: #5c3d03;
  border-bottom: 2px solid #bca789;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}
.session-card {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 2rem;
  border-radius: 6px;
}
.session-card h3 {
  margin-top: 0;
}
.join-button {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 12px 24px;
  background-color: #27ae60;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.2s;
  cursor: pointer;
  border: none;
}
.join-button:hover {
  background-color: #2ecc71;
}
.loading-message,
.waiting-message {
  font-style: italic;
  color: #888;
  padding: 2rem;
}
</style>
