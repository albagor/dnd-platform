// src/data/dndWeapons.js
export const dndWeapons = [
  // Armi Naturali
  { name: "Colpo senz'armi", damage: "1d4", damageType: "contondente", properties: ["leggera"], category: "Naturale", weight: 0 },
  { name: "Morso", damage: "1d6", damageType: "perforante", properties: [], category: "Naturale", weight: 0 },
  { name: "Artigli", damage: "1d4", damageType: "tagliente", properties: ["leggera", "finesse"], category: "Naturale", weight: 0 },

  // Semplici Mischia
  { name: "Ascia", damage: "1d6", damageType: "tagliente", properties: ["lancio (6/18m)", "leggera"], category: "Semplice Mischia", weight: 1 },
  { name: "Bastone ferrato", damage: "1d6", damageType: "contondente", properties: ["versatile (1d8)"], category: "Semplice Mischia", weight: 2 },
  { name: "Falcetto", damage: "1d4", damageType: "tagliente", properties: ["leggera"], category: "Semplice Mischia", weight: 1 },
  { name: "Giavellotto", damage: "1d6", damageType: "perforante", properties: ["lancio (9/36m)"], category: "Semplice Mischia", weight: 1 },
  { name: "Lancia", damage: "1d6", damageType: "perforante", properties: ["lancio (6/18m)", "versatile (1d8)"], category: "Semplice Mischia", weight: 1.5 },
  { name: "Martello leggero", damage: "1d4", damageType: "contondente", properties: ["lancio (6/18m)", "leggera"], category: "Semplice Mischia", weight: 1 },
  { name: "Mazza", damage: "1d6", damageType: "contondente", properties: [], category: "Semplice Mischia", weight: 2 },
  { name: "Pugnale", damage: "1d4", damageType: "perforante", properties: ["lancio (6/18m)", "leggera", "finesse"], category: "Semplice Mischia", weight: 0.5 },

  // Semplici Distanza
  { name: "Arco corto", damage: "1d6", damageType: "perforante", properties: ["munizioni (24/96m)", "due mani"], category: "Semplice Distanza", weight: 1 },
  { name: "Balestra leggera", damage: "1d8", damageType: "perforante", properties: ["munizioni (24/96m)", "due mani", "caricamento"], category: "Semplice Distanza", weight: 2.5 },
  { name: "Dardo", damage: "1d4", damageType: "perforante", properties: ["lancio (6/18m)", "finesse"], category: "Semplice Distanza", weight: 0.1 },
  { name: "Fionda", damage: "1d4", damageType: "contondente", properties: ["munizioni (9/36m)"], category: "Semplice Distanza", weight: 0 },

  // Da Guerra Mischia
  { name: "Alabarda", damage: "1d10", damageType: "tagliente", properties: ["due mani", "pesante", "portata"], category: "Da Guerra Mischia", weight: 3 },
  { name: "Ascia da battaglia", damage: "1d8", damageType: "tagliente", properties: ["versatile (1d10)"], category: "Da Guerra Mischia", weight: 2 },
  { name: "Frusta", damage: "1d4", damageType: "tagliente", properties: ["finesse", "portata"], category: "Da Guerra Mischia", weight: 1.5 },
  { name: "Lancia da cavaliere", damage: "1d12", damageType: "perforante", properties: ["portata", "speciale"], category: "Da Guerra Mischia", weight: 3 },
  { name: "Maglio", damage: "1d12", damageType: "contondente", properties: ["due mani", "pesante"], category: "Da Guerra Mischia", weight: 5 },
  { name: "Martello da guerra", damage: "1d8", damageType: "contondente", properties: ["versatile (1d10)"], category: "Da Guerra Mischia", weight: 1 },
  { name: "Scimitarra", damage: "1d6", damageType: "tagliente", properties: ["leggera", "finesse"], category: "Da Guerra Mischia", weight: 1.5 },
  { name: "Spada corta", damage: "1d6", damageType: "perforante", properties: ["leggera", "finesse"], category: "Da Guerra Mischia", weight: 1 },
  { name: "Spada lunga", damage: "1d8", damageType: "tagliente", properties: ["versatile (1d10)"], category: "Da Guerra Mischia", weight: 1.5 },
  { name: "Spadone", damage: "2d6", damageType: "tagliente", properties: ["due mani", "pesante"], category: "Da Guerra Mischia", weight: 3 },
  { name: "Stocco", damage: "1d8", damageType: "perforante", properties: ["finesse"], category: "Da Guerra Mischia", weight: 1 },
  { name: "Tridente", damage: "1d6", damageType: "perforante", properties: ["lancio (6/18m)", "versatile (1d8)"], category: "Da Guerra Mischia", weight: 2 },
  
  // Da Guerra Distanza
  { name: "Arco lungo", damage: "1d8", damageType: "perforante", properties: ["munizioni (45/180m)", "due mani", "pesante"], category: "Da Guerra Distanza", weight: 1 },
  { name: "Balestra a mano", damage: "1d6", damageType: "perforante", properties: ["munizioni (9/36m)", "leggera", "caricamento"], category: "Da Guerra Distanza", weight: 1.5 },
  { name: "Balestra pesante", damage: "1d10", damageType: "perforante", properties: ["munizioni (30/120m)", "due mani", "pesante", "caricamento"], category: "Da Guerra Distanza", weight: 9 },
];