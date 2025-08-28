// src/stores/userStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { db } from '@/firebaseConfig'
import { doc, getDoc, setDoc } from 'firebase/firestore' // Aggiunto setDoc

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

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
        ...docSnap.data(),
      }
    } else {
      // --- INIZIO CORREZIONE ---
      // Se l'utente è loggato ma non ha un documento, lo creiamo per lui
      console.warn("Documento utente non trovato, ne creo uno nuovo con ruolo 'Player'.")
      const newUserDoc = {
        email: firebaseUser.email,
        role: 'Player',
        createdAt: new Date(),
      }
      // Salviamo il nuovo documento nel database
      await setDoc(userDocRef, newUserDoc)
      // Aggiorniamo lo stato locale con i dati appena creati
      user.value = { uid: firebaseUser.uid, ...newUserDoc }
      // --- FINE CORREZIONE ---
    }
  }

  function clearUser() {
    user.value = null
  }

  return { user, isDM, fetchUser, clearUser }
})
