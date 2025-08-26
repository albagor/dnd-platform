import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDiceStore = defineStore('dice', () => {
  const diceHistory = ref([])
  const rollerType = ref('Giocatore') // Valore di default

  function addRoll(sides, result, description = '') {
    const newRoll = {
      result,
      sides,
      description, // Es. "TxC Spada Lunga" o "Danno Pugnale"
      id: Date.now(),
      roller: rollerType.value
    }
    diceHistory.value.unshift(newRoll)
  }
  
  return { diceHistory, rollerType, addRoll }
})