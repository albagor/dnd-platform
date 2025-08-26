// src/stores/uiStore.js

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  // Lo stato: l'interruttore per il Bestiario
  const isBestiaryOpen = ref(false)

  // L'azione per cambiare lo stato dell'interruttore
  function toggleBestiary(state) {
    isBestiaryOpen.value = state
  }

  return { isBestiaryOpen, toggleBestiary }
})