<script setup>
const props = defineProps({
  spellData: {
    type: Object,
    required: true
  }
})

const abilityTranslations = {
    'Saggezza': 'WIS',
    'Intelligenza': 'INT',
    'Carisma': 'CHA'
}
</script>

<template>
  <div class="spell-sheet box">
    <h4>Incantesimi</h4>
    <div class="spell-stats">
      <div class="stat-box">
        <label>Caratteristica</label>
        <span>{{ abilityTranslations[spellData.ability] || spellData.ability }}</span>
      </div>
      <div class="stat-box">
        <label>CD Tiro Salvezza</label>
        <span>{{ spellData.saveDC }}</span>
      </div>
      <div class="stat-box">
        <label>Bonus Attacco</label>
        <span>+{{ spellData.attackBonus }}</span>
      </div>
    </div>
    
    <div class="spell-list">
        <h5>Trucchetti</h5>
        <ul>
            <li v-for="spell in spellData.spells.cantrips" :key="spell">{{ spell }}</li>
        </ul>
        <h5>Livello 1 (Slot: {{ spellData.slots.level1.used }} / {{ spellData.slots.level1.total }})</h5>
        <ul>
            <li v-for="spell in spellData.spells.level1" :key="spell.name" :class="{ prepared: spell.prepared }">
                {{ spell.name }}
            </li>
        </ul>
        <h5>Livello 2 (Slot: {{ spellData.slots.level2.used }} / {{ spellData.slots.level2.total }})</h5>
        <ul>
            <li v-for="spell in spellData.spells.level2" :key="spell.name" :class="{ prepared: spell.prepared }">
                {{ spell.name }}
            </li>
        </ul>
    </div>
  </div>
</template>

<style scoped>
.spell-sheet { border: 2px solid #ddd; border-radius: 8px; padding: 10px; margin-top: 15px; }
.box { border: 2px solid #ddd; border-radius: 8px; padding: 10px; margin-bottom: 10px; }
h4, h5 { text-align: center; margin-top: 0; font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; }
h5 { background-color: #eee; padding: 5px; border-radius: 5px; margin-top: 15px; }
.spell-stats { display: flex; justify-content: space-around; text-align: center; margin-bottom: 15px; }
.stat-box { border: 1px solid #ccc; border-radius: 8px; padding: 5px 10px; text-align: center; }
.stat-box label { font-size: 0.7em; font-weight: bold; }
.stat-box span { font-size: 1.5em; font-weight: bold; }
.spell-list ul { list-style: none; padding: 0; margin: 0 0 10px 0; }
.spell-list li { padding: 3px 5px; }
.spell-list li.prepared { font-weight: bold; }
</style>