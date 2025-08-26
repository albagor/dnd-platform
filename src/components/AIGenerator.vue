<script setup>
import { ref } from 'vue';
import { useAdventureStore } from '@/stores/adventureStore';
import { useToast } from 'vue-toastification';
import { fetchRealAIGeneration } from '@/services/aiService.js';

const adventureStore = useAdventureStore();
const toast = useToast();

const apiKey = ref('');
const prompt = ref('');
const generationType = ref('PNG');
const isLoading = ref(false);
const generatedItem = ref(null); // Conterrà l'oggetto JSON dall'IA

async function generateContent() {
  if (!prompt.value || !apiKey.value) {
    toast.error("Per favore, inserisci sia l'API Key che un'idea.");
    return;
  }
  isLoading.value = true;
  generatedItem.value = null;

  try {
    const result = await fetchRealAIGeneration(apiKey.value, prompt.value, generationType.value);
    generatedItem.value = result;
  } catch (error) {
    console.error("Errore durante la generazione IA:", error);
    toast.error(`Errore: ${error.message}`);
  } finally {
    isLoading.value = false;
  }
}

function addToAdventure() {
    if (!generatedItem.value) return;
    
    const sectionMap = { 'PNG': 'png', 'Mostro': 'mostri', 'Ambiente': 'ambienti', 'Tesoro': 'tesori' };
    const sectionId = sectionMap[generationType.value] || 'ambienti';

    // Passiamo l'oggetto generato direttamente allo store. Sarà lui a gestirlo.
    adventureStore.addAccordionItem(sectionId, generatedItem.value);
    
    toast.success(`"${generatedItem.value.name || generatedItem.value.title}" aggiunto alla sezione ${generationType.value}!`);
    generatedItem.value = null;
}

function getAbilityModifier(score) {
 const mod = Math.floor(((Number(score) || 10) - 10) / 2);
 return mod >= 0 ? `+${mod}` : mod;
}
</script>

<template>
  <div class="ai-generator-view">
    <h1>Generatore IA (Gemini API)</h1>
    <div class="api-key-box box">
        <label>La tua Gemini API Key</label>
        <input type="password" v-model="apiKey" placeholder="Incolla qui la tua nuova chiave API sicura">
    </div>

    <div class="generator-controls box">
      <div class="control-group">
        <label>1. Scegli cosa generare:</label>
        <div class="radio-group">
          <label><input type="radio" v-model="generationType" value="PNG"> PNG</label>
          <label><input type="radio" v-model="generationType" value="Mostro"> Mostro</label>
          <label><input type="radio" v-model="generationType" value="Ambiente"> Ambiente</label>
          <label><input type="radio" v-model="generationType" value="Tesoro"> Tesoro</label>
        </div>
      </div>
      <div class="control-group">
        <label>2. Inserisci la tua idea:</label>
        <input type="text" v-model="prompt" placeholder="Es. un golem fatto di libri dimenticati..." @keydown.enter="generateContent">
      </div>
      <button @click="generateContent" :disabled="isLoading || !prompt">
        {{ isLoading ? 'Sto generando...' : 'Genera' }}
      </button>
    </div>

    <div v-if="isLoading" class="loading-spinner"></div>

    <div v-if="generatedItem" class="generated-item box">
      <h3>Anteprima del Risultato</h3>
      
      <div class="item-content">
        <div v-if="generationType === 'Mostro' || generationType === 'PNG'" class="stat-block-preview">
            <div class="stat-block-header"><h3>{{ generatedItem.name }}</h3><span>{{ generatedItem.size }} {{ generatedItem.type }}, {{ generatedItem.alignment }}</span></div>
            <p class="stat-block-description">{{ generatedItem.description }}</p>
            <hr class="stat-block-divider">
            <div class="stat-block-core"><p><strong>CA:</strong> {{ generatedItem.ac }} ({{ generatedItem.ac_type }})</p><p><strong>PF:</strong> {{ generatedItem.hp }} ({{ generatedItem.hp_dice }})</p><p><strong>Velocità:</strong> {{ generatedItem.speed }}</p></div>
            <hr class="stat-block-divider">
            <div class="stat-block-abilities"><div v-for="(score, key) in generatedItem.ability_scores" :key="key"><strong>{{ key.toUpperCase() }}</strong><span>{{ score }} ({{ getAbilityModifier(score) }})</span></div></div>
        </div>
        <div v-else>
            <strong>{{ generatedItem.name }}</strong>
            <p v-if="generatedItem.shareNotes"><strong>Descrizione:</strong> {{ generatedItem.shareNotes }}</p>
            <p v-if="generatedItem.dmNotes"><strong>Note DM:</strong> {{ generatedItem.dmNotes }}</p>
        </div>
      </div>
      <button @click="addToAdventure" class="add-to-adventure-btn">Aggiungi all'Avventura</button>
    </div>
  </div>
</template>

<style scoped>
/* Gli stili sono stati adattati per la nuova anteprima */
.ai-generator-view { width: 100%; max-width: 800px; margin: 0 auto; padding: 2rem; }
.box { background-color: #2f2f2f; padding: 1.5rem; border-radius: 8px; margin-top: 1rem; }
.api-key-box { background-color: #4e4328; }
.api-key-box small { color: #ccc; font-size: 0.8em; margin-top: 5px; display: block; }
.generator-controls { display: flex; flex-direction: column; gap: 1.5rem; }
.control-group label { font-weight: bold; display: block; margin-bottom: 0.5rem; }
.radio-group { display: flex; gap: 1rem; flex-wrap: wrap; }
input[type="text"], input[type="password"] { width: 100%; background-color: #1a1a1a; color: white; border: 1px solid #555; padding: 0.5rem; border-radius: 4px; }
button { background-color: #646cff; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: bold; }
button:disabled { background-color: #444; cursor: not-allowed; }
.generated-item { margin-top: 2rem; }
.item-content { margin-bottom: 1rem; line-height: 1.6; }
.item-content p { margin: 0.5rem 0; }
.add-to-adventure-btn { background-color: #2ecc71; width: 100%; }
.loading-spinner {
    border: 4px solid #f3f3f3; border-top: 4px solid #646cff;
    border-radius: 50%; width: 40px; height: 40px;
    animation: spin 1s linear infinite; margin: 2rem auto;
}
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

/* Stili per la visualizzazione del blocco statistiche */
.stat-block-preview { font-family: serif; color: #e0e0e0; }
.stat-block-preview p { margin: 0.5em 0; }
.stat-block-header { color: #ff6b6b; }
.stat-block-header h3 { margin: 0; font-size: 1.5em; }
.stat-block-header span { font-style: italic; }
.stat-block-divider { border: none; border-top: 1px solid #ff6b6b; margin: 0.8em 0; }
.stat-block-abilities { display: flex; justify-content: space-around; text-align: center; gap: 10px; }
.stat-block-abilities div { display: flex; flex-direction: column; }
</style>