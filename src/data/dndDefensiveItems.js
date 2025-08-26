// src/data/dndDefensiveItems.js
// Questo file unifica armature e scudi per una gestione più semplice.

export const dndDefensiveItems = [
  // Armature Leggere
  { name: "Imbottita", type: "Leggera", ac: 11, maxDex: null, strReq: 0, weight: 4, category: 'Armatura' },
  { name: "Cuoio", type: "Leggera", ac: 11, maxDex: null, strReq: 0, weight: 5, category: 'Armatura' },
  { name: "Cuoio Borchiato", type: "Leggera", ac: 12, maxDex: null, strReq: 0, weight: 6.5, category: 'Armatura' },
  
  // Armature Medie
  { name: "Corazza di Pelle", type: "Media", ac: 12, maxDex: 2, strReq: 0, weight: 6, category: 'Armatura' },
  { name: "Corazza a Scaglie", type: "Media", ac: 14, maxDex: 2, strReq: 0, weight: 22.5, category: 'Armatura' },
  { name: "Giaco di maglia", type: "Media", ac: 14, maxDex: 2, strReq: 0, weight: 10, category: 'Armatura' },
  { name: "Mezza Armatura", type: "Media", ac: 15, maxDex: 2, strReq: 0, weight: 20, category: 'Armatura' },
  
  // Armature Pesanti
  { name: "Cotta di Anelli", type: "Pesante", ac: 14, maxDex: 0, strReq: 0, weight: 15, category: 'Armatura' },
  { name: "Cotta di Maglia", type: "Pesante", ac: 16, maxDex: 0, strReq: 13, weight: 27.5, category: 'Armatura' },
  { name: "Armatura a Strisce", type: "Pesante", ac: 17, maxDex: 0, strReq: 15, weight: 30, category: 'Armatura' },
  { name: "Armatura Completa", type: "Pesante", ac: 18, maxDex: 0, strReq: 15, weight: 32.5, category: 'Armatura' },
  
  // Scudo
  { name: "Scudo", type: "Scudo", ac: 2, maxDex: null, strReq: 0, weight: 3, category: 'Scudo' }
];