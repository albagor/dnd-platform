<script setup>
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
          <RouterLink to="/">Scheda Personaggio</RouterLink>
          <RouterLink to="/dadi">Lancia-Dadi</RouterLink>

          <RouterLink v-if="userStore.isDM" to="/avventure">Avventure</RouterLink>

          <template v-else>
            <RouterLink
              v-if="sessionStore.joinedAdventureId"
              :to="`/sessione/${sessionStore.joinedAdventureId}`"
              >Sessione Attiva</RouterLink
            >
            <RouterLink v-else to="/lobby">Unisciti a una Sessione</RouterLink>
          </template>

          <RouterLink v-if="userStore.isDM" to="/generatore-ia">Generatore IA</RouterLink>
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
