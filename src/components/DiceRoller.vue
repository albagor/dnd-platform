<script setup>
import { useDiceStore } from '@/stores/diceStore'
import { computed, onMounted, onUnmounted } from 'vue'

const diceStore = useDiceStore()

const lastResult = computed(() => {
  return diceStore.diceHistory.length > 0 ? diceStore.diceHistory[0] : null
})

function rollDice(sides) {
  const result = Math.floor(Math.random() * sides) + 1
  diceStore.addRoll(sides, result, `Tiro d${sides}`)
}

onMounted(() => {
  diceStore.subscribeToHistory()
})
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
      <button @click="rollDice(4)">Tira un d4</button>
      <button @click="rollDice(6)">Tira un d6</button>
      <button @click="rollDice(8)">Tira un d8</button>
      <button @click="rollDice(10)">Tira un d10</button>
      <button @click="rollDice(12)">Tira un d12</button>
      <button @click="rollDice(20)">Tira un d20</button>
      <button @click="rollDice(100)">Tira un d100</button>
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
