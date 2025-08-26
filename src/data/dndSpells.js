// src/data/dndSpells.js

export const dndSpells = [
  // --- TRUCCHETTI (Livello 0) ---
  {
    name: "Mano Magica",
    level: 0,
    school: "Evocazione",
    casting_time: "1 azione",
    range: "9 metri",
    target: "Una mano spettrale appare in un punto a scelta",
    components: ["V", "S"],
    duration: "1 minuto",
    description: "Crei una mano spettrale fluttuante che puoi controllare per manipolare oggetti a distanza. Non può attaccare, attivare oggetti magici o trasportare più di 5 kg.",
    classes: ["Bardo", "Mago", "Stregone", "Warlock"]
  },
  {
    name: "Dardo di Fuoco",
    level: 0,
    school: "Invocazione",
    casting_time: "1 azione",
    range: "36 metri",
    target: "Una creatura o un oggetto",
    components: ["V", "S"],
    duration: "Istantanea",
    description: "Scagli un dardo di fuoco. Effettua un attacco a distanza con incantesimo. Se colpisci, il bersaglio subisce 1d10 danni da fuoco. Il danno aumenta ai livelli 5, 11 e 17.",
    classes: ["Mago", "Stregone"]
  },
  {
    name: "Luce",
    level: 0,
    school: "Invocazione",
    casting_time: "1 azione",
    range: "Tocco",
    target: "Un oggetto che non sia più grande di 3 metri in ogni dimensione",
    components: ["V", "M"],
    material: "una lucciola o un pezzo di fosforo.",
    duration: "1 ora",
    description: "Un oggetto che tocchi emana luce intensa in un raggio di 6 metri e luce fioca per altri 6 metri. L'incantesimo termina se lo lanci di nuovo o lo interrompi.",
    classes: ["Bardo", "Chierico", "Mago"]
  },
  // --- INCANTESIMI DI 1° LIVELLO ---
  {
    name: "Dardo Incantato",
    level: 1,
    school: "Invocazione",
    casting_time: "1 azione",
    range: "36 metri",
    target: "Una o più creature a scelta",
    components: ["V", "S"],
    duration: "Istantanea",
    description: "Crei tre dardi di forza magica. Ogni dardo colpisce automaticamente una creatura a tua scelta che puoi vedere e infligge 1d4+1 danni da forza.",
    higher_level: "Quando lanci questo incantesimo usando uno slot di 2° livello o superiore, crei un dardo aggiuntivo per ogni livello dello slot sopra il 1°.",
    classes: ["Mago", "Stregone"]
  },
  {
    name: "Cura Ferite",
    level: 1,
    school: "Invocazione",
    casting_time: "1 azione",
    range: "Tocco",
    target: "Una creatura che tocchi",
    components: ["V", "S"],
    duration: "Istantanea",
    description: "Una creatura che tocchi recupera 1d8 + il tuo modificatore di caratteristica da incantatore in punti ferita.",
    higher_level: "Quando lanci questo incantesimo usando uno slot di 2° livello o superiore, la cura aumenta di 1d8 per ogni livello dello slot sopra il 1°.",
    classes: ["Bardo", "Chierico", "Druido", "Paladino", "Ranger"]
  },
  {
    name: "Scudo",
    level: 1,
    school: "Abiurazione",
    casting_time: "1 reazione",
    range: "Personale",
    target: "Te stesso",
    components: ["V", "S"],
    duration: "1 round",
    description: "Una barriera invisibile ti protegge. Fino all'inizio del tuo prossimo turno, hai un bonus di +5 alla CA e non subisci danni da Dardo Incantato.",
    classes: ["Mago", "Stregone"]
  },
];