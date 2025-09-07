// src/stores/sessionStore.js

// dnd-strumenti interattivi © 2025 Dario Pellitteri. All rights reserved.
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSessionStore = defineStore('session', () => {
  // Lo stato ora conterrà l'intero oggetto della sessione, o null.
  const joinedSession = ref(null)

  // Funzione per inizializzare lo store dal localStorage all'avvio dell'app
  function hydrateSession() {
    try {
      const savedSession = localStorage.getItem('activeAdventureSession')
      if (savedSession) {
        joinedSession.value = JSON.parse(savedSession)
      }
    } catch (e) {
      console.error('Impossibile caricare la sessione salvata.', e)
      localStorage.removeItem('activeAdventureSession')
    }
  }

  // Funzione per impostare una nuova sessione
  function setJoinedSession(sessionData) {
    if (!sessionData || !sessionData.adventureId) return
    joinedSession.value = sessionData
    localStorage.setItem('activeAdventureSession', JSON.stringify(sessionData))
  }

  // Funzione per pulire la sessione
  function clearSession() {
    joinedSession.value = null
    localStorage.removeItem('activeAdventureSession')
  }

  // Esegui l'idratazione non appena lo store viene creato
  hydrateSession()

  return { joinedSession, setJoinedSession, clearSession }
})
