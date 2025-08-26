// src/data/dndData.js

export const dndClasses = [
  "Barbaro", "Bardo", "Chierico", "Druido",
  "Guerriero", "Ladro", "Mago", "Monaco",
  "Paladino", "Ranger", "Stregone", "Warlock",
  "Artefice"
];

export const dndHitDice = {
  "Barbaro": 12,
  "Guerriero": 10,
  "Paladino": 10,
  "Ranger": 10,
  "Bardo": 8,
  "Chierico": 8,
  "Druido": 8,
  "Ladro": 8,
  "Monaco": 8,
  "Warlock": 8,
  "Artefice": 8,
  "Mago": 6,
  "Stregone": 6
};

// LISTA COMPLETA E AGGIORNATA
export const dndArmors = [
  { name: "Nessuna Armatura", type: "Nessuna", ac: 10, maxDex: null, strReq: 0 },
  // Armature Leggere
  { name: "Imbottita", type: "Leggera", ac: 11, maxDex: null, strReq: 0 },
  { name: "Cuoio", type: "Leggera", ac: 11, maxDex: null, strReq: 0 },
  { name: "Cuoio Borchiato", type: "Leggera", ac: 12, maxDex: null, strReq: 0 },
  // Armature Medie
  { name: "Corazza di Pelle", type: "Media", ac: 12, maxDex: 2, strReq: 0 },
  { name: "Corazza a Scaglie", type: "Media", ac: 14, maxDex: 2, strReq: 0 },
  { name: "Peto di maglia", type: "Media", ac: 14, maxDex: 2, strReq: 0 },
  { name: "Mezza Armatura", type: "Media", ac: 15, maxDex: 2, strReq: 0 },
  // Armature Pesanti
  { name: "Cotta di Anelli", type: "Pesante", ac: 14, maxDex: 0, strReq: 0 },
  { name: "Cotta di Maglia", type: "Pesante", ac: 16, maxDex: 0, strReq: 13 },
  { name: "Armatura a Strisce", type: "Pesante", ac: 17, maxDex: 0, strReq: 15 },
  { name: "Armatura Completa", type: "Pesante", ac: 18, maxDex: 0, strReq: 15 }
];

export const dndRaces = [
  { name: "Aarakocra", subraces: [], baseSpeed: 25 },
  { name: "Aasimar", subraces: ["Protettore", "Flagello", "Caduto"], baseSpeed: 30 },
  { name: "Cangiante", subraces: [], baseSpeed: 30 },
  { name: "Centauro", subraces: [], baseSpeed: 40 },
  { name: "Draconide", subraces: [], baseSpeed: 30 },
  { name: "Elfo", subraces: ["dei Boschi", "Alto", "Drow (Oscuro)", "Eladrin", "del Mare", "Shadar-kai"], baseSpeed: 30 },
  { name: "Firbolg", subraces: [], baseSpeed: 30 },
  { name: "Genasi", subraces: ["del Fuoco", "dell'Acqua", "della Terra", "dell'Aria"], baseSpeed: 30 },
  { name: "Gith", subraces: ["Githyanki", "Githzerai"], baseSpeed: 30 },
  { name: "Gnomo", subraces: ["delle Foreste", "delle Rocce", "Profondo (Svirfneblin)"], baseSpeed: 25 },
  { name: "Goliath", subraces: [], baseSpeed: 30 },
  { name: "Halfling", subraces: ["Piedelesto", "Tozzo"], baseSpeed: 25 },
  { name: "Infernale (Tiefling)", subraces: [], baseSpeed: 30 },
  { name: "Kenku", subraces: [], baseSpeed: 30 },
  { name: "Koboldo", subraces: [], baseSpeed: 30 },
  { name: "Leonin", subraces: [], baseSpeed: 35 },
  { name: "Lizardfolk", subraces: [], baseSpeed: 30 },
  { name: "Mezzelfo", subraces: [], baseSpeed: 30 },
  { name: "Mezzorco", subraces: [], baseSpeed: 30 },
  { name: "Minotauro", subraces: [], baseSpeed: 30 },
  { name: "Nano", subraces: ["delle Colline", "delle Montagne", "Duergar (Grigio)"], baseSpeed: 25 },
  { name: "Orco", subraces: [], baseSpeed: 30 },
  { name: "Satiro", subraces: [], baseSpeed: 35 },
  { name: "Tabaxi", subraces: [], baseSpeed: 30 },
  { name: "Tritone", subraces: [], baseSpeed: 30 },
  { name: "Tortle", subraces: [], baseSpeed: 30 },
  { name: "Umano", subraces: [], baseSpeed: 30 },
  { name: "Yuan-ti Pureblood", subraces: [], baseSpeed: 30 },
];