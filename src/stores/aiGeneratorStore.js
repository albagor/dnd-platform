// src/stores/aiGeneratorStore.js
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAdventureStore } from '@/stores/adventureStore'
import { useToast } from 'vue-toastification'
import { fetchRealAIGeneration } from '@/services/aiService.js'

export const useAiGeneratorStore = defineStore('aiGenerator', () => {
  const adventureStore = useAdventureStore()
  const toast = useToast()

  // Stato che vogliamo conservare
  const apiKey = ref('')
  const prompt = ref('')
  const generationType = ref('PNG')
  const isLoading = ref(false)
  const generatedItem = ref(null)

  // Le funzioni ora diventano "azioni" dello store
  async function generateContent() {
    if (!prompt.value || !apiKey.value) {
      toast.error("Per favore, inserisci sia l'API Key che un'idea.")
      return
    }
    isLoading.value = true
    generatedItem.value = null

    try {
      const result = await fetchRealAIGeneration(apiKey.value, prompt.value, generationType.value)
      generatedItem.value = result
    } catch (error) {
      console.error('Errore durante la generazione IA:', error)
      toast.error(`Errore: ${error.message}`)
    } finally {
      isLoading.value = false
    }
  }

  function addToAdventure() {
    if (!generatedItem.value) return
    if (!adventureStore.activeAdventureId) {
      toast.error(
        "Per favore, seleziona un'avventura dalla pagina 'Avventure' prima di aggiungere un elemento.",
      )
      return
    }

    const sectionMap = { PNG: 'png', Mostro: 'mostri', Ambiente: 'ambienti', Tesoro: 'tesori' }
    const sectionId = sectionMap[generationType.value] || 'ambienti'

    adventureStore.addAccordionItem(sectionId, generatedItem.value)

    toast.success(
      `"${generatedItem.value.name || generatedItem.value.title}" aggiunto all'avventura attiva!`,
    )
    // Reset solo del risultato, non di prompt e API key
    generatedItem.value = null
  }

  return {
    apiKey,
    prompt,
    generationType,
    isLoading,
    generatedItem,
    generateContent,
    addToAdventure,
  }
})
