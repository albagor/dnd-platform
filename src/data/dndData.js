// src/data/dndData.js

export const dndClasses = [
  'Barbaro',
  'Bardo',
  'Chierico',
  'Druido',
  'Guerriero',
  'Ladro',
  'Mago',
  'Monaco',
  'Paladino',
  'Ranger',
  'Stregone',
  'Warlock',
  'Artefice',
]

export const dndHitDice = {
  Barbaro: 12,
  Guerriero: 10,
  Paladino: 10,
  Ranger: 10,
  Bardo: 8,
  Chierico: 8,
  Druido: 8,
  Ladro: 8,
  Monaco: 8,
  Warlock: 8,
  Artefice: 8,
  Mago: 6,
  Stregone: 6,
}

// LISTA COMPLETA E AGGIORNATA
export const dndArmors = [
  { name: 'Nessuna Armatura', type: 'Nessuna', ac: 10, maxDex: null, strReq: 0 },
  // Armature Leggere
  { name: 'Imbottita', type: 'Leggera', ac: 11, maxDex: null, strReq: 0 },
  { name: 'Cuoio', type: 'Leggera', ac: 11, maxDex: null, strReq: 0 },
  { name: 'Cuoio Borchiato', type: 'Leggera', ac: 12, maxDex: null, strReq: 0 },
  // Armature Medie
  { name: 'Corazza di Pelle', type: 'Media', ac: 12, maxDex: 2, strReq: 0 },
  { name: 'Corazza a Scaglie', type: 'Media', ac: 14, maxDex: 2, strReq: 0 },
  { name: 'Peto di maglia', type: 'Media', ac: 14, maxDex: 2, strReq: 0 },
  { name: 'Mezza Armatura', type: 'Media', ac: 15, maxDex: 2, strReq: 0 },
  // Armature Pesanti
  { name: 'Cotta di Anelli', type: 'Pesante', ac: 14, maxDex: 0, strReq: 0 },
  { name: 'Cotta di Maglia', type: 'Pesante', ac: 16, maxDex: 0, strReq: 13 },
  { name: 'Armatura a Strisce', type: 'Pesante', ac: 17, maxDex: 0, strReq: 15 },
  { name: 'Armatura Completa', type: 'Pesante', ac: 18, maxDex: 0, strReq: 15 },
]

export const dndRaces = [
  { name: 'Aasimar', subraces: [], baseSpeed: 9 },
  { name: 'Aarakocra', subraces: [], baseSpeed: 9 },
  { name: 'Bugbear', subraces: [], baseSpeed: 9 },
  { name: 'Centauro', subraces: [], baseSpeed: 12 },
  { name: 'Cangiante', subraces: [], baseSpeed: 9 },
  { name: 'Dragonide', subraces: [], baseSpeed: 9 },
  {
    name: 'Elfo',
    subraces: ['Alti Elfi', 'Elfi dei Boschi', 'Drow', 'Shadar-kai', 'Eladrin'],
    baseSpeed: 9,
  },
  { name: 'Firbolg', subraces: [], baseSpeed: 9 },
  { name: 'Genasi', subraces: ['del Fuoco', "d'Acqua", "d'Aria", 'di Terra'], baseSpeed: 9 },
  { name: 'Gith', subraces: ['Githyanki', 'Githzerai'], baseSpeed: 9 },
  { name: 'Gnomo', subraces: ['delle Foreste', 'delle Rocce'], baseSpeed: 7.5 },
  { name: 'Goblin', subraces: [], baseSpeed: 9 },
  { name: 'Goliath', subraces: [], baseSpeed: 9 },
  { name: 'Halfling', subraces: ['Piedelesto', 'Tozzo'], baseSpeed: 7.5 },
  { name: 'Hobgoblin', subraces: [], baseSpeed: 9 },
  { name: 'Kenku', subraces: [], baseSpeed: 9 },
  { name: 'Koboldo', subraces: [], baseSpeed: 9 },
  { name: 'Leonin', subraces: [], baseSpeed: 10.5 },
  { name: 'Leporidon', subraces: [], baseSpeed: 9 },
  { name: 'Lizardfolk', subraces: [], baseSpeed: 9 },
  { name: 'Mezzelfo', subraces: [], baseSpeed: 9 },
  { name: 'Mezzorco', subraces: [], baseSpeed: 9 },
  { name: 'Minotauro', subraces: [], baseSpeed: 9 },
  { name: 'Nano', subraces: ['delle Colline', 'delle Montagne'], baseSpeed: 7.5 },
  { name: 'Orco', subraces: [], baseSpeed: 9 },
  { name: 'Satiro', subraces: [], baseSpeed: 10.5 },
  { name: 'Sirena', subraces: [], baseSpeed: 9 },
  { name: 'Tabaxi', subraces: [], baseSpeed: 9 },
  { name: 'Tiefling', subraces: [], baseSpeed: 9 },
  { name: 'Tortle', subraces: [], baseSpeed: 9 },
  { name: 'Tritone', subraces: [], baseSpeed: 9 },
  { name: 'Umano', subraces: [], baseSpeed: 9 },
  { name: 'Yuan-ti Pureblood', subraces: [], baseSpeed: 9 },
]
