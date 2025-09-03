<script setup>
import { ref } from 'vue'
import { auth, db } from '@/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useToast } from 'vue-toastification'
import { verifyDmCode } from '@/services/dmCodeService' // Importa la funzione

const toast = useToast()
const isRegister = ref(false)
const email = ref('')
const password = ref('')
const dmCode = ref('')

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    return toast.error('Per favore, inserisci email e password.')
  }
  try {
    if (isRegister.value) {
      // 1. Crea l'utente nell'Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
      const user = userCredential.user

      // 2. Verifica il codice DM su Firestore
      let role = 'Player'
      if (dmCode.value) {
        const isValidDm = await verifyDmCode(dmCode.value)
        role = isValidDm ? 'DM' : 'Player'
      }

      // 3. Crea il documento utente in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: role,
        createdAt: new Date(),
      })

      toast.success('Registrazione avvenuta con successo! Ora puoi accedere.')
      isRegister.value = false
    } else {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      toast.success('Accesso effettuato!')
    }
  } catch (error) {
    toast.error('Si è verificato un errore: ' + error.message)
  }
}
</script>

<template>
  <div class="auth-container">
    <div class="auth-box">
      <h1>{{ isRegister ? 'Registrati' : 'Accedi' }}</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" placeholder="tua@email.com" id="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" placeholder="••••••••" id="password" />
        </div>
        <div v-if="isRegister" class="form-group">
          <label for="dmCode">Codice DM (opzionale)</label>
          <input type="text" v-model="dmCode" id="dmCode" />
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
