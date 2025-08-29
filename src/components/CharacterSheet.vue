<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router' // Importa useRoute
import { dndClasses, dndRaces, dndHitDice } from '../data/dndData.js'
import { dndDefensiveItems } from '@/data/dndDefensiveItems.js'
import { dndRacialTraits } from '@/data/dndRacialTraits.js'
import { dndClassFeatures } from '@/data/dndClassFeatures.js'
import { dndClassProficiencies } from '@/data/dndProficiencies.js'
import { dndSubclasses } from '@/data/dndSubclasses.js'
import { dndFeatureChoices } from '@/data/dndFeatureChoices.js'
import { dndEquipment } from '@/data/dndEquipment.js'
import { dndSpells } from '@/data/dndSpells.js'
import { useDiceRoller } from '@/composables/useDiceRoller.js'
import SpellSheet from './SpellSheet.vue'
import CombatSection from './CombatSection.vue'
import FeaturesAndTraits from './FeaturesAndTraits.vue'
import InventorySection from './InventorySection.vue'
import Grimoire from './Grimoire.vue'
import { auth, db } from '@/firebaseConfig'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useToast } from 'vue-toastification'

const route = useRoute() // Permette di leggere l'URL
const toast = useToast()
const isInitialLoad = ref(true)

// STATO DEL COMPONENTE
const isAnagraficaOpen = ref(true)
const isStatsOpen = ref(true)
const isCombatOpen = ref(true)
const isResourcesOpen = ref(true) // <-- Variabile che mancava
const isSkillsOpen = ref(true)
const isFeaturesOpen = ref(true)
const isInventoryOpen = ref(true)
const isCompanionsOpen = ref(true)
const isSpellsOpen = ref(true)
const isGrimoireOpen = ref(false)
const isHpModalOpen = ref(false)
const hpChangeAmount = ref(0)
const hpChangeType = ref('damage')
const isCustomDefenseModalOpen = ref(false)
const newCustomDefensiveItem = ref({
  name: 'Oggetto Personalizzato',
  type: 'Leggera',
  ac: 10,
  maxDex: null,
  strReq: 0,
  weight: 0,
  category: 'Armatura',
  isEquipped: false,
})
const defensiveItemToAdd = ref(null)

// DATI STATICI
const translations = {
  strength: 'Forza',
  dexterity: 'Destrezza',
  constitution: 'Costituzione',
  intelligence: 'Intelligenza',
  wisdom: 'Saggezza',
  charisma: 'Carisma',
  acrobatics: 'Acrobazia',
  animalHandling: 'Addestrare Animali',
  arcana: 'Arcano',
  athletics: 'Atletica',
  deception: 'Inganno',
  history: 'Storia',
  insight: 'Intuizione',
  intimidation: 'Intimidire',
  investigation: 'Indagare',
  medicine: 'Medicina',
  nature: 'Natura',
  perception: 'Percezione',
  performance: 'Intrattenere',
  persuasion: 'Persuasione',
  religion: 'Religione',
  sleightOfHand: 'Rapidità di Mano',
  stealth: 'Furtività',
  survival: 'Sopravvivenza',
}
const skillAbilityMap = {
  acrobatics: 'dexterity',
  animalHandling: 'wisdom',
  arcana: 'intelligence',
  athletics: 'strength',
  deception: 'charisma',
  history: 'intelligence',
  insight: 'wisdom',
  intimidation: 'charisma',
  investigation: 'intelligence',
  medicine: 'wisdom',
  nature: 'intelligence',
  perception: 'wisdom',
  performance: 'charisma',
  persuasion: 'persuasion',
  religion: 'intelligence',
  sleightOfHand: 'dexterity',
  stealth: 'dexterity',
  survival: 'wisdom',
}
const abilityAbbreviations = {
  strength: 'For',
  dexterity: 'Des',
  constitution: 'Cos',
  intelligence: 'Int',
  wisdom: 'Sag',
  charisma: 'Car',
}

const { makeCheck } = useDiceRoller()

// STRUTTURA DATI DI DEFAULT COMPLETA
const defaultCharacter = {
  header: {
    name: '',
    playerName: '',
    classes: [{ name: '', level: 1, subclass: '' }],
    race: '',
    subrace: '',
    background: '',
    alignment: '',
    experience: 0,
    inspiration: 0,
    appearance: {
      age: '',
      height: '',
      weight: '',
      eyes: '',
      skin: '',
      hair: '',
      size: 'Media',
      distinguishingMarks: '',
      imageUrl: '',
    },
  },
  abilityScores: {
    strength: { score: 10 },
    dexterity: { score: 10 },
    constitution: { score: 10 },
    intelligence: { score: 10 },
    wisdom: { score: 10 },
    charisma: { score: 10 },
  },
  passivePerceptionBonus: 0,
  savingThrows: {
    strength: { proficient: false },
    dexterity: { proficient: false },
    constitution: { proficient: false },
    intelligence: { proficient: false },
    wisdom: { proficient: false },
    charisma: { proficient: false },
  },
  skills: {
    acrobatics: { proficient: false },
    animalHandling: { proficient: false },
    arcana: { proficient: false },
    athletics: { proficient: false },
    deception: { proficient: false },
    history: { proficient: false },
    insight: { proficient: false },
    intimidation: { proficient: false },
    investigation: { proficient: false },
    medicine: { proficient: false },
    nature: { proficient: false },
    perception: { proficient: false },
    performance: { proficient: false },
    persuasion: { proficient: false },
    religion: { proficient: false },
    sleightOfHand: { proficient: false },
    stealth: { proficient: false },
    survival: { proficient: false },
  },
  combat: {
    isRaging: false,
    initiative: 0,
    speedBonusMeters: 0,
    customAcBonuses: [],
    hp: { max: 10, current: 10, temporary: 0 },
    deathSaves: { successes: 0, failures: 0 },
    fightingStyles: [],
  },
  classResources: {
    rageUses: { current: 0 },
    bardicInspiration: { current: 0 },
    kiPoints: { current: 0 },
    sorceryPoints: { current: 0 },
    layOnHandsPool: { current: 0 },
    channelDivinity: { used: 0 },
    secondWind: { used: false },
    actionSurge: { used: false },
    arcaneRecovery: { used: false },
    wildShapeUses: { used: 0 },
    superiorityDice: { current: 0 },
  },
  proficiencies: { manualArmor: [], manualWeapons: [], manualTools: [], manualLanguages: [] },
  personality: { traits: '', ideals: '', bonds: '', flaws: '' },
  features: [],
  equipment: {
    weapons: [],
    defensiveItems: [],
    money: { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 },
    inventory: [],
    otherTreasure: '',
    notes: '',
  },
  spellcasting: {
    spellbook: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] },
    spellSlots: {
      1: { total: 0, used: 0 },
      2: { total: 0, used: 0 },
      3: { total: 0, used: 0 },
      4: { total: 0, used: 0 },
      5: { total: 0, used: 0 },
      6: { total: 0, used: 0 },
      7: { total: 0, used: 0 },
      8: { total: 0, used: 0 },
      9: { total: 0, used: 0 },
    },
  },
  customRacialTraits: [],
  customClassFeatures: [],
  companions: [],
}
const character = ref(JSON.parse(JSON.stringify(defaultCharacter)))

// --- INIZIO BLOCCO LOGICA MODIFICATO ---

// Funzione helper per caricare i dati
async function loadCharacterSheet(userId) {
  if (!userId) return
  const docRef = doc(db, 'characterSheets', userId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const loadedData = docSnap.data()
    character.value = { ...defaultCharacter, ...loadedData }
    toast.success('Scheda personaggio caricata!')
  } else {
    character.value = JSON.parse(JSON.stringify(defaultCharacter))
    toast.info('Nessuna scheda trovata per questo giocatore. Mostrata scheda vuota.')
  }
  nextTick(() => {
    isInitialLoad.value = false
  })
}

// Logica che decide QUALE scheda caricare
onMounted(() => {
  watch(
    () => auth.currentUser,
    (user) => {
      if (user) {
        const targetUserId = route.query.charId
        if (targetUserId) {
          loadCharacterSheet(targetUserId)
        } else {
          loadCharacterSheet(user.uid)
        }
      }
    },
    { immediate: true },
  )
})

// Logica che decide DOVE salvare i dati
watch(
  character,
  async (newData) => {
    if (isInitialLoad.value) return

    let targetUserId = route.query.charId
    if (!targetUserId) {
      if (auth.currentUser) {
        targetUserId = auth.currentUser.uid
      } else {
        return // Non salvare se non c'è un utente loggato
      }
    }

    if (targetUserId) {
      const docRef = doc(db, 'characterSheets', targetUserId)
      try {
        await setDoc(docRef, JSON.parse(JSON.stringify(newData)))
      } catch (error) {
        console.error('Errore durante il salvataggio:', error)
        toast.error('Errore nel salvataggio della scheda.')
      }
    }
  },
  { deep: true },
)

// --- FINE BLOCCO LOGICA MODIFICATO ---
// LOGICA FIREBASE
onMounted(async () => {
  if (auth.currentUser) {
    const userId = auth.currentUser.uid
    const docRef = doc(db, 'characterSheets', userId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const loadedData = docSnap.data()
      const mergedCharacter = {
        ...defaultCharacter,
        ...loadedData,
        header: { ...defaultCharacter.header, ...loadedData.header },
        abilityScores: { ...defaultCharacter.abilityScores, ...loadedData.abilityScores },
        combat: { ...defaultCharacter.combat, ...loadedData.combat },
        classResources: { ...defaultCharacter.classResources, ...loadedData.classResources },
        equipment: { ...defaultCharacter.equipment, ...loadedData.equipment },
        spellcasting: { ...defaultCharacter.spellcasting, ...loadedData.spellcasting },
      }
      character.value = mergedCharacter
      toast.success('Scheda personaggio caricata!')
    } else {
      toast.info('Benvenuto! Compila la tua scheda, verrà salvata automaticamente.')
    }
    nextTick(() => {
      isInitialLoad.value = false
    })
  }
})

watch(
  character,
  async (newData) => {
    if (auth.currentUser) {
      const userId = auth.currentUser.uid
      const docRef = doc(db, 'characterSheets', userId)
      try {
        await setDoc(docRef, JSON.parse(JSON.stringify(newData)))
      } catch (error) {
        console.error('Errore durante il salvataggio automatico:', error)
        toast.error('Errore nel salvataggio della scheda.')
      }
    }
  },
  { deep: true },
)

watch(
  () => character.value.header.race,
  (newRace, oldRace) => {
    if (!isInitialLoad.value && newRace !== oldRace) {
      character.value.header.subrace = ''
    }
  },
)

// FUNZIONI E COMPUTED PER RISORSE DI CLASSE
const getClassLevel = (className) => {
  const charClass = character.value.header.classes.find((c) => c.name === className)
  return charClass ? Number(charClass.level) || 0 : 0
}
const maxRageUses = computed(() => {
  const level = getClassLevel('Barbaro')
  if (level === 0) return 0
  if (level < 3) return 2
  if (level < 6) return 3
  if (level < 12) return 4
  if (level < 20) return 5
  return Infinity
})
const maxBardicInspiration = computed(() => {
  const level = getClassLevel('Bardo')
  return level > 0 ? Math.max(1, abilityModifiers.value.charisma) : 0
})
const maxKiPoints = computed(() => getClassLevel('Monaco'))
const maxSorceryPoints = computed(() => getClassLevel('Stregone'))
const layOnHandsPool = computed(() => getClassLevel('Paladino') * 5)
const maxChannelDivinity = computed(() => {
  const clericLevel = getClassLevel('Chierico')
  const paladinLevel = getClassLevel('Paladino')
  if (clericLevel === 0 && paladinLevel === 0) return 0
  if (clericLevel < 6 || paladinLevel < 6) return 1
  if (clericLevel < 18) return 2
  return 3
})
const maxSuperiorityDice = computed(() => {
  const hasSubclass = character.value.header.classes.some(
    (c) => c.subclass === 'Maestro di Battaglia',
  )
  if (!hasSubclass) return 0
  const level = getClassLevel('Guerriero')
  if (level < 7) return 4
  if (level < 15) return 5
  return 6
})
function resetResources() {
  if (!character.value.classResources) {
    character.value.classResources = JSON.parse(JSON.stringify(defaultCharacter.classResources))
  }
  const resources = character.value.classResources
  if (maxRageUses.value > 0) resources.rageUses.current = maxRageUses.value
  if (maxBardicInspiration.value > 0)
    resources.bardicInspiration.current = maxBardicInspiration.value
  if (maxKiPoints.value > 0) resources.kiPoints.current = maxKiPoints.value
  if (maxSorceryPoints.value > 0) resources.sorceryPoints.current = maxSorceryPoints.value
  if (layOnHandsPool.value > 0) resources.layOnHandsPool.current = layOnHandsPool.value
  if (maxChannelDivinity.value > 0) resources.channelDivinity.used = 0
  resources.secondWind.used = false
  resources.actionSurge.used = false
  resources.arcaneRecovery.used = false
  if (getClassLevel('Druido') > 1) resources.wildShapeUses.used = 0
  if (maxSuperiorityDice.value > 0) resources.superiorityDice.current = maxSuperiorityDice.value
  toast.success('Risorse ripristinate!')
}

// FUNZIONI E COMPUTED PROPERTIES ESISTENTI
function addSpellFromGrimoire({ level, name }) {
  const spellList = character.value.spellcasting.spellbook[level]
  if (spellList && !spellList.some((spell) => spell.name === name)) {
    spellList.push({ name: name, prepared: false })
  }
}
function castSpell(level) {
  const slots = character.value.spellcasting.spellSlots[level]
  if (slots && slots.used < slots.total) {
    slots.used++
  }
}
function resetUsedSlots() {
  for (const level in character.value.spellcasting.spellSlots) {
    character.value.spellcasting.spellSlots[level].used = 0
  }
}
function getSpellDetails(spellName) {
  return dndSpells.find((s) => s.name === spellName)
}
const availableSubraces = computed(() => {
  const selectedRace = dndRaces.find((race) => race.name === character.value.header.race)
  return selectedRace ? selectedRace.subraces : []
})
function addClass() {
  character.value.header.classes.push({ name: '', level: 1, subclass: '' })
}
function removeClass(index) {
  character.value.header.classes.splice(index, 1)
}
function addCustomAcBonus() {
  character.value.combat.customAcBonuses.push({ id: Date.now(), name: '', value: 0 })
}
function removeCustomAcBonus(index) {
  character.value.combat.customAcBonuses.splice(index, 1)
}
function fullHeal() {
  character.value.combat.hp.current = character.value.combat.hp.max
}
function openHpModal(type) {
  hpChangeType.value = type
  hpChangeAmount.value = null
  isHpModalOpen.value = true
}
function applyHpChange() {
  const amount = Number(hpChangeAmount.value)
  if (!amount || amount < 0) return
  const hp = character.value.combat.hp
  if (hpChangeType.value === 'damage') {
    hp.current = Math.max(0, hp.current - amount)
  } else {
    hp.current = Math.min(hp.max, hp.current + amount)
  }
  closeHpModal()
}
function closeHpModal() {
  isHpModalOpen.value = false
}
function handleCharacterUpdate(newCharacterState) {
  character.value = newCharacterState
}
function addDefensiveItem() {
  if (!defensiveItemToAdd.value) return
  const itemData = dndDefensiveItems.find((i) => i.name === defensiveItemToAdd.value)
  if (!itemData) return
  const newItem = { ...itemData, id: Date.now(), isEquipped: false }
  character.value.equipment.defensiveItems.push(newItem)
  defensiveItemToAdd.value = null
}
function removeDefensiveItem(itemId) {
  const index = character.value.equipment.defensiveItems.findIndex((i) => i.id === itemId)
  if (index > -1) character.value.equipment.defensiveItems.splice(index, 1)
}
function addCustomDefensiveItem() {
  if (!newCustomDefensiveItem.value.name) return
  const newItem = { ...newCustomDefensiveItem.value, id: Date.now() }
  character.value.equipment.defensiveItems.push(newItem)
  newCustomDefensiveItem.value = {
    name: 'Oggetto Personalizzato',
    type: 'Leggera',
    ac: 10,
    maxDex: null,
    strReq: 0,
    weight: 0,
    category: 'Armatura',
    isEquipped: false,
  }
  isCustomDefenseModalOpen.value = false
}
function equipItem(itemToEquip) {
  if (itemToEquip.category === 'Armatura' && itemToEquip.isEquipped) {
    character.value.equipment.defensiveItems.forEach((item) => {
      if (item.category === 'Armatura' && item.id !== itemToEquip.id) item.isEquipped = false
    })
  }
  if (itemToEquip.category === 'Scudo' && itemToEquip.isEquipped) {
    character.value.equipment.defensiveItems.forEach((item) => {
      if (item.category === 'Scudo' && item.id !== itemToEquip.id) item.isEquipped = false
    })
  }
}
function addCompanion() {
  const newCompanion = {
    id: Date.now(),
    name: 'Nuovo Compagno',
    type: '',
    hp: { current: 10, max: 10 },
    ac: 10,
    speed: '',
    abilityScores: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
    skills: '',
    senses: '',
    attacks: [],
    notes: '',
  }
  character.value.companions.push(newCompanion)
}
function removeCompanion(companionId) {
  const index = character.value.companions.findIndex((c) => c.id === companionId)
  if (index > -1) character.value.companions.splice(index, 1)
}
function addCompanionAttack(companion) {
  companion.attacks.push({ name: 'Attacco', toHit: '', damage: '' })
}
function removeCompanionAttack(companion, attackIndex) {
  companion.attacks.splice(attackIndex, 1)
}
function getAbilityModifier(score) {
  const mod = Math.floor(((Number(score) || 10) - 10) / 2)
  return mod >= 0 ? `+${mod}` : mod
}
const totalLevel = computed(() =>
  character.value.header.classes.reduce(
    (sum, currentClass) => sum + (Number(currentClass.level) || 0),
    0,
  ),
)
const proficiencyBonusByLevel = computed(() => {
  const level = totalLevel.value
  if (level < 5) return 2
  if (level < 9) return 3
  if (level < 13) return 4
  if (level < 17) return 5
  return 6
})
const abilityModifiers = computed(() => {
  const modifiers = {}
  for (const key in character.value.abilityScores) {
    const score = character.value.abilityScores[key].score
    modifiers[key] = Math.floor((score - 10) / 2)
  }
  return modifiers
})
const savingThrowModifiers = computed(() => {
  const modifiers = {}
  for (const key in character.value.savingThrows) {
    const abilityMod = abilityModifiers.value[key] || 0
    const proficiency = character.value.savingThrows[key].proficient
      ? proficiencyBonusByLevel.value
      : 0
    modifiers[key] = abilityMod + proficiency
  }
  return modifiers
})
const skillModifiers = computed(() => {
  const modifiers = {}
  for (const key in character.value.skills) {
    const ability = skillAbilityMap[key]
    const abilityMod = abilityModifiers.value[ability] || 0
    const proficiency = character.value.skills[key].proficient ? proficiencyBonusByLevel.value : 0
    modifiers[key] = abilityMod + proficiency
  }
  return modifiers
})
const calculatedPassivePerception = computed(
  () => 10 + (skillModifiers.value.perception || 0) + (character.value.passivePerceptionBonus || 0),
)
const carryingCapacity = computed(() => character.value.abilityScores.strength.score * 7.5)
const totalCarriedWeight = computed(() => {
  let totalWeight = 0
  const eq = character.value.equipment
  totalWeight += (eq.inventory || [])
    .filter((item) => item.status === 'carried')
    .reduce((sum, item) => sum + (Number(item.weight) || 0) * (Number(item.quantity) || 0), 0)
  totalWeight += (eq.weapons || []).reduce((sum, weapon) => sum + (Number(weapon.weight) || 0), 0)
  totalWeight += (eq.defensiveItems || []).reduce(
    (sum, item) => sum + (Number(item.weight) || 0),
    0,
  )
  const totalCoins = Object.values(eq.money).reduce((sum, count) => sum + (Number(count) || 0), 0)
  totalWeight += totalCoins / 100
  return totalWeight
})
const encumbranceStatus = computed(() => {
  const strength = character.value.abilityScores.strength.score
  const weight = totalCarriedWeight.value
  const heavilyEncumberedThreshold = strength * 5
  const encumberedThreshold = strength * 2.5
  if (weight > heavilyEncumberedThreshold)
    return 'Sovraccarico (Velocità -6m, Svantaggio a prove e TS basati su FOR, DES, COS)'
  if (weight > encumberedThreshold) return 'Ingombrato (Velocità -3m)'
  return 'Leggero'
})
const calculatedArmorClass = computed(() => {
  const mods = abilityModifiers.value
  let armorBonus = 0
  const equippedArmor = character.value.equipment.defensiveItems.find(
    (i) => i.isEquipped && i.category === 'Armatura',
  )
  const equippedShield = character.value.equipment.defensiveItems.find(
    (i) => i.isEquipped && i.category === 'Scudo',
  )
  if (equippedArmor) {
    armorBonus = equippedArmor.ac
    if (equippedArmor.type === 'Leggera') armorBonus += mods.dexterity
    else if (equippedArmor.type === 'Media')
      armorBonus += Math.min(mods.dexterity, equippedArmor.maxDex)
  } else {
    const isMonk = character.value.header.classes.some((c) => c.name === 'Monaco' && c.level > 0)
    const isBarbarian = character.value.header.classes.some(
      (c) => c.name === 'Barbaro' && c.level > 0,
    )
    if (isMonk) armorBonus = 10 + mods.dexterity + mods.wisdom
    else if (isBarbarian) armorBonus = 10 + mods.dexterity + mods.constitution
    else armorBonus = 10 + mods.dexterity
  }
  const shieldBonus = equippedShield ? equippedShield.ac : 0
  const customBonusesTotal = character.value.combat.customAcBonuses.reduce(
    (total, bonus) => total + (Number(bonus.value) || 0),
    0,
  )
  let finalAC = armorBonus + shieldBonus + customBonusesTotal
  if ((character.value.combat.fightingStyles || []).includes('Difesa') && equippedArmor)
    finalAC += 1
  return finalAC
})
const calculatedSpeed = computed(() => {
  const raceData = dndRaces.find((r) => r.name === character.value.header.race)
  let baseSpeedFt = raceData ? raceData.baseSpeed : 30
  if (character.value.header.subrace === 'dei Boschi') baseSpeedFt += 5
  const baseSpeedInMeters = Math.round(baseSpeedFt * 0.3048)
  let finalSpeed = baseSpeedInMeters + (character.value.combat.speedBonusMeters || 0)
  const status = encumbranceStatus.value
  if (status.includes('-3m')) finalSpeed -= 3
  if (status.includes('-6m')) finalSpeed -= 6
  return `${Math.max(0, finalSpeed)} m`
})
const hitDicePool = computed(() => {
  const pool = {}
  character.value.header.classes.forEach((c) => {
    if (c.name && c.level > 0) {
      const die = dndHitDice[c.name]
      if (die) {
        const dieKey = `d${die}`
        pool[dieKey] = (pool[dieKey] || 0) + c.level
      }
    }
  })
  return Object.entries(pool)
    .map(([die, count]) => `${count}${die}`)
    .join(', ')
})
const racialTraits = computed(() => {
  const raceName = character.value.header.race
  const subraceName = character.value.header.subrace
  let autoTraits = []
  if (raceName && dndRacialTraits[raceName]) {
    autoTraits = [...dndRacialTraits[raceName].base]
    if (subraceName && dndRacialTraits[raceName].subraces[subraceName])
      autoTraits = [...autoTraits, ...dndRacialTraits[raceName].subraces[subraceName]]
  }
  return [...autoTraits, ...character.value.customRacialTraits]
})
const baseClassFeatures = computed(() => {
  const features = []
  character.value.header.classes.forEach((charClass) => {
    if (charClass.name && dndClassFeatures[charClass.name]) {
      for (let i = 1; i <= charClass.level; i++) {
        if (dndClassFeatures[charClass.name][i])
          features.push(...dndClassFeatures[charClass.name][i])
      }
    }
  })
  return features
})
const subclassFeatures = computed(() => {
  const features = []
  character.value.header.classes.forEach((charClass) => {
    const subclassName = charClass.subclass
    if (
      charClass.name &&
      subclassName &&
      dndSubclasses[charClass.name] &&
      dndSubclasses[charClass.name].options[subclassName]
    ) {
      for (let i = 1; i <= charClass.level; i++) {
        if (dndSubclasses[charClass.name].options[subclassName][i])
          features.push(
            ...dndSubclasses[charClass.name].options[subclassName][i].map((f) => ({
              ...f,
              subclassName,
            })),
          )
      }
    }
  })
  return features
})
const chosenSubclasses = computed(() =>
  character.value.header.classes
    .filter((c) => c.subclass)
    .map((c) => ({ className: c.name, subclassName: c.subclass })),
)
const armorProficiencies = computed(() => {
  const automatic = new Set()
  character.value.header.classes.forEach((c) => {
    if (c.name && dndClassProficiencies[c.name])
      dndClassProficiencies[c.name].armor.forEach((prof) => automatic.add(prof))
  })
  const manual = character.value.proficiencies.manualArmor || []
  return Array.from(new Set([...automatic, ...manual]))
})
const weaponProficiencies = computed(() => {
  const automatic = new Set()
  character.value.header.classes.forEach((c) => {
    if (c.name && dndClassProficiencies[c.name])
      dndClassProficiencies[c.name].weapons.forEach((prof) => automatic.add(prof))
  })
  const manual = character.value.proficiencies.manualWeapons || []
  return Array.from(new Set([...automatic, ...manual]))
})
const spellcastingAbility = computed(() => {
  const classData = {
    Mago: 'intelligence',
    Artefice: 'intelligence',
    Chierico: 'wisdom',
    Druido: 'wisdom',
    Ranger: 'wisdom',
    Bardo: 'charisma',
    Paladino: 'charisma',
    Stregone: 'charisma',
    Warlock: 'charisma',
  }
  const mainCastingClass = character.value.header.classes.find((c) => classData[c.name])
  return mainCastingClass ? classData[mainCastingClass.name] : null
})
const spellcastingAbilityModifier = computed(() => {
  const ability = spellcastingAbility.value
  return ability ? abilityModifiers.value[ability] || 0 : 0
})
const spellSaveDC = computed(() =>
  spellcastingAbility.value
    ? 8 + proficiencyBonusByLevel.value + spellcastingAbilityModifier.value
    : 0,
)
const spellAttackBonus = computed(() =>
  spellcastingAbility.value ? proficiencyBonusByLevel.value + spellcastingAbilityModifier.value : 0,
)
</script>

<template>
  <div class="character-sheet">
    <section class="box">
      <div class="section-header" @click="isAnagraficaOpen = !isAnagraficaOpen">
        <h3>Anagrafica</h3>
        <span class="toggle-icon">{{ isAnagraficaOpen ? '▼' : '▶' }}</span>
      </div>
      <div v-if="isAnagraficaOpen" class="section-content">
        <div class="anagrafica-grid">
          <div class="grid-item">
            <label>Nome Personaggio</label> <input type="text" v-model="character.header.name" />
          </div>
          <div class="grid-item">
            <label>Nome Giocatore</label>
            <input type="text" v-model="character.header.playerName" />
          </div>

          <div class="grid-item full-width">
            <label>Classi, Livelli e Sottoclassi</label>
            <div
              v-for="(classItem, index) in character.header.classes"
              :key="index"
              class="class-row"
            >
              <select v-model="classItem.name" class="class-select">
                <option value="" disabled>-- Classe --</option>
                <option v-for="className in dndClasses" :key="className" :value="className">
                  {{ className }}
                </option>
              </select>
              <input
                type="number"
                v-model.number="classItem.level"
                min="1"
                max="20"
                class="level-input"
              />

              <select
                v-if="
                  dndSubclasses[classItem.name] &&
                  classItem.level >= dndSubclasses[classItem.name].choiceLevel
                "
                v-model="classItem.subclass"
                class="subclass-select"
              >
                <option value="" disabled>-- Sottoclasse --</option>
                <option
                  v-for="(subclassData, subclassName) in dndSubclasses[classItem.name].options"
                  :key="subclassName"
                  :value="subclassName"
                >
                  {{ subclassName }}
                </option>
              </select>

              <button @click="removeClass(index)" class="remove-btn">-</button>
            </div>
            <button @click="addClass" class="add-btn">+ Aggiungi Classe</button>
          </div>

          <div class="grid-item">
            <label>Livello Totale</label> <span class="calculated-field">{{ totalLevel }}</span>
          </div>
          <div class="grid-item">
            <label>Razza</label>
            <select v-model="character.header.race">
              <option value="" disabled>-- Seleziona --</option>
              <option v-for="race in dndRaces" :key="race.name" :value="race.name">
                {{ race.name }}
              </option>
            </select>
          </div>
          <div class="grid-item" v-if="availableSubraces.length > 0">
            <label>Sotto-Razza</label>
            <select v-model="character.header.subrace">
              <option value="" disabled>-- Seleziona --</option>
              <option v-for="subrace in availableSubraces" :key="subrace" :value="subrace">
                {{ subrace }}
              </option>
            </select>
          </div>
          <div class="grid-item">
            <label>Background</label> <input type="text" v-model="character.header.background" />
          </div>
          <div class="grid-item">
            <label>Allineamento</label> <input type="text" v-model="character.header.alignment" />
          </div>
          <div class="grid-item">
            <label>Punti Esperienza</label>
            <input type="number" v-model.number="character.header.experience" />
          </div>
        </div>

        <div class="section-divider"><h4>Aspetto Fisico</h4></div>

        <div class="appearance-section">
          <div class="appearance-grid">
            <div class="grid-item">
              <label>Età</label><input type="text" v-model="character.header.appearance.age" />
            </div>
            <div class="grid-item">
              <label>Altezza</label
              ><input type="text" v-model="character.header.appearance.height" />
            </div>
            <div class="grid-item">
              <label>Peso</label><input type="text" v-model="character.header.appearance.weight" />
            </div>
            <div class="grid-item">
              <label>Taglia</label><input type="text" v-model="character.header.appearance.size" />
            </div>
            <div class="grid-item">
              <label>Occhi</label><input type="text" v-model="character.header.appearance.eyes" />
            </div>
            <div class="grid-item">
              <label>Capelli</label><input type="text" v-model="character.header.appearance.hair" />
            </div>
            <div class="grid-item">
              <label>Carnagione</label
              ><input type="text" v-model="character.header.appearance.skin" />
            </div>
            <div class="grid-item full-width">
              <label>Segni Particolari</label
              ><textarea
                v-model="character.header.appearance.distinguishingMarks"
                rows="2"
              ></textarea>
            </div>
          </div>
          <div class="character-image-area">
            <img
              v-if="character.header.appearance.imageUrl"
              :src="character.header.appearance.imageUrl"
              alt="Immagine Personaggio"
              class="character-image"
            />
            <div v-else class="image-placeholder">Nessuna Immagine</div>
            <div class="grid-item">
              <label>URL Immagine Personaggio</label>
              <input
                type="text"
                v-model="character.header.appearance.imageUrl"
                placeholder="Incolla qui l'URL dell'immagine"
              />
            </div>
          </div>
        </div>

        <div class="section-divider"><h4>Personalità</h4></div>
        <div class="anagrafica-grid">
          <div class="grid-item full-width">
            <label>Tratti Caratteriali</label
            ><textarea v-model="character.personality.traits"></textarea>
          </div>
          <div class="grid-item full-width">
            <label>Ideali</label> <textarea v-model="character.personality.ideals"></textarea>
          </div>
          <div class="grid-item full-width">
            <label>Legami</label> <textarea v-model="character.personality.bonds"></textarea>
          </div>
          <div class="grid-item full-width">
            <label>Difetti</label> <textarea v-model="character.personality.flaws"></textarea>
          </div>
        </div>
      </div>
    </section>

    <section class="box">
      <div class="section-header" @click="isStatsOpen = !isStatsOpen">
        <h3>Caratteristiche e Tiri Salvezza</h3>
        <span class="toggle-icon">{{ isStatsOpen ? '▼' : '▶' }}</span>
      </div>
      <div v-if="isStatsOpen" class="section-content stats-grid">
        <div class="scores">
          <div v-for="(stat, key) in character.abilityScores" :key="key" class="stat-box">
            <label>{{ translations[key] }}</label>
            <input type="number" class="score-input" v-model.number="stat.score" />
            <button
              class="modifier roll-button"
              @click="makeCheck(`Prova ${translations[key]}`, abilityModifiers[key])"
            >
              {{ abilityModifiers[key] >= 0 ? '+' : '' }}{{ abilityModifiers[key] }}
            </button>
          </div>
        </div>
        <div class="saving-throws">
          <label class="block-label">Tiri Salvezza</label>
          <ul>
            <li v-for="(save, key) in character.savingThrows" :key="key">
              <input type="checkbox" v-model="save.proficient" />
              <button
                class="bonus-display roll-button"
                @click="makeCheck(`Tiro Salvezza: ${translations[key]}`, savingThrowModifiers[key])"
              >
                {{ savingThrowModifiers[key] >= 0 ? '+' : '' }}{{ savingThrowModifiers[key] }}
              </button>
              <label>{{ translations[key] }}</label>
            </li>
          </ul>
          <div class="proficiency-bonus-box">
            <label>Bonus Competenza</label>
            <span>+{{ proficiencyBonusByLevel }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="box">
      <div class="section-header" @click="isCombatOpen = !isCombatOpen">
        <h3>Combattimento</h3>
        <span class="toggle-icon">{{ isCombatOpen ? '▼' : '▶' }}</span>
      </div>
      <div v-if="isCombatOpen" class="section-content">
        <div class="combat-grid">
          <div class="grid-item">
            <label>Classe Armatura</label>
            <span class="calculated-field large">{{ calculatedArmorClass }}</span>
          </div>
          <div class="grid-item">
            <label>Iniziativa</label>
            <button
              class="calculated-field large roll-button"
              @click="makeCheck('Prova di Iniziativa', abilityModifiers.dexterity)"
            >
              {{ abilityModifiers.dexterity >= 0 ? '+' : '' }}{{ abilityModifiers.dexterity }}
            </button>
          </div>
          <div class="grid-item">
            <label>Velocità</label>
            <span class="calculated-field large">{{ calculatedSpeed }}</span>
          </div>
          <div class="grid-item hp-box">
            <label>P.F. (Max / Attuali)</label>
            <div class="hp-inputs">
              <input type="number" v-model.number="character.combat.hp.max" /> /
              <input type="number" v-model.number="character.combat.hp.current" />
            </div>
            <div class="hp-controls">
              <button @click="fullHeal" class="hp-btn heal">Cura Max</button>
              <button @click="openHpModal('damage')" class="hp-btn damage">- Danno</button>
              <button @click="openHpModal('healing')" class="hp-btn heal">+ Cura</button>
            </div>
          </div>
          <div class="grid-item">
            <label>P.F. Temporanei</label>
            <input type="number" v-model.number="character.combat.hp.temporary" />
          </div>
          <div class="grid-item">
            <label>Dadi Vita</label>
            <span class="calculated-field">{{ hitDicePool }}</span>
          </div>
          <div class="grid-item ac-details full-width">
            <div class="section-divider"><h4>Equipaggiamento Difensivo</h4></div>
            <div class="add-item-section">
              <select v-model="defensiveItemToAdd">
                <option :value="null" disabled>-- Aggiungi Armatura/Scudo --</option>
                <option v-for="item in dndDefensiveItems" :key="item.name" :value="item.name">
                  {{ item.name }}
                </option>
              </select>
              <button @click="addDefensiveItem" class="add-btn small">+ Aggiungi</button>
              <button @click="isCustomDefenseModalOpen = true" class="add-btn small manual-btn">
                Manuale
              </button>
            </div>
            <div class="defensive-item-list">
              <div
                v-for="item in character.equipment.defensiveItems"
                :key="item.id"
                class="defensive-item-row"
              >
                <label class="equip-label"
                  ><input type="checkbox" v-model="item.isEquipped" @change="equipItem(item)" />
                  Equip</label
                >
                <span class="item-name">{{ item.name }} ({{ item.type }})</span>
                <span class="item-ac">AC: {{ item.ac }}</span>
                <button @click="removeDefensiveItem(item.id)" class="remove-btn small">-</button>
              </div>
            </div>
            <div class="bonus-list">
              <label>Bonus Personalizzati alla CA</label>
              <div
                v-for="(bonus, index) in character.combat.customAcBonuses"
                :key="bonus.id"
                class="ac-inputs bonus-section"
              >
                <div class="grid-item flex-grow">
                  <input type="text" placeholder="Descrizione bonus" v-model="bonus.name" />
                </div>
                <div class="grid-item">
                  <input type="number" class="bonus-value-input" v-model.number="bonus.value" />
                </div>
                <button @click="removeCustomAcBonus(index)" class="remove-btn small">-</button>
              </div>
              <button @click="addCustomAcBonus" class="add-btn small">+ Aggiungi Bonus</button>
            </div>
          </div>
        </div>
        <div class="section-divider"><h4>Attacchi e Armi</h4></div>
        <CombatSection
          :character="character"
          :ability-modifiers="abilityModifiers"
          :proficiency-bonus="proficiencyBonusByLevel"
        />
      </div>
    </section>

    <section class="box">
      <div class="section-header" @click="isResourcesOpen = !isResourcesOpen">
        <h3>Risorse di Classe</h3>
        <button @click.stop="resetResources" class="reset-btn">Riposo Lungo</button>
        <span class="toggle-icon">{{ isResourcesOpen ? '▼' : '▶' }}</span>
      </div>
      <div v-if="isResourcesOpen" class="section-content class-resources-grid">
        <div v-if="getClassLevel('Barbaro') > 0" class="resource-item">
          <label>Usi Ira</label>
          <div class="resource-tracker">
            <input type="number" v-model.number="character.classResources.rageUses.current" /><span
              >/ {{ maxRageUses === Infinity ? '∞' : maxRageUses }}</span
            >
          </div>
        </div>
        <div v-if="getClassLevel('Bardo') > 0" class="resource-item">
          <label>Ispirazione Bardica</label>
          <div class="resource-tracker">
            <input
              type="number"
              v-model.number="character.classResources.bardicInspiration.current"
            /><span>/ {{ maxBardicInspiration }}</span>
          </div>
        </div>
        <div
          v-if="getClassLevel('Chierico') > 1 || getClassLevel('Paladino') > 2"
          class="resource-item"
        >
          <label>Incanalare Divinità</label>
          <div class="resource-tracker">
            <input
              type="number"
              v-model.number="character.classResources.channelDivinity.used"
            /><span>/ {{ maxChannelDivinity }} Usati</span>
          </div>
        </div>
        <div v-if="getClassLevel('Druido') > 1" class="resource-item">
          <label>Usi Forma Selvatica</label>
          <div class="resource-tracker">
            <input
              type="number"
              v-model.number="character.classResources.wildShapeUses.used"
            /><span>/ 2 Usati</span>
          </div>
        </div>
        <div v-if="getClassLevel('Guerriero') > 0" class="resource-item check-item">
          <label for="secondWind">Recuperare Energie</label>
          <input
            type="checkbox"
            id="secondWind"
            v-model="character.classResources.secondWind.used"
          /><span>Usato</span>
        </div>
        <div v-if="getClassLevel('Guerriero') > 1" class="resource-item check-item">
          <label for="actionSurge">Azione Impetuosa</label>
          <input
            type="checkbox"
            id="actionSurge"
            v-model="character.classResources.actionSurge.used"
          /><span>Usato</span>
        </div>
        <div v-if="maxSuperiorityDice > 0" class="resource-item">
          <label>Dadi di Superiorità</label>
          <div class="resource-tracker">
            <input
              type="number"
              v-model.number="character.classResources.superiorityDice.current"
            /><span>/ {{ maxSuperiorityDice }}</span>
          </div>
        </div>
        <div v-if="getClassLevel('Monaco') > 1" class="resource-item">
          <label>Punti Ki</label>
          <div class="resource-tracker">
            <input type="number" v-model.number="character.classResources.kiPoints.current" /><span
              >/ {{ maxKiPoints }}</span
            >
          </div>
        </div>
        <div v-if="getClassLevel('Paladino') > 0" class="resource-item">
          <label>Imposizione delle Mani</label>
          <div class="resource-tracker">
            <input
              type="number"
              v-model.number="character.classResources.layOnHandsPool.current"
            /><span>/ {{ layOnHandsPool }}</span>
          </div>
        </div>
        <div v-if="getClassLevel('Stregone') > 1" class="resource-item">
          <label>Punti Stregoneria</label>
          <div class="resource-tracker">
            <input
              type="number"
              v-model.number="character.classResources.sorceryPoints.current"
            /><span>/ {{ maxSorceryPoints }}</span>
          </div>
        </div>
        <div v-if="getClassLevel('Mago') > 0" class="resource-item check-item">
          <label for="arcaneRecovery">Recupero Arcano</label>
          <input
            type="checkbox"
            id="arcaneRecovery"
            v-model="character.classResources.arcaneRecovery.used"
          /><span>Usato</span>
        </div>
      </div>
    </section>

    <section class="box">
      <div class="section-header" @click="isSkillsOpen = !isSkillsOpen">
        <h3>Abilità</h3>
        <span class="toggle-icon">{{ isSkillsOpen ? '▼' : '▶' }}</span>
      </div>
      <div v-if="isSkillsOpen" class="section-content skills-section-grid">
        <ul class="skills-list">
          <li v-for="(skill, key) in character.skills" :key="key">
            <input type="checkbox" v-model="skill.proficient" />
            <button
              class="bonus-display roll-button"
              @click="makeCheck(`Prova Abilità: ${translations[key]}`, skillModifiers[key])"
            >
              {{ skillModifiers[key] >= 0 ? '+' : '' }}{{ skillModifiers[key] }}
            </button>
            <label
              >{{ translations[key]
              }}<span class="ability-hint"
                >({{ abilityAbbreviations[skillAbilityMap[key]] }})</span
              ></label
            >
          </li>
        </ul>
        <div class="passive-perception-column">
          <div class="passive-perception-box">
            <span class="passive-perception-value">{{ calculatedPassivePerception }}</span>
            <label>Percezione Passiva</label>
          </div>
          <div class="grid-item">
            <label>Bonus Percezione Passiva</label>
            <input
              type="number"
              v-model.number="character.passivePerceptionBonus"
              class="bonus-input"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="box">
      <div class="encumbrance-bar">
        <span
          >Peso: {{ totalCarriedWeight.toFixed(2) }} kg / {{ carryingCapacity.toFixed(2) }} kg</span
        >
        <span
          :title="
            encumbranceStatus.includes('Svantaggio')
              ? 'Svantaggio a prove e TS basati su FOR, DES, COS'
              : ''
          "
          >Stato: {{ encumbranceStatus }}</span
        >
      </div>
    </section>

    <section class="box">
      <div class="section-header" @click="isInventoryOpen = !isInventoryOpen">
        <h3>Equipaggiamento e Tesoro</h3>
        <span class="toggle-icon">{{ isInventoryOpen ? '▼' : '▶' }}</span>
      </div>
      <div v-if="isInventoryOpen" class="section-content">
        <InventorySection :character="character" @updateCharacter="handleCharacterUpdate" />
      </div>
    </section>

    <section class="box">
      <div class="section-header" @click="isFeaturesOpen = !isFeaturesOpen">
        <h3>Competenze e Tratti</h3>
        <span class="toggle-icon">{{ isFeaturesOpen ? '▼' : '▶' }}</span>
      </div>
      <div v-if="isFeaturesOpen" class="section-content">
        <FeaturesAndTraits
          :racial-traits="racialTraits"
          :base-class-features="baseClassFeatures"
          :subclass-features="subclassFeatures"
          :chosen-subclasses="chosenSubclasses"
          :armor-proficiencies="armorProficiencies"
          :weapon-proficiencies="weaponProficiencies"
          :character="character"
        />
      </div>
    </section>

    <section class="box">
      <div class="section-header" @click="isCompanionsOpen = !isCompanionsOpen">
        <h3>Compagni e Gregari</h3>
        <span class="toggle-icon">{{ isCompanionsOpen ? '▼' : '▶' }}</span>
      </div>
      <div v-if="isCompanionsOpen" class="section-content">
        <div v-for="companion in character.companions" :key="companion.id" class="companion-sheet">
          <div class="companion-header">
            <input type="text" v-model="companion.name" class="companion-name-input" />
            <input
              type="text"
              v-model="companion.type"
              placeholder="Tipo (es. Lupo, Costrutto)"
              class="companion-type-input"
            />
            <button @click="removeCompanion(companion.id)" class="remove-btn small">-</button>
          </div>
          <div class="companion-stats-grid">
            <div class="grid-item">
              <label>Punti Ferita</label>
              <div class="hp-inputs">
                <input type="number" v-model.number="companion.hp.current" /> /
                <input type="number" v-model.number="companion.hp.max" />
              </div>
            </div>
            <div class="grid-item">
              <label>Classe Armatura</label>
              <input type="number" v-model.number="companion.ac" />
            </div>
            <div class="grid-item">
              <label>Velocità</label>
              <input type="text" v-model="companion.speed" />
            </div>
          </div>
          <div class="companion-abilities">
            <div v-for="(score, key) in companion.abilityScores" :key="key" class="stat-box-small">
              <label>{{ abilityAbbreviations[key] }}</label>
              <input type="number" v-model.number="companion.abilityScores[key]" />
              <div class="modifier">{{ getAbilityModifier(companion.abilityScores[key]) }}</div>
            </div>
          </div>
          <div class="companion-details-grid">
            <div class="grid-item">
              <label>Abilità</label>
              <textarea
                v-model="companion.skills"
                rows="2"
                placeholder="Es. Percezione +3, Furtività +4"
              ></textarea>
            </div>
            <div class="grid-item">
              <label>Sensi</label>
              <textarea
                v-model="companion.senses"
                rows="2"
                placeholder="Es. Percezione passiva 13, Scurovisione 18m"
              ></textarea>
            </div>
          </div>
          <div class="companion-attacks">
            <label>Azioni e Attacchi</label>
            <div v-for="(attack, index) in companion.attacks" :key="index" class="attack-row">
              <input type="text" v-model="attack.name" placeholder="Nome attacco" />
              <input type="text" v-model="attack.toHit" placeholder="Bonus TxC" />
              <input type="text" v-model="attack.damage" placeholder="Danno e tipo" />
              <button @click="removeCompanionAttack(companion, index)" class="remove-btn-tiny">
                -
              </button>
            </div>
            <button @click="addCompanionAttack(companion)" class="add-btn-tiny">
              + Aggiungi Attacco
            </button>
          </div>
          <div class="grid-item">
            <label>Note, Tratti e Capacità</label>
            <textarea v-model="companion.notes" rows="3"></textarea>
          </div>
        </div>
        <button @click="addCompanion" class="add-btn">+ Aggiungi Compagno</button>
      </div>
    </section>

    <section class="box">
      <div class="section-header" @click="isSpellsOpen = !isSpellsOpen">
        <h3>Incantesimi</h3>
        <span class="toggle-icon">{{ isSpellsOpen ? '▼' : '▶' }}</span>
      </div>
      <div v-if="isSpellsOpen" class="section-content">
        <div class="spell-main-stats">
          <div class="spell-stat-box">
            <label>Caratteristica da Incantatore</label>
            <div class="calculated-field">{{ translations[spellcastingAbility] || '---' }}</div>
          </div>
          <div class="spell-stat-box">
            <label>CD Tiro Salvezza</label>
            <div class="calculated-field large">{{ spellSaveDC || '0' }}</div>
          </div>
          <div class="spell-stat-box">
            <label>Bonus Attacco Incantesimi</label>
            <div class="calculated-field large">
              {{ spellAttackBonus ? `+${spellAttackBonus}` : '0' }}
            </div>
          </div>
          <div class="spell-actions">
            <button @click="isGrimoireOpen = true" class="grimoire-btn">Apri Grimorio</button
            ><button @click="resetUsedSlots" class="long-rest-btn">Riposo Lungo</button>
          </div>
        </div>
        <div class="spell-slots-grid">
          <div class="spell-level-column">
            <div class="spell-level-header">
              <span class="level-indicator">0</span><label>Trucchetti</label>
            </div>
            <ul class="spell-list">
              <li
                v-for="spell in character.spellcasting.spellbook[0]"
                :key="spell.name"
                class="spell-card"
              >
                <div class="spell-card-header">
                  <strong>{{ spell.name }}</strong>
                </div>
                <div class="spell-card-details">
                  <p>
                    <strong
                      >{{ getSpellDetails(spell.name)?.casting_time }} |
                      {{ getSpellDetails(spell.name)?.range }}</strong
                    >
                  </p>
                  <p><strong>Bersaglio:</strong> {{ getSpellDetails(spell.name)?.target }}</p>
                  <p v-if="getSpellDetails(spell.name)?.material" class="material-component">
                    <strong>M:</strong> {{ getSpellDetails(spell.name)?.material }}
                  </p>
                  <p class="spell-description-summary">
                    {{ getSpellDetails(spell.name)?.description }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div v-for="level in 9" :key="level" class="spell-level-column">
            <div class="spell-level-header">
              <span class="level-indicator">{{ level }}</span>
              <label>Slot Liv. {{ level }}</label>
              <div class="slots-tracker">
                <input
                  type="number"
                  v-model.number="character.spellcasting.spellSlots[level].used"
                />
                <span>/</span>
                <input
                  type="number"
                  v-model.number="character.spellcasting.spellSlots[level].total"
                />
              </div>
            </div>
            <ul class="spell-list">
              <li
                v-for="spell in character.spellcasting.spellbook[level]"
                :key="spell.name"
                class="spell-card"
                :class="{ prepared: spell.prepared }"
              >
                <div class="spell-card-header">
                  <strong>{{ spell.name }}</strong>
                  <div class="spell-controls">
                    <label class="prepare-label"
                      ><input type="checkbox" v-model="spell.prepared" /> Prep.</label
                    >
                    <button
                      @click="castSpell(level)"
                      :disabled="
                        character.spellcasting.spellSlots[level].used >=
                          character.spellcasting.spellSlots[level].total || !spell.prepared
                      "
                      class="cast-btn"
                    >
                      Lancia
                    </button>
                  </div>
                </div>
                <div class="spell-card-details">
                  <p>
                    <strong
                      >{{ getSpellDetails(spell.name)?.casting_time }} |
                      {{ getSpellDetails(spell.name)?.range }}</strong
                    >
                  </p>
                  <p><strong>Bersaglio:</strong> {{ getSpellDetails(spell.name)?.target }}</p>
                  <p v-if="getSpellDetails(spell.name)?.material" class="material-component">
                    <strong>M:</strong> {{ getSpellDetails(spell.name)?.material }}
                  </p>
                  <p class="spell-description-summary">
                    {{ getSpellDetails(spell.name)?.description }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <Grimoire
      v-if="isGrimoireOpen"
      @close="isGrimoireOpen = false"
      @addSpell="addSpellFromGrimoire"
    />

    <div v-if="isHpModalOpen" class="modal-overlay" @click.self="closeHpModal">
      <div class="modal-content" @keydown.esc="closeHpModal">
        <h3>Applica {{ hpChangeType === 'damage' ? 'Danni' : 'Cura' }}</h3>
        <input
          type="number"
          v-model.number="hpChangeAmount"
          placeholder="Inserisci un valore"
          @keydown.enter="applyHpChange"
          ref="hpInput"
        />
        <div class="modal-actions">
          <button @click="closeHpModal" class="btn-secondary">Annulla</button>
          <button @click="applyHpChange" class="btn-primary">Conferma</button>
        </div>
      </div>
    </div>

    <div
      v-if="isCustomDefenseModalOpen"
      class="modal-overlay"
      @click.self="isCustomDefenseModalOpen = false"
    >
      <div class="modal-content">
        <h3>Aggiungi Oggetto Difensivo Personalizzato</h3>
        <div class="form-grid">
          <div class="grid-item">
            <label>Nome</label><input type="text" v-model="newCustomDefensiveItem.name" />
          </div>
          <div class="grid-item">
            <label>Categoria</label
            ><select v-model="newCustomDefensiveItem.category">
              <option>Armatura</option>
              <option>Scudo</option>
            </select>
          </div>
          <div class="grid-item">
            <label>Tipo</label
            ><input type="text" v-model="newCustomDefensiveItem.type" placeholder="Es. Pesante" />
          </div>
          <div class="grid-item">
            <label>Valore CA</label
            ><input type="number" v-model.number="newCustomDefensiveItem.ac" />
          </div>
          <div class="grid-item">
            <label>Peso (kg)</label
            ><input type="number" v-model.number="newCustomDefensiveItem.weight" />
          </div>
          <div class="grid-item">
            <label>Forza Richiesta</label
            ><input type="number" v-model.number="newCustomDefensiveItem.strReq" />
          </div>
        </div>
        <div class="modal-actions">
          <button @click="isCustomDefenseModalOpen = false" class="btn-secondary">Annulla</button>
          <button @click="addCustomDefensiveItem" class="btn-primary">Aggiungi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.character-sheet {
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  padding: 15px;
  width: 100%; /* MODIFICATO: Permette al contenitore di restringersi */
  max-width: 900px; /* MODIFICATO: Mantiene la larghezza massima su schermi grandi */
  font-family: serif;
  margin: 2rem auto;
}
.box {
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
}
.section-header h3 {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.toggle-icon {
  font-size: 1.5em;
}
.section-content {
  padding-top: 15px;
  margin-top: 10px;
  border-top: 1px solid #ddd;
}
.grid-item {
  display: flex;
  flex-direction: column;
}
.grid-item.flex-grow {
  flex-grow: 1;
}
.grid-item label {
  font-size: 0.7em;
  font-weight: bold;
  text-transform: uppercase;
  color: #555;
  margin-bottom: 5px;
}
.full-width {
  grid-column: 1 / -1;
}
input[type='text'],
input[type='number'],
select,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: serif;
  font-size: 1em;
  box-sizing: border-box;
}
textarea {
  min-height: 80px;
  resize: vertical;
}
.calculated-field {
  font-size: 1.2em;
  font-weight: bold;
  padding: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  text-align: center;
}
.calculated-field.large {
  font-size: 2em;
  padding: 10px;
}
.anagrafica-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
.class-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.class-select {
  flex-basis: 30%;
  flex-grow: 1;
}
.level-input {
  width: 60px;
  flex-shrink: 1;
  flex-grow: 0;
}
.subclass-select {
  flex-basis: 40%;
  flex-grow: 2;
}
.remove-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1.2em;
  cursor: pointer;
  flex-shrink: 0;
  align-self: center;
}
.remove-btn.small {
  width: 28px;
  height: 28px;
  font-size: 1.1em;
}
.add-btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 5px;
}
.add-btn.small {
  width: auto;
  padding: 5px 15px;
  font-size: 0.9em;
  margin-top: 10px;
}
.appearance-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  align-items: flex-start;
}
.appearance-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}
.character-image-area {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.character-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f0f0f0;
}
.image-placeholder {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #ccc;
  border-radius: 8px;
  color: #aaa;
  font-family: sans-serif;
}
.stats-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}
.scores {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.stat-box {
  border: 2px solid #888;
  border-radius: 8px;
  text-align: center;
  padding: 5px;
}
.stat-box .score-input {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  border: none;
  width: 100%;
  -moz-appearance: textfield;
}
.stat-box .score-input::-webkit-outer-spin-button,
.stat-box .score-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.stat-box .modifier {
  border: 1px solid #000;
  border-radius: 10px;
  padding: 2px 0;
  margin-top: 5px;
  font-size: 1.2em;
}
.saving-throws ul,
.skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.saving-throws li,
.skills-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.bonus-display {
  font-weight: bold;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 2px 6px;
  min-width: 30px;
  text-align: center;
}
.roll-button {
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s;
  background: none;
  font-family: inherit;
  padding: 0;
  margin: 0;
  color: inherit;
  border: 1px solid transparent;
}
.roll-button:hover {
  background-color: #8e44ad;
  color: white !important;
  border-color: #7d359d;
}
.stat-box .roll-button.modifier {
  border: 1px solid #000;
  padding: 2px 0;
  display: block;
  width: 100%;
}
.saving-throws .roll-button,
.skills-list .roll-button {
  border: 1px solid #ccc;
  background-color: #eee;
  padding: 2px 6px;
  font-weight: bold;
  min-width: 30px;
  text-align: center;
  border-radius: 4px;
}
.combat-grid .roll-button.calculated-field {
  border: none;
  background-color: #f0f0f0;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  font-size: 2em;
  font-weight: bold;
}
.combat-grid .roll-button.calculated-field:hover {
  border: none;
}
.block-label {
  display: block;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
}
.proficiency-bonus-box {
  text-align: center;
  margin-top: 15px;
  border: 2px solid #888;
  border-radius: 8px;
  padding: 10px;
}
.proficiency-bonus-box span {
  font-size: 1.8em;
  font-weight: bold;
}
.combat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  align-items: start;
}
.hp-inputs {
  display: flex;
  align-items: center;
  gap: 5px;
}
.hp-controls {
  display: flex;
  gap: 5px;
  margin-top: 8px;
}
.hp-btn {
  flex-grow: 1;
  padding: 4px 8px;
  font-size: 0.8em;
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
}
.hp-btn.heal {
  background-color: #dff9fb;
  border-color: #2ecc71;
  color: #2ecc71;
}
.hp-btn.damage {
  background-color: #f9dffb;
  border-color: #e74c3c;
  color: #e74c3c;
}
.ac-details {
  margin-top: 15px;
}
.ac-inputs {
  display: flex;
  gap: 15px;
  align-items: flex-end;
  width: 100%;
}
.ac-inputs.bonus-section {
  margin-top: 8px;
}
.bonus-value-input {
  width: 80px;
  flex-shrink: 0;
}
.bonus-list {
  margin-top: 15px;
}
.bonus-list > label {
  margin-bottom: 10px;
  display: block;
}
.section-divider {
  margin: 1.5rem 0;
  border-top: 1px solid #ccc;
  text-align: center;
}
.section-divider h4 {
  position: relative;
  top: -0.7em;
  background-color: #fff;
  display: inline-block;
  padding: 0 1em;
  color: #555;
  font-family: serif;
}
.skills-list li label {
  font-size: 1em;
  font-weight: normal;
  text-transform: none;
  color: #000;
}
.ability-hint {
  color: #666;
  font-size: 0.9em;
}
.skills-section-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: flex-start;
}
.passive-perception-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.passive-perception-box {
  border: 2px solid #888;
  border-radius: 8px;
  text-align: center;
  padding: 10px;
}
.passive-perception-value {
  font-size: 2.5em;
  font-weight: bold;
  display: block;
}
.passive-perception-box label {
  font-size: 0.8em;
  font-weight: bold;
  text-transform: uppercase;
  color: #555;
}
.bonus-input {
  text-align: center;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
  color: #000;
}
.modal-content h3 {
  margin-top: 0;
  text-align: center;
}
.modal-content input,
.modal-content select {
  margin-top: 5px;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 20px;
}
.btn-primary {
  background-color: #2ecc71;
  color: white;
}
.btn-secondary {
  background-color: #bdc3c7;
  color: #2c3e50;
}
.encumbrance-bar {
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  background-color: #34495e;
  color: white;
  border-radius: 4px;
  font-size: 0.9em;
  margin-bottom: 10px;
}
.encumbrance-bar span[title] {
  cursor: help;
  border-bottom: 1px dotted white;
}
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}
.add-item-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
}
.add-item-section select {
  flex-grow: 1;
}
.manual-btn {
  background-color: #95a5a6;
}
.defensive-item-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}
.defensive-item-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  background-color: #f8f8f8;
  border-radius: 4px;
}
.item-name {
  flex-grow: 1;
  font-weight: bold;
}
.item-ac {
  font-size: 0.9em;
  color: #333;
}
.equip-label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9em;
  cursor: pointer;
}
.companion-sheet {
  border: 1px solid #bca789;
  background-color: #fdfaf6;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.companion-header {
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 2px solid #bca789;
  padding-bottom: 10px;
}
.companion-name-input {
  font-size: 1.5em;
  font-weight: bold;
  border: none;
  background: transparent;
  flex-grow: 1;
}
.companion-type-input {
  font-style: italic;
  border: none;
  background: transparent;
  text-align: right;
}
.companion-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  text-align: center;
}
.companion-stats-grid input {
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
}
.companion-abilities {
  display: flex;
  justify-content: space-around;
  gap: 5px;
  background-color: #eee;
  padding: 5px;
  border-radius: 4px;
}
.stat-box-small {
  text-align: center;
  flex: 1;
}
.stat-box-small label {
  font-size: 0.8em;
  font-weight: bold;
}
.stat-box-small input {
  width: 100%;
  text-align: center;
  -moz-appearance: textfield;
}
.stat-box-small input::-webkit-outer-spin-button,
.stat-box-small input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.stat-box-small .modifier {
  font-size: 0.9em;
  font-weight: bold;
}
.companion-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.companion-attacks {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.attack-row {
  display: flex;
  gap: 5px;
  align-items: center;
}
.attack-row input:nth-child(1) {
  flex-basis: 30%;
}
.attack-row input:nth-child(2) {
  flex-basis: 20%;
}
.attack-row input:nth-child(3) {
  flex-grow: 1;
}
.add-btn-tiny,
.remove-btn-tiny {
  background-color: #34495e;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 2px 8px;
  cursor: pointer;
  font-size: 1em;
}
.remove-btn-tiny {
  background-color: #c0392b;
  padding: 2px 6px;
  border-radius: 50%;
}
.spell-main-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
  gap: 15px;
  align-items: end;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
}
.spell-stat-box {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.spell-actions {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.grimoire-btn {
  padding: 8px 12px;
  background-color: #8e44ad;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: serif;
  font-size: 0.9em;
}
.long-rest-btn {
  padding: 8px 12px;
  background-color: #16a085;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: serif;
  font-size: 0.9em;
}
.spell-slots-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
.spell-level-column {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.spell-level-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-shrink: 0;
}
.spell-level-header label {
  font-weight: bold;
  flex-grow: 1;
}
.level-indicator {
  font-size: 1.5em;
  font-weight: bold;
  color: #888;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.slots-tracker {
  display: flex;
  align-items: center;
  gap: 5px;
}
.slots-tracker input {
  width: 40px;
  text-align: center;
  padding: 2px;
}
.spell-list {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  overflow-y: auto;
}
.spell-card {
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-left: 3px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 5px;
  font-size: 0.9em;
}
.spell-card.prepared {
  border-left-color: #2980b9;
  background-color: #ecf5fb;
}
.spell-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
.spell-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}
.prepare-label {
  font-size: 0.8em;
  font-weight: normal;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}
.cast-btn {
  padding: 2px 8px;
  font-size: 0.8em;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.cast-btn:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}
.spell-card-details {
  margin-top: 5px;
  font-size: 0.9em;
  line-height: 1.3;
  color: #444;
}
.spell-card-details p {
  margin: 0;
  padding: 0;
}
.spell-card-details p:first-child {
  font-style: italic;
  color: #666;
  margin-bottom: 4px;
}
.material-component {
  color: #795548;
  font-size: 0.9em;
}
.spell-description-summary {
  padding-top: 4px;
  margin-top: 4px;
  border-top: 1px dotted #eee;
}

/* --- INIZIO REGOLE RESPONSIVE AGGIUNTE --- */
@media (max-width: 992px) {
  /* Breakpoint più grande per accomodare il layout complesso */
  .grid-main,
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .anagrafica-grid,
  .appearance-section,
  .appearance-grid,
  .combat-grid,
  .skills-section-grid {
    grid-template-columns: 1fr; /* Impila tutto in una sola colonna */
  }
  .spell-slots-grid {
    grid-template-columns: 1fr;
  }
}
/* --- INIZIO STILI PER NUOVA SEZIONE RISORSE --- */
.class-resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}
.resource-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
}
.resource-item label {
  font-weight: bold;
  font-size: 0.9em;
}
.resource-tracker {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.resource-tracker input {
  width: 60px;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
}
.resource-tracker span {
  font-size: 1.1em;
  color: #555;
}
.check-item {
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.check-item input[type='checkbox'] {
  width: auto;
  margin: 0;
}
.reset-btn {
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 0.8em;
  cursor: pointer;
}
</style>
