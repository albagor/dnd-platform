<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { db } from '@/firebaseConfig'
import { collection, onSnapshot, query } from 'firebase/firestore'

const route = useRoute()
const sharedItems = ref([])
const adventureId = route.params.adventureId // Prende l'ID dall'URL

let itemsListener = null

onMounted(() => {
  if (adventureId) {
    // Creiamo il percorso alla "lavagna pubblica" di questa specifica avventura
    const sharedContentRef = collection(db, 'adventures', adventureId, 'sharedContent')
    const q = query(sharedContentRef)

    // Ci mettiamo in ascolto in tempo reale di questa lavagna
    itemsListener = onSnapshot(q, (snapshot) => {
      sharedItems.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    })
  }
})

// Puliamo l'ascoltatore quando il giocatore lascia la pagina
onUnmounted(() => {
  if (itemsListener) itemsListener()
})
</script>

<template>
  <div class="player-view-container">
    <h1>Sessione di Gioco</h1>
    <div v-if="sharedItems.length > 0" class="shared-content-grid">
      <div v-for="item in sharedItems" :key="item.id" class="shared-item-card">
        <h3 v-if="item.name">{{ item.name }}</h3>
        <img
          v-if="item.type === 'immagine' || item.type === 'mappa'"
          :src="item.content"
          alt="Immagine condivisa"
          class="shared-image"
        />
        <p v-else class="shared-text" v-html="item.content"></p>
      </div>
    </div>
    <div v-else class="waiting-message">
      <p>In attesa che il Dungeon Master condivida qualcosa...</p>
    </div>
  </div>
</template>

<style scoped>
.player-view-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
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
.shared-content-grid {
  display: grid;
  gap: 1.5rem;
}
.shared-item-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}
.shared-item-card h3 {
  margin-top: 0;
  font-family: serif;
}
.shared-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.shared-text {
  white-space: pre-wrap; /* Mantiene la formattazione del testo */
  line-height: 1.6;
}
.waiting-message {
  text-align: center;
  color: #888;
  font-style: italic;
  padding: 3rem;
}
</style>
