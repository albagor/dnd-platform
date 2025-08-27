// src/stores/userStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { db } from '@/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

export const useUserStore = defineStore('user', () => {
  const user = ref(null) // Conterrà i dati dell'utente da Firestore (incluso il ruolo)

  const isDM = computed(() => user.value?.role === 'DM')

  async function fetchUser(firebaseUser) {
    if (!firebaseUser) {
      user.value = null
      return
    }

    const userDocRef = doc(db, 'users', firebaseUser.uid)
    const docSnap = await getDoc(userDocRef)

    if (docSnap.exists()) {
      user.value = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        ...docSnap.data(), // Aggiunge il ruolo e altri dati salvati
      }
    } else {
      // Questo non dovrebbe accadere se la registrazione funziona, ma è una sicurezza
      console.error('Documento utente non trovato in Firestore!')
      user.value = { uid: firebaseUser.uid, email: firebaseUser.email, role: 'Player' }
    }
  }

  function clearUser() {
    user.value = null
  }

  return { user, isDM, fetchUser, clearUser }
})
