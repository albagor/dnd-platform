<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { auth } from '@/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useToast } from 'vue-toastification';
import Auth from './components/Auth.vue';

const toast = useToast();
const isLoggedIn = ref(false);

// Controlla lo stato dell'utente al caricamento e ogni volta che cambia
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});

const handleLogout = async () => {
  try {
    await signOut(auth);
    toast.info("Sei stato disconnesso.");
  } catch (error) {
    toast.error("Errore durante il logout.");
  }
};
</script>

<template>
  <div v-if="isLoggedIn">
    <div id="app-layout">
      <header>
        <nav>
          <RouterLink to="/">Scheda Personaggio</RouterLink>
          <RouterLink to="/dadi">Lancia-Dadi</RouterLink>
          <RouterLink to="/avventure">Avventure</RouterLink>
          <RouterLink to="/generatore-ia">Generatore IA</RouterLink>
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
  align-items: center;
  gap: 1rem;
}
nav a {
  text-decoration: none;
  color: #aaa;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
}
nav a:hover {
  background-color: #333;
}
nav a.router-link-exact-active {
  color: white;
  background-color: #646cff;
}
.logout-btn {
  cursor: pointer;
  background-color: #520c0c;
}
.logout-btn:hover {
  background-color: #8b1515 !important;
}
main.responsive-layout {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  overflow-y: visible;
}
</style>