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

// NUOVA COMPUTED per formattare le abilità
const formattedSkills = computed(() => {
  if (!props.monster || !props.monster.skills) return ''
  // Converte l'oggetto { "Arcano": 7, "Furtività": 4 } in una stringa "Arcano +7, Furtività +4"
  return Object.entries(props.monster.skills)
    .map(([skill, bonus]) => `${skill} ${bonus >= 0 ? '+' : ''}${bonus}`)
    .join(', ')
})

const formattedSpeed = computed(() => {
  if (typeof props.monster.speed === 'string') return props.monster.speed
  return props.monster.speed || ''
})

const formattedHpDice = computed(() => {
  if (props.monster.hp_dice) return `(${props.monster.hp_dice})`
  return ''
})

const formatOptionalArray = (value) => {
  if (Array.isArray(value)) return value.join(', ')
  return value || ''
}

// NUOVA FUNZIONE formatText più intelligente
const formatText = (dataBlock) => {
  if (!dataBlock) return ''

  // CASO 1: È un array di oggetti (dal Bestiario, come Tratti e Azioni)
  if (Array.isArray(dataBlock)) {
    return dataBlock
      .map((item) => {
        let content = `<p><strong>${item.name}.</strong> `
        // Se è un attacco dettagliato
        if (item.to_hit) {
          content += `<em>Attacco con Arma da ${item.type}:</em> ${item.to_hit >= 0 ? '+' : ''}${item.to_hit} al colpire, portata ${item.reach || item.range}. `
          content += `Colpito: ${item.damage} danni ${item.damage_type || ''}. `
        }
        content += `${item.desc || item.description || ''}</p>`
        return content
      })
      .join('')
  }

  // CASO 2: È una stringa di testo (dai mostri che crei tu)
  if (typeof dataBlock === 'string') {
    return dataBlock
      .split('\n')
      .filter((line) => line.trim() !== '')
      .map((line) => '<p>' + line.replace(/\*\*(.*?)\.\*\*/g, '<strong>$1.</strong>') + '</p>')
      .join('')
  }

  return ''
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
        <hr class="separator" v-if="monster.ability_scores" />
        <div class="details-section">
          <p v-if="monster.skills"><strong>Abilità:</strong> {{ formattedSkills }}</p>
          <p v-if="monster.senses">
            <strong>Sensi:</strong> {{ formatOptionalArray(monster.senses) }}
          </p>
          <p v-if="monster.languages">
            <strong>Linguaggi:</strong> {{ formatOptionalArray(monster.languages) }}
          </p>
          <p v-if="monster.challenge_rating">
            <strong>Grado Sfida:</strong> {{ monster.challenge_rating }}
          </p>
          <p v-if="monster.environment"><strong>Ambiente:</strong> {{ monster.environment }}</p>
        </div>
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
          <h3>Note del DM</h3>
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
.monster-image {
  width: 100%;
  max-height: 300px; /* Limita l'altezza massima */
  height: auto; /* Mantiene le proporzioni */
  object-fit: contain; /* Mostra l'intera immagine senza tagliarla o deformarla */
  object-position: center;
  border-radius: 6px;
  margin-bottom: 15px;
  background-color: #f0f0f0;
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
  background-image: linear-gradient(
    to right,
    rgba(188, 167, 137, 0),
    rgba(188, 167, 137, 0.75),
    rgba(188, 167, 137, 0)
  );
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
.details-section :deep(p) {
  margin: 8px 0;
  line-height: 1.5;
}
.details-section :deep(p > strong) {
  font-style: italic;
  font-weight: bold;
  color: #5c3d03;
}
.dm-notes {
  background-color: #fff8e1;
  padding: 10px;
  border-radius: 5px;
  border-left: 4px solid #f1c40f;
  font-style: italic;
}
</style>
