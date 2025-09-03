// src/stores/sessionStore.js

// dnd-strumenti interattivi © 2025 Dario Pellitteri. All rights reserved.

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSessionStore = defineStore('session', () => {
  const joinedAdventureId = ref(null)

  function setJoinedAdventure(id) {
    joinedAdventureId.value = id
  }

  function clearSession() {
    joinedAdventureId.value = null
  }

  return { joinedAdventureId, setJoinedAdventure, clearSession }
})
