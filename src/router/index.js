import { createRouter, createWebHistory } from 'vue-router'
import CharacterSheet from '../components/CharacterSheet.vue'
import DiceRoller from '../components/DiceRoller.vue'
import AdventuresSection from '../components/AdventuresSection.vue'
import AIGenerator from '../components/AIGenerator.vue'
import PlayerView from '../components/PlayerView.vue'
import Lobby from '../components/Lobby.vue'
import CampaignJournal from '../components/CampaignJournal.vue'
import DMCompendium from '../components/DMCompendium.vue'
import DMDashboard from '../components/DMDashboard.vue' // <-- 1. IMPORTA

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'scheda', component: CharacterSheet },
    { path: '/dashboard', name: 'dashboard', component: DMDashboard }, // <-- 2. AGGIUNGI
    { path: '/dadi', name: 'dadi', component: DiceRoller },
    { path: '/lobby', name: 'lobby', component: Lobby },
    { path: '/diario', name: 'diario', component: CampaignJournal },
    { path: '/compendio', name: 'compendio', component: DMCompendium },
    { path: '/avventure', name: 'avventure', component: AdventuresSection },
    { path: '/generatore-ia', name: 'generatore', component: AIGenerator },
    { path: '/sessione/:adventureId', name: 'sessione', component: PlayerView },
  ],
})

export default router
