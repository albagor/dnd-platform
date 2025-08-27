import { useDiceStore } from '@/stores/diceStore'
import { useToast } from 'vue-toastification'
import { toRefs } from 'vue' // Importiamo toRefs

// La funzione ora accetta l'intero oggetto props
export function useCombat(props) {
  // Usiamo toRefs per mantenere la reattività delle props
  const { character, abilityModifiers, proficiencyBonus } = toRefs(props)

  const diceStore = useDiceStore()
  const toast = useToast()

  const getClassLevel = (className) =>
    character.value.header.classes.find((c) => c.name === className)?.level || 0

  // Determina il bonus ai danni dell'ira del barbaro
  const getRageDamageBonus = () => {
    const level = getClassLevel('Barbaro')
    if (!character.value.combat.isRaging || level === 0) return 0
    if (level < 9) return 2
    if (level < 16) return 3
    return 4
  }

  // Determina il dado di danno delle Arti Marziali del monaco
  const getMonkMartialArtsDie = () => {
    const level = getClassLevel('Monaco')
    if (level === 0) return '1d4'
    if (level < 5) return '1d4'
    if (level < 11) return '1d6'
    if (level < 17) return '1d8'
    return '1d10'
  }

  const getAttackAbilityMod = (weapon, ability) => {
    if (weapon.category.includes('Distanza')) return ability.dexterity
    if (weapon.properties.includes('finesse')) return Math.max(ability.strength, ability.dexterity)
    return ability.strength
  }

  const getToHitBonus = (weapon) => {
    const enhancementBonus = weapon.enhancementBonus || 0
    // Ora usiamo i .value perché sono refs
    return (
      getAttackAbilityMod(weapon, abilityModifiers.value) +
      proficiencyBonus.value +
      enhancementBonus
    )
  }

  const getDamageBonus = (weapon) => {
    const abilityMod = getAttackAbilityMod(weapon, abilityModifiers.value)
    const enhancementBonus = weapon.enhancementBonus || 0
    let rageBonus = 0

    // Aggiungi il bonus dell'ira solo se l'attacco usa Forza
    if (character.value.combat.isRaging && abilityMod === abilityModifiers.value.strength) {
      rageBonus = getRageDamageBonus()
    }

    return abilityMod + enhancementBonus + rageBonus
  }

  const getWeaponDamageDie = (weapon) => {
    if (weapon.name === "Colpo senz'armi" && getClassLevel('Monaco') > 0) {
      return getMonkMartialArtsDie()
    }
    const versatileProp = weapon.properties.find((p) => p.startsWith('versatile'))
    if (versatileProp && weapon.isTwoHanding) {
      return versatileProp.match(/\(([^)]+)\)/)[1]
    }
    return weapon.damage
  }

  const makeAttackRoll = (weapon) => {
    const txcBonus = getToHitBonus(weapon)
    const d20Result = Math.floor(Math.random() * 20) + 1
    const total = d20Result + txcBonus
    const description = `TxC ${weapon.name}: ${total} (d20: ${d20Result} + ${txcBonus})`
    diceStore.addRoll(20, total, description)
    toast.info(description)
    if (weapon.ammunition > 0) weapon.ammunition--
  }

  const makeDamageRoll = (weapon) => {
    const damageBonus = getDamageBonus(weapon)
    const damageDie = getWeaponDamageDie(weapon)
    const [diceCount, diceSides] = damageDie.split('d').map(Number)
    let diceResult = 0
    for (let i = 0; i < diceCount; i++) {
      diceResult += Math.floor(Math.random() * diceSides) + 1
    }
    const total = diceResult + damageBonus
    const description = `Danno ${weapon.name}: ${total} (${damageDie}: ${diceResult} + ${damageBonus})`
    diceStore.addRoll(diceSides, total, description)
    toast.success(description)
  }

  return { getToHitBonus, getDamageBonus, makeAttackRoll, makeDamageRoll, getWeaponDamageDie }
}
