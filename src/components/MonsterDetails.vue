<script setup>
import { computed } from 'vue'

const props = defineProps({
  monster: { type: Object, required: true },
})
defineEmits(['close'])

const imageUrl = computed(() => {
  if (!props.monster) return null
  return props.monster.image_url || props.monster.imageUrl || null
})

const abilityModifiers = computed(() => {
  if (!props.monster || !props.monster.ability_scores) return {}
  const mods = {}
  for (const stat in props.monster.ability_scores) {
    const score = props.monster.ability_scores[stat]
    const mod = Math.floor((score - 10) / 2)
    mods[stat] = mod >= 0 ? `+${mod}` : `${mod}`
  }
  return mods
})

const formattedSpeed = computed(() => {
  if (typeof props.monster.speed === 'string' && props.monster.speed) {
    return props.monster.speed
      .split(',')
      .map((s) => s.trim())
      .join(', ')
  }
  return props.monster.speed || ''
})

const formattedHpDice = computed(() => {
  if (props.monster.hp_dice) {
    return `(${props.monster.hp_dice})`
  }
  return ''
})

const formatOptionalArray = (value) => {
  if (Array.isArray(value)) {
    return value.join(', ')
  }
  return value || ''
}

const formatText = (textBlock) => {
  if (!textBlock || typeof textBlock !== 'string') return ''
  return textBlock
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => {
      return '<p>' + line.replace(/\*\*(.*?)\.\*\*/g, '<strong>$1.</strong>') + '</p>'
    })
    .join('')
}
</script>

<template>
  <div class="monster-details-overlay" @click.self="$emit('close')">
    <div v-if="monster" class="monster-details-modal">
      <div class="bestiary-header">
        <h2>{{ monster.name }}</h2>
        <button @click="$emit('close')" class="close-btn">×</button>
      </div>
      <div class="monster-details-content">
        <img v-if="imageUrl" :src="imageUrl" class="monster-image" alt="Immagine creatura" />
        <p class="monster-meta">
          <span class="type-and-size">{{ monster.size }} {{ monster.type }}</span
          >,
          <span class="alignment">{{ monster.alignment }}</span>
        </p>
        <hr class="separator" />
        <div class="monster-stats">
          <p>
            <strong>Classe Armatura:</strong> {{ monster.ac }}
            <span v-if="monster.ac_type">({{ monster.ac_type }})</span>
          </p>
          <p><strong>Punti Ferita:</strong> {{ monster.hp }} {{ formattedHpDice }}</p>
          <p><strong>Velocità:</strong> {{ formattedSpeed }}</p>
        </div>
        <hr class="separator" />
        <div v-if="monster.ability_scores" class="ability-scores">
          <div>
            <strong>FOR</strong><br />{{ monster.ability_scores.str }} ({{ abilityModifiers.str }})
          </div>
          <div>
            <strong>DES</strong><br />{{ monster.ability_scores.dex }} ({{ abilityModifiers.dex }})
          </div>
          <div>
            <strong>COS</strong><br />{{ monster.ability_scores.con }} ({{ abilityModifiers.con }})
          </div>
          <div>
            <strong>INT</strong><br />{{ monster.ability_scores.int }} ({{ abilityModifiers.int }})
          </div>
          <div>
            <strong>SAG</strong><br />{{ monster.ability_scores.wis }} ({{ abilityModifiers.wis }})
          </div>
          <div>
            <strong>CAR</strong><br />{{ monster.ability_scores.cha }} ({{ abilityModifiers.cha }})
          </div>
        </div>
        <hr class="separator" />
        <div
          class="details-section"
          v-if="monster.skills || monster.senses || monster.languages || monster.challenge_rating"
        >
          <p v-if="monster.skills">
            <strong>Abilità:</strong> {{ formatOptionalArray(monster.skills) }}
          </p>
          <p v-if="monster.senses">
            <strong>Sensi:</strong> {{ formatOptionalArray(monster.senses) }}
          </p>
          <p v-if="monster.languages">
            <strong>Linguaggi:</strong> {{ formatOptionalArray(monster.languages) }}
          </p>
          <p v-if="monster.challenge_rating">
            <strong>Grado Sfida:</strong> {{ monster.challenge_rating }}
          </p>
        </div>
        <div
          v-if="monster.description && !monster.traits"
          class="details-section"
          v-html="formatText(monster.description)"
        ></div>
        <hr class="separator" v-if="monster.traits" />
        <div
          v-if="monster.traits"
          class="details-section"
          v-html="formatText(monster.traits)"
        ></div>
        <hr class="separator" v-if="monster.actions" />
        <div class="details-section" v-if="monster.actions">
          <h3>Azioni</h3>
          <div v-html="formatText(monster.actions)"></div>
        </div>
        <hr class="separator" v-if="monster.dm_prompt" />
        <div v-if="monster.dm_prompt" class="details-section dm-notes">
          <h3>Spunto per il DM</h3>
          <p>{{ monster.dm_prompt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.monster-details-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.monster-details-modal {
  width: 90%;
  max-width: 700px;
  max-height: 90vh;
  background-color: #fdfaf6;
  color: #333;
  border-radius: 8px;
  border: 2px solid #bca789;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
}
.bestiary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 2px solid #bca789;
}
.bestiary-header h2 {
  margin: 0;
  font-family: 'Times New Roman', serif;
}
.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #888;
}

.monster-details-content {
  overflow-y: auto;
  padding: 20px;
  font-family: 'Times New Roman', serif;
}

.monster-meta {
  font-style: italic;
  font-size: 1.1em;
  margin-top: 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #bca789;
}
.type-and-size {
  font-weight: bold;
}
.alignment {
  font-style: normal;
}

.separator {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, #ccc, #fdfaf6, #ccc);
  margin: 10px 0;
}

.monster-stats p {
  margin: 5px 0;
}

.ability-scores {
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 1.2em;
}
.ability-scores div {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  min-width: 60px;
}

.details-section {
  margin-top: 15px;
}

.details-section h3 {
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 5px;
  color: #a04000;
}

.trait-entry p,
.action-entry p {
  margin: 5px 0;
  line-height: 1.4;
}

.action-entry p strong {
  display: block;
  margin-bottom: 3px;
}
.monster-image {
  width: 100%;
  height: 300px; /* Altezza fissa per un layout prevedibile */
  object-fit: cover; /* Riempie lo spazio senza deformare l'immagine */
  border-radius: 6px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  background-color: #eee;
}
/* Aggiungi in fondo a <style scoped> di MonsterDetails.vue */
.dm-notes {
  background-color: #fff8e1;
  padding: 10px;
  border-radius: 5px;
  border-left: 4px solid #f1c40f;
  font-style: italic;
}
</style>
