<script setup>
import { useDiceStore } from '@/stores/diceStore'
import { useAdventureStore } from '@/stores/adventureStore'
import { useSessionStore } from '@/stores/sessionStore'
import { computed, onMounted, ref, watch } from 'vue'
import { auth } from '@/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toastification' // <-- RIGA MANCANTE, AGGIUNTA QUI

const diceStore = useDiceStore()
const adventureStore = useAdventureStore()
const sessionStore = useSessionStore()
const toast = useToast() // Inizializza il toast una volta sola

const { activeAdventureId: dmAdventureId } = storeToRefs(adventureStore)
const { joinedSession: playerSession } = storeToRefs(sessionStore)

const activeAdventureId = computed(() => {
  if (dmAdventureId.value) return dmAdventureId.value
  if (playerSession.value && playerSession.value.adventureId) return playerSession.value.adventureId
  return null
})

const isUserReady = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isUserReady.value = !!user
  })
  diceStore.subscribeToHistory(activeAdventureId.value)
})

watch(activeAdventureId, (newId) => {
  diceStore.subscribeToHistory(newId)
})

const lastResult = computed(() => {
  return diceStore.diceHistory.length > 0 ? diceStore.diceHistory[0] : null
})

function rollDice(sides) {
  if (!isUserReady.value) {
    toast.error('Devi essere autenticato per tirare i dadi!')
    return
  }
  if (!activeAdventureId.value) {
    toast.error("Seleziona un'avventura per salvare i tiri.")
    return
  }

  const result = Math.floor(Math.random() * sides) + 1
  diceStore.addRoll(sides, result, `Tiro d${sides}`, activeAdventureId.value)
}
</script>

<template>
  <div>
    <div class="roller-selector">
      <label>
        <input type="radio" value="Master" v-model="diceStore.rollerType" />
        Tiro del Master
      </label>
      <label>
        <input type="radio" value="Giocatore" v-model="diceStore.rollerType" />
        Tiro del Giocatore
      </label>
    </div>

    <h2>Ultimo Risultato: {{ lastResult ? lastResult.result : '...' }}</h2>

    <div class="dice-tray">
      <button @click="rollDice(4)" :disabled="!isUserReady">Tira un d4</button>
      <button @click="rollDice(6)" :disabled="!isUserReady">Tira un d6</button>
      <button @click="rollDice(8)" :disabled="!isUserReady">Tira un d8</button>
      <button @click="rollDice(10)" :disabled="!isUserReady">Tira un d10</button>
      <button @click="rollDice(12)" :disabled="!isUserReady">Tira un d12</button>
      <button @click="rollDice(20)" :disabled="!isUserReady">Tira un d20</button>
      <button @click="rollDice(100)" :disabled="!isUserReady">Tira un d100</button>
      <span v-if="!isUserReady" style="color: #ff5555; margin-left: 1rem"
        >Effettua il login per tirare i dadi!</span
      >
    </div>

    <div class="history">
      <h3>Cronologia</h3>
      <ul>
        <li
          v-for="roll in diceStore.diceHistory"
          :key="roll.id"
          :class="{
            'master-roll': roll.roller === 'Master',
            'player-roll': roll.roller === 'Giocatore',
          }"
        >
          {{ roll.roller }}: {{ roll.description }}: <strong>{{ roll.result }}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Gli stili rimangono invariati */
.roller-selector {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.dice-tray {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid #646cff;
  background-color: transparent;
  color: #646cff;
  border-radius: 8px;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #535bf2;
}
.history {
  margin-top: 2rem;
  width: 300px;
  margin-inline: auto;
  text-align: left;
}
.history ul {
  list-style: none;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 0.5rem;
}
.history li {
  padding: 0.5rem;
  border-bottom: 1px solid #333;
  margin-bottom: 0.25rem;
  border-radius: 4px;
}
.history li:last-child {
  border-bottom: none;
  margin-bottom: 0;
}
.history li.master-roll {
  background-color: #3a2c41;
  border-left: 3px solid #8e44ad;
}
.history li.player-roll {
  background-color: #2c3e50;
  border-left: 3px solid #3498db;
}
</style>
