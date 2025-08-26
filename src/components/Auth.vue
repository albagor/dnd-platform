<script setup>
import { ref } from 'vue';
import { auth } from '@/firebaseConfig';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from 'firebase/auth';
import { useToast } from 'vue-toastification';

const toast = useToast();
const isRegister = ref(false);
const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    return toast.error("Per favore, inserisci email e password.");
  }
  try {
    if (isRegister.value) {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      toast.success("Registrazione avvenuta con successo! Ora puoi accedere.");
      isRegister.value = false; // Torna al login dopo la registrazione
    } else {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      toast.success("Accesso effettuato!");
      // Non serve reindirizzare, App.vue gestirà il cambio di stato
    }
  } catch (error) {
    switch (error.code) {
      case 'auth/invalid-email':
        toast.error("Formato email non valido.");
        break;
      case 'auth/user-not-found':
        toast.error("Nessun utente trovato con questa email.");
        break;
      case 'auth/wrong-password':
        toast.error("Password non corretta.");
        break;
      case 'auth/email-already-in-use':
        toast.error("Questa email è già stata registrata.");
        break;
      default:
        toast.error("Si è verificato un errore.");
    }
  }
};
</script>

<template>
  <div class="auth-container">
    <div class="auth-box">
      <h1>{{ isRegister ? 'Registrati' : 'Accedi' }}</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" placeholder="tua@email.com" id="email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" placeholder="••••••••" id="password">
        </div>
        <button type="submit">{{ isRegister ? 'Registrati' : 'Accedi' }}</button>
      </form>
      <p class="toggle-form">
        {{ isRegister ? 'Hai già un account?' : 'Non hai un account?' }}
        <a @click="isRegister = !isRegister">
          {{ isRegister ? 'Accedi' : 'Registrati' }}
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
}
.auth-box {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: #1a1a1a;
  border-radius: 8px;
  border: 1px solid #555;
}
h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #aaa;
}
input {
  width: 100%;
  padding: 0.75rem;
  background-color: #242424;
  border: 1px solid #555;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
}
button {
  width: 100%;
  padding: 0.75rem;
  background-color: #646cff;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}
.toggle-form {
  text-align: center;
  margin-top: 1.5rem;
  color: #aaa;
}
.toggle-form a {
  color: #646cff;
  cursor: pointer;
  text-decoration: underline;
}
</style>