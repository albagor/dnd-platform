import { useDiceStore } from '@/stores/diceStore'
import { useToast } from 'vue-toastification'
import { computed } from 'vue'
import { useAdventureStore } from '@/stores/adventureStore'
import { useSessionStore } from '@/stores/sessionStore'
import { storeToRefs } from 'pinia'

export function useDiceRoller() {
  const diceStore = useDiceStore()
  const toast = useToast()

  // --- Logica per trovare l'ID dell'avventura attiva ---
  const adventureStore = useAdventureStore()
  const sessionStore = useSessionStore()
  const { activeAdventureId: dmAdventureId } = storeToRefs(adventureStore)
  const { joinedSession: playerSession } = storeToRefs(sessionStore)

  // Il computed property "intelligente" che trova l'ID corretto
  const activeAdventureId = computed(() => {
    if (dmAdventureId.value) return dmAdventureId.value
    if (playerSession.value && playerSession.value.adventureId)
      return playerSession.value.adventureId
    return null
  })

  const makeCheck = (checkName, modifier) => {
    // Controllo di sicurezza: se non c'è un'avventura attiva, avvisa e non fare nulla
    if (!activeAdventureId.value) {
      toast.error('Nessuna avventura attiva per registrare il tiro!')
      return
    }

    const d20Result = Math.floor(Math.random() * 20) + 1
    const total = d20Result + modifier

    const modifierString = modifier >= 0 ? `+ ${modifier}` : `- ${Math.abs(modifier)}`
    const description = `${checkName}: ${total} (d20: ${d20Result} ${modifierString})`

    toast.info(description, {
      timeout: 4000,
      icon: 'fas fa-dice-d20',
    })

    // Passa l'ID dell'avventura attiva allo store
    diceStore.addRoll(20, total, description, activeAdventureId.value)
  }

  return { makeCheck }
}
