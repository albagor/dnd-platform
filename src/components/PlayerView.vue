<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { db, auth } from '@/firebaseConfig'
import { collection, onSnapshot, query, doc, setDoc } from 'firebase/firestore'

const route = useRoute()
const router = useRouter()

const isSessionActive = ref(false)
const sharedItems = ref([])
const errorMessage = ref('')

let sessionListener = null
let itemsListener = null

function cleanupListener() {
  if (itemsListener) itemsListener()
  itemsListener = null
}

onMounted(() => {
  const adventureIdFromUrl = route.params.adventureId
  if (!adventureIdFromUrl || adventureIdFromUrl === 'null') {
    router.push('/lobby')
    return
  }

  const sessionDocRef = doc(db, 'sessions', 'active_session')
  sessionListener = onSnapshot(sessionDocRef, async (docSnap) => {
    if (docSnap.exists() && docSnap.data().adventureId === adventureIdFromUrl) {
      if (!isSessionActive.value) {
        isSessionActive.value = true
        localStorage.setItem('activeAdventureSession', JSON.stringify(docSnap.data()))

        if (auth.currentUser) {
          const userId = auth.currentUser.uid
          const playerDocRef = doc(db, 'adventures', adventureIdFromUrl, 'players', userId)
          try {
            await setDoc(
              playerDocRef,
              { playerId: userId, playerName: auth.currentUser.email || 'Giocatore' },
              { merge: true },
            )

            const sharedContentRef = collection(
              db,
              'adventures',
              adventureIdFromUrl,
              'sharedContent',
            )
            itemsListener = onSnapshot(sharedContentRef, (snapshot) => {
              sharedItems.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            })
          } catch (error) {
            console.error('Errore di permessi:', error)
            errorMessage.value = 'Errore di permessi durante la connessione.'
            cleanupListener()
          }
        }
      }
    } else {
      isSessionActive.value = false
      cleanupListener()
      localStorage.removeItem('activeAdventureSession')
    }
  })
})

onUnmounted(() => {
  if (sessionListener) sessionListener()
  cleanupListener()
})
</script>

<template>
  <div class="player-view-container">
    <h1>Sessione di Gioco</h1>
    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
    <div v-else>
      <div v-if="isSessionActive">
        <div v-if="sharedItems.length > 0" class="shared-content-grid">
          <div v-for="item in sharedItems" :key="item.id" class="shared-item-card">
            <h3 v-if="item.name">{{ item.name }}</h3>
            <img
              v-if="item.type === 'immagine' || item.type === 'mappa'"
              :src="item.content"
              alt="Immagine condivisa"
              class="shared-image"
            />
            <div v-else class="shared-text" v-html="item.content"></div>
          </div>
        </div>
        <div v-else class="waiting-message">
          <p>Sessione attiva! In attesa che il Dungeon Master condivida qualcosa...</p>
        </div>
      </div>
      <div v-else class="waiting-message">
        <p>In attesa che il Dungeon Master avvii la sessione...</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.player-view-container {
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
  color: #333;
  background-color: #fdfaf6;
  padding: 2rem;
  border-radius: 8px;
  border: 2px solid #bca789;
}
h1 {
  text-align: center;
  font-family: serif;
  color: #5c3d03;
  border-bottom: 2px solid #bca789;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}
.shared-content-grid,
.journal-section {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.shared-item-card,
.journal-entry {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}
.shared-item-card h3,
.journal-section h2 {
  margin-top: 0;
  font-family: serif;
  color: #5c3d03;
}
.shared-image {
  max-width: 100%;
  border-radius: 4px;
}
.shared-text,
.journal-entry :deep(p) {
  white-space: pre-wrap;
  line-height: 1.6;
}
.waiting-message {
  text-align: center;
  color: #888;
  font-style: italic;
  padding: 3rem;
}
.error-message {
  color: #b71c1c;
  background: #fff3f3;
  border: 1px solid #b71c1c;
  padding: 1rem;
  border-radius: 6px;
}
</style>
