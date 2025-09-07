<script setup>
// dnd-strumenti interattivi © 2025 Dario Pellitteri. All rights reserved.

import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { auth } from '@/firebaseConfig'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useToast } from 'vue-toastification'
import Auth from './components/Auth.vue'
import { useUserStore } from './stores/userStore'
import { useAdventureStore } from './stores/adventureStore'
import { useDiceStore } from './stores/diceStore'
import { useAiGeneratorStore } from './stores/aiGeneratorStore'
import { useSessionStore } from './stores/sessionStore' // Importa la memoria di sessione

const toast = useToast()
const isLoggedIn = ref(false)
const userStore = useUserStore()
const adventureStore = useAdventureStore()
const diceStore = useDiceStore()
const aiGeneratorStore = useAiGeneratorStore()
const sessionStore = useSessionStore() // Attiva la memoria

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    console.log('DEBUG - onAuthStateChanged:', user)
    isLoggedIn.value = !!user
    if (user) {
      userStore.fetchUser(user)
    } else {
      userStore.clearUser()
      adventureStore.clearStore()
      diceStore.clearStore()
      aiGeneratorStore.generatedItem = null
      sessionStore.clearSession() // Pulisce la memoria di sessione al logout
    }
  })
})

const handleLogout = async () => {
  try {
    await signOut(auth)
    toast.info('Sei stato disconnesso.')
  } catch (error) {
    toast.error('Errore durante il logout.')
  }
}
</script>

<template>
  <div v-if="isLoggedIn">
    <div id="app-layout">
      <header>
        <nav>
          <RouterLink v-if="userStore.isDM" to="/dashboard">Cruscotto PG</RouterLink>
          <RouterLink v-else to="/">Scheda Personaggio</RouterLink>

          <RouterLink to="/dadi">Lancia-Dadi</RouterLink>
          <RouterLink to="/diario">Diario</RouterLink>

          <template v-if="userStore.isDM">
            <RouterLink to="/avventure">Avventure</RouterLink>
            <RouterLink to="/generatore-ia">Generatore IA</RouterLink>
            <RouterLink to="/compendio">Compendio DM</RouterLink>
          </template>

          <template v-else>
            <RouterLink
              v-if="sessionStore.joinedSession"
              :to="`/sessione/${sessionStore.joinedSession.adventureId}`"
            >
              Torna alla Sessione
            </RouterLink>
            <RouterLink v-else to="/lobby">Unisciti a Sessione</RouterLink>
          </template>
          <a @click="handleLogout" class="logout-btn">Logout</a>
        </nav>
      </header>
      <main class="responsive-layout">
        <RouterView />
      </main>
    </div>
  </div>
  <div v-else>
    <Auth />
  </div>
</template>

<style>
/* Stili globali per l'intera applicazione */
body {
  background-color: #242424;
  color: white;
  font-family: sans-serif;
  margin: 0;
  min-height: 100vh;
}

#app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #1a1a1a;
  border-bottom: 1px solid #555;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap; /* Permette ai link di andare a capo su schermi piccoli */
}

nav a {
  text-decoration: none;
  color: #aaa;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

nav a:hover {
  background-color: #333;
}

nav a.router-link-exact-active {
  color: white;
  background-color: #646cff;
}

main.responsive-layout {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  overflow-y: visible;
}

/* --- INIZIO REGOLE RESPONSIVE --- */
@media (max-width: 768px) {
  main.responsive-layout {
    padding: 1rem; /* Riduciamo il padding su mobile */
  }
  nav a {
    font-size: 1rem; /* Riduciamo la dimensione del testo dei link */
    padding: 0.4rem 0.8rem;
  }
}
/* --- FINE REGOLE RESPONSIVE --- */
</style>

<style>
/* N.B. SENZA "scoped" */

.character-image {
  width: 100%;
  height: 250px; /* Altezza fissa per la cornice */
  object-fit: cover; /* L'immagine riempie la cornice senza deformarsi */
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f0f0f0;
}
.image-placeholder {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #ccc;
  border-radius: 8px;
  color: #aaa;
}

/* Stile globale per il pulsante di upload */
.upload-btn {
  background-color: #3498db;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: bold;
  display: inline-block;
  margin-top: 5px;
  border: none;
}
.upload-btn:hover {
  background-color: #2980b9;
}

/* Stile globale per le anteprime delle immagini caricate */
/* Stile globale DEFINITIVO per tutte le anteprime delle immagini */
.character-image,
.monster-editor-image,
.item-image,
.monster-image {
  width: 100%; /* Occupa tutta la larghezza del suo contenitore */
  height: 250px; /* Altezza fissa per un layout uniforme */
  object-fit: cover; /* Riempie lo spazio senza deformare, tagliando l'eccesso */
  object-position: center; /* Assicura che l'immagine sia centrata prima di tagliarla */
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #f0f0f0;
  display: block; /* Evita spazi extra sotto l'immagine */
  margin-bottom: 10px; /* Aggiunge un po' di spazio sotto */
}

/* Stile globale per i link dinamici nel testo */
.linked-item {
  background-color: #e3f2fd;
  color: #0d47a1;
  padding: 2px 4px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}
.linked-item:hover {
  background-color: #bbdefb;
}
</style>
