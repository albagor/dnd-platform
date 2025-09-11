<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { db, auth } from '@/firebaseConfig'
import { useToast } from 'vue-toastification'
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore'

const router = useRouter()
const toast = useToast()
const characters = ref([])
const isLoading = ref(true)
let charactersListener = null

onMounted(() => {
  if (auth.currentUser) {
    const q = query(collection(db, 'characterSheets'), where('ownerId', '==', auth.currentUser.uid))
    charactersListener = onSnapshot(q, (snapshot) => {
      characters.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      isLoading.value = false
    })
  } else {
    isLoading.value = false
  }
})

onUnmounted(() => {
  if (charactersListener) charactersListener()
})

// Funzione per selezionare un personaggio esistente
function selectCharacter(characterId) {
  // Passiamo il nome della rotta 'scheda' e l'ID come parametro dinamico 'id'
  // Vue Router costruirà l'URL corretto: /personaggio/l'IDdelpersonaggio
  router.push({ name: 'scheda', params: { id: characterId } })
}

function createNewCharacter() {
  // Passiamo il nome della rotta 'scheda' e 'new' come parametro 'id'
  // Vue Router costruirà l'URL corretto: /personaggio/new
  router.push({ name: 'scheda', params: { id: 'new' } })
}

async function deleteCharacter(characterId) {
  if (confirm('Sei sicuro di voler eliminare questa scheda? Non potrai più recuperarla!')) {
    try {
      await deleteDoc(doc(db, 'characterSheets', characterId))
      toast.success('Scheda personaggio eliminata.')
    } catch (error) {
      console.error("Errore durante l'eliminazione della scheda:", error)
      toast.error("Errore durante l'eliminazione della scheda. Controlla i permessi.")
    }
  }
}

async function migrateOldSheet() {
  const user = auth.currentUser
  if (!user) {
    toast.error('Devi essere loggato per eseguire la migrazione.')
    return
  }

  const userId = user.uid
  const oldDocRef = doc(db, 'characterSheets', userId)

  try {
    toast.info('Ricerca della vecchia scheda in corso...')
    const oldDocSnap = await getDoc(oldDocRef)

    if (!oldDocSnap.exists()) {
      toast.info('Nessuna vecchia scheda da migrare trovata per questo utente.')
      return
    }

    toast.info('Vecchia scheda trovata! Inizio la migrazione...')
    const oldData = oldDocSnap.data()

    const newDocRef = doc(collection(db, 'characterSheets'))

    const newData = {
      ...oldData,
      ownerId: userId,
    }

    await setDoc(newDocRef, newData)
    toast.success(`Scheda migrata con successo!`)

    await deleteDoc(oldDocRef)
    toast.info(`Vecchia scheda eliminata.`)
  } catch (error) {
    console.error('ERRORE DURANTE LA MIGRAZIONE:', error)
    toast.error('Errore durante la migrazione. Controlla la console.')
  }
}
</script>

<template>
  <div class="selection-container">
    <h1>I Tuoi Personaggi</h1>
    <div v-if="isLoading" class="loading-state">
      <p>Caricamento dei personaggi...</p>
    </div>
    <div v-else>
      <div v-if="characters.length > 0" class="characters-grid">
        <div
          v-for="char in characters"
          :key="char.id"
          class="char-card"
          @click="selectCharacter(char.id)"
        >
          <img
            :src="char.header?.appearance?.imageUrl || '/default-avatar.png'"
            alt="Ritratto"
            class="char-avatar"
          />
          <div class="char-info">
            <h3 class="char-name">{{ char.header?.name || 'Senza Nome' }}</h3>
            <p class="char-details">
              {{ char.header?.race || 'Razza non definita' }} -
              {{ char.header?.classes?.[0]?.name || 'Classe non definita' }}
              (Liv. {{ char.header?.classes?.reduce((acc, c) => acc + (c.level || 0), 0) || 1 }})
            </p>
          </div>
          <button @click.stop="deleteCharacter(char.id)" class="btn-delete">Elimina</button>
        </div>
      </div>
      <div v-else class="empty-state">
        <p>Non hai ancora creato nessun personaggio.</p>
      </div>
      <div class="actions">
        <button @click="createNewCharacter" class="btn-create">+ Crea Nuovo Personaggio</button>
        <button @click="migrateOldSheet" class="btn-migrate">
          MIGRA VECCHIA SCHEDA (usa una volta sola)
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.selection-container {
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
.loading-state,
.empty-state {
  text-align: center;
  font-style: italic;
  color: #888;
  padding: 3rem;
}
.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
.char-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.char-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
.char-avatar {
  width: 100%;
  height: 150px;
  object-fit: cover;
  background-color: #e0e0e0;
}
.char-info {
  padding: 1rem;
}
.char-name {
  margin: 0 0 0.5rem 0;
  font-family: serif;
}
.char-details {
  margin: 0;
  font-size: 0.9em;
  color: #666;
}
.actions {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}
.btn-create {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1.1em;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-create:hover {
  background-color: #2ecc71;
}
.btn-migrate {
  background-color: #e67e22; /* Arancione per distinguerlo */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 0.9em;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  transition: background-color 0.2s;
}
.btn-migrate:hover {
  background-color: #d35400;
}
</style>
