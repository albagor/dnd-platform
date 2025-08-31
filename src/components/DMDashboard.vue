/* src/components/DMDashboard.vue */

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { db } from '@/firebaseConfig'
// IMPORT CORRETTI PER FIRESTORE
import { collection, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { useToast } from 'vue-toastification' // <-- IMPORT MANCANTE

const players = ref([])
const isLoading = ref(true)
const router = useRouter()
const toast = useToast() // <-- INIZIALIZZAZIONE MANCANTE

onMounted(async () => {
  try {
    const q = query(collection(db, 'users'), where('role', '==', 'Player'))
    const querySnapshot = await getDocs(q)
    players.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      email: doc.data().email,
    }))
  } catch (error) {
    console.error('Errore nel caricare la lista dei giocatori:', error)
  } finally {
    isLoading.value = false
  }
})

function openPlayerSheet(playerId) {
  console.log('Apro la scheda per ID:', playerId)
  router.push({ path: '/', query: { charId: playerId } })
}

async function deletePlayer(playerId, playerEmail) {
  if (
    confirm(
      `Sei sicuro di voler eliminare TUTTI I DATI per il giocatore ${playerEmail}? Verrà cancellata la sua scheda personaggio e il suo profilo utente. L'azione è irreversibile.`,
    )
  ) {
    try {
      // Cancella la scheda personaggio
      const characterSheetRef = doc(db, 'characterSheets', playerId)
      await deleteDoc(characterSheetRef)

      // Cancella il documento utente
      const userDocRef = doc(db, 'users', playerId)
      await deleteDoc(userDocRef)

      // Rimuovi il giocatore dalla lista locale per aggiornare la UI
      players.value = players.value.filter((p) => p.id !== playerId)

      toast.success(`I dati del giocatore ${playerEmail} sono stati eliminati.`)
    } catch (error) {
      toast.error("Errore durante l'eliminazione dei dati del giocatore.")
      console.error('Errore eliminazione:', error)
    }
  }
}
</script>

<template>
  <div class="dm-dashboard">
    <h1>Cruscotto Dungeon Master</h1>
    <div class="dashboard-section box">
      <h2>Gestione Giocatori</h2>
      <p>Clicca su un giocatore per visualizzare o modificare la sua scheda personaggio.</p>
      <div v-if="isLoading" class="loading-message">Caricamento giocatori...</div>
      <div v-else-if="players.length > 0" class="player-list">
        <div v-for="player in players" :key="player.id" class="player-card">
          <div class="player-info" @click="openPlayerSheet(player.id)">
            <span class="player-email">{{ player.email }}</span>
            <span class="arrow-icon">→</span>
          </div>
          <button
            @click.stop="deletePlayer(player.id, player.email)"
            class="delete-btn"
            title="Elimina Dati Giocatore"
          >
            🗑️
          </button>
        </div>
      </div>
      <div v-else class="no-players-message">Nessun giocatore si è ancora registrato.</div>
    </div>
  </div>
</template>

<style scoped>
.dm-dashboard {
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
}
h1 {
  text-align: center;
  font-family: serif;
  color: #5c3d03;
  border-bottom: 2px solid #bca789;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}
h2 {
  margin-top: 0;
}
.player-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1rem;
}
.player-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}
.player-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.player-email {
  font-weight: bold;
}
.arrow-icon {
  font-size: 1.5em;
  color: #6c757d;
}
.loading-message,
.no-players-message {
  text-align: center;
  font-style: italic;
  color: #888;
  padding: 2rem;
}
</style>
