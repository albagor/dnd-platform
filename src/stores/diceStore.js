import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth, db } from '@/firebaseConfig'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { useToast } from 'vue-toastification'

export const useDiceStore = defineStore('dice', () => {
  const diceHistory = ref([])
  const rollerType = ref('Giocatore') // La tua funzionalità viene mantenuta
  const toast = useToast()
  let historyListener = null

  // Si abbona alla cronologia dell'utente loggato
  function subscribeToHistory() {
    if (!auth.currentUser) return

    const userId = auth.currentUser.uid
    const docRef = doc(db, 'diceHistories', userId)

    historyListener = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        diceHistory.value = docSnap.data().history || []
      } else {
        diceHistory.value = []
      }
    })
  }

  // Pulisce tutto al logout
  function clearStore() {
    if (historyListener) {
      historyListener()
      historyListener = null
    }
    diceHistory.value = []
  }

  // Aggiunge un tiro e salva su Firestore
  async function addRoll(sides, result, description = '') {
    if (!auth.currentUser) return

    const newRoll = {
      result,
      sides,
      description,
      id: Date.now(),
      roller: rollerType.value, // Manteniamo il tipo di tiratore
    }

    const updatedHistory = [newRoll, ...diceHistory.value]

    if (updatedHistory.length > 50) {
      updatedHistory.pop()
    }

    diceHistory.value = updatedHistory // Aggiorna subito la UI

    const userId = auth.currentUser.uid
    const docRef = doc(db, 'diceHistories', userId)
    try {
      await setDoc(docRef, { history: updatedHistory })
    } catch (error) {
      console.error('Errore nel salvataggio della cronologia:', error)
      toast.error('Impossibile salvare il tiro.')
    }
  }

  return { diceHistory, rollerType, addRoll, subscribeToHistory, clearStore }
})
