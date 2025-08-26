<script setup>
import { computed } from 'vue';

const props = defineProps({
  character: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close']);

// Funzione per calcolare il modificatore di un'abilità
const getAbilityModifier = (score) => {
  const mod = Math.floor(((Number(score) || 10) - 10) / 2);
  return mod >= 0 ? `+${mod}` : `${mod}`;
};
</script>

<template>
  <div class="stat-block-overlay" @click.self="$emit('close')">
    <div class="stat-block-modal">
      <div class="stat-block-header-bar">
        <h2>{{ character.name }}</h2>
        <button @click="$emit('close')" class="close-btn">×</button>
      </div>

      <div class="stat-block-content">
        <p class="stat-block-meta">
          <span class="type-and-size">{{ character.size }} {{ character.type }}</span>,
          <span class="alignment">{{ character.alignment }}</span>
        </p>

        <hr class="stat-block-separator"/>

        <div class="stat-block-info">
          <p><strong>Classe Armatura:</strong> {{ character.ac }}</p>
          <p><strong>Punti Ferita:</strong> {{ character.hp }} ({{ character.hp_dice }})</p>
          <p><strong>Velocità:</strong> {{ character.speed }}</p>
        </div>

        <hr class="stat-block-separator"/>
        
        <div class="stat-block-abilities">
          <div><strong>FOR</strong><br/>{{ character.ability_scores.str }} ({{ getAbilityModifier(character.ability_scores.str) }})</div>
          <div><strong>DES</strong><br/>{{ character.ability_scores.dex }} ({{ getAbilityModifier(character.ability_scores.dex) }})</div>
          <div><strong>COS</strong><br/>{{ character.ability_scores.con }} ({{ getAbilityModifier(character.ability_scores.con) }})</div>
          <div><strong>INT</strong><br/>{{ character.ability_scores.int }} ({{ getAbilityModifier(character.ability_scores.int) }})</div>
          <div><strong>SAG</strong><br/>{{ character.ability_scores.wis }} ({{ getAbilityModifier(character.ability_scores.wis) }})</div>
          <div><strong>CAR</strong><br/>{{ character.ability_scores.cha }} ({{ getAbilityModifier(character.ability_scores.cha) }})</div>
        </div>

        <hr class="stat-block-separator"/>

        <div v-if="character.traits" class="stat-block-details">
          <h3>Tratti</h3>
          <p>{{ character.traits }}</p>
        </div>
        
        <div v-if="character.actions" class="stat-block-details">
          <h3>Azioni</h3>
          <p>{{ character.actions }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.stat-block-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.stat-block-modal {
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  background-color: #fdfaf6;
  color: #333;
  border-radius: 8px;
  border: 2px solid #bca789;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
}
.stat-block-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 2px solid #bca789;
}
.stat-block-header-bar h2 { margin: 0; font-family: serif; }
.close-btn { background: none; border: none; font-size: 2rem; cursor: pointer; color: #888; }
.stat-block-content {
  overflow-y: auto;
  padding: 20px;
  font-family: serif;
}
.stat-block-meta {
  font-style: italic;
  font-size: 1.1em;
  margin: 0 0 10px 0;
}
.stat-block-separator {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, #ccc, #fdfaf6, #ccc);
  margin: 10px 0;
}
.stat-block-info p { margin: 5px 0; }
.stat-block-abilities {
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 1.2em;
}
.stat-block-abilities div {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  min-width: 60px;
}
.stat-block-details {
  margin-top: 15px;
}
</style>