import { createRouter, createWebHistory } from 'vue-router'
import CharacterSheet from '../components/CharacterSheet.vue'
import DiceRoller from '../components/DiceRoller.vue'
import AdventuresSection from '../components/AdventuresSection.vue'
import AIGenerator from '../components/AIGenerator.vue'
import AdventureTest from '../components/AdventureTest.vue' // <-- 1. IMPORTA IL NUOVO COMPONENTE

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
 { path: '/', name: 'scheda', component: CharacterSheet },
 { path: '/dadi', name: 'dadi', component: DiceRoller },
 { path: '/avventure', name: 'avventure', component: AdventuresSection },
 { path: '/generatore-ia', name: 'generatore', component: AIGenerator },
  { path: '/test', name: 'test', component: AdventureTest } // <-- 2. AGGIUNGI LA ROTTA DI TEST
]
})

export default router