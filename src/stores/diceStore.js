// dnd-strumenti interattivi © 2025 Dario Pellitteri. All rights reserved.

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth, db } from '@/firebaseConfig'
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore' // Import serverTimestamp
import { useToast } from 'vue-toastification'

export const useDiceStore = defineStore('dice', () => {
  const diceHistory = ref([])
  const rollerType = ref('Giocatore') // Manteniamo la selezione DM/Giocatore
  const toast = useToast()
  let historyListener = null

  // MODIFICATA: Ora accetta l'ID dell'avventura come argomento
  function subscribeToHistory(adventureId) {
    if (historyListener) {
      historyListener() // Ferma l'ascoltatore precedente
    }

    if (!adventureId) {
      diceHistory.value = [] // Se non c'è avventura, la cronologia è vuota
      return
    }

    // La query ora filtra i tiri per l'ID della sessione attiva
    const q = query(
      collection(db, 'diceRolls'),
      where('sessionId', '==', adventureId),
      orderBy('timestamp', 'desc'),
    )
    historyListener = onSnapshot(q, (snapshot) => {
      diceHistory.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    })
  }

  // MODIFICATA: Ora accetta l'ID dell'avventura (sessionId) come argomento
  async function addRoll(sides, result, description = '', sessionId) {
    if (!auth.currentUser) return

    // Il controllo ora viene fatto nel componente, ma lo teniamo per sicurezza
    if (!sessionId) {
      toast.error('Nessuna sessione attiva per salvare il tiro!')
      return
    }

    const newRoll = {
      result,
      sides,
      description,
      roller: rollerType.value,
      userId: auth.currentUser.uid,
      userName: auth.currentUser.email || 'Utente', // Usiamo email come fallback
      timestamp: serverTimestamp(), // Usiamo il timestamp del server per un ordine corretto
      sessionId: sessionId, // L'ID dell'avventura a cui appartiene il tiro
    }

    try {
      await addDoc(collection(db, 'diceRolls'), newRoll)
    } catch (error) {
      console.error('Errore nel salvataggio del tiro:', error)
      toast.error('Impossibile salvare il tiro.')
    }
  }

  function clearStore() {
    if (historyListener) historyListener()
    diceHistory.value = []
  }

  return { diceHistory, rollerType, addRoll, subscribeToHistory, clearStore }
})
