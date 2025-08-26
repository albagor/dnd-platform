// src/data/dndMonsters.js

// Inizio Aberrazioni
export const dndMonsters = [
  {
    name: "Mind Flayer",
    size: "Media",
    type: "aberrazione",
    alignment: "Legale Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 71,
    hp_dice: "13d8 + 13",
    speed: "9 m",
    ability_scores: { str: 11, dex: 12, con: 12, int: 19, wis: 17, cha: 17 },
    skills: { "Arcano": 7, "Furtività": 4, "Intuizione": 6, "Persuasione": 6 },
    senses: ["scurovisione 36 m", "Percezione passiva 13"],
    languages: ["Telepatia 36 m"],
    challenge_rating: "7",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Magic Resistance",
        description: "Vantaggio ai tiri salvezza contro magia e incantesimi."
      }
    ],
    actions: [
      {
        name: "Tentacles",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "2d6 + 4",
        damage_type: "psichici",
        description: "Un attacco con i tentacoli che può afferrare il bersaglio."
      },
      {
        name: "Extract Brain",
        description: "Un'azione che infligge danni massicci a un nemico afferrato, uccidendolo."
      },
      {
        name: "Mind Blast (Recharge 5-6)",
        description: "Un potente attacco psichico ad area."
      }
    ]
  },
  {
    name: "Mind Flayer Arcanist",
    size: "Media",
    type: "aberrazione",
    alignment: "Legale Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 71,
    hp_dice: "13d8 + 13",
    speed: "9 m",
    ability_scores: { str: 11, dex: 12, con: 12, int: 20, wis: 17, cha: 17 },
    skills: { "Arcano": 8, "Furtività": 4, "Intuizione": 6, "Persuasione": 6 },
    senses: ["scurovisione 36 m", "Percezione passiva 13"],
    languages: ["Telepatia 36 m"],
    challenge_rating: "8",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Magic Resistance",
        description: "Vantaggio ai tiri salvezza contro magia e incantesimi."
      },
      {
        name: "Spellcasting",
        description: "Può lanciare incantesimi da mago (fino al 14° livello)."
      }
    ],
    actions: [
      {
        name: "Tentacles",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "2d6 + 5",
        damage_type: "psichici",
        description: "Un attacco con i tentacoli che può afferrare il bersaglio."
      },
      {
        name: "Extract Brain",
        description: "Un'azione che infligge danni massicci a un nemico afferrato, uccidendolo."
      },
      {
        name: "Mind Blast (Recharge 5-6)",
        description: "Un potente attacco psichico ad area."
      }
    ]
  },
  {
    name: "Nothic",
    size: "Media",
    type: "aberrazione",
    alignment: "Neutrale Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d8 + 18",
    speed: "9 m",
    ability_scores: { str: 14, dex: 16, con: 16, int: 13, wis: 10, cha: 6 },
    skills: { "Arcano": 3, "Furtività": 5, "Intuizione": 2, "Percezione": 2 },
    senses: ["scurovisione 36 m", "Vista Cieca 9 m", "Percezione passiva 12"],
    languages: ["Sotterraneo"],
    challenge_rating: "2",
    environment: "Sotterranei, torri abbandonate",
    traits: [
      {
        name: "One-Eyed Sight",
        description: "Può vedere attraverso oggetti e pareti fino a una certa distanza."
      }
    ],
    actions: [
      {
        name: "Rotting Gaze",
        description: "Un raggio visivo che infligge danni da decomposizione."
      },
      {
        name: "Claws",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "1d6 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Otyugh",
    size: "Grande",
    type: "aberrazione",
    alignment: "Neutrale",
    ac: 14,
    ac_type: "naturale",
    hp: 59,
    hp_dice: "7d10 + 21",
    speed: "6 m",
    ability_scores: { str: 16, dex: 11, con: 16, int: 6, wis: 13, cha: 6 },
    senses: ["scurovisione 36 m", "Percezione passiva 11"],
    languages: ["Telepatia 36 m"],
    challenge_rating: "5",
    environment: "Fogne, sotterranei, discariche",
    traits: [
      {
        name: "Limited Telepathy",
        description: "Può comunicare pensieri semplici con altre creature entro una certa distanza."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        description: "Può effettuare due attacchi con i tentacoli e un morso."
      },
      {
        name: "Tentacle",
        type: "Mischia",
        to_hit: 6,
        reach: "3 m",
        target: "un bersaglio",
        damage: "1d8 + 3",
        damage_type: "contundenti",
        description: "Il colpo con il tentacolo può afferrare il bersaglio e infliggergli una malattia."
      },
      {
        name: "Bite",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "1d8 + 3",
        damage_type: "perforanti",
        description: "Un morso che infligge danni."
      }
    ]
  },
  {
    name: "Slaad Blu",
    size: "Grande",
    type: "aberrazione",
    alignment: "Caotico Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 85,
    hp_dice: "10d10 + 30",
    speed: "9 m",
    ability_scores: { str: 18, dex: 15, con: 16, int: 7, wis: 7, cha: 9 },
    skills: { "Percezione": 1 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: ["Comune", "Slaad"],
    challenge_rating: "7",
    environment: "Limbo, Piani esterni",
    traits: [
      {
        name: "Regeneration",
        description: "Rigenera un certo numero di punti ferita per turno."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        description: "Può effettuare due attacchi, uno con gli artigli e uno con il morso."
      },
      {
        name: "Claw",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "2d6 + 4",
        damage_type: "taglienti",
        description: "Un attacco con gli artigli."
      },
      {
        name: "Bite",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "1d6 + 4",
        damage_type: "perforanti",
        description: "Un morso che può infliggere danni."
      }
    ]
  },
  {
    name: "Slaad Girino",
    size: "Piccola",
    type: "aberrazione",
    alignment: "Caotico Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 1,
    hp_dice: "1d4-1",
    speed: "6 m, nuoto 6 m",
    ability_scores: { str: 7, dex: 15, con: 8, int: 3, wis: 5, cha: 3 },
    skills: { "Furtività": 4 },
    senses: ["scurovisione 9 m", "Percezione passiva 7"],
    languages: [],
    challenge_rating: "0",
    environment: "Limbo, Piani esterni",
    traits: [],
    actions: [
      {
        name: "Bite",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "1",
        damage_type: "perforanti",
        description: "Un morso debole."
      }
    ]
  },
  {
    name: "Slaad Rosso",
    size: "Grande",
    type: "aberrazione",
    alignment: "Caotico Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 65,
    hp_dice: "10d10 + 10",
    speed: "9 m",
    ability_scores: { str: 16, dex: 12, con: 13, int: 7, wis: 7, cha: 9 },
    skills: { "Percezione": 1 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: ["Comune", "Slaad"],
    challenge_rating: "5",
    environment: "Limbo, Piani esterni",
    traits: [
      {
        name: "Regeneration",
        description: "Rigenera un certo numero di punti ferita per turno."
      },
      {
        name: "Control Slaad",
        description: "Può controllare altri Slaad di un tipo inferiore."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        description: "Può effettuare due attacchi, uno con gli artigli e uno con il morso."
      },
      {
        name: "Claw",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "2d6 + 3",
        damage_type: "taglienti",
        description: "Un attacco con gli artigli che può impiantare un uovo di Slaad."
      },
      {
        name: "Bite",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "1d6 + 3",
        damage_type: "perforanti",
        description: "Un morso che infligge danni."
      }
    ]
  },
  {
    name: "Spectator",
    size: "Media",
    type: "aberrazione",
    alignment: "Legale Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 39,
    hp_dice: "6d8 + 12",
    speed: "0 m, volare 9 m (libero)",
    ability_scores: { str: 1, dex: 14, con: 14, int: 13, wis: 14, cha: 11 },
    skills: { "Percezione": 4 },
    senses: ["scurovisione 36 m", "Percezione passiva 14"],
    languages: ["Telepatia 36 m"],
    challenge_rating: "3",
    environment: "Sottosuolo, rovine",
    traits: [
      {
        name: "Telepathic Bond",
        description: "Può comunicare telepaticamente con il suo creatore e con altre creature."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Mischia",
        to_hit: 1,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "1d6",
        damage_type: "perforanti",
        description: "Un morso."
      },
      {
        name: "Eye Rays",
        description: "Spara due raggi oculari con effetti diversi, come la paralisi o il terrore."
      },
      {
        name: "Create Guardian",
        description: "Può creare una creatura guardiana se ne ha bisogno."
      }
    ]
  },
  {
    name: "Slaad della Morte",
    size: "Grande",
    type: "aberrazione",
    alignment: "Caotico Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 170,
    hp_dice: "20d10 + 60",
    speed: "9 m",
    ability_scores: { str: 20, dex: 15, con: 17, int: 15, wis: 10, cha: 16 },
    skills: { "Percezione": 3, "Stealth": 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Comune", "Slaad", "Telepatia"],
    challenge_rating: "14",
    environment: "Limbo, Piani esterni",
    traits: [
      {
        name: "Regeneration",
        description: "Rigenera un certo numero di punti ferita per turno."
      },
      {
        name: "Control Slaad",
        description: "Può controllare tutti gli Slaad di tipo inferiore."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        description: "Può effettuare due attacchi, uno con un'arma e uno con un artiglio."
      },
      {
        name: "Greatsword",
        type: "Mischia",
        to_hit: 10,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "2d6 + 5",
        damage_type: "taglienti"
      },
      {
        name: "Claw",
        type: "Mischia",
        to_hit: 10,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "2d6 + 5",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Slaad Grigio",
    size: "Grande",
    type: "aberrazione",
    alignment: "Caotico Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 105,
    hp_dice: "14d10 + 28",
    speed: "9 m",
    ability_scores: { str: 18, dex: 15, con: 14, int: 10, wis: 8, cha: 10 },
    skills: { "Percezione": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Comune", "Slaad"],
    challenge_rating: "9",
    environment: "Limbo, Piani esterni",
    traits: [
      {
        name: "Regeneration",
        description: "Rigenera un certo numero di punti ferita per turno."
      },
      {
        name: "Control Slaad",
        description: "Può controllare altri Slaad di un tipo inferiore."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        description: "Può effettuare due attacchi, uno con un'arma e uno con un artiglio."
      },
      {
        name: "Greatsword",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "2d6 + 4",
        damage_type: "taglienti"
      },
      {
        name: "Claw",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "2d6 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Slaad Verde",
    size: "Grande",
    type: "aberrazione",
    alignment: "Caotico Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 127,
    hp_dice: "17d10 + 34",
    speed: "9 m",
    ability_scores: { str: 20, dex: 15, con: 14, int: 12, wis: 10, cha: 12 },
    skills: { "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Comune", "Slaad"],
    challenge_rating: "10",
    environment: "Limbo, Piani esterni",
    traits: [
      {
        name: "Regeneration",
        description: "Rigenera un certo numero di punti ferita per turno."
      },
      {
        name: "Control Slaad",
        description: "Può controllare altri Slaad di un tipo inferiore."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        description: "Può effettuare due attacchi, uno con un'arma e uno con un artiglio."
      },
      {
        name: "Greatsword",
        type: "Mischia",
        to_hit: 9,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "2d6 + 5",
        damage_type: "taglienti"
      },
      {
        name: "Claw",
        type: "Mischia",
        to_hit: 9,
        reach: "1,5 m",
        target: "un bersaglio",
        damage: "2d6 + 5",
        damage_type: "taglienti"
      }
    ]
  },  //fine aberrazioni//

  {
    name: "Alce",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 10,
    ac_type: "",
    hp: 13,
    hp_dice: "2d10 + 2",
    speed: "15 m",
    ability_scores: { str: 16, dex: 10, con: 12, int: 2, wis: 10, cha: 5 },
    skills: {},
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Montagna, foresta, prateria",
    traits: [
      {
        name: "Carica",
        description: "Se si muove di 6 metri in linea retta verso un bersaglio e lo colpisce, infligge danni extra e può farlo cadere a terra."
      }
    ],
    actions: [
      {
        name: "Corna",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "contundente"
      },
      {
        name: "Zoccoli",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "2d4 + 3",
        damage_type: "contundente",
        description: "Può attaccare con gli zoccoli solo un bersaglio a terra."
      }
    ]
  },
  {
    name: "Alce Gigante",
    size: "Enorme",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 42,
    hp_dice: "5d12 + 10",
    speed: "18 m",
    ability_scores: { str: 18, dex: 10, con: 14, int: 2, wis: 10, cha: 5 },
    skills: {},
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "2",
    environment: "Collina, Foresta, Montagna, Prateria",
    traits: [
      {
        name: "Carica",
        description: "Se si muove in linea retta per 6 metri, può fare un attacco aggiuntivo."
      }
    ],
    actions: [
      {
        name: "Gore",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Allosauro",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 51,
    hp_dice: "6d10 + 18",
    speed: "15 m",
    ability_scores: { str: 19, dex: 13, con: 17, int: 2, wis: 12, cha: 5 },
    skills: {},
    senses: ["Percezione passiva 11"],
    languages: [],
    challenge_rating: "2",
    environment: "Prateria",
    traits: [
      {
        name: "Pounce",
        description: "Se si muove per 9 metri e colpisce con un attacco, può fare un attacco di morso aggiuntivo."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d10 + 4",
        damage_type: "perforante"
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Anchilosauro",
    size: "Enorme",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 15,
    ac_type: "naturale",
    hp: 68,
    hp_dice: "8d12 + 16",
    speed: "9 m",
    ability_scores: { str: 19, dex: 9, con: 15, int: 2, wis: 12, cha: 5 },
    skills: {},
    senses: ["Percezione passiva 11"],
    languages: [],
    challenge_rating: "3",
    environment: "Prateria",
    traits: [],
    actions: [
      {
        name: "Coda",
        type: "Mischia",
        to_hit: 7,
        reach: "3 m",
        damage: "4d6 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Aquila",
    size: "Piccola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "",
    hp: 3,
    hp_dice: "1d6",
    speed: "3 m, volare 18 m",
    ability_scores: { str: 10, dex: 17, con: 10, int: 2, wis: 14, cha: 6 },
    skills: { "Percezione": 4 },
    senses: ["Percezione passiva 14"],
    languages: [],
    challenge_rating: "0",
    environment: "Collina, Costa, Montagna, Prateria",
    traits: [
      {
        name: "Vista Acuta",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che si basano sulla vista."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d4",
        damage_type: "tagliente"
      }
    ]
  },
  {
    name: "Aquila Gigante",
    size: "Grande",
    type: "bestia",
    alignment: "Neutrale Buono",
    ac: 13,
    ac_type: "",
    hp: 26,
    hp_dice: "4d10 + 4",
    speed: "3 m, volare 24 m",
    ability_scores: { str: 16, dex: 17, con: 13, int: 8, wis: 14, cha: 10 },
    skills: { "Percezione": 4 },
    senses: ["Percezione passiva 14"],
    languages: ["Comune", "Auran", "Gigante"],
    challenge_rating: "1",
    environment: "Collina, Costa, Montagna, Prateria",
    traits: [
      {
        name: "Vista Acuta",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che si basano sulla vista."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con gli artigli."
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "tagliente"
      }
    ]
  },
  {
    name: "Avvoltoio",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 10,
    ac_type: "",
    hp: 1,
    hp_dice: "1d8",
    speed: "3 m, volare 15 m",
    ability_scores: { str: 7, dex: 10, con: 10, int: 2, wis: 10, cha: 3 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "0",
    environment: "Collina, Deserto, Prateria",
    traits: [
      {
        name: "Vista Acuta",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che si basano sulla vista."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1",
        damage_type: "tagliente"
      }
    ]
  },
  {
    name: "Avvoltoio Gigante",
    size: "Grande",
    type: "bestia",
    alignment: "Neutrale Malvagio",
    ac: 10,
    ac_type: "",
    hp: 22,
    hp_dice: "4d10",
    speed: "3 m, volare 18 m",
    ability_scores: { str: 15, dex: 10, con: 11, int: 2, wis: 12, cha: 7 },
    senses: ["Percezione passiva 11"],
    languages: [],
    challenge_rating: "1",
    environment: "Deserto, Prateria",
    traits: [
      {
        name: "Vista Acuta",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che si basano sulla vista."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con gli artigli."
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "tagliente"
      }
    ]
  },
  {
    name: "Babbuino",
    size: "Piccola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 3,
    hp_dice: "1d6",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 8, dex: 14, con: 11, int: 4, wis: 12, cha: 6 },
    senses: ["Percezione passiva 11"],
    languages: [],
    challenge_rating: "0",
    environment: "Collina, Foresta",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 1,
        reach: "1,5 m",
        damage: "1d4 - 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Beccoaguzzo",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "",
    hp: 19,
    hp_dice: "3d10 + 3",
    speed: "12 m",
    ability_scores: { str: 12, dex: 13, con: 13, int: 2, wis: 10, cha: 5 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Collina, Prateria",
    traits: [
      {
        name: "Vista Acuta",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che si basano sulla vista."
      }
    ],
    actions: [
      {
        name: "Becco",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d8 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Cammello",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 9,
    ac_type: "",
    hp: 15,
    hp_dice: "2d10 + 4",
    speed: "15 m",
    ability_scores: { str: 16, dex: 8, con: 14, int: 2, wis: 8, cha: 5 },
    senses: ["Percezione passiva 9"],
    languages: [],
    challenge_rating: "1/8",
    environment: "Deserto",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d4 + 3",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Capra",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 10,
    ac_type: "",
    hp: 4,
    hp_dice: "1d8",
    speed: "12 m",
    ability_scores: { str: 12, dex: 10, con: 11, int: 2, wis: 10, cha: 5 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "0",
    environment: "Collina, Montagna, Prateria, Urbano",
    traits: [
      {
        name: "Carica",
        description: "Se si muove di 6 metri in linea retta verso un bersaglio e lo colpisce, infligge danni extra."
      }
    ],
    actions: [
      {
        name: "Corno",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Capra Gigante",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "naturale",
    hp: 23,
    hp_dice: "3d10 + 6",
    speed: "12 m",
    ability_scores: { str: 17, dex: 11, con: 14, int: 3, wis: 12, cha: 6 },
    senses: ["Percezione passiva 11"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Collina, Montagna, Prateria",
    traits: [
      {
        name: "Carica",
        description: "Se si muove di 6 metri in linea retta verso un bersaglio e lo colpisce, infligge danni extra."
      }
    ],
    actions: [
      {
        name: "Corno",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "2d4 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Cavallo da Galoppo",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 10,
    ac_type: "",
    hp: 19,
    hp_dice: "3d10 + 3",
    speed: "18 m",
    ability_scores: { str: 16, dex: 10, con: 12, int: 2, wis: 11, cha: 7 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Prateria, Urbano",
    traits: [],
    actions: [
      {
        name: "Zoccolo",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "2d4 + 3",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Cavallo da Guerra",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "naturale",
    hp: 19,
    hp_dice: "3d10 + 3",
    speed: "18 m",
    ability_scores: { str: 18, dex: 12, con: 13, int: 2, wis: 12, cha: 7 },
    senses: ["Percezione passiva 11"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Urbano",
    traits: [
      {
        name: "Carica",
        description: "Se si muove di 6 metri in linea retta verso un bersaglio e lo colpisce, infligge danni extra."
      }
    ],
    actions: [
      {
        name: "Zoccolo",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Cavallo da Tiro",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 10,
    ac_type: "",
    hp: 19,
    hp_dice: "3d10 + 3",
    speed: "12 m",
    ability_scores: { str: 18, dex: 10, con: 12, int: 2, wis: 11, cha: 7 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Urbano",
    traits: [],
    actions: [
      {
        name: "Zoccolo",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d4 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Cavalluccio Marino",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "",
    hp: 1,
    hp_dice: "1d4 - 1",
    speed: "0 m, nuoto 6 m",
    ability_scores: { str: 1, dex: 13, con: 8, int: 1, wis: 10, cha: 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "0",
    environment: "Subacqueo",
    traits: [],
    actions: []
  },
  {
    name: "Cavalluccio Marino Gigante",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 13,
    hp_dice: "2d10 + 2",
    speed: "0 m, nuoto 12 m",
    ability_scores: { str: 12, dex: 15, con: 12, int: 2, wis: 12, cha: 5 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Subacqueo",
    traits: [],
    actions: [
      {
        name: "Coda",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Cinghiale",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "12 m",
    ability_scores: { str: 13, dex: 11, con: 12, int: 2, wis: 9, cha: 5 },
    senses: ["Percezione passiva 9"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Collina, Foresta, Prateria",
    traits: [
      {
        name: "Carica",
        description: "Se si muove di 6 metri in linea retta verso un bersaglio e lo colpisce, infligge danni extra."
      },
      {
        name: "Implacabile",
        description: "Se un danno lo ridurrebbe a 0 punti ferita, può restare a 1 punto ferita (una volta per riposo)."
      }
    ],
    actions: [
      {
        name: "Zanna",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Cinghiale Gigante",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 42,
    hp_dice: "5d10 + 15",
    speed: "12 m",
    ability_scores: { str: 17, dex: 10, con: 16, int: 2, wis: 9, cha: 5 },
    senses: ["Percezione passiva 9"],
    languages: [],
    challenge_rating: "2",
    environment: "Collina, Foresta, Prateria",
    traits: [
      {
        name: "Carica",
        description: "Se si muove di 6 metri in linea retta verso un bersaglio e lo colpisce, infligge danni extra."
      },
      {
        name: "Implacabile",
        description: "Se un danno lo ridurrebbe a 0 punti ferita, può restare a 1 punto ferita (una volta per riposo)."
      }
    ],
    actions: [
      {
        name: "Zanna",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Coccodrillo",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 19,
    hp_dice: "3d10 + 3",
    speed: "6 m, nuoto 9 m",
    ability_scores: { str: 15, dex: 8, con: 13, int: 2, wis: 10, cha: 5 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Palude, Urbano",
    traits: [
      {
        name: "Camuffamento",
        description: "Ha vantaggio ai tiri per nascondersi in acqua."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Coccodrillo Gigante",
    size: "Enorme",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 14,
    ac_type: "naturale",
    hp: 85,
    hp_dice: "9d12 + 27",
    speed: "6 m, nuoto 15 m",
    ability_scores: { str: 21, dex: 9, con: 17, int: 2, wis: 10, cha: 7 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "5",
    environment: "Palude",
    traits: [
      {
        name: "Camuffamento",
        description: "Ha vantaggio ai tiri per nascondersi in acqua."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "2d8 + 5",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Corvo",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 1,
    hp_dice: "1d4 - 1",
    speed: "3 m, volare 15 m",
    ability_scores: { str: 2, dex: 14, con: 8, int: 2, wis: 14, cha: 6 },
    senses: ["Percezione passiva 12"],
    languages: [],
    challenge_rating: "0",
    environment: "Collina, Palude, Urbano",
    traits: [
      {
        name: "Linguaggio",
        description: "Può imitare suoni semplici che ha sentito."
      }
    ],
    actions: [
      {
        name: "Becco",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Daino",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 4,
    hp_dice: "1d8",
    speed: "15 m",
    ability_scores: { str: 13, dex: 16, con: 11, int: 2, wis: 14, cha: 5 },
    senses: ["Percezione passiva 12"],
    languages: [],
    challenge_rating: "0",
    environment: "Foresta, Prateria",
    traits: [],
    actions: [
      {
        name: "Zoccolo",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Elefante",
    size: "Enorme",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 76,
    hp_dice: "8d12 + 24",
    speed: "12 m",
    ability_scores: { str: 22, dex: 9, con: 16, int: 3, wis: 11, cha: 6 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "4",
    environment: "Foresta, Savana",
    traits: [
      {
        name: "Trample",
        description: "Può schiacciare le creature sotto i suoi piedi dopo averle spostate."
      }
    ],
    actions: [
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 8,
        reach: "3 m",
        damage: "3d6 + 6",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Faina",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 1,
    hp_dice: "1d4 - 1",
    speed: "6 m",
    ability_scores: { str: 3, dex: 15, con: 8, int: 2, wis: 12, cha: 3 },
    senses: ["scurovisione 9 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "0",
    environment: "Foresta",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Faina Gigante",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "4d8 + 4",
    speed: "12 m",
    ability_scores: { str: 16, dex: 15, con: 12, int: 3, wis: 12, cha: 6 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "1/8",
    environment: "Collina, Foresta, Prateria",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Falco",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "",
    hp: 1,
    hp_dice: "1d4",
    speed: "3 m, volare 18 m",
    ability_scores: { str: 10, dex: 16, con: 10, int: 2, wis: 14, cha: 6 },
    skills: { "Percezione": 4 },
    senses: ["Percezione passiva 14"],
    languages: [],
    challenge_rating: "0",
    environment: "Collina, Costa, Foresta, Montagna, Prateria",
    traits: [
      {
        name: "Vista Acuta",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che si basano sulla vista."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d4",
        damage_type: "tagliente"
      }
    ]
  },
  {
    name: "Falco di Sangue",
    size: "Piccola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "",
    hp: 2,
    hp_dice: "1d6",
    speed: "3 m, volare 15 m",
    ability_scores: { str: 8, dex: 16, con: 10, int: 2, wis: 14, cha: 6 },
    skills: { "Percezione": 4 },
    senses: ["Percezione passiva 14"],
    languages: [],
    challenge_rating: "1/8",
    environment: "Artico, Collina, Costa, Foresta, Montagna, Prateria",
    traits: [
      {
        name: "Vista Acuta",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che si basano sulla vista."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "tagliente"
      }
    ]
  },
  {
    name: "Gatto",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 2,
    hp_dice: "1d4",
    speed: "12 m, scalare 9 m",
    ability_scores: { str: 3, dex: 15, con: 10, int: 3, wis: 12, cha: 7 },
    skills: { "Furtività": 4, "Percezione": 3 },
    senses: ["Percezione passiva 13"],
    languages: [],
    challenge_rating: "0",
    environment: "Deserto, Foresta, Prateria, Urbano",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 0,
        reach: "1,5 m",
        damage: "1d4-1",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Gorilla",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 19,
    hp_dice: "3d8 + 6",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 16, dex: 14, con: 14, int: 6, wis: 12, cha: 7 },
    skills: { "Atletica": 5, "Percezione": 3 },
    senses: ["Percezione passiva 13"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Foresta",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi a pugno."
      },
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Gorilla Gigante",
    size: "Enorme",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 105,
    hp_dice: "10d12 + 40",
    speed: "12 m, scalare 12 m",
    ability_scores: { str: 23, dex: 14, con: 18, int: 7, wis: 12, cha: 9 },
    skills: { "Atletica": 8, "Percezione": 3 },
    senses: ["Percezione passiva 13"],
    languages: [],
    challenge_rating: "7",
    environment: "Foresta",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi a pugno."
      },
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 9,
        reach: "3 m",
        damage: "2d6 + 6",
        damage_type: "contundente"
      },
      {
        name: "Roccia",
        type: "Distanza",
        to_hit: 9,
        range: "9/18 m",
        damage: "2d6 + 6",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Granchio",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "",
    hp: 2,
    hp_dice: "1d4",
    speed: "6 m, nuoto 6 m",
    ability_scores: { str: 2, dex: 11, con: 10, int: 1, wis: 8, cha: 2 },
    senses: ["vista cieca 9 m", "Percezione passiva 9"],
    languages: [],
    challenge_rating: "0",
    environment: "Costa",
    traits: [],
    actions: [
      {
        name: "Chela",
        type: "Mischia",
        to_hit: 0,
        reach: "1,5 m",
        damage: "1d4 - 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Granchio Gigante",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 15,
    ac_type: "naturale",
    hp: 13,
    hp_dice: "2d8 + 4",
    speed: "9 m, nuoto 9 m",
    ability_scores: { str: 13, dex: 15, con: 14, int: 1, wis: 9, cha: 3 },
    senses: ["vista cieca 9 m", "Percezione passiva 9"],
    languages: [],
    challenge_rating: "1/8",
    environment: "Costa",
    traits: [],
    actions: [
      {
        name: "Chela",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Gufo",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "",
    hp: 1,
    hp_dice: "1d4 - 1",
    speed: "1,5 m, volare 18 m",
    ability_scores: { str: 3, dex: 13, con: 8, int: 2, wis: 12, cha: 7 },
    skills: { "Furtività": 3, "Percezione": 3 },
    senses: ["scurovisione 36 m", "Percezione passiva 13"],
    languages: [],
    challenge_rating: "0",
    environment: "Artico, Foresta",
    traits: [
      {
        name: "Ecolocalizzazione",
        description: "Non può usare la vista cieca se assordato."
      },
      {
        name: "Udito Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che si basano sull'udito."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1",
        damage_type: "tagliente"
      }
    ]
  },
  {
    name: "Gufo Gigante",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 19,
    hp_dice: "3d10 + 3",
    speed: "3 m, volare 18 m",
    ability_scores: { str: 14, dex: 15, con: 12, int: 8, wis: 13, cha: 7 },
    skills: { "Furtività": 4, "Percezione": 3 },
    senses: ["scurovisione 36 m", "Percezione passiva 13"],
    languages: ["Comune", "Gufo"],
    challenge_rating: "1/4",
    environment: "Artico, Collina, Foresta",
    traits: [
      {
        name: "Ecolocalizzazione",
        description: "Non può usare la vista cieca se assordato."
      },
      {
        name: "Udito Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che si basano sull'udito."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "tagliente"
      }
    ]
  },
  {
    name: "Iena",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "",
    hp: 5,
    hp_dice: "1d8 + 1",
    speed: "15 m",
    ability_scores: { str: 13, dex: 12, con: 13, int: 2, wis: 10, cha: 5 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "0",
    environment: "Collina, Deserto, Foresta, Prateria",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Iena Gigante",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d10 + 12",
    speed: "15 m",
    ability_scores: { str: 18, dex: 14, con: 14, int: 2, wis: 12, cha: 7 },
    senses: ["Percezione passiva 11"],
    languages: [],
    challenge_rating: "1",
    environment: "Collina, Deserto, Foresta, Prateria",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Leone",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 26,
    hp_dice: "4d10 + 4",
    speed: "15 m",
    ability_scores: { str: 17, dex: 15, con: 13, int: 3, wis: 12, cha: 8 },
    skills: { "Percezione": 3, "Furtività": 4 },
    senses: ["Percezione passiva 12"],
    languages: [],
    challenge_rating: "1",
    environment: "Collina, Deserto, Montagna, Prateria",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con gli artigli."
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Lucertola",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "",
    hp: 2,
    hp_dice: "1d4",
    speed: "6 m, scalare 6 m",
    ability_scores: { str: 2, dex: 13, con: 10, int: 1, wis: 8, cha: 3 },
    senses: ["scurovisione 9 m", "Percezione passiva 9"],
    languages: [],
    challenge_rating: "0",
    environment: "Costa, Deserto, Foresta, Palude, Sottosuolo",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 1,
        reach: "1,5 m",
        damage: "1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Lucertola Gigante",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 19,
    hp_dice: "3d10 + 3",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 15, dex: 12, con: 13, int: 2, wis: 10, cha: 5 },
    senses: ["scurovisione 9 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Costa, Deserto, Foresta, Palude, Sottosuolo",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Lupo",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "12 m",
    ability_scores: { str: 12, dex: 15, con: 12, int: 3, wis: 12, cha: 6 },
    skills: { "Percezione": 3, "Furtività": 4 },
    senses: ["Percezione passiva 13"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Collina, Foresta, Prateria",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      },
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Lupo Feroce",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 39,
    hp_dice: "6d10 + 6",
    speed: "15 m",
    ability_scores: { str: 18, dex: 15, con: 13, int: 3, wis: 12, cha: 7 },
    skills: { "Percezione": 3, "Furtività": 4 },
    senses: ["Percezione passiva 13"],
    languages: [],
    challenge_rating: "1",
    environment: "Collina, Foresta",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      },
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Mammut",
    size: "Enorme",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 126,
    hp_dice: "11d12 + 55",
    speed: "12 m",
    ability_scores: { str: 24, dex: 9, con: 21, int: 3, wis: 11, cha: 6 },
    skills: {},
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "6",
    environment: "Artico",
    traits: [
      {
        name: "Trample",
        description: "Può schiacciare le creature sotto i suoi piedi dopo averle spostate."
      }
    ],
    actions: [
      {
        name: "Zanne",
        type: "Mischia",
        to_hit: 9,
        reach: "3 m",
        damage: "4d8 + 7",
        damage_type: "perforante"
      },
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 9,
        reach: "1,5 m",
        damage: "3d8 + 7",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Mastino",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "12 m",
    ability_scores: { str: 13, dex: 12, con: 12, int: 3, wis: 12, cha: 7 },
    skills: { "Percezione": 3, "Furtività": 3 },
    senses: ["Percezione passiva 13"],
    languages: [],
    challenge_rating: "1/8",
    environment: "Collina, Foresta, Urbano",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Millepiedi Gigante",
    size: "Piccola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 4,
    hp_dice: "1d6 + 1",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 5, dex: 12, con: 12, int: 1, wis: 7, cha: 3 },
    senses: ["scurovisione 9 m", "Percezione passiva 8"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Sottosuolo, Urbano",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "perforante",
        description: "Infligge danni da perforazione e veleno."
      }
    ]
  },
  {
    name: "Mulo",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 10,
    ac_type: "",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "12 m",
    ability_scores: { str: 14, dex: 10, con: 13, int: 2, wis: 10, cha: 5 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/8",
    environment: "Collina, Deserto, Urbano",
    traits: [
      {
        name: "Carico",
        description: "Può trasportare il doppio del suo peso."
      }
    ],
    actions: [
      {
        name: "Zoccolo",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Orca Assassina",
    size: "Enorme",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 90,
    hp_dice: "12d12 + 12",
    speed: "0 m, nuoto 18 m",
    ability_scores: { str: 19, dex: 12, con: 13, int: 3, wis: 12, cha: 7 },
    senses: ["vista cieca 36 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "3",
    environment: "Subacqueo",
    traits: [
      {
        name: "Soffio",
        description: "Può respirare sia aria che acqua."
      },
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Orso Bruno",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "naturale",
    hp: 34,
    hp_dice: "4d10 + 12",
    speed: "12 m, scalare 9 m",
    ability_scores: { str: 19, dex: 10, con: 16, int: 2, wis: 13, cha: 7 },
    senses: ["Percezione passiva 13"],
    languages: [],
    challenge_rating: "1",
    environment: "Artico, Collina, Foresta",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "L'orso effettua un attacco con il morso e uno con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "perforante"
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Orso delle Caverne",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 42,
    hp_dice: "5d10 + 15",
    speed: "12 m, scalare 9 m",
    ability_scores: { str: 20, dex: 10, con: 16, int: 2, wis: 13, cha: 7 },
    senses: ["Percezione passiva 13"],
    languages: [],
    challenge_rating: "2",
    environment: "Artico, Sottosuolo",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "L'orso effettua un attacco con il morso e uno con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d8 + 5",
        damage_type: "perforante"
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d6 + 5",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Orso Nero",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "naturale",
    hp: 19,
    hp_dice: "3d8 + 6",
    speed: "12 m, scalare 9 m",
    ability_scores: { str: 15, dex: 10, con: 14, int: 2, wis: 12, cha: 7 },
    senses: ["Percezione passiva 13"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Foresta",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "L'orso effettua un attacco con il morso e uno con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "2d4 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Orso Polare",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 42,
    hp_dice: "5d10 + 15",
    speed: "12 m, nuoto 9 m",
    ability_scores: { str: 20, dex: 10, con: 16, int: 2, wis: 13, cha: 7 },
    senses: ["Percezione passiva 13"],
    languages: [],
    challenge_rating: "2",
    environment: "Artico, Sottosuolo",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "L'orso effettua un attacco con il morso e uno con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d8 + 5",
        damage_type: "perforante"
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d6 + 5",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Pantera",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 13,
    hp_dice: "2d8 + 4",
    speed: "15 m, scalare 12 m",
    ability_scores: { str: 14, dex: 15, con: 12, int: 3, wis: 14, cha: 7 },
    skills: { "Furtività": 4, "Percezione": 4 },
    senses: ["Percezione passiva 14"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Collina, Foresta, Prateria",
    traits: [
      {
        name: "Pounce",
        description: "Se si muove per 9 metri e colpisce con un attacco, può fare un attacco di morso aggiuntivo."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Piovra",
    size: "Piccola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 3,
    hp_dice: "1d6",
    speed: "3 m, nuoto 9 m",
    ability_scores: { str: 4, dex: 15, con: 11, int: 3, wis: 10, cha: 4 },
    senses: ["scurovisione 9 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "0",
    environment: "Subacqueo",
    traits: [
      {
        name: "Camuffamento",
        description: "Ha vantaggio ai tiri per nascondersi in acqua."
      }
    ],
    actions: [
      {
        name: "Tentacolo",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Piovra Gigante",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "8d10 + 8",
    speed: "3 m, nuoto 18 m",
    ability_scores: { str: 17, dex: 13, con: 13, int: 4, wis: 10, cha: 4 },
    senses: ["scurovisione 9 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "1",
    environment: "Subacqueo",
    traits: [
      {
        name: "Camuffamento",
        description: "Ha vantaggio ai tiri per nascondersi in acqua."
      }
    ],
    actions: [
      {
        name: "Tentacolo",
        type: "Mischia",
        to_hit: 5,
        reach: "4,5 m",
        damage: "1d6 + 3",
        damage_type: "contundente",
        description: "Infligge danni e può afferrare il bersaglio."
      }
    ]
  },
  {
    name: "Pipistrello",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 1,
    hp_dice: "1d4 - 1",
    speed: "1,5 m, volare 9 m",
    ability_scores: { str: 2, dex: 15, con: 8, int: 2, wis: 12, cha: 4 },
    senses: ["vista cieca 18 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "0",
    environment: "Foresta, Sottosuolo",
    traits: [
      {
        name: "Ecolocalizzazione",
        description: "Non può usare la vista cieca se assordato."
      },
      {
        name: "Udito Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che si basano sull'udito."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 0,
        reach: "1,5 m",
        damage: "1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Pipistrello Gigante",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "4d10",
    speed: "3 m, volare 18 m",
    ability_scores: { str: 16, dex: 15, con: 11, int: 2, wis: 12, cha: 6 },
    senses: ["vista cieca 18 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Foresta, Sottosuolo",
    traits: [
      {
        name: "Ecolocalizzazione",
        description: "Non può usare la vista cieca se assordato."
      },
      {
        name: "Udito Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che si basano sull'udito."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Plesiosauro",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 68,
    hp_dice: "8d10 + 24",
    speed: "6 m, nuoto 12 m",
    ability_scores: { str: 18, dex: 15, con: 16, int: 2, wis: 12, cha: 5 },
    senses: ["Percezione passiva 11"],
    languages: [],
    challenge_rating: "2",
    environment: "Costa, Subacqueo",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "3 m",
        damage: "2d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Pony",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 10,
    ac_type: "",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "12 m",
    ability_scores: { str: 14, dex: 10, con: 13, int: 2, wis: 11, cha: 7 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/8",
    environment: "Urbano",
    traits: [],
    actions: [
      {
        name: "Zoccolo",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Pteranodonte",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 13,
    hp_dice: "3d8",
    speed: "3 m, volare 18 m",
    ability_scores: { str: 12, dex: 15, con: 10, int: 2, wis: 9, cha: 5 },
    senses: ["Percezione passiva 9"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Costa, Montagna, Prateria",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Quipper",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "",
    hp: 1,
    hp_dice: "1d4 - 1",
    speed: "0 m, nuoto 12 m",
    ability_scores: { str: 10, dex: 16, con: 9, int: 1, wis: 7, cha: 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 8"],
    languages: [],
    challenge_rating: "0",
    environment: "Subacqueo",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d4 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Ragno",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 1,
    hp_dice: "1d4 - 1",
    speed: "6 m, scalare 6 m",
    ability_scores: { str: 2, dex: 14, con: 8, int: 1, wis: 10, cha: 2 },
    senses: ["vista cieca 3 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "0",
    environment: "Foresta, Sottosuolo",
    traits: [
      {
        name: "Ragnatela",
        description: "Può muoversi sulle ragnatele e trappole senza restrizioni."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 - 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Ragno Gigante",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 14,
    ac_type: "naturale",
    hp: 26,
    hp_dice: "4d10 + 4",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 14, dex: 16, con: 12, int: 2, wis: 11, cha: 4 },
    senses: ["vista cieca 3 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "1",
    environment: "Deserto, Foresta, Palude, Sottosuolo, Urbano",
    traits: [
      {
        name: "Ragnatela",
        description: "Può muoversi sulle ragnatele e intrappolare creature."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Ragno Lupo Gigante",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "12 m, scalare 12 m",
    ability_scores: { str: 12, dex: 16, con: 13, int: 3, wis: 12, cha: 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Collina, Costa, Deserto, Foresta, Prateria",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Rana",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "",
    hp: 1,
    hp_dice: "1d4 - 1",
    speed: "6 m, nuoto 6 m",
    ability_scores: { str: 1, dex: 13, con: 8, int: 1, wis: 8, cha: 3 },
    senses: ["Percezione passiva 9"],
    languages: [],
    challenge_rating: "0",
    environment: "Palude",
    traits: [
      {
        name: "Salto Alto",
        description: "Può fare un salto in alto di 3 metri."
      }
    ],
    actions: []
  },
  {
    name: "Rana Gigante",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "",
    hp: 18,
    hp_dice: "4d8",
    speed: "9 m, nuoto 9 m",
    ability_scores: { str: 13, dex: 13, con: 11, int: 2, wis: 10, cha: 3 },
    senses: ["scurovisione 9 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Foresta, Palude",
    traits: [
      {
        name: "Salto Alto",
        description: "Può fare un salto in alto di 6 metri."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Rinoceronte",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d10 + 12",
    speed: "12 m",
    ability_scores: { str: 21, dex: 8, con: 15, int: 2, wis: 12, cha: 6 },
    senses: ["Percezione passiva 11"],
    languages: [],
    challenge_rating: "2",
    environment: "Prateria",
    traits: [
      {
        name: "Carica",
        description: "Se si muove di 6 metri in linea retta verso un bersaglio e lo colpisce, infligge danni extra."
      }
    ],
    actions: [
      {
        name: "Corno",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d8 + 5",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Rospo",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 10,
    ac_type: "",
    hp: 1,
    hp_dice: "1d4 - 1",
    speed: "6 m, nuoto 6 m",
    ability_scores: { str: 1, dex: 10, con: 8, int: 1, wis: 8, cha: 3 },
    senses: ["Percezione passiva 9"],
    languages: [],
    challenge_rating: "0",
    environment: "Costa, Deserto, Foresta, Palude, Sottosuolo",
    traits: [
      {
        name: "Salto Alto",
        description: "Può fare un salto in alto di 3 metri."
      }
    ],
    actions: []
  },
  {
    name: "Rospo Gigante",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "naturale",
    hp: 39,
    hp_dice: "6d10 + 6",
    speed: "9 m, nuoto 9 m",
    ability_scores: { str: 15, dex: 13, con: 12, int: 2, wis: 10, cha: 3 },
    senses: ["scurovisione 9 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "1",
    environment: "Costa, Deserto, Foresta, Palude, Sottosuolo",
    traits: [
      {
        name: "Salto Alto",
        description: "Può fare un salto in alto di 6 metri."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d10 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Scarabeo di Fuoco Gigante",
    size: "Piccola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 4,
    hp_dice: "1d6 + 1",
    speed: "9 m",
    ability_scores: { str: 8, dex: 10, con: 12, int: 1, wis: 7, cha: 3 },
    senses: ["scurovisione 9 m", "Percezione passiva 8"],
    languages: [],
    challenge_rating: "0",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Luce",
        description: "Emette una luce forte entro 3 metri e fioca per altri 6 metri."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 1,
        reach: "1,5 m",
        damage: "1d4 - 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Sciacallo",
    size: "Piccola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 2,
    hp_dice: "1d6",
    speed: "12 m",
    ability_scores: { str: 8, dex: 14, con: 11, int: 3, wis: 12, cha: 6 },
    senses: ["Percezione passiva 11"],
    languages: [],
    challenge_rating: "0",
    environment: "Deserto, Prateria",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 1,
        reach: "1,5 m",
        damage: "1d4 - 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Scorpione",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "",
    hp: 1,
    hp_dice: "1d4 - 1",
    speed: "6 m",
    ability_scores: { str: 2, dex: 11, con: 8, int: 1, wis: 8, cha: 2 },
    senses: ["vista cieca 3 m", "Percezione passiva 9"],
    languages: [],
    challenge_rating: "0",
    environment: "Deserto",
    traits: [],
    actions: [
      {
        name: "Pungiglione",
        type: "Mischia",
        to_hit: 0,
        reach: "1,5 m",
        damage: "1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Scorpione Gigante",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 15,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "7d10 + 14",
    speed: "12 m",
    ability_scores: { str: 15, dex: 13, con: 15, int: 1, wis: 9, cha: 3 },
    senses: ["vista cieca 18 m", "Percezione passiva 9"],
    languages: [],
    challenge_rating: "3",
    environment: "Deserto",
    traits: [],
    actions: [
      {
        name: "Chela",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "contundente"
      },
      {
        name: "Pungiglione",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Serpente Stritolatore",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 13,
    hp_dice: "2d10 + 2",
    speed: "9 m, nuoto 9 m",
    ability_scores: { str: 16, dex: 14, con: 12, int: 1, wis: 10, cha: 3 },
    senses: ["vista cieca 3 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Deserto, Foresta, Palude, Subacqueo",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d4 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Serpente Stritolatore Gigante",
    size: "Enorme",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 60,
    hp_dice: "8d12 + 8",
    speed: "9 m, nuoto 9 m",
    ability_scores: { str: 19, dex: 14, con: 12, int: 2, wis: 10, cha: 5 },
    senses: ["vista cieca 3 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "2",
    environment: "Deserto, Foresta, Palude, Sottosuolo, Subacqueo",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Serpente Velenoso",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 2,
    hp_dice: "1d4",
    speed: "9 m, nuoto 9 m",
    ability_scores: { str: 2, dex: 16, con: 10, int: 1, wis: 10, cha: 3 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/8",
    environment: "Collina, Costa, Deserto, Foresta, Palude, Prateria",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Serpente Velenoso Gigante",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 14,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "9 m, nuoto 9 m",
    ability_scores: { str: 12, dex: 18, con: 13, int: 2, wis: 10, cha: 3 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Deserto, Foresta, Palude, Prateria, Sottosuolo, Urbano",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d4 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Serpente Volante",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 14,
    ac_type: "naturale",
    hp: 2,
    hp_dice: "1d6 - 1",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 4, dex: 18, con: 8, int: 1, wis: 10, cha: 5 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/8",
    environment: "Deserto, Foresta, Prateria, Urbano",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Squalo Cacciatore",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d10 + 12",
    speed: "0 m, nuoto 15 m",
    ability_scores: { str: 18, dex: 13, con: 15, int: 1, wis: 10, cha: 5 },
    senses: ["vista cieca 9 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "2",
    environment: "Subacqueo",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d8 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Squalo Gigante",
    size: "Enorme",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 126,
    hp_dice: "11d12 + 55",
    speed: "0 m, nuoto 18 m",
    ability_scores: { str: 23, dex: 11, con: 21, int: 1, wis: 10, cha: 5 },
    senses: ["vista cieca 9 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "5",
    environment: "Subacqueo",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 9,
        reach: "1,5 m",
        damage: "3d10 + 6",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Squalo Tropicale",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 15,
    hp_dice: "2d10 + 4",
    speed: "0 m, nuoto 12 m",
    ability_scores: { str: 13, dex: 13, con: 14, int: 1, wis: 10, cha: 5 },
    senses: ["vista cieca 9 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Subacqueo",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d8 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Tasso",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 10,
    ac_type: "",
    hp: 3,
    hp_dice: "1d4 + 1",
    speed: "6 m, scavare 1,5 m",
    ability_scores: { str: 4, dex: 11, con: 12, int: 2, wis: 12, cha: 5 },
    senses: ["scurovisione 9 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "0",
    environment: "Foresta",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Tasso Gigante",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 19,
    hp_dice: "3d8 + 6",
    speed: "9 m, scavare 3 m",
    ability_scores: { str: 13, dex: 15, con: 14, int: 2, wis: 12, cha: 5 },
    senses: ["scurovisione 9 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Foresta",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Tigre",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 37,
    hp_dice: "5d10 + 10",
    speed: "12 m, scalare 12 m",
    ability_scores: { str: 17, dex: 15, con: 14, int: 3, wis: 12, cha: 8 },
    skills: { "Furtività": 4, "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: [],
    challenge_rating: "1",
    environment: "Foresta, Prateria",
    traits: [
      {
        name: "Pounce",
        description: "Se si muove per 9 metri e colpisce con un attacco, può fare un attacco di morso aggiuntivo."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "perforante"
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Tigre dai Denti a Sciabola",
    size: "Grande",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 52,
    hp_dice: "7d10 + 14",
    speed: "12 m",
    ability_scores: { str: 18, dex: 15, con: 15, int: 3, wis: 12, cha: 8 },
    skills: { "Furtività": 4, "Percezione": 3 },
    senses: ["Percezione passiva 13"],
    languages: [],
    challenge_rating: "2",
    environment: "Artico, Montagna",
    traits: [
      {
        name: "Pounce",
        description: "Se si muove per 9 metri e colpisce con un attacco, può fare un attacco di morso aggiuntivo."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d8 + 4",
        damage_type: "perforante"
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d6 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Tirannosauro",
    size: "Enorme",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 136,
    hp_dice: "13d12 + 52",
    speed: "15 m",
    ability_scores: { str: 25, dex: 10, con: 19, int: 2, wis: 12, cha: 9 },
    skills: {},
    senses: ["Percezione passiva 11"],
    languages: [],
    challenge_rating: "8",
    environment: "Prateria",
    traits: [
      {
        name: "Spaventoso",
        description: "Può spaventare le creature con il suo ruggito."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 10,
        reach: "3 m",
        damage: "4d12 + 7",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Triceratopo",
    size: "Enorme",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 95,
    hp_dice: "10d12 + 30",
    speed: "12 m",
    ability_scores: { str: 22, dex: 9, con: 17, int: 2, wis: 11, cha: 5 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "5",
    environment: "Prateria",
    traits: [
      {
        name: "Carica",
        description: "Se si muove di 6 metri in linea retta verso un bersaglio e lo colpisce, infligge danni extra."
      }
    ],
    actions: [
      {
        name: "Corno",
        type: "Mischia",
        to_hit: 9,
        reach: "1,5 m",
        damage: "3d8 + 6",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Uccello Stigeo",
    size: "Minuscola",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "",
    hp: 1,
    hp_dice: "1d4 - 1",
    speed: "3 m, volare 18 m",
    ability_scores: { str: 3, dex: 12, con: 8, int: 2, wis: 11, cha: 5 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/8",
    environment: "Collina, Costa, Deserto, Foresta, Montagna, Palude, Prateria, Sottosuolo, Urbano",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Vespa Gigante",
    size: "Media",
    type: "bestia",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "4d8 + 4",
    speed: "3 m, volare 15 m",
    ability_scores: { str: 10, dex: 12, con: 12, int: 1, wis: 10, cha: 3 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Foresta, Prateria, Urbano",
    traits: [],
    actions: [
      {
        name: "Pungiglione",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      }
    ]
  },

// Fine Bestie - Manuale dei Mostri

// src/data/dndMonsters.js

// Inizio Celestiali - Manuale dei Mostri

  {
    name: "Couatl",
    size: "Media",
    type: "celestiale",
    alignment: "Legale Buono",
    ac: 19,
    ac_type: "naturale",
    hp: 97,
    hp_dice: "13d8 + 39",
    speed: "9 m, volare 27 m",
    ability_scores: { str: 16, dex: 20, con: 16, int: 18, wis: 20, cha: 18 },
    skills: { "Saggezza": 9 },
    senses: ["scurovisione 36 m", "Percezione passiva 15"],
    languages: ["Telepatia 36 m"],
    challenge_rating: "4",
    environment: "Deserto, Foresta, Prateria, Urbano",
    traits: [
      {
        name: "Innate Spellcasting",
        description: "Può lanciare incantesimi innati come Invisibilità e Scudo."
      },
      {
        name: "Shapeshifting",
        description: "Può assumere la forma di un umanoide o una bestia di taglia Media."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "1d6 + 5",
        damage_type: "perforante",
        description: "Un morso che infligge danni da veleno aggiuntivi."
      }
    ]
  },
  {
    name: "Deva",
    size: "Media",
    type: "celestiale",
    alignment: "Legale Buono",
    ac: 17,
    ac_type: "naturale",
    hp: 136,
    hp_dice: "16d8 + 64",
    speed: "9 m, volare 27 m",
    ability_scores: { str: 18, dex: 18, con: 18, int: 17, wis: 20, cha: 20 },
    skills: { "Intuizione": 9, "Percezione": 9 },
    senses: ["vista vera 36 m", "Percezione passiva 19"],
    languages: ["Telepatia 36 m"],
    challenge_rating: "10",
    environment: "Piani Esterni, Piani Celesti",
    traits: [
      {
        name: "Angelic Weapons",
        description: "I suoi attacchi con la mazza sono magici e infliggono danni radiosi."
      },
      {
        name: "Innate Spellcasting",
        description: "Può lanciare incantesimi come Guarigione Ferite e Resurrezione."
      }
    ],
    actions: [
      {
        name: "Mace",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "1d6 + 4",
        damage_type: "contundente",
        description: "Attacco con la mazza che infligge anche danni radiosi."
      }
    ]
  },
  {
    name: "Empyrean",
    size: "Enorme",
    type: "celestiale",
    alignment: "Caotico Buono",
    ac: 22,
    ac_type: "naturale",
    hp: 313,
    hp_dice: "19d12 + 190",
    speed: "15 m, volare 15 m",
    ability_scores: { str: 30, dex: 22, con: 30, int: 21, wis: 22, cha: 27 },
    skills: { "Atletica": 17, "Persuasione": 16 },
    senses: ["vista vera 36 m", "Percezione passiva 16"],
    languages: ["Telepatia 36 m"],
    challenge_rating: "23",
    environment: "Piani Esterni",
    traits: [
      {
        name: "Innate Spellcasting",
        description: "Può lanciare incantesimi potenti a volontà."
      },
      {
        name: "Legendary Resistance (3/day)",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Warhammer",
        type: "Mischia",
        to_hit: 17,
        reach: "3 m",
        damage: "4d6 + 10",
        damage_type: "contundente",
        description: "Attacco con un martello da guerra che infligge danni extra."
      }
    ]
  },
  {
    name: "Pegaso",
    size: "Grande",
    type: "bestia",
    alignment: "Caotico Buono",
    ac: 12,
    ac_type: "naturale",
    hp: 59,
    hp_dice: "7d10 + 21",
    speed: "18 m, volare 27 m",
    ability_scores: { str: 18, dex: 15, con: 16, int: 10, wis: 13, cha: 13 },
    skills: { "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Telepatia 18 m"],
    challenge_rating: "2",
    environment: "Collina, Foresta, Prateria",
    traits: [],
    actions: [
      {
        name: "Zoccoli",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Planetar",
    size: "Grande",
    type: "celestiale",
    alignment: "Legale Buono",
    ac: 19,
    ac_type: "naturale",
    hp: 200,
    hp_dice: "16d10 + 112",
    speed: "12 m, volare 36 m",
    ability_scores: { str: 24, dex: 20, con: 24, int: 19, wis: 22, cha: 25 },
    skills: { "Intuizione": 10, "Percezione": 10 },
    senses: ["vista vera 36 m", "Percezione passiva 20"],
    languages: ["Telepatia 36 m"],
    challenge_rating: "16",
    environment: "Piani Esterni, Piani Celesti",
    traits: [
      {
        name: "Angelic Weapons",
        description: "I suoi attacchi con l'arma sono magici e infliggono danni radiosi extra."
      },
      {
        name: "Innate Spellcasting",
        description: "Può lanciare incantesimi potenti senza componenti."
      },
      {
        name: "Legendary Resistance (3/day)",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Greatsword",
        type: "Mischia",
        to_hit: 12,
        reach: "1,5 m",
        damage: "2d6 + 7",
        damage_type: "taglienti",
        description: "Un attacco potente con la sua spada magica."
      }
    ]
  },
  {
    name: "Solar",
    size: "Grande",
    type: "celestiale",
    alignment: "Legale Buono",
    ac: 21,
    ac_type: "naturale",
    hp: 243,
    hp_dice: "18d10 + 144",
    speed: "15 m, volare 45 m",
    ability_scores: { str: 26, dex: 22, con: 26, int: 25, wis: 25, cha: 30 },
    skills: { "Intuizione": 13, "Percezione": 13 },
    senses: ["vista vera 36 m", "Percezione passiva 23"],
    languages: ["Telepatia 36 m"],
    challenge_rating: "21",
    environment: "Piani Esterni, Piani Celesti",
    traits: [
      {
        name: "Angelic Weapons",
        description: "I suoi attacchi con l'arma infliggono danni radiosi extra."
      },
      {
        name: "Innate Spellcasting",
        description: "Può lanciare incantesimi potenti a volontà."
      },
      {
        name: "Legendary Resistance (3/day)",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Greatsword",
        type: "Mischia",
        to_hit: 15,
        reach: "1,5 m",
        damage: "3d6 + 8",
        damage_type: "taglienti",
        description: "Un attacco potente con la sua spada magica."
      },
      {
        name: "Slaying Arrow",
        description: "Può scagliare una freccia magica che può uccidere un nemico."
      }
    ]
  },
  {
    name: "Unicorno",
    size: "Grande",
    type: "celestiale",
    alignment: "Legale Buono",
    ac: 12,
    ac_type: "naturale",
    hp: 67,
    hp_dice: "9d10 + 18",
    speed: "15 m",
    ability_scores: { str: 18, dex: 14, con: 14, int: 11, wis: 17, cha: 16 },
    skills: { "Intuizione": 5, "Percezione": 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 15"],
    languages: ["Telepatia 18 m"],
    challenge_rating: "5",
    environment: "Foresta",
    traits: [
      {
        name: "Innate Spellcasting",
        description: "Può lanciare incantesimi come Ristabilimento Minore e Passa Senza Tracce."
      },
      {
        name: "Legendary Resistance (3/day)",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Corno",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "perforante",
        description: "Un attacco con il corno che infligge danni extra."
      }
    ]
  },

// Fine Celestiali - Manuale dei Mostri

// src/data/dndMonsters.js

// Inizio Costrutti - Manuale dei Mostri

  {
    name: "Armatura Animata",
    size: "Media",
    type: "costrutto",
    alignment: "Senza Allineamento",
    ac: 18,
    ac_type: "piastra",
    hp: 33,
    hp_dice: "6d8 + 6",
    speed: "7,5 m",
    ability_scores: { str: 14, dex: 11, con: 13, int: 1, wis: 3, cha: 1 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 6"],
    languages: [],
    challenge_rating: "1",
    environment: "Sotterranei, castelli",
    traits: [
      {
        name: "False Appearance",
        description: "Sembra un'armatura normale finché non si muove."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con lo schianto."
      },
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Duodrone",
    size: "Media",
    type: "costrutto",
    alignment: "Legale Neutrale",
    ac: 15,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "9 m",
    ability_scores: { str: 12, dex: 10, con: 12, int: 4, wis: 10, cha: 5 },
    skills: {},
    senses: ["scurovisione 36 m", "Percezione passiva 10"],
    languages: ["Modronico"],
    challenge_rating: "1/4",
    environment: "Piani Esterni, Mechanus",
    traits: [],
    actions: [
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "contundente"
      },
      {
        name: "Balestra Leggera",
        type: "Distanza",
        to_hit: 2,
        range: "24/96 m",
        damage: "1d8",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Golem di Argilla",
    size: "Grande",
    type: "costrutto",
    alignment: "Senza Allineamento",
    ac: 16,
    ac_type: "naturale",
    hp: 133,
    hp_dice: "14d10 + 56",
    speed: "6 m",
    ability_scores: { str: 20, dex: 9, con: 18, int: 3, wis: 8, cha: 5 },
    skills: {},
    senses: ["scurovisione 36 m", "Percezione passiva 9"],
    languages: ["capisce il linguaggio del suo creatore"],
    challenge_rating: "9",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Immunità",
        description: "Immune a molti tipi di danni e stati, e alla magia."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con lo schianto."
      },
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "2d8 + 5",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Golem di Carne",
    size: "Media",
    type: "costrutto",
    alignment: "Senza Allineamento",
    ac: 9,
    ac_type: "naturale",
    hp: 93,
    hp_dice: "11d8 + 44",
    speed: "9 m",
    ability_scores: { str: 19, dex: 9, con: 18, int: 6, wis: 10, cha: 5 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["capisce il linguaggio del suo creatore"],
    challenge_rating: "5",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Immunità",
        description: "Immune a molti tipi di danni e stati, e alla magia."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con lo schianto."
      },
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d8 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Golem di Ferro",
    size: "Grande",
    type: "costrutto",
    alignment: "Senza Allineamento",
    ac: 20,
    ac_type: "naturale",
    hp: 210,
    hp_dice: "20d10 + 100",
    speed: "9 m",
    ability_scores: { str: 24, dex: 9, con: 20, int: 3, wis: 11, cha: 1 },
    skills: {},
    senses: ["scurovisione 36 m", "Percezione passiva 10"],
    languages: ["capisce il linguaggio del suo creatore"],
    challenge_rating: "16",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Immunità",
        description: "Immune a molti tipi di danni e stati, e alla magia."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con lo schianto."
      },
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 13,
        reach: "1,5 m",
        damage: "3d8 + 7",
        damage_type: "contundente"
      },
      {
        name: "Soffio di Vapore",
        description: "Un'azione di soffio che rilascia vapore ustionante."
      }
    ]
  },
  {
    name: "Golem di Pietra",
    size: "Grande",
    type: "costrutto",
    alignment: "Senza Allineamento",
    ac: 17,
    ac_type: "naturale",
    hp: 178,
    hp_dice: "17d10 + 85",
    speed: "9 m",
    ability_scores: { str: 22, dex: 9, con: 20, int: 3, wis: 11, cha: 1 },
    skills: {},
    senses: ["scurovisione 36 m", "Percezione passiva 10"],
    languages: ["capisce il linguaggio del suo creatore"],
    challenge_rating: "10",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Immunità",
        description: "Immune a molti tipi di danni e stati, e alla magia."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con lo schianto."
      },
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 10,
        reach: "1,5 m",
        damage: "3d8 + 6",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Guardiano Protettore",
    size: "Grande",
    type: "costrutto",
    alignment: "Senza Allineamento",
    ac: 17,
    ac_type: "naturale",
    hp: 142,
    hp_dice: "15d10 + 60",
    speed: "9 m",
    ability_scores: { str: 18, dex: 10, con: 18, int: 7, wis: 10, cha: 3 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["capisce il linguaggio del suo creatore"],
    challenge_rating: "7",
    environment: "Urbano",
    traits: [
      {
        name: "Magic Absorption",
        description: "Assorbe danni da incantesimi per curarsi."
      }
    ],
    actions: [
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Modron Fuori Controllo",
    size: "Media",
    type: "costrutto",
    alignment: "Qualunque (Non Legale Neutrale)",
    ac: 15,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "9 m",
    ability_scores: { str: 12, dex: 10, con: 12, int: 4, wis: 10, cha: 5 },
    skills: {},
    senses: ["scurovisione 36 m", "Percezione passiva 10"],
    languages: ["Modronico"],
    challenge_rating: "1/8",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Instabile",
        description: "Ha comportamenti imprevedibili e non rispetta l'ordine."
      }
    ],
    actions: [
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Monodrone",
    size: "Media",
    type: "costrutto",
    alignment: "Legale Neutrale",
    ac: 13,
    ac_type: "naturale",
    hp: 5,
    hp_dice: "1d8 + 1",
    speed: "9 m, volare 9 m",
    ability_scores: { str: 10, dex: 11, con: 12, int: 4, wis: 10, cha: 5 },
    skills: {},
    senses: ["scurovisione 36 m", "Percezione passiva 10"],
    languages: ["Modronico"],
    challenge_rating: "1/8",
    environment: "Piani Esterni, Mechanus",
    traits: [],
    actions: [
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Omuncolo",
    size: "Minuscola",
    type: "costrutto",
    alignment: "Neutrale",
    ac: 13,
    ac_type: "naturale",
    hp: 5,
    hp_dice: "2d4",
    speed: "6 m, volare 12 m",
    ability_scores: { str: 4, dex: 15, con: 11, int: 10, wis: 10, cha: 7 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["capisce il linguaggio del suo creatore"],
    challenge_rating: "0",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Collegamento telepatico",
        description: "È collegato telepaticamente al suo creatore."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Orrore Corazzato",
    size: "Media",
    type: "costrutto",
    alignment: "Neutrale",
    ac: 20,
    ac_type: "piastra, scudo",
    hp: 60,
    hp_dice: "8d8 + 24",
    speed: "9 m, volare 9 m",
    ability_scores: { str: 18, dex: 13, con: 16, int: 10, wis: 10, cha: 10 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["capisce il linguaggio del suo creatore"],
    challenge_rating: "4",
    environment: "Sotterranei, torri abbandonate",
    traits: [
      {
        name: "Immunità",
        description: "Immune a molti tipi di danni e stati, e alla magia."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada lunga."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Pentadrone",
    size: "Grande",
    type: "costrutto",
    alignment: "Legale Neutrale",
    ac: 16,
    ac_type: "naturale",
    hp: 32,
    hp_dice: "5d10 + 5",
    speed: "9 m",
    ability_scores: { str: 15, dex: 10, con: 12, int: 8, wis: 10, cha: 5 },
    skills: {},
    senses: ["scurovisione 36 m", "Percezione passiva 10"],
    languages: ["Modronico"],
    challenge_rating: "2",
    environment: "Piani Esterni, Mechanus",
    traits: [
      {
        name: "Multi-Task",
        description: "Può effettuare fino a cinque azioni in un turno."
      }
    ],
    actions: [
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "contundente"
      },
      {
        name: "Soffio di Vapore",
        description: "Un'azione di soffio che infligge danni da vapore."
      }
    ]
  },
  {
    name: "Quadrone",
    size: "Media",
    type: "costrutto",
    alignment: "Legale Neutrale",
    ac: 16,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "4d8 + 4",
    speed: "9 m",
    ability_scores: { str: 14, dex: 11, con: 12, int: 6, wis: 10, cha: 5 },
    skills: {},
    senses: ["scurovisione 36 m", "Percezione passiva 10"],
    languages: ["Modronico"],
    challenge_rating: "1",
    environment: "Piani Esterni, Mechanus",
    traits: [],
    actions: [
      {
        name: "Balestra Leggera",
        type: "Distanza",
        to_hit: 3,
        range: "24/96 m",
        damage: "1d8 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Spada Volante",
    size: "Piccola",
    type: "costrutto",
    alignment: "Senza Allineamento",
    ac: 17,
    ac_type: "naturale",
    hp: 17,
    hp_dice: "5d6 + 10",
    speed: "0 m, volare 15 m",
    ability_scores: { str: 12, dex: 15, con: 14, int: 1, wis: 5, cha: 1 },
    skills: {},
    senses: ["vista cieca 18 m", "Percezione passiva 7"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Sotterranei, castelli",
    traits: [
      {
        name: "False Appearance",
        description: "Sembra una spada normale finché non si muove."
      }
    ],
    actions: [
      {
        name: "Attacco di Spada",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d8 + 1",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Spaventapasseri",
    size: "Media",
    type: "costrutto",
    alignment: "Caotico Malvagio",
    ac: 11,
    ac_type: "naturale",
    hp: 36,
    hp_dice: "8d8",
    speed: "9 m",
    ability_scores: { str: 11, dex: 12, con: 11, int: 10, wis: 10, cha: 13 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["capisce il linguaggio del suo creatore"],
    challenge_rating: "1",
    environment: "Prateria",
    traits: [
      {
        name: "False Appearance",
        description: "Sembra uno spaventapasseri normale finché non si muove."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "taglienti"
      },
      {
        name: "Sguardo Terrificante",
        description: "Può spaventare una creatura con il suo sguardo."
      }
    ]
  },
  {
    name: "Tappeto Soffocante",
    size: "Grande",
    type: "costrutto",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 33,
    hp_dice: "6d10",
    speed: "3 m",
    ability_scores: { str: 17, dex: 10, con: 10, int: 1, wis: 3, cha: 1 },
    skills: {},
    senses: ["vista cieca 18 m", "Percezione passiva 6"],
    languages: [],
    challenge_rating: "2",
    environment: "Sotterranei, castelli",
    traits: [
      {
        name: "False Appearance",
        description: "Sembra un tappeto normale finché non si muove."
      }
    ],
    actions: [
      {
        name: "Soffocamento",
        description: "Si avvolge attorno a una creatura per soffocarla."
      }
    ]
  },
  {
    name: "Tridrone",
    size: "Media",
    type: "costrutto",
    alignment: "Legale Neutrale",
    ac: 15,
    ac_type: "naturale",
    hp: 16,
    hp_dice: "3d8 + 3",
    speed: "9 m, volare 9 m",
    ability_scores: { str: 14, dex: 10, con: 12, int: 6, wis: 10, cha: 5 },
    skills: {},
    senses: ["scurovisione 36 m", "Percezione passiva 10"],
    languages: ["Modronico"],
    challenge_rating: "1/2",
    environment: "Piani Esterni, Mechanus",
    traits: [],
    actions: [
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "contundente"
      },
      {
        name: "Balestra Leggera",
        type: "Distanza",
        to_hit: 2,
        range: "24/96 m",
        damage: "1d8",
        damage_type: "perforante"
      }
    ]
  },
// Fine Costrutti - Manuale dei Mostri
// src/data/dndMonsters.js

// Inizio Draghi - Manuale dei Mostri


  {
    name: "Drago d'Ombra",
    size: "Grande",
    type: "drago",
    alignment: "Caotico Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 178,
    hp_dice: "17d10 + 85",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 20, dex: 14, con: 18, int: 18, wis: 15, cha: 17 },
    skills: { "Furtività": 6, "Percezione": 6 },
    senses: ["scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "13",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Ombra",
        description: "È immune ai danni radianti e ha resistenza a danni non magici."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con i suoi artigli e un morso."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 9,
        reach: "3 m",
        damage: "2d10 + 5",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Drago d'Ombra Rosso Giovane",
    size: "Grande",
    type: "drago",
    alignment: "Caotico Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 178,
    hp_dice: "17d10 + 85",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 20, dex: 14, con: 18, int: 18, wis: 15, cha: 17 },
    skills: { "Furtività": 6, "Percezione": 6 },
    senses: ["scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "13",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Ombra",
        description: "Ha resistenza ai danni non magici."
      },
      {
        name: "Linguaggio del Drago",
        description: "Parla il Draconico e capisce il Comune."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi: uno con il morso e due con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 9,
        reach: "3 m",
        damage: "2d10 + 5",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Drago Fatato",
    size: "Minuscola",
    type: "drago",
    alignment: "Caotico Buono",
    ac: 15,
    ac_type: "naturale",
    hp: 10,
    hp_dice: "3d4 + 3",
    speed: "3 m, volare 12 m",
    ability_scores: { str: 3, dex: 20, con: 13, int: 15, wis: 12, cha: 16 },
    skills: { "Furtività": 7, "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Draconico", "Sylvan"],
    challenge_rating: "2",
    environment: "Foresta",
    traits: [
      {
        name: "Invisibilità",
        description: "Può diventare invisibile a volontà."
      },
      {
        name: "Incantesimi Innati",
        description: "Può lanciare incantesimi minori."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Pseudodrago",
    size: "Minuscola",
    type: "drago",
    alignment: "Neutrale Buono",
    ac: 13,
    ac_type: "naturale",
    hp: 7,
    hp_dice: "2d4 + 2",
    speed: "4,5 m, volare 18 m",
    ability_scores: { str: 6, dex: 15, con: 13, int: 10, wis: 12, cha: 10 },
    skills: { "Furtività": 4, "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Draconico"],
    challenge_rating: "1/4",
    environment: "Collina, Costa, Deserto, Foresta, Montagna, Urbano",
    traits: [
      {
        name: "Collegamento Telepatico",
        description: "Può comunicare telepaticamente con il suo padrone."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Testuggine Dragona",
    size: "Mastodontica",
    type: "drago",
    alignment: "Neutrale",
    ac: 17,
    ac_type: "naturale",
    hp: 341,
    hp_dice: "22d20 + 110",
    speed: "6 m, nuoto 18 m",
    ability_scores: { str: 28, dex: 10, con: 20, int: 12, wis: 12, cha: 12 },
    skills: { "Percezione": 5 },
    senses: ["scurovisione 36 m", "Percezione passiva 15"],
    languages: ["Draconico"],
    challenge_rating: "17",
    environment: "Costa, Subacqueo",
    traits: [
      {
        name: "Respirare Acqua e Aria",
        description: "Può respirare sia in acqua che sulla terraferma."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi: un morso e due con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 15,
        reach: "4,5 m",
        damage: "4d6 + 9",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Viverna",
    size: "Grande",
    type: "drago",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 110,
    hp_dice: "12d10 + 48",
    speed: "6 m, volare 24 m",
    ability_scores: { str: 19, dex: 10, con: 18, int: 5, wis: 12, cha: 9 },
    skills: { "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Draconico"],
    challenge_rating: "6",
    environment: "Collina, Montagna",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi: uno con il morso e uno con il pungiglione."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "perforante"
      },
      {
        name: "Pungiglione",
        type: "Mischia",
        to_hit: 7,
        reach: "3 m",
        damage: "1d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Drago Bianco Adulto",
    size: "Enorme",
    type: "drago (cromatico)",
    alignment: "Caotico Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 178,
    hp_dice: "17d10 + 85",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 22, dex: 10, con: 20, int: 10, wis: 13, cha: 15 },
    skills: { "Furtività": 4, "Percezione": 6 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "13",
    environment: "Artico",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di ghiaccio."
      }
    ]
  },
  {
    name: "Drago Bianco Antico",
    size: "Mastodontica",
    type: "drago (cromatico)",
    alignment: "Caotico Malvagio",
    ac: 20,
    ac_type: "naturale",
    hp: 256,
    hp_dice: "19d20 + 57",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 28, dex: 10, con: 26, int: 12, wis: 16, cha: 18 },
    skills: { "Furtività": 6, "Percezione": 10 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 20"],
    languages: ["Draconico"],
    challenge_rating: "20",
    environment: "Artico",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      },
      {
        name: "Lair Actions",
        description: "Può usare azioni speciali nel suo tana."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di ghiaccio."
      }
    ]
  },
  {
    name: "Drago Bianco Cucciolo",
    size: "Media",
    type: "drago (cromatico)",
    alignment: "Caotico Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 32,
    hp_dice: "5d8 + 10",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 14, dex: 10, con: 14, int: 10, wis: 11, cha: 13 },
    skills: { "Furtività": 2, "Percezione": 2 },
    senses: ["vista cieca 3 m", "scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Draconico"],
    challenge_rating: "2",
    environment: "Artico",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d10 + 2",
        damage_type: "perforante"
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di ghiaccio."
      }
    ]
  },
  {
    name: "Drago Bianco Giovane",
    size: "Grande",
    type: "drago (cromatico)",
    alignment: "Caotico Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 91,
    hp_dice: "10d10 + 36",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 18, dex: 10, con: 18, int: 10, wis: 13, cha: 15 },
    skills: { "Furtività": 4, "Percezione": 6 },
    senses: ["vista cieca 9 m", "scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "6",
    environment: "Artico",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di ghiaccio."
      }
    ]
  },
  {
    name: "Drago Blu Adulto",
    size: "Enorme",
    type: "drago (cromatico)",
    alignment: "Legale Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 195,
    hp_dice: "17d12 + 85",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 23, dex: 10, con: 21, int: 16, wis: 15, cha: 19 },
    skills: { "Furtività": 4, "Percezione": 7 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 17"],
    languages: ["Draconico"],
    challenge_rating: "16",
    environment: "Costa, Deserto",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia una linea di fulmini."
      }
    ]
  },
  {
    name: "Drago Blu Antico",
    size: "Mastodontica",
    type: "drago (cromatico)",
    alignment: "Legale Malvagio",
    ac: 22,
    ac_type: "naturale",
    hp: 481,
    hp_dice: "26d20 + 208",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 29, dex: 10, con: 27, int: 18, wis: 17, cha: 21 },
    skills: { "Furtività": 6, "Percezione": 10 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 20"],
    languages: ["Draconico"],
    challenge_rating: "23",
    environment: "Costa, Deserto",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      },
      {
        name: "Lair Actions",
        description: "Può usare azioni speciali nel suo tana."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia una linea di fulmini."
      }
    ]
  },
  {
    name: "Drago Blu Cucciolo",
    size: "Media",
    type: "drago (cromatico)",
    alignment: "Legale Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "8d8 + 16",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 17, dex: 10, con: 15, int: 12, wis: 11, cha: 15 },
    skills: { "Furtività": 2, "Percezione": 2 },
    senses: ["vista cieca 3 m", "scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Draconico"],
    challenge_rating: "3",
    environment: "Costa, Deserto",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d10 + 3",
        damage_type: "perforante"
      },
      {
        name: "Breath Weapon",
        description: "Soffia una linea di fulmini."
      }
    ]
  },
  {
    name: "Drago Blu Giovane",
    size: "Grande",
    type: "drago (cromatico)",
    alignment: "Legale Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 127,
    hp_dice: "15d10 + 45",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 19, dex: 10, con: 17, int: 14, wis: 13, cha: 17 },
    skills: { "Furtività": 4, "Percezione": 6 },
    senses: ["vista cieca 9 m", "scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "9",
    environment: "Costa, Deserto",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia una linea di fulmini."
      }
    ]
  },
  {
    name: "Drago Nero Adulto",
    size: "Enorme",
    type: "drago (cromatico)",
    alignment: "Caotico Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 195,
    hp_dice: "17d12 + 85",
    speed: "12 m, volare 24 m, nuoto 12 m",
    ability_scores: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17 },
    skills: { "Furtività": 6, "Percezione": 6 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "14",
    environment: "Palude",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di acido."
      }
    ]
  },
  {
    name: "Drago Nero Antico",
    size: "Mastodontica",
    type: "drago (cromatico)",
    alignment: "Caotico Malvagio",
    ac: 22,
    ac_type: "naturale",
    hp: 367,
    hp_dice: "21d20 + 147",
    speed: "12 m, volare 24 m, nuoto 12 m",
    ability_scores: { str: 27, dex: 14, con: 25, int: 16, wis: 15, cha: 19 },
    skills: { "Furtività": 8, "Percezione": 8 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 18"],
    languages: ["Draconico"],
    challenge_rating: "21",
    environment: "Palude",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      },
      {
        name: "Lair Actions",
        description: "Può usare azioni speciali nel suo tana."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di acido."
      }
    ]
  },
  {
    name: "Drago Nero Cucciolo",
    size: "Media",
    type: "drago (cromatico)",
    alignment: "Caotico Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 33,
    hp_dice: "6d8 + 6",
    speed: "9 m, volare 18 m, nuoto 9 m",
    ability_scores: { str: 15, dex: 14, con: 13, int: 10, wis: 11, cha: 13 },
    skills: { "Furtività": 4, "Percezione": 2 },
    senses: ["vista cieca 3 m", "scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Draconico"],
    challenge_rating: "2",
    environment: "Palude",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di acido."
      }
    ]
  },
  {
    name: "Drago Nero Giovane",
    size: "Grande",
    type: "drago (cromatico)",
    alignment: "Caotico Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 127,
    hp_dice: "15d10 + 45",
    speed: "12 m, volare 24 m, nuoto 12 m",
    ability_scores: { str: 19, dex: 14, con: 17, int: 12, wis: 11, cha: 15 },
    skills: { "Furtività": 6, "Percezione": 5 },
    senses: ["vista cieca 9 m", "scurovisione 36 m", "Percezione passiva 15"],
    languages: ["Draconico"],
    challenge_rating: "7",
    environment: "Palude",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di acido."
      }
    ]
  },
  {
    name: "Drago Rosso Adulto",
    size: "Enorme",
    type: "drago (cromatico)",
    alignment: "Caotico Malvagio",
    ac: 19,
    ac_type: "naturale",
    hp: 256,
    hp_dice: "19d12 + 133",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 27, dex: 10, con: 25, int: 16, wis: 13, cha: 21 },
    skills: { "Furtività": 5, "Percezione": 7 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 17"],
    languages: ["Draconico"],
    challenge_rating: "17",
    environment: "Collina, Montagna",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di fuoco."
      }
    ]
  },
  {
    name: "Drago Rosso Antico",
    size: "Mastodontica",
    type: "drago (cromatico)",
    alignment: "Caotico Malvagio",
    ac: 22,
    ac_type: "naturale",
    hp: 546,
    hp_dice: "28d20 + 252",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 30, dex: 10, con: 29, int: 18, wis: 15, cha: 23 },
    skills: { "Furtività": 7, "Percezione": 8 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 18"],
    languages: ["Draconico"],
    challenge_rating: "24",
    environment: "Collina, Montagna",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      },
      {
        name: "Lair Actions",
        description: "Può usare azioni speciali nel suo tana."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di fuoco."
      }
    ]
  },
  {
    name: "Drago Rosso Cucciolo",
    size: "Media",
    type: "drago (cromatico)",
    alignment: "Caotico Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 75,
    hp_dice: "10d8 + 30",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15 },
    skills: { "Furtività": 2, "Percezione": 2 },
    senses: ["vista cieca 3 m", "scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Draconico"],
    challenge_rating: "4",
    environment: "Collina, Montagna",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d10 + 4",
        damage_type: "perforante"
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di fuoco."
      }
    ]
  },
  {
    name: "Drago Rosso Giovane",
    size: "Grande",
    type: "drago (cromatico)",
    alignment: "Caotico Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 178,
    hp_dice: "17d10 + 85",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 23, dex: 10, con: 21, int: 14, wis: 11, cha: 19 },
    skills: { "Furtività": 4, "Percezione": 5 },
    senses: ["vista cieca 9 m", "scurovisione 36 m", "Percezione passiva 15"],
    languages: ["Draconico"],
    challenge_rating: "10",
    environment: "Collina, Montagna",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di fuoco."
      }
    ]
  },
  {
    name: "Drago Verde Adulto",
    size: "Enorme",
    type: "drago (cromatico)",
    alignment: "Legale Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 207,
    hp_dice: "18d12 + 90",
    speed: "12 m, volare 24 m, nuoto 12 m",
    ability_scores: { str: 23, dex: 12, con: 21, int: 18, wis: 15, cha: 17 },
    skills: { "Furtività": 5, "Percezione": 6 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "15",
    environment: "Foresta",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di gas velenoso."
      }
    ]
  },
  {
    name: "Drago Verde Antico",
    size: "Mastodontica",
    type: "drago (cromatico)",
    alignment: "Legale Malvagio",
    ac: 21,
    ac_type: "naturale",
    hp: 385,
    hp_dice: "22d20 + 154",
    speed: "12 m, volare 24 m, nuoto 12 m",
    ability_scores: { str: 27, dex: 12, con: 25, int: 20, wis: 17, cha: 19 },
    skills: { "Furtività": 7, "Percezione": 9 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 19"],
    languages: ["Draconico"],
    challenge_rating: "22",
    environment: "Foresta",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      },
      {
        name: "Lair Actions",
        description: "Può usare azioni speciali nel suo tana."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di gas velenoso."
      }
    ]
  },
  {
    name: "Drago Verde Cucciolo",
    size: "Media",
    type: "drago (cromatico)",
    alignment: "Legale Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 38,
    hp_dice: "7d8 + 7",
    speed: "9 m, volare 18 m, nuoto 9 m",
    ability_scores: { str: 15, dex: 12, con: 13, int: 14, wis: 11, cha: 13 },
    skills: { "Furtività": 3, "Percezione": 2 },
    senses: ["vista cieca 3 m", "scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Draconico"],
    challenge_rating: "2",
    environment: "Foresta",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di gas velenoso."
      }
    ]
  },
  {
    name: "Drago Verde Giovane",
    size: "Grande",
    type: "drago (cromatico)",
    alignment: "Legale Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 136,
    hp_dice: "16d10 + 48",
    speed: "12 m, volare 24 m, nuoto 12 m",
    ability_scores: { str: 19, dex: 12, con: 17, int: 16, wis: 13, cha: 15 },
    skills: { "Furtività": 5, "Percezione": 6 },
    senses: ["vista cieca 9 m", "scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "8",
    environment: "Foresta",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di gas velenoso."
      }
    ]
  },
  {
    name: "Drago d’Argento Adulto",
    size: "Enorme",
    type: "drago (metallico)",
    alignment: "Legale Buono",
    ac: 18,
    ac_type: "naturale",
    hp: 243,
    hp_dice: "19d12 + 114",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 25, dex: 10, con: 23, int: 16, wis: 13, cha: 21 },
    skills: { "Percezione": 7, "Persuasione": 10 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 17"],
    languages: ["Draconico"],
    challenge_rating: "16",
    environment: "Montagna, Urbano",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare un cono di nebbia per rallentare o una linea di gelo."
      }
    ]
  },
  {
    name: "Drago d’Argento Antico",
    size: "Mastodontica",
    type: "drago (metallico)",
    alignment: "Legale Buono",
    ac: 22,
    ac_type: "naturale",
    hp: 487,
    hp_dice: "25d20 + 225",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 30, dex: 10, con: 29, int: 18, wis: 15, cha: 23 },
    skills: { "Percezione": 9, "Persuasione": 11 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 19"],
    languages: ["Draconico"],
    challenge_rating: "23",
    environment: "Montagna, Urbano",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      },
      {
        name: "Lair Actions",
        description: "Può usare azioni speciali nel suo tana."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare un cono di nebbia per rallentare o una linea di gelo."
      }
    ]
  },
  {
    name: "Drago d’Argento Cucciolo",
    size: "Media",
    type: "drago (metallico)",
    alignment: "Legale Buono",
    ac: 17,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d8 + 18",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15 },
    skills: { "Percezione": 2 },
    senses: ["vista cieca 3 m", "scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Draconico"],
    challenge_rating: "2",
    environment: "Montagna, Urbano",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d10 + 4",
        damage_type: "perforante"
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di gelo."
      }
    ]
  },
  {
    name: "Drago d’Argento Giovane",
    size: "Grande",
    type: "drago (metallico)",
    alignment: "Legale Buono",
    ac: 18,
    ac_type: "naturale",
    hp: 168,
    hp_dice: "16d10 + 80",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 23, dex: 10, con: 21, int: 14, wis: 13, cha: 17 },
    skills: { "Percezione": 6 },
    senses: ["vista cieca 9 m", "scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "9",
    environment: "Montagna, Urbano",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare un cono di nebbia per rallentare o una linea di gelo."
      }
    ]
  },
  {
    name: "Drago di Bronzo Adulto",
    size: "Enorme",
    type: "drago (metallico)",
    alignment: "Legale Buono",
    ac: 18,
    ac_type: "naturale",
    hp: 212,
    hp_dice: "17d12 + 102",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 23, dex: 10, con: 23, int: 16, wis: 15, cha: 19 },
    skills: { "Percezione": 7, "Furtività": 4 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 17"],
    languages: ["Draconico"],
    challenge_rating: "15",
    environment: "Costa",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare una linea di fulmini o un cono di gas respingente."
      }
    ]
  },
  {
    name: "Drago di Bronzo Antico",
    size: "Mastodontica",
    type: "drago (metallico)",
    alignment: "Legale Buono",
    ac: 21,
    ac_type: "naturale",
    hp: 444,
    hp_dice: "24d20 + 192",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 29, dex: 10, con: 27, int: 18, wis: 17, cha: 21 },
    skills: { "Percezione": 8, "Furtività": 5 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 18"],
    languages: ["Draconico"],
    challenge_rating: "22",
    environment: "Costa",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      },
      {
        name: "Lair Actions",
        description: "Può usare azioni speciali nel suo tana."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare una linea di fulmini o un cono di gas respingente."
      }
    ]
  },
  {
    name: "Drago di Bronzo Cucciolo",
    size: "Media",
    type: "drago (metallico)",
    alignment: "Legale Buono",
    ac: 17,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "8d8 + 16",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 17, dex: 10, con: 15, int: 12, wis: 11, cha: 15 },
    skills: { "Percezione": 2 },
    senses: ["vista cieca 3 m", "scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Draconico"],
    challenge_rating: "2",
    environment: "Costa",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d10 + 3",
        damage_type: "perforante"
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di fulmini."
      }
    ]
  },
  {
    name: "Drago di Bronzo Giovane",
    size: "Grande",
    type: "drago (metallico)",
    alignment: "Legale Buono",
    ac: 18,
    ac_type: "naturale",
    hp: 142,
    hp_dice: "15d10 + 60",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 19, dex: 10, con: 17, int: 14, wis: 13, cha: 17 },
    skills: { "Percezione": 6, "Furtività": 4 },
    senses: ["vista cieca 9 m", "scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "8",
    environment: "Costa",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare una linea di fulmini o un cono di gas respingente."
      }
    ]
  },
  {
    name: "Drago di Rame Adulto",
    size: "Enorme",
    type: "drago (metallico)",
    alignment: "Caotico Buono",
    ac: 18,
    ac_type: "naturale",
    hp: 184,
    hp_dice: "16d12 + 80",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 23, dex: 12, con: 21, int: 18, wis: 15, cha: 17 },
    skills: { "Percezione": 6, "Furtività": 5 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "14",
    environment: "Collina",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare una linea di acido o un cono di gas rallentante."
      }
    ]
  },
  {
    name: "Drago di Rame Antico",
    size: "Mastodontica",
    type: "drago (metallico)",
    alignment: "Caotico Buono",
    ac: 21,
    ac_type: "naturale",
    hp: 350,
    hp_dice: "20d20 + 140",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 27, dex: 12, con: 25, int: 20, wis: 17, cha: 19 },
    skills: { "Percezione": 7, "Furtività": 7 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 17"],
    languages: ["Draconico"],
    challenge_rating: "21",
    environment: "Collina",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      },
      {
        name: "Lair Actions",
        description: "Può usare azioni speciali nel suo tana."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare una linea di acido o un cono di gas rallentante."
      }
    ]
  },
  {
    name: "Drago di Rame Giovane",
    size: "Grande",
    type: "drago (metallico)",
    alignment: "Caotico Buono",
    ac: 17,
    ac_type: "naturale",
    hp: 119,
    hp_dice: "14d10 + 42",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 19, dex: 12, con: 17, int: 16, wis: 13, cha: 15 },
    skills: { "Percezione": 5, "Furtività": 5 },
    senses: ["vista cieca 9 m", "scurovisione 36 m", "Percezione passiva 15"],
    languages: ["Draconico"],
    challenge_rating: "7",
    environment: "Collina",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare una linea di acido o un cono di gas rallentante."
      }
    ]
  },
  {
    name: "Drago di Rame Cucciolo",
    size: "Media",
    type: "drago (metallico)",
    alignment: "Caotico Buono",
    ac: 16,
    ac_type: "naturale",
    hp: 44,
    hp_dice: "8d8 + 8",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 17, dex: 12, con: 13, int: 14, wis: 11, cha: 13 },
    skills: { "Percezione": 2 },
    senses: ["vista cieca 3 m", "scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Draconico"],
    challenge_rating: "1",
    environment: "Collina",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d10 + 3",
        damage_type: "perforante"
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di acido."
      }
    ]
  },
  {
    name: "Drago d'Oro Adulto",
    size: "Enorme",
    type: "drago (metallico)",
    alignment: "Legale Buono",
    ac: 19,
    ac_type: "naturale",
    hp: 256,
    hp_dice: "19d12 + 133",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 27, dex: 10, con: 25, int: 16, wis: 15, cha: 21 },
    skills: { "Percezione": 8, "Persuasione": 10 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 18"],
    languages: ["Draconico"],
    challenge_rating: "17",
    environment: "Foresta, Prateria",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare un cono di fuoco o un cono di gas velenoso."
      }
    ]
  },
  {
    name: "Drago d'Oro Antico",
    size: "Mastodontica",
    type: "drago (metallico)",
    alignment: "Legale Buono",
    ac: 22,
    ac_type: "naturale",
    hp: 546,
    hp_dice: "28d20 + 252",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 30, dex: 10, con: 29, int: 20, wis: 17, cha: 23 },
    skills: { "Percezione": 10, "Persuasione": 12 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 20"],
    languages: ["Draconico"],
    challenge_rating: "24",
    environment: "Foresta, Prateria",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      },
      {
        name: "Lair Actions",
        description: "Può usare azioni speciali nel suo tana."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare un cono di fuoco o un cono di gas velenoso."
      }
    ]
  },
  {
    name: "Drago d'Oro Cucciolo",
    size: "Media",
    type: "drago (metallico)",
    alignment: "Legale Buono",
    ac: 17,
    ac_type: "naturale",
    hp: 75,
    hp_dice: "10d8 + 30",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 19, dex: 10, con: 17, int: 14, wis: 11, cha: 15 },
    skills: { "Percezione": 2 },
    senses: ["vista cieca 3 m", "scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Draconico"],
    challenge_rating: "3",
    environment: "Foresta, Prateria",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d10 + 4",
        damage_type: "perforante"
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di fuoco."
      }
    ]
  },
  {
    name: "Drago d'Oro Giovane",
    size: "Grande",
    type: "drago (metallico)",
    alignment: "Legale Buono",
    ac: 18,
    ac_type: "naturale",
    hp: 178,
    hp_dice: "17d10 + 85",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 23, dex: 10, con: 21, int: 16, wis: 13, cha: 19 },
    skills: { "Percezione": 5, "Persuasione": 6 },
    senses: ["vista cieca 9 m", "scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "10",
    environment: "Foresta, Prateria",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare un cono di fuoco o un cono di gas velenoso."
      }
    ]
  },
  {
    name: "Drago d'Ottone Adulto",
    size: "Enorme",
    type: "drago (metallico)",
    alignment: "Caotico Buono",
    ac: 17,
    ac_type: "naturale",
    hp: 172,
    hp_dice: "15d12 + 75",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 23, dex: 10, con: 21, int: 16, wis: 15, cha: 19 },
    skills: { "Percezione": 6, "Persuasione": 8 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "13",
    environment: "Deserto",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare una linea di fuoco o un cono di sonno."
      }
    ]
  },
  {
    name: "Drago d'Ottone Antico",
    size: "Mastodontica",
    type: "drago (metallico)",
    alignment: "Caotico Buono",
    ac: 20,
    ac_type: "naturale",
    hp: 297,
    hp_dice: "17d20 + 119",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 29, dex: 10, con: 27, int: 20, wis: 17, cha: 21 },
    skills: { "Percezione": 8, "Persuasione": 10 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 18"],
    languages: ["Draconico"],
    challenge_rating: "20",
    environment: "Deserto",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      },
      {
        name: "Lair Actions",
        description: "Può usare azioni speciali nel suo tana."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare una linea di fuoco o un cono di sonno."
      }
    ]
  },
  {
    name: "Drago d'Ottone Cucciolo",
    size: "Media",
    type: "drago (metallico)",
    alignment: "Caotico Buono",
    ac: 16,
    ac_type: "naturale",
    hp: 28,
    hp_dice: "5d8 + 5",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 17, dex: 10, con: 13, int: 12, wis: 11, cha: 15 },
    skills: { "Percezione": 2 },
    senses: ["vista cieca 3 m", "scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Draconico"],
    challenge_rating: "1",
    environment: "Deserto",
    traits: [],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "perforante"
      },
      {
        name: "Breath Weapon",
        description: "Soffia un cono di fuoco."
      }
    ]
  },
  {
    name: "Drago d'Ottone Giovane",
    size: "Grande",
    type: "drago (metallico)",
    alignment: "Caotico Buono",
    ac: 17,
    ac_type: "naturale",
    hp: 110,
    hp_dice: "13d10 + 39",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 19, dex: 10, con: 17, int: 14, wis: 13, cha: 17 },
    skills: { "Percezione": 5, "Persuasione": 6 },
    senses: ["vista cieca 9 m", "scurovisione 36 m", "Percezione passiva 15"],
    languages: ["Draconico"],
    challenge_rating: "6",
    environment: "Deserto",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Breath Weapon",
        description: "Può soffiare una linea di fuoco o un cono di sonno."
      }
    ]
  },
// Fine Draghi - Manuale dei Mostri
// src/data/dndMonsters.js

// Inizio Elementali - Manuale dei Mostri
  {
    name: "Azer",
    size: "Media",
    type: "elementale",
    alignment: "Legale Neutrale",
    ac: 17,
    ac_type: "naturale",
    hp: 39,
    hp_dice: "6d8 + 12",
    speed: "9 m",
    ability_scores: { str: 17, dex: 12, con: 15, int: 12, wis: 13, cha: 9 },
    skills: { "Atletica": 5, "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Ignan"],
    challenge_rating: "2",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Luce Calore",
        description: "Emette calore e luce forte in un'area."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con il martello da guerra."
      },
      {
        name: "Martello da Guerra",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Cacciatore Invisibile",
    size: "Media",
    type: "elementale",
    alignment: "Neutrale",
    ac: 16,
    ac_type: "naturale",
    hp: 85,
    hp_dice: "10d8 + 40",
    speed: "15 m, volare 15 m",
    ability_scores: { str: 18, dex: 18, con: 18, int: 10, wis: 15, cha: 11 },
    skills: { "Furtività": 7, "Percezione": 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 15"],
    languages: ["Auran"],
    challenge_rating: "6",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Invisibilità",
        description: "È permanentemente invisibile."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Dao",
    size: "Grande",
    type: "elementale",
    alignment: "Neutrale Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 127,
    hp_dice: "17d10 + 34",
    speed: "9 m, scavare 9 m, volare 9 m",
    ability_scores: { str: 23, dex: 12, con: 15, int: 12, wis: 13, cha: 14 },
    skills: { "Geologia": 6, "Sopravvivenza": 4 },
    senses: ["scurovisione 36 m", "Percezione passiva 11"],
    languages: ["Terrestre"],
    challenge_rating: "11",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Innate Spellcasting",
        description: "Può lanciare incantesimi innati come Muro di Pietra."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con il martello."
      },
      {
        name: "Martello da Guerra",
        type: "Mischia",
        to_hit: 10,
        reach: "1,5 m",
        damage: "2d6 + 6",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Djinni",
    size: "Grande",
    type: "elementale",
    alignment: "Caotico Buono",
    ac: 17,
    ac_type: "naturale",
    hp: 161,
    hp_dice: "17d10 + 68",
    speed: "9 m, volare 27 m",
    ability_scores: { str: 21, dex: 15, con: 18, int: 16, wis: 15, cha: 20 },
    skills: { "Intimidire": 9, "Persuasione": 9 },
    senses: ["Percezione passiva 12"],
    languages: ["Auran"],
    challenge_rating: "11",
    environment: "Piani Elementali, Aria",
    traits: [
      {
        name: "Innate Spellcasting",
        description: "Può lanciare incantesimi innati come Sfera di Fulmini."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi con la sua scimitarra."
      },
      {
        name: "Scimitarra",
        type: "Mischia",
        to_hit: 9,
        reach: "1,5 m",
        damage: "2d6 + 5",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Efreeti",
    size: "Grande",
    type: "elementale",
    alignment: "Legale Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 200,
    hp_dice: "16d10 + 112",
    speed: "12 m, volare 12 m",
    ability_scores: { str: 22, dex: 12, con: 24, int: 14, wis: 15, cha: 16 },
    skills: { "Intimidire": 7, "Persuasione": 7 },
    senses: ["scurovisione 36 m", "Percezione passiva 12"],
    languages: ["Ignan"],
    challenge_rating: "11",
    environment: "Piani Elementali, Fuoco",
    traits: [
      {
        name: "Innate Spellcasting",
        description: "Può lanciare incantesimi innati come Palla di Fuoco."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la scimitarra."
      },
      {
        name: "Scimitarra",
        type: "Mischia",
        to_hit: 10,
        reach: "1,5 m",
        damage: "2d6 + 6",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Elementale del Fuoco",
    size: "Grande",
    type: "elementale",
    alignment: "Neutrale",
    ac: 13,
    ac_type: "naturale",
    hp: 102,
    hp_dice: "12d10 + 36",
    speed: "15 m",
    ability_scores: { str: 10, dex: 20, con: 16, int: 6, wis: 10, cha: 7 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Ignan"],
    challenge_rating: "5",
    environment: "Deserto",
    traits: [
      {
        name: "Luce Calore",
        description: "Emette calore e luce forte in un'area."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 5",
        damage_type: "fuoco"
      }
    ]
  },
  {
    name: "Elementale dell’Acqua",
    size: "Grande",
    type: "elementale",
    alignment: "Neutrale",
    ac: 13,
    ac_type: "naturale",
    hp: 114,
    hp_dice: "12d10 + 48",
    speed: "9 m, nuoto 18 m",
    ability_scores: { str: 18, dex: 14, con: 18, int: 5, wis: 10, cha: 8 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Acquano"],
    challenge_rating: "5",
    environment: "Costa, Palude, Subacqueo",
    traits: [
      {
        name: "Soffocamento",
        description: "Può soffocare una creatura afferrandola."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d8 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Elementale dell’Aria",
    size: "Grande",
    type: "elementale",
    alignment: "Neutrale",
    ac: 15,
    ac_type: "naturale",
    hp: 90,
    hp_dice: "12d10 + 24",
    speed: "0 m, volare 27 m",
    ability_scores: { str: 14, dex: 20, con: 14, int: 6, wis: 10, cha: 6 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Auran"],
    challenge_rating: "5",
    environment: "Deserto, Montagna",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con lo schianto."
      },
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "2d6 + 5",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Elementale della Terra",
    size: "Grande",
    type: "elementale",
    alignment: "Neutrale",
    ac: 17,
    ac_type: "naturale",
    hp: 126,
    hp_dice: "12d10 + 60",
    speed: "9 m, scavare 9 m",
    ability_scores: { str: 20, dex: 8, con: 20, int: 5, wis: 10, cha: 5 },
    skills: {},
    senses: ["vista cieca 18 m", "Percezione passiva 10"],
    languages: ["Terrestre"],
    challenge_rating: "5",
    environment: "Sottosuolo",
    traits: [],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "2d8 + 5",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Fatale dell'Acqua",
    size: "Grande",
    type: "elementale",
    alignment: "Neutrale",
    ac: 13,
    ac_type: "naturale",
    hp: 75,
    hp_dice: "10d10 + 20",
    speed: "9 m, nuoto 18 m",
    ability_scores: { str: 16, dex: 15, con: 14, int: 10, wis: 10, cha: 10 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Acquano"],
    challenge_rating: "3",
    environment: "Sottosuolo, Urbano",
    traits: [
      {
        name: "Respirare Aria e Acqua",
        description: "Può respirare sia in acqua che in aria."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Galeb Duhr",
    size: "Media",
    type: "elementale",
    alignment: "Neutrale",
    ac: 16,
    ac_type: "naturale",
    hp: 85,
    hp_dice: "10d8 + 40",
    speed: "4,5 m, rotolamento 18 m",
    ability_scores: { str: 20, dex: 14, con: 18, int: 11, wis: 12, cha: 11 },
    skills: {},
    senses: ["vista cieca 18 m", "Percezione passiva 11"],
    languages: ["Terrestre"],
    challenge_rating: "6",
    environment: "Collina, Montagna",
    traits: [
      {
        name: "False Appearance",
        description: "Sembra un masso normale finché non si muove."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d6 + 5",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Gargoyle",
    size: "Media",
    type: "elementale",
    alignment: "Caotico Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "7d8 + 21",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 15, dex: 11, con: 16, int: 6, wis: 11, cha: 7 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Sottosuolo"],
    challenge_rating: "2",
    environment: "Sottosuolo, Urbano",
    traits: [
      {
        name: "False Appearance",
        description: "Sembra una statua finché non si muove."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi, uno con il morso e uno con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Magmin",
    size: "Piccola",
    type: "elementale",
    alignment: "Caotico Neutrale",
    ac: 14,
    ac_type: "naturale",
    hp: 9,
    hp_dice: "2d6 + 2",
    speed: "9 m",
    ability_scores: { str: 10, dex: 14, con: 12, int: 10, wis: 10, cha: 10 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Ignan"],
    challenge_rating: "1/2",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Esplosione",
        description: "Esplode quando ridotto a 0 punti ferita."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "fuoco"
      }
    ]
  },
  {
    name: "Mephit del Fango",
    size: "Piccola",
    type: "elementale",
    alignment: "Neutrale Malvagio",
    ac: 11,
    ac_type: "naturale",
    hp: 21,
    hp_dice: "6d6",
    speed: "6 m, volare 6 m, nuoto 6 m",
    ability_scores: { str: 8, dex: 12, con: 12, int: 8, wis: 10, cha: 10 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Acquano", "Terrestre"],
    challenge_rating: "1/4",
    environment: "Palude",
    traits: [],
    actions: [
      {
        name: "Pugno di Fango",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Mephit del Fumo",
    size: "Piccola",
    type: "elementale",
    alignment: "Neutrale Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 21,
    hp_dice: "6d6",
    speed: "9 m, volare 9 m",
    ability_scores: { str: 6, dex: 14, con: 10, int: 12, wis: 10, cha: 10 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Auran", "Ignan"],
    challenge_rating: "1/4",
    environment: "Urbano",
    traits: [],
    actions: [
      {
        name: "Pugno di Fumo",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Mephit del Ghiaccio",
    size: "Piccola",
    type: "elementale",
    alignment: "Neutrale Malvagio",
    ac: 11,
    ac_type: "naturale",
    hp: 21,
    hp_dice: "6d6",
    speed: "6 m, volare 6 m",
    ability_scores: { str: 7, dex: 13, con: 10, int: 9, wis: 11, cha: 12 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Aquan", "Auran"],
    challenge_rating: "1/2",
    environment: "Artico",
    traits: [],
    actions: [
      {
        name: "Pugno di Ghiaccio",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Mephit del Magma",
    size: "Piccola",
    type: "elementale",
    alignment: "Neutrale Malvagio",
    ac: 11,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "5d6 + 5",
    speed: "6 m, nuoto 6 m",
    ability_scores: { str: 8, dex: 12, con: 12, int: 8, wis: 10, cha: 10 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Ignan", "Terrestre"],
    challenge_rating: "1/2",
    environment: "Sottosuolo",
    traits: [],
    actions: [
      {
        name: "Pugno di Magma",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Mephit del Vapore",
    size: "Piccola",
    type: "elementale",
    alignment: "Neutrale Malvagio",
    ac: 10,
    ac_type: "naturale",
    hp: 21,
    hp_dice: "6d6",
    speed: "6 m, volare 6 m",
    ability_scores: { str: 5, dex: 11, con: 12, int: 11, wis: 10, cha: 12 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Acquano", "Ignan"],
    challenge_rating: "1/4",
    environment: "Subacqueo",
    traits: [],
    actions: [
      {
        name: "Pugno di Vapore",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Mephit della Polvere",
    size: "Piccola",
    type: "elementale",
    alignment: "Neutrale Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 17,
    hp_dice: "5d6",
    speed: "6 m, volare 6 m",
    ability_scores: { str: 5, dex: 14, con: 10, int: 9, wis: 11, cha: 10 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Auran", "Terrestre"],
    challenge_rating: "1/2",
    environment: "Deserto",
    traits: [],
    actions: [
      {
        name: "Pugno di Polvere",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Salamandra",
    size: "Grande",
    type: "elementale",
    alignment: "Neutrale Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "8d10 + 8",
    speed: "9 m",
    ability_scores: { str: 18, dex: 10, con: 12, int: 11, wis: 10, cha: 12 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Ignan"],
    challenge_rating: "5",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Corpo Caldo",
        description: "Il suo corpo scotta chiunque lo tocchi."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "fuoco"
      }
    ]
  },
  {
    name: "Serpente di Fuoco",
    size: "Media",
    type: "elementale",
    alignment: "Neutrale Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "9 m, scalare 9 m, nuoto 9 m",
    ability_scores: { str: 14, dex: 16, con: 12, int: 1, wis: 10, cha: 3 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "1",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Corpo Caldo",
        description: "Il suo corpo scotta chiunque lo tocchi."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Xorn",
    size: "Media",
    type: "elementale",
    alignment: "Neutrale",
    ac: 19,
    ac_type: "naturale",
    hp: 85,
    hp_dice: "10d8 + 40",
    speed: "9 m, scavare 9 m",
    ability_scores: { str: 17, dex: 12, con: 18, int: 13, wis: 13, cha: 11 },
    skills: {},
    senses: ["vista cieca 18 m", "Percezione passiva 11"],
    languages: ["Terrestre"],
    challenge_rating: "5",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Sensore di Metallo",
        description: "Può sentire la presenza di metalli preziosi."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 3",
        damage_type: "perforante"
      }
    ]
  },
// Fine Elementali - Manuale dei Mostri

// Inizio Folletti - Manuale dei Mostri
  {
    name: "Cane Intermittente",
    size: "Media",
    type: "folletto",
    alignment: "Legale Buono",
    ac: 13,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "4d8 + 4",
    speed: "12 m",
    ability_scores: { str: 12, dex: 14, con: 12, int: 10, wis: 13, cha: 11 },
    skills: { "Furtività": 4, "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["capisce il linguaggio del suo padrone"],
    challenge_rating: "1/4",
    environment: "Foresta",
    traits: [
      {
        name: "Teletrasporto",
        description: "Può teletrasportarsi a breve distanza."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Driade",
    size: "Media",
    type: "folletto",
    alignment: "Neutrale",
    ac: 11,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "5d8",
    speed: "9 m",
    ability_scores: { str: 10, dex: 12, con: 11, int: 14, wis: 15, cha: 18 },
    skills: { "Intuizione": 4, "Percezione": 4, "Furtività": 3 },
    senses: ["Percezione passiva 14"],
    languages: ["Silvano", "Comune"],
    challenge_rating: "1",
    environment: "Foresta",
    traits: [
      {
        name: "Connessione con l'Albero",
        description: "Può teletrasportarsi tra gli alberi."
      }
    ],
    actions: [
      {
        name: "Randello",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Megera Marina",
    size: "Media",
    type: "folletto",
    alignment: "Caotico Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "8d8 + 16",
    speed: "9 m, nuoto 12 m",
    ability_scores: { str: 16, dex: 13, con: 14, int: 12, wis: 12, cha: 13 },
    skills: { "Furtività": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: ["Acquano", "Comune"],
    challenge_rating: "2",
    environment: "Costa, Subacqueo",
    traits: [
      {
        name: "Maledizione della Verruca",
        description: "Può maledire una creatura con il tocco."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "2d6 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Megera Verde",
    size: "Media",
    type: "folletto",
    alignment: "Neutrale Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 82,
    hp_dice: "11d8 + 33",
    speed: "9 m",
    ability_scores: { str: 18, dex: 12, con: 16, int: 13, wis: 14, cha: 14 },
    skills: { "Inganno": 4, "Furtività": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Comune", "Druidico", "Silvano"],
    challenge_rating: "3",
    environment: "Collina, Foresta, Palude",
    traits: [
      {
        name: "Mimica",
        description: "Può cambiare aspetto e voce per ingannare."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Pixie",
    size: "Minuscola",
    type: "folletto",
    alignment: "Neutrale Buono",
    ac: 15,
    ac_type: "naturale",
    hp: 1,
    hp_dice: "1d4",
    speed: "3 m, volare 9 m",
    ability_scores: { str: 2, dex: 20, con: 10, int: 14, wis: 13, cha: 15 },
    skills: { "Percezione": 3, "Furtività": 7 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Silvano", "Comune"],
    challenge_rating: "1/4",
    environment: "Foresta",
    traits: [
      {
        name: "Invisibilità",
        description: "Può diventare invisibile a volontà."
      }
    ],
    actions: [
      {
        name: "Dardo",
        type: "Distanza",
        to_hit: 7,
        range: "3/6 m",
        damage: "1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Satiro",
    size: "Media",
    type: "folletto",
    alignment: "Caotico Neutrale",
    ac: 14,
    ac_type: "naturale",
    hp: 31,
    hp_dice: "7d8",
    speed: "12 m",
    ability_scores: { str: 12, dex: 16, con: 12, int: 12, wis: 10, cha: 14 },
    skills: { "Furtività": 5, "Percezione": 3 },
    senses: ["Percezione passiva 13"],
    languages: ["Comune", "Silvano"],
    challenge_rating: "1/2",
    environment: "Foresta",
    traits: [
      {
        name: "Soffio di Pan",
        description: "Può incantare le creature con la sua musica."
      }
    ],
    actions: [
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Spiritello",
    size: "Minuscola",
    type: "folletto",
    alignment: "Neutrale Buono",
    ac: 15,
    ac_type: "naturale",
    hp: 2,
    hp_dice: "1d4",
    speed: "3 m, volare 12 m",
    ability_scores: { str: 3, dex: 18, con: 10, int: 14, wis: 13, cha: 15 },
    skills: { "Furtività": 6, "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Silvano", "Comune"],
    challenge_rating: "1/4",
    environment: "Foresta",
    traits: [
      {
        name: "Invisibilità",
        description: "Può diventare invisibile a volontà."
      }
    ],
    actions: [
      {
        name: "Dardo",
        type: "Distanza",
        to_hit: 6,
        reach: "6 m",
        damage: "1",
        damage_type: "perforante"
      }
    ]
  },
// Fine Folletti - Manuale dei Mostri

// Inizio Giganti - Manuale dei Mostri
  {
    name: "Ciclope",
    size: "Enorme",
    type: "gigante",
    alignment: "Neutrale Caotico",
    ac: 13,
    ac_type: "naturale",
    hp: 138,
    hp_dice: "12d12 + 60",
    speed: "9 m",
    ability_scores: { str: 23, dex: 11, con: 20, int: 6, wis: 12, cha: 9 },
    skills: {},
    senses: ["Percezione passiva 11"],
    languages: ["Gigante"],
    challenge_rating: "6",
    environment: "Collina, Costa, Deserto, Montagna, Prateria, Sottosuolo",
    traits: [
      {
        name: "Occhio Unico",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che si basano sulla vista."
      }
    ],
    actions: [
      {
        name: "Randello",
        type: "Mischia",
        to_hit: 8,
        reach: "3 m",
        damage: "2d8 + 6",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Ettin",
    size: "Grande",
    type: "gigante",
    alignment: "Caotico Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 85,
    hp_dice: "10d10 + 30",
    speed: "12 m",
    ability_scores: { str: 21, dex: 8, con: 17, int: 6, wis: 10, cha: 8 },
    skills: { "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Orchesco", "Gigante"],
    challenge_rating: "4",
    environment: "Collina, Montagna, Sottosuolo",
    traits: [
      {
        name: "Due Teste",
        description: "Ha vantaggio ai tiri salvezza contro l'incantesimo 'Sonno'."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua clava."
      },
      {
        name: "Clava",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d6 + 5",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Fomorian",
    size: "Enorme",
    type: "gigante",
    alignment: "Caotico Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 168,
    hp_dice: "16d12 + 64",
    speed: "9 m",
    ability_scores: { str: 23, dex: 9, con: 18, int: 6, wis: 10, cha: 7 },
    skills: { "Percezione": 4 },
    senses: ["scurovisione 36 m", "Percezione passiva 14"],
    languages: ["Gigante", "Sottosuolo"],
    challenge_rating: "8",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Malevolent Gaze",
        description: "Può costringere una creatura a effettuare un tiro salvezza o subire danni psichici."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua clava."
      },
      {
        name: "Clava",
        type: "Mischia",
        to_hit: 9,
        reach: "4,5 m",
        damage: "3d8 + 6",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Gigante del Fuoco",
    size: "Enorme",
    type: "gigante",
    alignment: "Legale Malvagio",
    ac: 18,
    ac_type: "piastra",
    hp: 162,
    hp_dice: "15d12 + 60",
    speed: "9 m",
    ability_scores: { str: 25, dex: 9, con: 23, int: 10, wis: 12, cha: 12 },
    skills: { "Atletica": 11, "Percezione": 5 },
    senses: ["scurovisione 36 m", "Percezione passiva 15"],
    languages: ["Gigante"],
    challenge_rating: "9",
    environment: "Montagna, Sottosuolo",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada grande."
      },
      {
        name: "Spada Grande",
        type: "Mischia",
        to_hit: 11,
        reach: "3 m",
        damage: "3d6 + 7",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Gigante del Gelo",
    size: "Enorme",
    type: "gigante",
    alignment: "Neutrale Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 138,
    hp_dice: "12d12 + 60",
    speed: "12 m",
    ability_scores: { str: 23, dex: 9, con: 21, int: 9, wis: 12, cha: 10 },
    skills: { "Atletica": 8, "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Gigante"],
    challenge_rating: "8",
    environment: "Artico, Montagna",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua ascia bipenne."
      },
      {
        name: "Ascia Bipenne",
        type: "Mischia",
        to_hit: 9,
        reach: "3 m",
        damage: "3d12 + 6",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Gigante delle Colline",
    size: "Enorme",
    type: "gigante",
    alignment: "Caotico Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 105,
    hp_dice: "9d12 + 45",
    speed: "12 m",
    ability_scores: { str: 21, dex: 8, con: 19, int: 5, wis: 9, cha: 6 },
    skills: { "Percezione": 2 },
    senses: ["Percezione passiva 12"],
    languages: ["Gigante"],
    challenge_rating: "5",
    environment: "Collina",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con il randello."
      },
      {
        name: "Randello",
        type: "Mischia",
        to_hit: 8,
        reach: "3 m",
        damage: "2d6 + 5",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Gigante delle Nuvole",
    size: "Enorme",
    type: "gigante",
    alignment: "Neutrale Buono (50%) o Neutrale Malvagio (50%)",
    ac: 14,
    ac_type: "naturale",
    hp: 200,
    hp_dice: "16d12 + 96",
    speed: "12 m",
    ability_scores: { str: 27, dex: 10, con: 22, int: 12, wis: 14, cha: 16 },
    skills: { "Furtività": 4, "Percezione": 6 },
    senses: ["scurovisione 18 m", "Percezione passiva 16"],
    languages: ["Gigante"],
    challenge_rating: "9",
    environment: "Montagna",
    traits: [
      {
        name: "Incantesimi Innati",
        description: "Può lanciare incantesimi minori a volontà."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con l'ascia."
      },
      {
        name: "Ascia",
        type: "Mischia",
        to_hit: 10,
        reach: "3 m",
        damage: "3d8 + 7",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Gigante delle Pietre",
    size: "Enorme",
    type: "gigante",
    alignment: "Neutrale",
    ac: 17,
    ac_type: "naturale",
    hp: 126,
    hp_dice: "11d12 + 55",
    speed: "12 m",
    ability_scores: { str: 23, dex: 15, con: 20, int: 10, wis: 12, cha: 9 },
    skills: { "Atletica": 9, "Percezione": 5 },
    senses: ["Percezione passiva 15"],
    languages: ["Gigante"],
    challenge_rating: "7",
    environment: "Collina, Montagna, Sottosuolo",
    traits: [
      {
        name: "Pietre Nascoste",
        description: "Ha vantaggio ai tiri per nascondersi in terreni rocciosi."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua clava."
      },
      {
        name: "Clava",
        type: "Mischia",
        to_hit: 9,
        reach: "3 m",
        damage: "2d6 + 6",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Gigante delle Tempeste",
    size: "Enorme",
    type: "gigante",
    alignment: "Caotico Buono",
    ac: 16,
    ac_type: "naturale",
    hp: 200,
    hp_dice: "16d12 + 96",
    speed: "15 m, nuoto 15 m",
    ability_scores: { str: 29, dex: 14, con: 22, int: 14, wis: 16, cha: 18 },
    skills: { "Atletica": 13, "Percezione": 8, "Ristabilimento": 7 },
    senses: ["scurovisione 18 m", "Percezione passiva 18"],
    languages: ["Gigante"],
    challenge_rating: "13",
    environment: "Costa",
    traits: [
      {
        name: "Incantesimi Innati",
        description: "Può lanciare incantesimi a volontà."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada grande."
      },
      {
        name: "Spada Grande",
        type: "Mischia",
        to_hit: 14,
        reach: "3 m",
        damage: "3d6 + 9",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Mezzogre (Ogrillon)",
    size: "Grande",
    type: "gigante",
    alignment: "Qualsiasi Caotico",
    ac: 13,
    ac_type: "naturale",
    hp: 30,
    hp_dice: "4d10 + 8",
    speed: "9 m",
    ability_scores: { str: 17, dex: 10, con: 14, int: 7, wis: 9, cha: 7 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 9"],
    languages: ["Comune", "Gigante"],
    challenge_rating: "1",
    environment: "Artico, Collina, Deserto, Foresta, Montagna, Sottosuolo, Urbano",
    traits: [],
    actions: [
      {
        name: "Clava",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Ogre",
    size: "Grande",
    type: "gigante",
    alignment: "Caotico Malvagio",
    ac: 11,
    ac_type: "naturale",
    hp: 59,
    hp_dice: "7d10 + 21",
    speed: "12 m",
    ability_scores: { str: 19, dex: 8, con: 16, int: 5, wis: 7, cha: 7 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 8"],
    languages: ["Comune", "Gigante"],
    challenge_rating: "2",
    environment: "Artico, Collina, Costa, Deserto, Foresta, Montagna, Palude, Prateria, Sottosuolo",
    traits: [],
    actions: [
      {
        name: "Clava",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d8 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Oni",
    size: "Grande",
    type: "gigante",
    alignment: "Legale Malvagio",
    ac: 16,
    ac_type: "armatura a scaglie",
    hp: 110,
    hp_dice: "13d10 + 39",
    speed: "9 m, volare 9 m",
    ability_scores: { str: 20, dex: 15, con: 16, int: 11, wis: 12, cha: 15 },
    skills: { "Inganno": 4, "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Comune", "Gigante"],
    challenge_rating: "7",
    environment: "Foresta, Urbano",
    traits: [
      {
        name: "Magia",
        description: "Può lanciare incantesimi minori e potenti."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con l'ascia."
      },
      {
        name: "Ascia",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d6 + 5",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Troll",
    size: "Grande",
    type: "gigante",
    alignment: "Caotico Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 84,
    hp_dice: "8d10 + 40",
    speed: "9 m",
    ability_scores: { str: 18, dex: 13, con: 20, int: 7, wis: 9, cha: 7 },
    skills: { "Percezione": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Gigante"],
    challenge_rating: "5",
    environment: "Artico, Collina, Foresta, Montagna, Palude, Sottosuolo",
    traits: [
      {
        name: "Rigenerazione",
        description: "Recupera un certo numero di punti ferita ogni turno, a meno che non venga colpito da acido o fuoco."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi: uno con il morso e due con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
// Fine Giganti - Manuale dei Mostri
// src/data/dndMonsters.js

// Inizio Immondi - Manuale dei Mostri
  {
    name: "Cambion",
    size: "Media",
    type: "immondo",
    alignment: "Qualsiasi Malvagio",
    ac: 19,
    ac_type: "naturale",
    hp: 82,
    hp_dice: "11d8 + 33",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 18, dex: 18, con: 16, int: 14, wis: 12, cha: 16 },
    skills: { "Furtività": 7, "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Abissale", "Infernale", "Comune"],
    challenge_rating: "5",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Infernal Legacy",
        description: "Eredità infernale che gli permette di lanciare incantesimi minori."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi: uno con la sua spada e uno con la sua frusta."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Cavallo degli Incubi",
    size: "Grande",
    type: "immondo",
    alignment: "Neutrale Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 68,
    hp_dice: "8d10 + 24",
    speed: "18 m, volare 27 m",
    ability_scores: { str: 18, dex: 12, con: 16, int: 10, wis: 13, cha: 15 },
    skills: { "Intuizione": 4, "Percezione": 4 },
    senses: ["scurovisione 36 m", "Percezione passiva 14"],
    languages: ["Infernale", "Comune"],
    challenge_rating: "3",
    environment: "Piani Inferiori",
    traits: [
      {
        name: "Incandescente",
        description: "Il suo corpo emette luce e calore che danneggiano le creature vicine."
      }
    ],
    actions: [
      {
        name: "Zoccoli",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Mane",
    size: "Piccola",
    type: "immondo",
    alignment: "Caotico Malvagio",
    ac: 9,
    ac_type: "naturale",
    hp: 9,
    hp_dice: "2d6 + 2",
    speed: "6 m",
    ability_scores: { str: 10, dex: 9, con: 12, int: 3, wis: 8, cha: 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 9"],
    languages: ["capisce l'Abissale"],
    challenge_rating: "1/8",
    environment: "Abisso",
    traits: [
      {
        name: "Imprevedibile",
        description: "Ha un comportamento caotico e aggressivo."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Megera Notturna",
    size: "Media",
    type: "immondo",
    alignment: "Neutrale Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 112,
    hp_dice: "15d8 + 45",
    speed: "9 m",
    ability_scores: { str: 18, dex: 16, con: 16, int: 17, wis: 18, cha: 17 },
    skills: { "Inganno": 6, "Intuizione": 8, "Percezione": 8 },
    senses: ["vista vera 36 m", "Percezione passiva 18"],
    languages: ["Abissale", "Infernale", "Comune"],
    challenge_rating: "5",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Incubi",
        description: "Può viaggiare nei sogni per tormentare le sue vittime."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Rakshasa",
    size: "Media",
    type: "immondo",
    alignment: "Legale Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 110,
    hp_dice: "13d8 + 52",
    speed: "9 m",
    ability_scores: { str: 10, dex: 17, con: 18, int: 13, wis: 16, cha: 20 },
    skills: { "Inganno": 8, "Persuasione": 8 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Comune", "Infernale"],
    challenge_rating: "13",
    environment: "Urbano",
    traits: [
      {
        name: "Immunità",
        description: "Immune ai danni non magici."
      },
      {
        name: "Incantesimi Innati",
        description: "Può lanciare incantesimi da mago a volontà."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d6 + 3",
        damage_type: "taglienti",
        description: "Attacca con gli artigli che infliggono danni aggiuntivi."
      }
    ]
  },
  {
    name: "Segugio Infernale",
    size: "Media",
    type: "immondo",
    alignment: "Legale Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "7d8 + 14",
    speed: "12 m",
    ability_scores: { str: 17, dex: 12, con: 15, int: 6, wis: 13, cha: 6 },
    skills: { "Percezione": 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 15"],
    languages: ["Infernale"],
    challenge_rating: "3",
    environment: "Montagna, Sottosuolo",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "perforante"
      },
      {
        name: "Soffio di Fuoco",
        description: "Soffia un cono di fuoco."
      }
    ]
  },
  {
    name: "Quasit",
    size: "Minuscola",
    type: "immondo (demone, mutaforma)",
    alignment: "Neutrale Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 7,
    hp_dice: "3d4",
    speed: "9 m, volare 9 m",
    ability_scores: { str: 5, dex: 17, con: 10, int: 10, wis: 10, cha: 10 },
    skills: { "Furtività": 5, "Percezione": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Abissale"],
    challenge_rating: "1",
    environment: "Foresta",
    traits: [
      {
        name: "Forma Animale",
        description: "Può assumere la forma di un animale."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d4 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Balor",
    size: "Enorme",
    type: "immondo (demone)",
    alignment: "Caotico Malvagio",
    ac: 19,
    ac_type: "naturale",
    hp: 262,
    hp_dice: "21d12 + 126",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 26, dex: 15, con: 22, int: 20, wis: 16, cha: 22 },
    skills: { "Percezione": 9 },
    senses: ["vista vera 36 m", "Percezione passiva 19"],
    languages: ["Abissale", "Telepatia 36 m"],
    challenge_rating: "19",
    environment: "Abisso",
    traits: [
      {
        name: "Aura di Fiamme",
        description: "Danneggia le creature che si trovano vicino a lui."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada e la sua frusta."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 14,
        reach: "3 m",
        damage: "3d6 + 8",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Barlgura",
    size: "Grande",
    type: "immondo (demone)",
    alignment: "Caotico Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 68,
    hp_dice: "8d10 + 24",
    speed: "12 m, scalare 12 m",
    ability_scores: { str: 18, dex: 15, con: 16, int: 7, wis: 12, cha: 9 },
    skills: { "Furtività": 4, "Percezione": 3 },
    senses: ["scurovisione 36 m", "Percezione passiva 13"],
    languages: ["Abissale"],
    challenge_rating: "5",
    environment: "Abisso",
    traits: [
      {
        name: "Pounce",
        description: "Può attaccare più volte se si muove di una certa distanza."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi a pugno."
      },
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d6 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Chasme",
    size: "Grande",
    type: "immondo (demone)",
    alignment: "Caotico Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 84,
    hp_dice: "10d10 + 30",
    speed: "6 m, volare 18 m",
    ability_scores: { str: 10, dex: 15, con: 16, int: 10, wis: 12, cha: 10 },
    skills: { "Percezione": 5 },
    senses: ["vista cieca 18 m", "Percezione passiva 15"],
    languages: ["Abissale", "Telepatia 36 m"],
    challenge_rating: "6",
    environment: "Abisso",
    traits: [
      {
        name: "Droning",
        description: "Il suo ronzio può causare un sonno magico."
      }
    ],
    actions: [
      {
        name: "Proboscide",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "2d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Demone d'Ombra",
    size: "Media",
    type: "immondo (demone)",
    alignment: "Caotico Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 66,
    hp_dice: "12d8 + 12",
    speed: "9 m, volare 9 m",
    ability_scores: { str: 10, dex: 14, con: 12, int: 13, wis: 14, cha: 10 },
    skills: { "Furtività": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Abissale", "Comune"],
    challenge_rating: "4",
    environment: "Foresta, Prateria",
    traits: [
      {
        name: "Camuffamento d'Ombra",
        description: "Ha vantaggio ai tiri per nascondersi in zone d'ombra."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "psichici"
      }
    ]
  },
  {
    name: "Dretch",
    size: "Piccola",
    type: "immondo (demone)",
    alignment: "Caotico Malvagio",
    ac: 11,
    ac_type: "naturale",
    hp: 18,
    hp_dice: "4d6 + 4",
    speed: "6 m",
    ability_scores: { str: 11, dex: 11, con: 12, int: 5, wis: 8, cha: 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 9"],
    languages: ["Abissale", "Telepatia 18 m"],
    challenge_rating: "1/4",
    environment: "Abisso",
    traits: [
      {
        name: "Puzza",
        description: "Emette una puzza che può intossicare le creature vicine."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Glabrezu",
    size: "Grande",
    type: "immondo (demone)",
    alignment: "Caotico Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 168,
    hp_dice: "16d10 + 80",
    speed: "12 m",
    ability_scores: { str: 20, dex: 15, con: 20, int: 19, wis: 17, cha: 16 },
    skills: { "Inganno": 7, "Intuizione": 7, "Percezione": 7 },
    senses: ["vista vera 36 m", "Percezione passiva 17"],
    languages: ["Abissale", "Telepatia 36 m"],
    challenge_rating: "9",
    environment: "Abisso",
    traits: [
      {
        name: "Incantesimi Innati",
        description: "Può lanciare incantesimi innati come Invisibilità e Paura."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua quattro attacchi: due con le chele e due con i pugni."
      },
      {
        name: "Chela",
        type: "Mischia",
        to_hit: 9,
        reach: "3 m",
        damage: "2d10 + 5",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Goristro",
    size: "Enorme",
    type: "immondo (demone)",
    alignment: "Caotico Malvagio",
    ac: 19,
    ac_type: "naturale",
    hp: 313,
    hp_dice: "19d12 + 190",
    speed: "12 m",
    ability_scores: { str: 25, dex: 11, con: 22, int: 6, wis: 13, cha: 14 },
    skills: { "Percezione": 7 },
    senses: ["scurovisione 36 m", "Percezione passiva 17"],
    languages: ["Abissale"],
    challenge_rating: "17",
    environment: "Abisso",
    traits: [
      {
        name: "Carica",
        description: "Se si muove per 6 metri in linea retta, può infliggere danni extra con il suo attacco."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi con i pugni."
      },
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 12,
        reach: "1,5 m",
        damage: "3d8 + 7",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Hezrou",
    size: "Grande",
    type: "immondo (demone)",
    alignment: "Caotico Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 102,
    hp_dice: "12d10 + 36",
    speed: "9 m",
    ability_scores: { str: 18, dex: 11, con: 17, int: 5, wis: 10, cha: 11 },
    senses: ["scurovisione 36 m", "Percezione passiva 10"],
    languages: ["Abissale", "Telepatia 36 m"],
    challenge_rating: "8",
    environment: "Abisso",
    traits: [
      {
        name: "Puzza",
        description: "Emette una puzza che può intossicare le creature vicine."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi: uno con il morso e uno con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Marilith",
    size: "Grande",
    type: "immondo (demone)",
    alignment: "Caotico Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 189,
    hp_dice: "18d10 + 90",
    speed: "12 m",
    ability_scores: { str: 18, dex: 20, con: 20, int: 18, wis: 16, cha: 20 },
    skills: { "Percezione": 8, "Intuizione": 8 },
    senses: ["vista vera 36 m", "Percezione passiva 18"],
    languages: ["Abissale", "Telepatia 36 m"],
    challenge_rating: "16",
    environment: "Abisso",
    traits: [
      {
        name: "Reazione Leggendaria",
        description: "Può effettuare un attacco extra dopo un attacco di un'altra creatura."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua fino a sette attacchi con le sue spade."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 9,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Nalfeshnee",
    size: "Grande",
    type: "immondo (demone)",
    alignment: "Caotico Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 184,
    hp_dice: "16d10 + 96",
    speed: "9 m, volare 9 m",
    ability_scores: { str: 21, dex: 10, con: 22, int: 19, wis: 12, cha: 15 },
    skills: { "Percezione": 6 },
    senses: ["vista vera 36 m", "Percezione passiva 16"],
    languages: ["Abissale", "Telepatia 36 m"],
    challenge_rating: "13",
    environment: "Abisso",
    traits: [
      {
        name: "Raggio di Incantesimo",
        description: "Può lanciare un raggio di energia che causa danni e confusione."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con i pugni."
      },
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 9,
        reach: "1,5 m",
        damage: "2d8 + 5",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Vrock",
    size: "Grande",
    type: "immondo (demone)",
    alignment: "Caotico Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 104,
    hp_dice: "16d8 + 32",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 17, dex: 15, con: 14, int: 8, wis: 10, cha: 13 },
    skills: { "Percezione": 3 },
    senses: ["scurovisione 36 m", "Percezione passiva 13"],
    languages: ["Abissale"],
    challenge_rating: "6",
    environment: "Abisso",
    traits: [
      {
        name: "Polvere Stordente",
        description: "Può emettere una nube di polvere che stordisce i nemici."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi: due con gli artigli e uno con il becco."
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Yochlol",
    size: "Media",
    type: "immondo (demone)",
    alignment: "Caotico Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 99,
    hp_dice: "18d8 + 18",
    speed: "9 m, volare 9 m",
    ability_scores: { str: 10, dex: 14, con: 12, int: 10, wis: 16, cha: 18 },
    skills: { "Furtività": 4 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 13"],
    languages: ["Abissale", "Telepatia 36 m"],
    challenge_rating: "10",
    environment: "Abisso",
    traits: [
      {
        name: "Mutaforma",
        description: "Può assumere la forma di un ragno gigante."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "veleno"
      }
    ]
  },
  {
    name: "Imp",
    size: "Minuscola",
    type: "immondo (diavolo, mutaforma)",
    alignment: "Legale Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 10,
    hp_dice: "3d4 + 3",
    speed: "6 m, volare 12 m",
    ability_scores: { str: 6, dex: 17, con: 13, int: 11, wis: 12, cha: 14 },
    skills: { "Inganno": 4, "Furtività": 5, "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Infernale", "Comune"],
    challenge_rating: "1",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Mutaforma",
        description: "Può assumere la forma di un animale."
      }
    ],
    actions: [
      {
        name: "Pungiglione",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d4 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Diavolo Barbuto",
    size: "Media",
    type: "immondo (diavolo)",
    alignment: "Legale Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "8d8 + 16",
    speed: "9 m",
    ability_scores: { str: 16, dex: 11, con: 15, int: 10, wis: 11, cha: 14 },
    skills: { "Percezione": 3 },
    senses: ["scurovisione 36 m", "Percezione passiva 13"],
    languages: ["Infernale", "Comune"],
    challenge_rating: "3",
    environment: "Piani Inferiori",
    traits: [
      {
        name: "Puzza",
        description: "Emette una puzza che può intossicare le creature vicine."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi: uno con la sua lancia e uno con la sua barba."
      },
      {
        name: "Lancia",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Diavolo Cornuto",
    size: "Grande",
    type: "immondo (diavolo)",
    alignment: "Legale Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 178,
    hp_dice: "17d10 + 85",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 23, dex: 15, con: 20, int: 13, wis: 16, cha: 17 },
    skills: { "Percezione": 7 },
    senses: ["vista vera 36 m", "Percezione passiva 17"],
    languages: ["Infernale", "Telepatia 36 m"],
    challenge_rating: "11",
    environment: "Piani Inferiori",
    traits: [
      {
        name: "Immunità",
        description: "Immune al fuoco e al veleno, e resistenza ad altri danni."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi: due con le sue ali e uno con la coda."
      },
      {
        name: "Spada",
        type: "Mischia",
        to_hit: 10,
        reach: "1,5 m",
        damage: "2d6 + 6",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Diavolo d’Ossa",
    size: "Grande",
    type: "immondo (diavolo)",
    alignment: "Legale Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 84,
    hp_dice: "13d10 + 13",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 18, dex: 15, con: 12, int: 10, wis: 13, cha: 15 },
    skills: { "Percezione": 4 },
    senses: ["scurovisione 36 m", "Percezione passiva 14"],
    languages: ["Infernale", "Telepatia 36 m"],
    challenge_rating: "9",
    environment: "Piani Inferiori",
    traits: [
      {
        name: "Immunità",
        description: "Immune al fuoco e al veleno, e resistenza ad altri danni."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada e uno con la sua frusta."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Diavolo del Ghiaccio",
    size: "Grande",
    type: "immondo (diavolo)",
    alignment: "Legale Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 178,
    hp_dice: "17d10 + 85",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 21, dex: 14, con: 20, int: 18, wis: 16, cha: 18 },
    skills: { "Percezione": 7 },
    senses: ["vista vera 36 m", "Percezione passiva 17"],
    languages: ["Infernale", "Telepatia 36 m"],
    challenge_rating: "14",
    environment: "Piani Inferiori",
    traits: [
      {
        name: "Corpo di Ghiaccio",
        description: "Infligge danni da freddo extra con i suoi attacchi e al tocco."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua lancia."
      },
      {
        name: "Lancia",
        type: "Mischia",
        to_hit: 9,
        reach: "3 m",
        damage: "2d8 + 5",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Diavolo della Fossa",
    size: "Grande",
    type: "immondo (diavolo)",
    alignment: "Legale Malvagio",
    ac: 19,
    ac_type: "naturale",
    hp: 300,
    hp_dice: "24d10 + 168",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 26, dex: 14, con: 24, int: 22, wis: 18, cha: 24 },
    skills: { "Percezione": 9 },
    senses: ["vista vera 36 m", "Percezione passiva 19"],
    languages: ["Infernale", "Telepatia 36 m"],
    challenge_rating: "20",
    environment: "Piani Inferiori",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua quattro attacchi con i suoi artigli."
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 15,
        reach: "1,5 m",
        damage: "2d8 + 8",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Diavolo delle Catene",
    size: "Media",
    type: "immondo (diavolo)",
    alignment: "Legale Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 85,
    hp_dice: "10d8 + 40",
    speed: "9 m",
    ability_scores: { str: 16, dex: 12, con: 18, int: 11, wis: 14, cha: 12 },
    skills: { "Percezione": 4 },
    senses: ["scurovisione 36 m", "Percezione passiva 14"],
    languages: ["Infernale", "Telepatia 36 m"],
    challenge_rating: "8",
    environment: "Piani Inferiori",
    traits: [
      {
        name: "Catene Animate",
        description: "Può animare le catene per attaccare da lontano."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua catena."
      },
      {
        name: "Catena",
        type: "Mischia",
        to_hit: 8,
        reach: "3 m",
        damage: "2d6 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Diavolo Spinato",
    size: "Piccola",
    type: "immondo (diavolo)",
    alignment: "Legale Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "4d6 + 8",
    speed: "6 m",
    ability_scores: { str: 10, dex: 11, con: 14, int: 10, wis: 11, cha: 12 },
    skills: { "Percezione": 3 },
    senses: ["scurovisione 36 m", "Percezione passiva 13"],
    languages: ["Infernale", "Telepatia 36 m"],
    challenge_rating: "2",
    environment: "Piani Inferiori",
    traits: [
      {
        name: "Corpo Spinoso",
        description: "Chi lo attacca in mischia riceve danni da spine."
      }
    ],
    actions: [
      {
        name: "Spuntoni",
        type: "Distanza",
        to_hit: 3,
        reach: "9 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Diavolo Uncinato",
    size: "Media",
    type: "immondo (diavolo)",
    alignment: "Legale Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "8d8 + 16",
    speed: "9 m",
    ability_scores: { str: 16, dex: 12, con: 15, int: 10, wis: 11, cha: 10 },
    senses: ["scurovisione 36 m", "Percezione passiva 11"],
    languages: ["Infernale", "Telepatia 36 m"],
    challenge_rating: "5",
    environment: "Piani Inferiori",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con i suoi uncini."
      },
      {
        name: "Uncino",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Erinni",
    size: "Media",
    type: "immondo (diavolo)",
    alignment: "Legale Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 127,
    hp_dice: "15d8 + 60",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 16, dex: 16, con: 18, int: 14, wis: 16, cha: 18 },
    skills: { "Intuizione": 6, "Percezione": 6, "Furtività": 6 },
    senses: ["vista vera 36 m", "Percezione passiva 16"],
    languages: ["Infernale", "Comune", "Abissale"],
    challenge_rating: "12",
    environment: "Piani Inferiori",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi: due con la spada lunga e uno con l'arco lungo."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Lemure",
    size: "Media",
    type: "immondo (diavolo)",
    alignment: "Legale Malvagio",
    ac: 7,
    ac_type: "naturale",
    hp: 13,
    hp_dice: "3d8",
    speed: "4,5 m",
    ability_scores: { str: 10, dex: 5, con: 11, int: 3, wis: 8, cha: 3 },
    senses: ["scurovisione 36 m", "Percezione passiva 9"],
    languages: ["capisce l'Infernale"],
    challenge_rating: "0",
    environment: "Piani Inferiori",
    traits: [
      {
        name: "Rigenerazione",
        description: "Rigenera punti ferita a meno che non sia distrutto."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Incubo",
    size: "Media",
    type: "immondo (mutaforma)",
    alignment: "Neutrale Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 68,
    hp_dice: "8d8 + 32",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 18, dex: 15, con: 18, int: 13, wis: 12, cha: 15 },
    skills: { "Furtività": 4, "Percezione": 3 },
    senses: ["scurovisione 36 m", "Percezione passiva 13"],
    languages: ["Infernale"],
    challenge_rating: "4",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Corpo Vaporoso",
        description: "Può muoversi attraverso gli oggetti."
      }
    ],
    actions: [
      {
        name: "Zoccoli",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Succube",
    size: "Media",
    type: "immondo (mutaforma)",
    alignment: "Neutrale Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 66,
    hp_dice: "12d6 + 24",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 8, dex: 18, con: 14, int: 16, wis: 14, cha: 20 },
    skills: { "Inganno": 10, "Intuizione": 6, "Percezione": 6 },
    senses: ["vista vera 36 m", "Percezione passiva 16"],
    languages: ["Abissale", "Infernale", "Comune"],
    challenge_rating: "4",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Bacio",
        description: "Può prosciugare la vitalità di una creatura con un bacio."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d6 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Mezzoloth",
    size: "Media",
    type: "immondo (yugoloth)",
    alignment: "Neutrale Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 75,
    hp_dice: "10d8 + 30",
    speed: "12 m",
    ability_scores: { str: 16, dex: 11, con: 16, int: 9, wis: 10, cha: 10 },
    skills: {},
    senses: ["scurovisione 36 m", "Percezione passiva 10"],
    languages: ["Yugoloth"],
    challenge_rating: "5",
    environment: "Piani Esterni",
    traits: [
      {
        name: "Lancia Magica",
        description: "Gli attacchi della sua lancia sono magici e infliggono danni aggiuntivi."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua lancia."
      },
      {
        name: "Lancia",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Arcanaloth",
    size: "Media",
    type: "immondo (yugoloth)",
    alignment: "Neutrale Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 104,
    hp_dice: "16d8 + 32",
    speed: "9 m",
    ability_scores: { str: 10, dex: 12, con: 15, int: 20, wis: 16, cha: 18 },
    skills: { "Inganno": 8, "Percezione": 7 },
    senses: ["vista vera 36 m", "Percezione passiva 17"],
    languages: ["Yugoloth", "Telepatia 36 m"],
    challenge_rating: "12",
    environment: "Piani Esterni",
    traits: [
      {
        name: "Immunità alla Magia",
        description: "Immune ai danni magici."
      },
      {
        name: "Incantesimi Innati",
        description: "Può lanciare incantesimi potenti a volontà."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 1",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Nycaloth",
    size: "Grande",
    type: "immondo (yugoloth)",
    alignment: "Neutrale Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 157,
    hp_dice: "15d10 + 75",
    speed: "12 m, volare 18 m",
    ability_scores: { str: 20, dex: 16, con: 20, int: 14, wis: 12, cha: 17 },
    skills: { "Furtività": 7, "Percezione": 5 },
    senses: ["vista vera 36 m", "Percezione passiva 15"],
    languages: ["Yugoloth", "Telepatia 36 m"],
    challenge_rating: "9",
    environment: "Piani Esterni",
    traits: [
      {
        name: "Immunità alla Magia",
        description: "Immune ai danni magici."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi: due con gli artigli e uno con il morso."
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 9,
        reach: "1,5 m",
        damage: "2d6 + 5",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Ultroloth",
    size: "Media",
    type: "immondo (yugoloth)",
    alignment: "Neutrale Malvagio",
    ac: 19,
    ac_type: "naturale",
    hp: 153,
    hp_dice: "18d8 + 72",
    speed: "9 m, volare 9 m",
    ability_scores: { str: 17, dex: 16, con: 18, int: 18, wis: 16, cha: 19 },
    skills: { "Inganno": 8, "Furtività": 7, "Percezione": 7 },
    senses: ["vista vera 36 m", "Percezione passiva 17"],
    languages: ["Yugoloth", "Telepatia 36 m"],
    challenge_rating: "13",
    environment: "Piani Esterni",
    traits: [
      {
        name: "Immunità alla Magia",
        description: "Immune ai danni magici."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con i suoi artigli."
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "taglienti"
      }
    ]
  },
// Fine Immondi - Manuale dei Mostri

// Inizio Melme - Manuale dei Mostri
  {
    name: "Ameba Paglierina",
    size: "Grande",
    type: "melma",
    alignment: "Senza Allineamento",
    ac: 8,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d10 + 12",
    speed: "6 m, scalare 6 m",
    ability_scores: { str: 15, dex: 6, con: 14, int: 1, wis: 6, cha: 1 },
    senses: ["vista cieca 18 m", "Percezione passiva 8"],
    languages: [],
    challenge_rating: "2",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Corpo acido",
        description: "Chi lo tocca subisce danni da acido."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Cubo Gelatinoso",
    size: "Grande",
    type: "melma",
    alignment: "Senza Allineamento",
    ac: 6,
    ac_type: "naturale",
    hp: 84,
    hp_dice: "8d10 + 40",
    speed: "4,5 m",
    ability_scores: { str: 14, dex: 6, con: 20, int: 1, wis: 6, cha: 1 },
    senses: ["vista cieca 18 m", "Percezione passiva 8"],
    languages: [],
    challenge_rating: "2",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Trasparente",
        description: "È difficile da vedere e può sorprendere le creature."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Melma Grigia",
    size: "Media",
    type: "melma",
    alignment: "Senza Allineamento",
    ac: 8,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "3d8 + 9",
    speed: "3 m, scalare 3 m",
    ability_scores: { str: 12, dex: 6, con: 16, int: 1, wis: 6, cha: 1 },
    senses: ["vista cieca 18 m", "Percezione passiva 8"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Corpo acido",
        description: "Chi lo tocca subisce danni da acido."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Protoplasma Nero",
    size: "Grande",
    type: "melma",
    alignment: "Senza Allineamento",
    ac: 8,
    ac_type: "naturale",
    hp: 85,
    hp_dice: "10d10 + 30",
    speed: "6 m, scalare 6 m",
    ability_scores: { str: 16, dex: 6, con: 16, int: 1, wis: 6, cha: 1 },
    senses: ["vista cieca 18 m", "Percezione passiva 8"],
    languages: [],
    challenge_rating: "4",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Corpo acido",
        description: "Chi lo tocca subisce danni da acido e le armature si corrodono."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "2d6 + 3",
        damage_type: "contundente"
      }
    ]
  },
// Fine Melme - Manuale dei Mostri

// Inizio Mostruosità - Manuale dei Mostri
  {
    name: "Yeti",
    size: "Grande",
    type: "mostruosità",
    alignment: "Caotico Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 51,
    hp_dice: "6d10 + 18",
    speed: "12 m, scalare 12 m",
    ability_scores: { str: 18, dex: 13, con: 16, int: 8, wis: 12, cha: 7 },
    skills: { "Furtività": 3, "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Yeti"],
    challenge_rating: "3",
    environment: "Artico",
    traits: [
      {
        name: "Corpo di Ghiaccio",
        description: "Infligge danni da freddo extra con i suoi attacchi e al tocco."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d6 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Androsfinge",
    size: "Grande",
    type: "mostruosità",
    alignment: "Legale Neutrale",
    ac: 17,
    ac_type: "naturale",
    hp: 199,
    hp_dice: "19d10 + 95",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 22, dex: 10, con: 20, int: 18, wis: 18, cha: 23 },
    skills: { "Percezione": 9, "Ristabilimento": 8 },
    senses: ["vista vera 36 m", "Percezione passiva 19"],
    languages: ["Comune", "Sfinco"],
    challenge_rating: "17",
    environment: "Deserto",
    traits: [
      {
        name: "Incantesimi Innati",
        description: "Può lanciare incantesimi potenti a volontà."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi, uno con il morso e uno con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 11,
        reach: "1,5 m",
        damage: "2d10 + 6",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Ankheg",
    size: "Grande",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 14,
    ac_type: "naturale",
    hp: 39,
    hp_dice: "6d10 + 6",
    speed: "9 m, scavare 3 m",
    ability_scores: { str: 17, dex: 11, con: 13, int: 1, wis: 13, cha: 6 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "2",
    environment: "Foresta, Prateria",
    traits: [
      {
        name: "Armatura Naturale",
        description: "Ha un'armatura naturale che lo protegge dagli attacchi."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "2d6 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Arpia",
    size: "Media",
    type: "mostruosità",
    alignment: "Caotico Malvagio",
    ac: 11,
    ac_type: "naturale",
    hp: 38,
    hp_dice: "7d8 + 7",
    speed: "6 m, volare 12 m",
    ability_scores: { str: 12, dex: 13, con: 12, int: 7, wis: 10, cha: 13 },
    skills: { "Percezione": 2 },
    senses: ["Percezione passiva 12"],
    languages: ["Comune"],
    challenge_rating: "1",
    environment: "Collina, Costa, Foresta, Montagna",
    traits: [
      {
        name: "Canto Incantevole",
        description: "Il suo canto può attirare le creature in un'area."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Basilisco",
    size: "Media",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 15,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "8d8 + 16",
    speed: "6 m",
    ability_scores: { str: 16, dex: 8, con: 15, int: 2, wis: 8, cha: 7 },
    senses: ["scurovisione 18 m", "Percezione passiva 9"],
    languages: [],
    challenge_rating: "3",
    environment: "Montagna",
    traits: [
      {
        name: "Sguardo Pietrificante",
        description: "Il suo sguardo può pietrificare una creatura."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "2d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Behir",
    size: "Enorme",
    type: "mostruosità",
    alignment: "Neutrale Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 168,
    hp_dice: "16d12 + 64",
    speed: "15 m, scalare 12 m",
    ability_scores: { str: 23, dex: 16, con: 18, int: 7, wis: 14, cha: 12 },
    skills: { "Percezione": 6, "Furtività": 7 },
    senses: ["scurovisione 27 m", "Percezione passiva 16"],
    languages: ["Draconico"],
    challenge_rating: "11",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Respirare Acido",
        description: "Soffia un cono di acido."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 10,
        reach: "1,5 m",
        damage: "2d8 + 6",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Belva Distorcente",
    size: "Grande",
    type: "mostruosità",
    alignment: "Legale Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 51,
    hp_dice: "6d10 + 18",
    speed: "12 m",
    ability_scores: { str: 16, dex: 14, con: 16, int: 12, wis: 14, cha: 10 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Telepatia 18 m"],
    challenge_rating: "3",
    environment: "Foresta",
    traits: [
      {
        name: "Distorsione",
        description: "Le creature vicine subiscono svantaggio ai tiri per colpire."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Bulette",
    size: "Grande",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 17,
    ac_type: "naturale",
    hp: 94,
    hp_dice: "9d10 + 45",
    speed: "12 m, scavare 12 m",
    ability_scores: { str: 19, dex: 11, con: 20, int: 2, wis: 10, cha: 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "5",
    environment: "Collina, Prateria, Sottosuolo",
    traits: [
      {
        name: "Salto",
        description: "Può saltare a grandi distanze per attaccare."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d10 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Cane della Morte",
    size: "Media",
    type: "mostruosità",
    alignment: "Neutrale Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 39,
    hp_dice: "6d8 + 12",
    speed: "12 m",
    ability_scores: { str: 14, dex: 13, con: 15, int: 6, wis: 12, cha: 8 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Infernale"],
    challenge_rating: "1",
    environment: "Deserto",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi: uno con il morso e uno con il soffio di fuoco."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      },
      {
        name: "Soffio di Fuoco",
        description: "Soffia un cono di fuoco."
      }
    ]
  },
  {
    name: "Centauro",
    size: "Grande",
    type: "mostruosità",
    alignment: "Neutrale Buono",
    ac: 12,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d10 + 12",
    speed: "15 m",
    ability_scores: { str: 18, dex: 14, con: 14, int: 9, wis: 13, cha: 11 },
    skills: { "Percezione": 4, "Sopravvivenza": 4 },
    senses: ["Percezione passiva 14"],
    languages: ["Silvano", "Comune"],
    challenge_rating: "2",
    environment: "Foresta, Prateria",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua lancia."
      },
      {
        name: "Lancia",
        type: "Mischia",
        to_hit: 6,
        reach: "3 m",
        damage: "1d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Chimera",
    size: "Grande",
    type: "mostruosità",
    alignment: "Caotico Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 114,
    hp_dice: "12d10 + 48",
    speed: "9 m, volare 18 m",
    ability_scores: { str: 20, dex: 14, con: 19, int: 3, wis: 14, cha: 10 },
    skills: { "Percezione": 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 15"],
    languages: ["Draconico"],
    challenge_rating: "6",
    environment: "Collina, Montagna, Prateria, Sottosuolo",
    traits: [
      {
        name: "Multi-Testa",
        description: "Ha più teste che possono attaccare e pensare in modo indipendente."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi: uno con le corna e uno con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "1d8 + 5",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Cockatrice",
    size: "Piccola",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "naturale",
    hp: 27,
    hp_dice: "6d6 + 6",
    speed: "6 m, volare 12 m",
    ability_scores: { str: 6, dex: 12, con: 12, int: 2, wis: 10, cha: 5 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Prateria",
    traits: [
      {
        name: "Sguardo Pietrificante",
        description: "Il suo sguardo può pietrificare una creatura."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Cuspide Letale",
    size: "Media",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 15,
    ac_type: "naturale",
    hp: 27,
    hp_dice: "5d8 + 5",
    speed: "9 m",
    ability_scores: { str: 10, dex: 14, con: 12, int: 6, wis: 12, cha: 5 },
    senses: ["vista cieca 18 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Sottosuolo",
    traits: [],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Drider",
    size: "Grande",
    type: "mostruosità",
    alignment: "Caotico Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 121,
    hp_dice: "13d10 + 52",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 16, dex: 16, con: 18, int: 16, wis: 13, cha: 12 },
    skills: { "Furtività": 5, "Percezione": 4 },
    senses: ["scurovisione 36 m", "Percezione passiva 14"],
    languages: ["Sottosuolo", "Draconico"],
    challenge_rating: "6",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Ragnatela",
        description: "Può muoversi sulle ragnatele e intrappolare creature."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi: uno con la sua spada lunga e due con gli artigli."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Ettercap",
    size: "Media",
    type: "mostruosità",
    alignment: "Neutrale Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 44,
    hp_dice: "8d8 + 8",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 14, dex: 15, con: 13, int: 7, wis: 12, cha: 8 },
    skills: { "Furtività": 4, "Sopravvivenza": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: ["Sottosuolo", "Comune"],
    challenge_rating: "2",
    environment: "Foresta, Sottosuolo",
    traits: [
      {
        name: "Ragnatela",
        description: "Può muoversi sulle ragnatele e intrappolare creature."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Fustigatore",
    size: "Grande",
    type: "mostruosità",
    alignment: "Neutrale Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 110,
    hp_dice: "13d10 + 39",
    speed: "9 m",
    ability_scores: { str: 18, dex: 14, con: 16, int: 10, wis: 14, cha: 12 },
    skills: { "Percezione": 4 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 14"],
    languages: ["Sottosuolo"],
    challenge_rating: "5",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Soffio di Danni",
        description: "Può soffiare un cono di forza."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua lancia."
      },
      {
        name: "Lancia",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Ginosfinge",
    size: "Grande",
    type: "mostruosità",
    alignment: "Legale Neutrale",
    ac: 17,
    ac_type: "naturale",
    hp: 142,
    hp_dice: "15d10 + 60",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 18, dex: 15, con: 18, int: 18, wis: 18, cha: 18 },
    skills: { "Percezione": 9, "Ristabilimento": 8 },
    senses: ["vista vera 36 m", "Percezione passiva 19"],
    languages: ["Comune", "Sfinco"],
    challenge_rating: "11",
    environment: "Deserto",
    traits: [
      {
        name: "Incantesimi Innati",
        description: "Può lanciare incantesimi potenti a volontà."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi, uno con il morso e uno con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Gorgone",
    size: "Grande",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 16,
    ac_type: "naturale",
    hp: 114,
    hp_dice: "12d10 + 48",
    speed: "12 m",
    ability_scores: { str: 20, dex: 11, con: 18, int: 2, wis: 12, cha: 7 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "5",
    environment: "Collina, Foresta, Prateria",
    traits: [
      {
        name: "Soffio Pietrificante",
        description: "Soffia un cono di vapore che può pietrificare le creature."
      }
    ],
    actions: [
      {
        name: "Corna",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "2d6 + 5",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Grick",
    size: "Media",
    type: "mostruosità",
    alignment: "Neutrale",
    ac: 14,
    ac_type: "naturale",
    hp: 27,
    hp_dice: "6d8 + 6",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 14, dex: 16, con: 13, int: 3, wis: 12, cha: 5 },
    skills: { "Furtività": 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "2",
    environment: "Foresta, Sottosuolo",
    traits: [
      {
        name: "Camuffamento",
        description: "Si confonde con l'ambiente roccioso per sorprendere i nemici."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Grick Alfa",
    size: "Grande",
    type: "mostruosità",
    alignment: "Neutrale",
    ac: 18,
    ac_type: "naturale",
    hp: 75,
    hp_dice: "10d10 + 20",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 18, dex: 16, con: 14, int: 3, wis: 14, cha: 5 },
    skills: { "Furtività": 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: [],
    challenge_rating: "7",
    environment: "Foresta, Sottosuolo",
    traits: [
      {
        name: "Camuffamento",
        description: "Si confonde con l'ambiente roccioso per sorprendere i nemici."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con gli artigli."
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d10 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Grifone",
    size: "Grande",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "naturale",
    hp: 59,
    hp_dice: "7d10 + 21",
    speed: "9 m, volare 24 m",
    ability_scores: { str: 18, dex: 15, con: 16, int: 3, wis: 13, cha: 8 },
    skills: { "Percezione": 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 15"],
    languages: [],
    challenge_rating: "2",
    environment: "Artico, Collina, Costa, Montagna, Prateria",
    traits: [
      {
        name: "Vista Acuta",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che si basano sulla vista."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi, uno con il morso e uno con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Idra",
    size: "Enorme",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 15,
    ac_type: "naturale",
    hp: 172,
    hp_dice: "15d12 + 75",
    speed: "9 m, nuoto 9 m",
    ability_scores: { str: 20, dex: 12, con: 20, int: 2, wis: 10, cha: 10 },
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "8",
    environment: "Palude",
    traits: [
      {
        name: "Rigenerazione",
        description: "Rigenera un certo numero di punti ferita per turno."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un numero di attacchi pari al numero delle sue teste."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 8,
        reach: "3 m",
        damage: "1d10 + 5",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Ippogrifo",
    size: "Grande",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 11,
    ac_type: "naturale",
    hp: 19,
    hp_dice: "3d10 + 3",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 17, dex: 13, con: 13, int: 2, wis: 12, cha: 8 },
    senses: ["Percezione passiva 11"],
    languages: [],
    challenge_rating: "1",
    environment: "Collina, Montagna, Prateria",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi: uno con il becco e uno con gli artigli."
      },
      {
        name: "Becco",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Lamia",
    size: "Grande",
    type: "mostruosità",
    alignment: "Caotico Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 75,
    hp_dice: "10d10 + 20",
    speed: "9 m",
    ability_scores: { str: 16, dex: 13, con: 15, int: 13, wis: 12, cha: 16 },
    skills: { "Inganno": 5, "Intuizione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: ["Abissale", "Comune", "Sylvan"],
    challenge_rating: "4",
    environment: "Deserto",
    traits: [
      {
        name: "Incantesimi Innati",
        description: "Può lanciare incantesimi minori a volontà."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con gli artigli."
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d4 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Lupo Invernale",
    size: "Grande",
    type: "mostruosità",
    alignment: "Neutrale Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 42,
    hp_dice: "5d10 + 15",
    speed: "12 m",
    ability_scores: { str: 18, dex: 13, con: 16, int: 7, wis: 12, cha: 8 },
    skills: { "Furtività": 3, "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Sottosuolo", "Comune"],
    challenge_rating: "3",
    environment: "Artico",
    traits: [
      {
        name: "Soffio di Gelo",
        description: "Soffia un cono di ghiaccio."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Manticora",
    size: "Grande",
    type: "mostruosità",
    alignment: "Legale Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 76,
    hp_dice: "9d10 + 27",
    speed: "9 m, volare 15 m",
    ability_scores: { str: 17, dex: 16, con: 17, int: 7, wis: 12, cha: 8 },
    skills: { "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Comune"],
    challenge_rating: "3",
    environment: "Artico, Collina, Costa, Montagna, Prateria",
    traits: [
      {
        name: "Spine Velenose",
        description: "Può lanciare spine dalla sua coda."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Medusa",
    size: "Media",
    type: "mostruosità",
    alignment: "Legale Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 75,
    hp_dice: "10d8 + 30",
    speed: "9 m",
    ability_scores: { str: 10, dex: 15, con: 16, int: 12, wis: 13, cha: 15 },
    skills: { "Inganno": 4, "Percezione": 4 },
    senses: ["Percezione passiva 14"],
    languages: ["Comune"],
    challenge_rating: "6",
    environment: "Deserto",
    traits: [
      {
        name: "Sguardo Pietrificante",
        description: "Il suo sguardo può pietrificare una creatura."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con i suoi capelli di serpente e uno con la sua spada."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Merrow",
    size: "Grande",
    type: "mostruosità",
    alignment: "Caotico Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d10 + 12",
    speed: "3 m, nuoto 12 m",
    ability_scores: { str: 18, dex: 10, con: 14, int: 8, wis: 10, cha: 10 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Acquano"],
    challenge_rating: "2",
    environment: "Costa, Subacqueo",
    traits: [
      {
        name: "Respirare Acqua e Aria",
        description: "Può respirare sia in acqua che sulla terraferma."
      }
    ],
    actions: [
      {
        name: "Tridente",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Minotauro",
    size: "Grande",
    type: "mostruosità",
    alignment: "Caotico Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 76,
    hp_dice: "9d10 + 27",
    speed: "12 m",
    ability_scores: { str: 18, dex: 11, con: 16, int: 6, wis: 12, cha: 9 },
    skills: { "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Abissale"],
    challenge_rating: "3",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Carica",
        description: "Se si muove di 6 metri in linea retta, può infliggere danni extra con il suo attacco."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Naga Guardiana",
    size: "Grande",
    type: "mostruosità",
    alignment: "Legale Buono",
    ac: 15,
    ac_type: "naturale",
    hp: 110,
    hp_dice: "13d10 + 39",
    speed: "9 m",
    ability_scores: { str: 19, dex: 18, con: 16, int: 16, wis: 19, cha: 18 },
    skills: { "Percezione": 8, "Ristabilimento": 7 },
    senses: ["scurovisione 18 m", "Percezione passiva 18"],
    languages: ["Comune", "Sylvan"],
    challenge_rating: "8",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Incantesimi Innati",
        description: "Può lanciare incantesimi potenti a volontà."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Naga Spirituale",
    size: "Grande",
    type: "mostruosità",
    alignment: "Caotico Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 127,
    hp_dice: "15d10 + 45",
    speed: "9 m",
    ability_scores: { str: 17, dex: 16, con: 16, int: 16, wis: 16, cha: 18 },
    skills: { "Percezione": 7 },
    senses: ["scurovisione 18 m", "Percezione passiva 17"],
    languages: ["Comune", "Sylvan"],
    challenge_rating: "8",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Incantesimi Innati",
        description: "Può lanciare incantesimi potenti a volontà."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Orrore Uncinato",
    size: "Grande",
    type: "mostruosità",
    alignment: "Neutrale",
    ac: 15,
    ac_type: "naturale",
    hp: 75,
    hp_dice: "10d10 + 20",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 18, dex: 13, con: 14, int: 6, wis: 10, cha: 7 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Terrestre"],
    challenge_rating: "3",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con i suoi uncini."
      },
      {
        name: "Uncino",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Orsogufo",
    size: "Grande",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 59,
    hp_dice: "7d10 + 21",
    speed: "9 m",
    ability_scores: { str: 20, dex: 12, con: 17, int: 3, wis: 12, cha: 7 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: [],
    challenge_rating: "3",
    environment: "Foresta",
    traits: [
      {
        name: "Olfatto Acuto",
        description: "Ha vantaggio su prove di Saggezza (Percezione) che dipendono dall'olfatto."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi, uno con il becco e uno con gli artigli."
      },
      {
        name: "Becco",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d10 + 5",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Peryton",
    size: "Media",
    type: "mostruosità",
    alignment: "Caotico Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 33,
    hp_dice: "6d8 + 6",
    speed: "6 m, volare 18 m",
    ability_scores: { str: 16, dex: 12, con: 13, int: 9, wis: 10, cha: 10 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Comune"],
    challenge_rating: "2",
    environment: "Collina, Montagna",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un attacco con il morso e uno con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Ragno-Fase",
    size: "Grande",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d10 + 12",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 15, dex: 16, con: 14, int: 10, wis: 12, cha: 8 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "3",
    environment: "Collina, Deserto, Foresta, Prateria, Sottosuolo, Urbano",
    traits: [
      {
        name: "Teletrasporto",
        description: "Può teletrasportarsi a breve distanza."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Remorhaz",
    size: "Enorme",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 17,
    ac_type: "naturale",
    hp: 195,
    hp_dice: "17d12 + 85",
    speed: "9 m, scavare 6 m",
    ability_scores: { str: 24, dex: 13, con: 21, int: 3, wis: 10, cha: 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "11",
    environment: "Artico",
    traits: [
      {
        name: "Calore Estremo",
        description: "Il suo corpo emette un calore intenso che danneggia chi lo tocca."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 11,
        reach: "1,5 m",
        damage: "2d12 + 7",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Remorhaz Giovane",
    size: "Grande",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 14,
    ac_type: "naturale",
    hp: 75,
    hp_dice: "10d10 + 20",
    speed: "9 m, scavare 3 m",
    ability_scores: { str: 18, dex: 13, con: 14, int: 3, wis: 10, cha: 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "5",
    environment: "Artico",
    traits: [
      {
        name: "Calore Estremo",
        description: "Il suo corpo emette un calore intenso che danneggia chi lo tocca."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d10 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Roc",
    size: "Mastodontica",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 15,
    ac_type: "naturale",
    hp: 247,
    hp_dice: "15d20 + 90",
    speed: "18 m, volare 36 m",
    ability_scores: { str: 28, dex: 10, con: 22, int: 3, wis: 10, cha: 9 },
    skills: { "Percezione": 4 },
    senses: ["scurovisione 36 m", "Percezione passiva 14"],
    languages: [],
    challenge_rating: "11",
    environment: "Artico, Collina, Costa, Deserto, Montagna",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con gli artigli."
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 13,
        reach: "4,5 m",
        damage: "2d8 + 9",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Umber Hulk",
    size: "Grande",
    type: "mostruosità",
    alignment: "Caotico Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 93,
    hp_dice: "11d10 + 33",
    speed: "9 m, scavare 3 m",
    ability_scores: { str: 20, dex: 13, con: 16, int: 9, wis: 10, cha: 10 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Terrestre"],
    challenge_rating: "5",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Sguardo Confusore",
        description: "Il suo sguardo può confondere le creature."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi, uno con il morso e uno con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d8 + 5",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Verme Purpureo",
    size: "Mastodontica",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 14,
    ac_type: "naturale",
    hp: 247,
    hp_dice: "15d20 + 90",
    speed: "15 m, scavare 9 m",
    ability_scores: { str: 28, dex: 7, con: 20, int: 1, wis: 8, cha: 4 },
    senses: ["vista cieca 18 m", "Percezione passiva 9"],
    languages: [],
    challenge_rating: "15",
    environment: "Deserto, Sottosuolo",
    traits: [
      {
        name: "Tremorsense",
        description: "Può sentire le vibrazioni del terreno per individuare le creature."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 14,
        reach: "3 m",
        damage: "4d8 + 9",
        damage_type: "perforante"
      },
      {
        name: "Inghiottire",
        description: "Può inghiottire una creatura che lo tocca."
      }
    ]
  },
  {
    name: "Vermeiena",
    size: "Grande",
    type: "mostruosità",
    alignment: "Senza Allineamento",
    ac: 14,
    ac_type: "naturale",
    hp: 68,
    hp_dice: "8d10 + 24",
    speed: "12 m",
    ability_scores: { str: 17, dex: 11, con: 16, int: 1, wis: 8, cha: 3 },
    senses: ["vista cieca 18 m", "Percezione passiva 9"],
    languages: [],
    challenge_rating: "2",
    environment: "Sottosuolo",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con i suoi tentacoli."
      },
      {
        name: "Tentacolo",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Worg",
    size: "Grande",
    type: "mostruosità",
    alignment: "Neutrale Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 26,
    hp_dice: "4d10 + 4",
    speed: "15 m",
    ability_scores: { str: 16, dex: 13, con: 13, int: 7, wis: 11, cha: 8 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Goblin", "Worg"],
    challenge_rating: "1/2",
    environment: "Collina, Foresta, Prateria",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Yeti Abominevole",
    size: "Grande",
    type: "mostruosità",
    alignment: "Caotico Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 104,
    hp_dice: "10d10 + 50",
    speed: "12 m, scalare 12 m",
    ability_scores: { str: 21, dex: 10, con: 20, int: 9, wis: 14, cha: 9 },
    skills: { "Furtività": 3, "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Yeti"],
    challenge_rating: "9",
    environment: "Artico",
    traits: [
      {
        name: "Corpo di Ghiaccio",
        description: "Infligge danni da freddo extra con i suoi attacchi e al tocco."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "2d6 + 5",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Yuan-ti Nefasto",
    size: "Media",
    type: "mostruosità (mutaforma, yuan-ti)",
    alignment: "Neutrale Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 66,
    hp_dice: "12d8 + 12",
    speed: "9 m",
    ability_scores: { str: 16, dex: 14, con: 12, int: 14, wis: 12, cha: 16 },
    skills: { "Inganno": 6, "Furtività": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: ["Abissale", "Draconico"],
    challenge_rating: "3",
    environment: "Deserto, Foresta, Palude",
    traits: [
      {
        name: "Mutaforma",
        description: "Può assumere la forma di un umanoide o di un serpente."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d4 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Yuan-ti Abominio",
    size: "Grande",
    type: "mostruosità (mutaforma, yuan-ti)",
    alignment: "Neutrale Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 127,
    hp_dice: "15d10 + 45",
    speed: "9 m, nuoto 9 m",
    ability_scores: { str: 19, dex: 16, con: 17, int: 18, wis: 16, cha: 18 },
    skills: { "Inganno": 8, "Furtività": 6, "Percezione": 7 },
    senses: ["scurovisione 18 m", "Percezione passiva 17"],
    languages: ["Abissale", "Draconico"],
    challenge_rating: "7",
    environment: "Deserto, Foresta, Palude",
    traits: [
      {
        name: "Mutaforma",
        description: "Può assumere la forma di un umanoide o di un serpente gigante."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Doppelganger",
    size: "Media",
    type: "mostruosità (mutaforma)",
    alignment: "Neutrale",
    ac: 14,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "8d8 + 16",
    speed: "9 m",
    ability_scores: { str: 11, dex: 18, con: 14, int: 15, wis: 12, cha: 14 },
    skills: { "Inganno": 6, "Intuizione": 4, "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Comune"],
    challenge_rating: "3",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Mutaforma",
        description: "Può assumere la forma di qualsiasi umanoide."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Mimic",
    size: "Media",
    type: "mostruosità (mutaforma)",
    alignment: "Neutrale",
    ac: 12,
    ac_type: "naturale",
    hp: 58,
    hp_dice: "8d8 + 22",
    speed: "4,5 m, scalare 4,5 m",
    ability_scores: { str: 17, dex: 12, con: 15, int: 5, wis: 13, cha: 8 },
    senses: ["vista cieca 18 m", "Percezione passiva 11"],
    languages: ["Comune"],
    challenge_rating: "2",
    environment: "Sotterranei, Urbano",
    traits: [
      {
        name: "Falsa Apparenza",
        description: "Sembra un oggetto normale finché non si muove."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Kraken",
    size: "Mastodontica",
    type: "mostruosità (titano)",
    alignment: "Caotico Malvagio",
    ac: 18,
    ac_type: "naturale",
    hp: 472,
    hp_dice: "27d20 + 189",
    speed: "9 m, nuoto 18 m",
    ability_scores: { str: 28, dex: 10, con: 25, int: 22, wis: 18, cha: 20 },
    senses: ["vista cieca 18 m", "vista vera 36 m", "Percezione passiva 18"],
    languages: ["Abissale", "Infernale", "Comune", "Sylvan", "Draconico"],
    challenge_rating: "23",
    environment: "Subacqueo",
    traits: [
      {
        name: "Anfibio",
        description: "Può respirare sia aria che acqua."
      },
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi: due con i suoi tentacoli e uno con il suo becco."
      },
      {
        name: "Tentacolo",
        type: "Mischia",
        to_hit: 17,
        reach: "9 m",
        damage: "3d6 + 9",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Tarrasque",
    size: "Mastodontica",
    type: "mostruosità (titano)",
    alignment: "Senza Allineamento",
    ac: 25,
    ac_type: "naturale",
    hp: 676,
    hp_dice: "34d20 + 340",
    speed: "12 m",
    ability_scores: { str: 30, dex: 11, con: 30, int: 3, wis: 11, cha: 11 },
    senses: ["vista cieca 18 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "30",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Antimagic Shell",
        description: "È immune alla maggior parte degli incantesimi e effetti magici."
      },
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua cinque attacchi: uno con il morso, due con gli artigli e uno con la coda."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 19,
        reach: "3 m",
        damage: "4d12 + 10",
        damage_type: "perforante"
      }
    ]
  },
// Fine Mostruosità - Manuale dei Mostri
// src/data/dndMonsters.js

// Inizio Non Morti - Manuale dei Mostri
  {
    name: "Fuoco Fatuo",
    size: "Minuscola",
    type: "non morto",
    alignment: "Caotico Malvagio",
    ac: 13,
    ac_type: "",
    hp: 21,
    hp_dice: "6d4",
    speed: "0 m, volare 15 m",
    ability_scores: { str: 1, dex: 16, con: 10, int: 10, wis: 14, cha: 12 },
    skills: { "Furtività": 5 },
    senses: ["scurovisione 36 m", "Percezione passiva 12"],
    languages: ["capisce il linguaggio dei suoi creatori"],
    challenge_rating: "2",
    environment: "Foresta, Palude, Urbano",
    traits: [
      {
        name: "Invisibilità",
        description: "È invisibile finché non attacca."
      }
    ],
    actions: [
      {
        name: "Shock",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "2d6",
        damage_type: "fulmini"
      }
    ]
  },
  {
    name: "Ghast",
    size: "Media",
    type: "non morto",
    alignment: "Caotico Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 36,
    hp_dice: "8d8",
    speed: "9 m",
    ability_scores: { str: 16, dex: 17, con: 10, int: 12, wis: 10, cha: 8 },
    skills: { "Furtività": 5, "Percezione": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Comune"],
    challenge_rating: "2",
    environment: "Palude, Sottosuolo, Urbano",
    traits: [
      {
        name: "Puzza",
        description: "Il suo odore può stordire le creature vicine."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Ghoul",
    size: "Media",
    type: "non morto",
    alignment: "Caotico Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "5d8",
    speed: "9 m",
    ability_scores: { str: 13, dex: 15, con: 10, int: 7, wis: 10, cha: 6 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Comune"],
    challenge_rating: "1",
    environment: "Palude, Sottosuolo, Urbano",
    traits: [
      {
        name: "Paralisi",
        description: "Il suo attacco può paralizzare una creatura."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d6",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Mummia",
    size: "Media",
    type: "non morto",
    alignment: "Legale Malvagio",
    ac: 11,
    ac_type: "naturale",
    hp: 58,
    hp_dice: "9d8 + 18",
    speed: "6 m",
    ability_scores: { str: 16, dex: 10, con: 15, int: 6, wis: 10, cha: 12 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Comune", "Egizio"],
    challenge_rating: "3",
    environment: "Deserto",
    traits: [
      {
        name: "Maledizione",
        description: "Può maledire una creatura che lo attacca."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "2d6 + 3",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Naga d'Ossa",
    size: "Grande",
    type: "non morto",
    alignment: "Legale Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 58,
    hp_dice: "10d10 + 3",
    speed: "9 m",
    ability_scores: { str: 18, dex: 16, con: 12, int: 16, wis: 14, cha: 16 },
    skills: { "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Comune", "Sylvan"],
    challenge_rating: "4",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Morso Velenoso",
        description: "Il suo morso può paralizzare le creature."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d4 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Poltergeist",
    size: "Media",
    type: "non morto",
    alignment: "Caotico Malvagio",
    ac: 12,
    ac_type: "",
    hp: 1,
    hp_dice: "1d4 - 1",
    speed: "0 m, volare 15 m",
    ability_scores: { str: 1, dex: 14, con: 10, int: 11, wis: 12, cha: 11 },
    skills: { "Furtività": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: ["Comune"],
    challenge_rating: "1",
    environment: "Sottosuolo, Urbano",
    traits: [
      {
        name: "Invisibilità",
        description: "È permanentemente invisibile."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Progenie Vampirica",
    size: "Media",
    type: "non morto",
    alignment: "Neutrale Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 82,
    hp_dice: "11d8 + 33",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 16, dex: 16, con: 16, int: 11, wis: 10, cha: 12 },
    skills: { "Furtività": 6, "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Comune", "Infernale"],
    challenge_rating: "5",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Risveglio",
        description: "Può risvegliarsi dalla morte se il suo padrone non viene sconfitto."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con gli artigli."
      },
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Revenant",
    size: "Media",
    type: "non morto",
    alignment: "Neutrale",
    ac: 14,
    ac_type: "naturale",
    hp: 136,
    hp_dice: "16d8 + 64",
    speed: "9 m",
    ability_scores: { str: 18, dex: 15, con: 18, int: 13, wis: 16, cha: 18 },
    skills: { "Percezione": 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 15"],
    languages: ["Comune"],
    challenge_rating: "5",
    environment: "Artico, Collina, Deserto, Foresta, Palude, Urbano",
    traits: [
      {
        name: "Vendetta",
        description: "È guidato da un desiderio di vendetta e può rigenerarsi."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Scheletro",
    size: "Media",
    type: "non morto",
    alignment: "Legale Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 13,
    hp_dice: "2d8 + 4",
    speed: "9 m",
    ability_scores: { str: 10, dex: 14, con: 15, int: 6, wis: 8, cha: 5 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 9"],
    languages: ["Comune"],
    challenge_rating: "1/4",
    environment: "Sottosuolo, Urbano",
    traits: [],
    actions: [
      {
        name: "Spada Corta",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Scheletro Cavallo da Guerra",
    size: "Grande",
    type: "non morto",
    alignment: "Legale Malvagio",
    ac: 11,
    ac_type: "naturale",
    hp: 19,
    hp_dice: "3d10 + 3",
    speed: "18 m",
    ability_scores: { str: 18, dex: 12, con: 13, int: 2, wis: 12, cha: 7 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Sotterranei, cimiteri",
    traits: [],
    actions: [
      {
        name: "Zoccoli",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Scheletro Minotauro",
    size: "Grande",
    type: "non morto",
    alignment: "Legale Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 76,
    hp_dice: "9d10 + 27",
    speed: "12 m",
    ability_scores: { str: 18, dex: 11, con: 16, int: 6, wis: 12, cha: 9 },
    skills: { "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Abissale"],
    challenge_rating: "2",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Carica",
        description: "Se si muove di 6 metri in linea retta, può infliggere danni extra con il suo attacco."
      }
    ],
    actions: [
      {
        name: "Corna",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Spettro",
    size: "Media",
    type: "non morto",
    alignment: "Caotico Malvagio",
    ac: 11,
    ac_type: "",
    hp: 22,
    hp_dice: "5d8",
    speed: "0 m, volare 15 m",
    ability_scores: { str: 1, dex: 13, con: 10, int: 11, wis: 12, cha: 11 },
    skills: { "Furtività": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: ["Comune"],
    challenge_rating: "1",
    environment: "Sottosuolo, Urbano",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi minori a volontà."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Teschio Infuocato",
    size: "Minuscola",
    type: "non morto",
    alignment: "Neutrale Malvagio",
    ac: 13,
    ac_type: "",
    hp: 40,
    hp_dice: "9d4 + 18",
    speed: "0 m, volare 12 m",
    ability_scores: { str: 1, dex: 16, con: 15, int: 14, wis: 12, cha: 14 },
    skills: { "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Comune", "Infernale"],
    challenge_rating: "4",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Aura di Fuoco",
        description: "Infligge danni da fuoco extra alle creature vicine."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "fuoco"
      }
    ]
  },
  {
    name: "Tiranno della Morte",
    size: "Grande",
    type: "non morto",
    alignment: "Legale Malvagio",
    ac: 19,
    ac_type: "naturale",
    hp: 180,
    hp_dice: "19d10 + 76",
    speed: "0 m, volare 6 m",
    ability_scores: { str: 10, dex: 14, con: 18, int: 17, wis: 15, cha: 17 },
    skills: { "Percezione": 12 },
    senses: ["scurovisione 36 m", "Percezione passiva 22"],
    languages: ["Comune", "Sottosuolo", "Telepatia"],
    challenge_rating: "14",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Cono Antimagia",
        description: "Emette un cono di antimagia."
      },
      {
        name: "Giro di Incantesimi",
        description: "Può lanciare incantesimi dai suoi occhi."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "2d6",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Artiglio Strisciante",
    size: "Minuscola",
    type: "non morto",
    alignment: "Neutrale Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 4,
    hp_dice: "1d4 + 2",
    speed: "9 m",
    ability_scores: { str: 13, dex: 14, con: 14, int: 5, wis: 10, cha: 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["capisce il linguaggio dei suoi creatori"],
    challenge_rating: "0",
    environment: "Qualsiasi ambiente",
    traits: [],
    actions: [
      {
        name: "Artiglio",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Banshee",
    size: "Media",
    type: "non morto",
    alignment: "Caotico Malvagio",
    ac: 12,
    ac_type: "",
    hp: 58,
    hp_dice: "13d8",
    speed: "0 m, volare 12 m",
    ability_scores: { str: 1, dex: 14, con: 10, int: 12, wis: 11, cha: 17 },
    skills: {},
    senses: ["vista vera 36 m", "Percezione passiva 10"],
    languages: ["Comune"],
    challenge_rating: "4",
    environment: "Costa, Foresta",
    traits: [
      {
        name: "Aura di Angoscia",
        description: "Le creature vicine subiscono svantaggio ai tiri per colpire."
      }
    ],
    actions: [
      {
        name: "Tocco Disintegrante",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "3d6 + 2",
        damage_type: "necrotico"
      },
      {
        name: "Urlo",
        description: "Il suo urlo può causare danni massicci e stordire le creature."
      }
    ]
  },
  {
    name: "Cavaliere della Morte",
    size: "Media",
    type: "non morto",
    alignment: "Caotico Malvagio",
    ac: 20,
    ac_type: "piastra",
    hp: 180,
    hp_dice: "19d8 + 95",
    speed: "9 m",
    ability_scores: { str: 20, dex: 11, con: 20, int: 12, wis: 16, cha: 18 },
    skills: { "Atletica": 10, "Percezione": 8 },
    senses: ["scurovisione 36 m", "Percezione passiva 18"],
    languages: ["Comune"],
    challenge_rating: "17",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Aura di Paura",
        description: "Le creature vicine subiscono svantaggio ai tiri per colpire."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada lunga."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 11,
        reach: "1,5 m",
        damage: "2d6 + 5",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Demilich",
    size: "Minuscola",
    type: "non morto",
    alignment: "Neutrale Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 80,
    hp_dice: "16d4 + 32",
    speed: "0 m, volare 15 m",
    ability_scores: { str: 1, dex: 20, con: 18, int: 20, wis: 20, cha: 20 },
    skills: { "Percezione": 10 },
    senses: ["vista vera 36 m", "Percezione passiva 20"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "18",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Aura di Paura",
        description: "Le creature vicine subiscono svantaggio ai tiri per colpire."
      },
      {
        name: "Drain Soul",
        description: "Può prosciugare la vitalità di una creatura con un tocco."
      }
    ],
    actions: [
      {
        name: "Soffio di Angoscia",
        description: "Soffia una nube che causa danni psichici e paralisi."
      }
    ]
  },
  {
    name: "Dracolich (Archetipo di Dracolich)",
    size: "Enorme",
    type: "non morto",
    alignment: "Legale Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 200,
    hp_dice: "17d12 + 85",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 23, dex: 10, con: 21, int: 16, wis: 15, cha: 19 },
    skills: { "Percezione": 7 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 17"],
    languages: ["Draconico"],
    challenge_rating: "17",
    environment: "Deserto",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da mago."
      },
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 10,
        reach: "1,5 m",
        damage: "2d10 + 6",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Dracolich Blu Adulto",
    size: "Enorme",
    type: "non morto",
    alignment: "Legale Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 195,
    hp_dice: "17d12 + 85",
    speed: "12 m, volare 24 m",
    ability_scores: { str: 23, dex: 10, con: 21, int: 16, wis: 15, cha: 19 },
    skills: { "Percezione": 7 },
    senses: ["vista cieca 18 m", "scurovisione 36 m", "Percezione passiva 17"],
    languages: ["Draconico"],
    challenge_rating: "17",
    environment: "Deserto",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da mago."
      },
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua un morso e due attacchi con gli artigli."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 10,
        reach: "1,5 m",
        damage: "2d10 + 6",
        damage_type: "perforante"
      },
      {
        name: "Soffio di Fulmini",
        description: "Soffia una linea di fulmini."
      }
    ]
  },
  {
    name: "Fantasma",
    size: "Media",
    type: "non morto",
    alignment: "Qualsiasi",
    ac: 11,
    ac_type: "",
    hp: 45,
    hp_dice: "10d8",
    speed: "0 m, volare 15 m",
    ability_scores: { str: 7, dex: 13, con: 10, int: 14, wis: 12, cha: 17 },
    skills: { "Furtività": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: ["Comune"],
    challenge_rating: "4",
    environment: "Sottosuolo, Urbano",
    traits: [
      {
        name: "Sofferenza",
        description: "Il suo tocco può causare danni necrotici e indebolire i nemici."
      }
    ],
    actions: [
      {
        name: "Toccata Spettrale",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "necrotico"
      }
    ]
  },
  {
    name: "Lich",
    size: "Media",
    type: "non morto",
    alignment: "Qualsiasi Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 135,
    hp_dice: "18d8 + 54",
    speed: "9 m",
    ability_scores: { str: 11, dex: 16, con: 16, int: 20, wis: 14, cha: 16 },
    skills: { "Arcano": 10, "Percezione": 7 },
    senses: ["vista vera 36 m", "Percezione passiva 17"],
    languages: ["Comune", "Sylvan", "Draconico"],
    challenge_rating: "21",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      },
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da mago fino al 9° livello."
      }
    ],
    actions: [
      {
        name: "Soffio di Angoscia",
        description: "Soffia una nube che causa danni psichici e paralisi."
      }
    ]
  },
  {
    name: "Ombra",
    size: "Media",
    type: "non morto",
    alignment: "Caotico Malvagio",
    ac: 12,
    ac_type: "",
    hp: 16,
    hp_dice: "3d8 + 3",
    speed: "12 m",
    ability_scores: { str: 6, dex: 14, con: 13, int: 6, wis: 10, cha: 12 },
    skills: { "Furtività": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Comune"],
    challenge_rating: "1/2",
    environment: "Sottosuolo, Urbano",
    traits: [
      {
        name: "Aura di Angoscia",
        description: "Le creature vicine subiscono svantaggio ai tiri per colpire."
      }
    ],
    actions: [
      {
        name: "Tocco",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "necrotico"
      }
    ]
  },
  {
    name: "Signore delle Mummie",
    size: "Media",
    type: "non morto",
    alignment: "Legale Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 120,
    hp_dice: "16d8 + 48",
    speed: "9 m",
    ability_scores: { str: 18, dex: 10, con: 16, int: 17, wis: 15, cha: 18 },
    skills: { "Percezione": 4, "Ristabilimento": 6 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Comune", "Egizio"],
    challenge_rating: "15",
    environment: "Deserto",
    traits: [
      {
        name: "Corpo Corrotto",
        description: "Infligge danni da malattia con i suoi attacchi."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 9,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Wight",
    size: "Media",
    type: "non morto",
    alignment: "Neutrale Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d8 + 18",
    speed: "9 m",
    ability_scores: { str: 15, dex: 14, con: 16, int: 10, wis: 13, cha: 15 },
    skills: { "Furtività": 4, "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Comune", "Abissale", "Infernale"],
    challenge_rating: "3",
    environment: "Deserto, Palude, Sottosuolo, Urbano",
    traits: [
      {
        name: "Prosciugamento Vitale",
        description: "Il suo attacco può prosciugare la vitalità di una creatura."
      }
    ],
    actions: [
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Wraith",
    size: "Media",
    type: "non morto",
    alignment: "Neutrale Malvagio",
    ac: 13,
    ac_type: "",
    hp: 67,
    hp_dice: "12d8 + 12",
    speed: "0 m, volare 18 m",
    ability_scores: { str: 1, dex: 16, con: 12, int: 12, wis: 14, cha: 15 },
    skills: { "Furtività": 5, "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Comune", "Abissale", "Infernale"],
    challenge_rating: "5",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Invisibilità",
        description: "È permanentemente invisibile."
      }
    ],
    actions: [
      {
        name: "Prosciugamento Vitale",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "necrotico"
      }
    ]
  },
  {
    name: "Zombi",
    size: "Media",
    type: "non morto",
    alignment: "Neutrale Malvagio",
    ac: 8,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "3d8 + 9",
    speed: "6 m",
    ability_scores: { str: 13, dex: 6, con: 16, int: 3, wis: 6, cha: 5 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 8"],
    languages: ["Comune"],
    challenge_rating: "1/4",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Pelle Resistente",
        description: "Ha resistenza a danni non magici."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Zombi Beholder",
    size: "Grande",
    type: "non morto",
    alignment: "Neutrale Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 93,
    hp_dice: "11d10 + 33",
    speed: "0 m, volare 6 m",
    ability_scores: { str: 10, dex: 8, con: 16, int: 3, wis: 8, cha: 5 },
    senses: ["scurovisione 36 m", "Percezione passiva 9"],
    languages: ["Comune", "Sottosuolo"],
    challenge_rating: "5",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Antimagic Cone",
        description: "Emette un cono di antimagia."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "2d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Zombi Ogre",
    size: "Grande",
    type: "non morto",
    alignment: "Neutrale Malvagio",
    ac: 8,
    ac_type: "naturale",
    hp: 59,
    hp_dice: "7d10 + 21",
    speed: "9 m",
    ability_scores: { str: 19, dex: 6, con: 16, int: 3, wis: 6, cha: 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 8"],
    languages: ["Comune", "Gigante"],
    challenge_rating: "2",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Pelle Resistente",
        description: "Ha resistenza a danni non magici."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "2d8 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Vampiro",
    size: "Media",
    type: "non morto (mutaforma)",
    alignment: "Legale Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 144,
    hp_dice: "17d8 + 68",
    speed: "9 m",
    ability_scores: { str: 18, dex: 18, con: 18, int: 17, wis: 15, cha: 18 },
    skills: { "Furtività": 9, "Percezione": 7 },
    senses: ["scurovisione 36 m", "Percezione passiva 17"],
    languages: ["Comune", "Infernale"],
    challenge_rating: "13",
    environment: "Urbano",
    traits: [
      {
        name: "Mutaforma",
        description: "Può assumere la forma di un pipistrello o di una nuvola di vapore."
      },
      {
        name: "Legendary Resistance",
        description: "Può scegliere di superare un tiro salvezza fallito."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 9,
        reach: "1,5 m",
        damage: "1d6 + 4",
        damage_type: "perforante"
      }
    ]
  },
// Fine Non Morti - Manuale dei Mostri

// Inizio Sciami di Bestie - Manuale dei Mostri
  {
    name: "Sciame di Corvi",
    size: "Media",
    type: "sciame di bestie minuscole",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 24,
    hp_dice: "7d8 - 7",
    speed: "3 m, volare 18 m",
    ability_scores: { str: 6, dex: 14, con: 8, int: 2, wis: 12, cha: 6 },
    skills: {},
    senses: ["Percezione passiva 11"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Collina, Foresta, Palude, Urbano",
    traits: [
      {
        name: "Sciame",
        description: "Il mostro ha un'abilità speciale come sciame di creature."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Sciame di Insetti",
    size: "Media",
    type: "sciame di bestie minuscole",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 22,
    hp_dice: "5d8",
    speed: "6 m, volare 6 m",
    ability_scores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
    skills: {},
    senses: ["Percezione passiva 8"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Collina, Deserto, Foresta, Palude, Prateria, Sottosuolo, Urbano",
    traits: [
      {
        name: "Sciame",
        description: "Il mostro ha un'abilità speciale come sciame di creature."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d8",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Sciame di Millepiedi",
    size: "Minuscola",
    type: "sciame di bestie minuscole",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 22,
    hp_dice: "5d8",
    speed: "6 m, scalare 6 m",
    ability_scores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
    skills: {},
    senses: ["scurovisione 9 m", "Percezione passiva 8"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Sciame",
        description: "Il mostro ha un'abilità speciale come sciame di creature."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d8",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Sciame di Quipper",
    size: "Media",
    type: "sciame di bestie minuscole",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "",
    hp: 24,
    hp_dice: "7d8",
    speed: "0 m, nuoto 12 m",
    ability_scores: { str: 10, dex: 16, con: 9, int: 1, wis: 7, cha: 2 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 8"],
    languages: [],
    challenge_rating: "1",
    environment: "Subacqueo",
    traits: [
      {
        name: "Sciame",
        description: "Il mostro ha un'abilità speciale come sciame di creature."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "2d6",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Sciame di Ragni",
    size: "Media",
    type: "sciame di bestie minuscole",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 24,
    hp_dice: "7d8",
    speed: "6 m, scalare 6 m",
    ability_scores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
    skills: {},
    senses: ["vista cieca 9 m", "Percezione passiva 8"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Foresta, Sottosuolo",
    traits: [
      {
        name: "Sciame",
        description: "Il mostro ha un'abilità speciale come sciame di creature."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d8",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Sciame di Scarabei",
    size: "Media",
    type: "sciame di bestie minuscole",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 22,
    hp_dice: "5d8",
    speed: "6 m, volare 6 m",
    ability_scores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
    skills: {},
    senses: ["scurovisione 9 m", "Percezione passiva 8"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Sciame",
        description: "Il mostro ha un'abilità speciale come sciame di creature."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d8",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Sciame di Serpenti Velenosi",
    size: "Media",
    type: "sciame di bestie minuscole",
    alignment: "Senza Allineamento",
    ac: 14,
    ac_type: "naturale",
    hp: 24,
    hp_dice: "7d8 - 7",
    speed: "9 m, nuoto 9 m",
    ability_scores: { str: 8, dex: 18, con: 8, int: 1, wis: 10, cha: 3 },
    skills: {},
    senses: ["Percezione passiva 10"],
    languages: [],
    challenge_rating: "2",
    environment: "Foresta, Palude",
    traits: [
      {
        name: "Sciame",
        description: "Il mostro ha un'abilità speciale come sciame di creature."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d6",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Sciame di Topi",
    size: "Media",
    type: "sciame di bestie minuscole",
    alignment: "Senza Allineamento",
    ac: 10,
    ac_type: "",
    hp: 24,
    hp_dice: "7d8 - 7",
    speed: "9 m",
    ability_scores: { str: 8, dex: 12, con: 8, int: 2, wis: 10, cha: 3 },
    skills: {},
    senses: ["scurovisione 9 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Palude, Urbano",
    traits: [
      {
        name: "Sciame",
        description: "Il mostro ha un'abilità speciale come sciame di creature."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d6",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Sciame di Pipistrelli",
    size: "Media",
    type: "sciame di bestie minuscole",
    alignment: "Senza Allineamento",
    ac: 12,
    ac_type: "",
    hp: 24,
    hp_dice: "7d8 - 7",
    speed: "3 m, volare 9 m",
    ability_scores: { str: 5, dex: 15, con: 8, int: 2, wis: 12, cha: 4 },
    skills: {},
    senses: ["vista cieca 18 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Collina, Montagna, Sottosuolo, Urbano",
    traits: [
      {
        name: "Sciame",
        description: "Il mostro ha un'abilità speciale come sciame di creature."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6",
        damage_type: "perforante"
      }
    ]
  },
// Fine Sciami di Bestie - Manuale dei Mostri

// Inizio Umanoidi - Manuale dei Mostri
  {
    name: "Aarakocra",
    size: "Media",
    type: "umanoide (aarakocra)",
    alignment: "Neutrale Buono",
    ac: 12,
    ac_type: "naturale",
    hp: 13,
    hp_dice: "2d8 + 4",
    speed: "6 m, volare 15 m",
    ability_scores: { str: 10, dex: 14, con: 12, int: 11, wis: 13, cha: 11 },
    skills: { "Percezione": 3 },
    senses: ["Percezione passiva 13"],
    languages: ["Aarakocra", "Auran"],
    challenge_rating: "1/4",
    environment: "Montagna",
    traits: [],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Bullywug",
    size: "Media",
    type: "umanoide (bullywug)",
    alignment: "Neutrale Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "6 m, nuoto 12 m",
    ability_scores: { str: 12, dex: 12, con: 13, int: 7, wis: 10, cha: 7 },
    skills: { "Furtività": 3 },
    senses: ["Percezione passiva 10"],
    languages: ["Bullywug"],
    challenge_rating: "1/4",
    environment: "Palude",
    traits: [
      {
        name: "Soffio",
        description: "Può saltare a grandi distanze."
      }
    ],
    actions: [
      {
        name: "Lancia",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Coboldo",
    size: "Piccola",
    type: "umanoide (coboldo)",
    alignment: "Legale Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 5,
    hp_dice: "2d6 - 2",
    speed: "9 m",
    ability_scores: { str: 7, dex: 15, con: 9, int: 8, wis: 7, cha: 8 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 8"],
    languages: ["Comune", "Draconico"],
    challenge_rating: "1/8",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Lancia",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Coboldo Alato",
    size: "Piccola",
    type: "umanoide (coboldo)",
    alignment: "Legale Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 7,
    hp_dice: "2d6",
    speed: "9 m, volare 9 m",
    ability_scores: { str: 7, dex: 15, con: 9, int: 8, wis: 7, cha: 8 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 8"],
    languages: ["Comune", "Draconico"],
    challenge_rating: "1/4",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Fionda",
        type: "Distanza",
        to_hit: 4,
        reach: "9/36 m",
        damage: "1d4 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Drow",
    size: "Media",
    type: "umanoide (elfo)",
    alignment: "Neutrale Malvagio",
    ac: 15,
    ac_type: "armatura di cuoio, scudo",
    hp: 13,
    hp_dice: "3d8",
    speed: "9 m",
    ability_scores: { str: 10, dex: 14, con: 10, int: 10, wis: 13, cha: 11 },
    skills: { "Furtività": 4, "Percezione": 3 },
    senses: ["scurovisione 36 m", "Percezione passiva 13"],
    languages: ["Comune", "Sottosuolo"],
    challenge_rating: "1/4",
    environment: "Sottosuolo",
    traits: [],
    actions: [
      {
        name: "Stocco",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Drow Combattente Scelto",
    size: "Media",
    type: "umanoide (elfo)",
    alignment: "Neutrale Malvagio",
    ac: 18,
    ac_type: "piastra",
    hp: 104,
    hp_dice: "16d8 + 32",
    speed: "9 m",
    ability_scores: { str: 18, dex: 12, con: 14, int: 12, wis: 14, cha: 16 },
    skills: { "Furtività": 6, "Percezione": 6 },
    senses: ["scurovisione 36 m", "Percezione passiva 16"],
    languages: ["Comune", "Sottosuolo"],
    challenge_rating: "5",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi minori."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Drow Mago",
    size: "Media",
    type: "umanoide (elfo)",
    alignment: "Neutrale Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 88,
    hp_dice: "16d8 + 16",
    speed: "9 m",
    ability_scores: { str: 10, dex: 14, con: 12, int: 18, wis: 15, cha: 14 },
    skills: { "Arcano": 7, "Furtività": 5 },
    senses: ["scurovisione 36 m", "Percezione passiva 12"],
    languages: ["Comune", "Sottosuolo"],
    challenge_rating: "7",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da mago."
      }
    ],
    actions: [
      {
        name: "Dardo",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Drow Sacerdotessa di Lolth",
    size: "Media",
    type: "umanoide (elfo)",
    alignment: "Neutrale Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 104,
    hp_dice: "16d8 + 32",
    speed: "9 m",
    ability_scores: { str: 10, dex: 16, con: 14, int: 14, wis: 20, cha: 18 },
    skills: { "Percezione": 8, "Persuasione": 7 },
    senses: ["scurovisione 36 m", "Percezione passiva 18"],
    languages: ["Comune", "Sottosuolo"],
    challenge_rating: "8",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da chierico."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Githyanki Cavaliere",
    size: "Media",
    type: "umanoide (gith)",
    alignment: "Legale Malvagio",
    ac: 18,
    ac_type: "piastra",
    hp: 91,
    hp_dice: "14d8 + 28",
    speed: "9 m",
    ability_scores: { str: 18, dex: 16, con: 14, int: 10, wis: 15, cha: 10 },
    skills: { "Percezione": 4 },
    senses: ["Percezione passiva 14"],
    languages: ["Gith"],
    challenge_rating: "8",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Magia",
        description: "Può lanciare incantesimi minori a volontà."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada grande."
      },
      {
        name: "Spada Grande",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "2d6 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Githyanki Combattente",
    size: "Media",
    type: "umanoide (gith)",
    alignment: "Legale Malvagio",
    ac: 17,
    ac_type: "piastra",
    hp: 49,
    hp_dice: "9d8 + 9",
    speed: "9 m",
    ability_scores: { str: 15, dex: 14, con: 12, int: 12, wis: 13, cha: 10 },
    skills: { "Percezione": 3 },
    senses: ["Percezione passiva 13"],
    languages: ["Gith"],
    challenge_rating: "3",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Magia",
        description: "Può lanciare incantesimi minori a volontà."
      }
    ],
    actions: [
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Githzerai Monaco",
    size: "Media",
    type: "umanoide (gith)",
    alignment: "Legale Neutrale",
    ac: 14,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "4d8 + 4",
    speed: "9 m",
    ability_scores: { str: 12, dex: 15, con: 12, int: 13, wis: 14, cha: 10 },
    skills: { "Furtività": 4, "Percezione": 4 },
    senses: ["Percezione passiva 14"],
    languages: ["Gith"],
    challenge_rating: "2",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Magia",
        description: "Può lanciare incantesimi minori a volontà."
      }
    ],
    actions: [
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Githzerai Zerth",
    size: "Media",
    type: "umanoide (gith)",
    alignment: "Legale Neutrale",
    ac: 17,
    ac_type: "naturale",
    hp: 110,
    hp_dice: "13d8 + 52",
    speed: "9 m",
    ability_scores: { str: 14, dex: 18, con: 18, int: 15, wis: 17, cha: 13 },
    skills: { "Furtività": 7, "Percezione": 6 },
    senses: ["Percezione passiva 16"],
    languages: ["Gith"],
    challenge_rating: "6",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Magia",
        description: "Può lanciare incantesimi minori a volontà."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi con la sua spada."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Gnoll",
    size: "Media",
    type: "umanoide (gnoll)",
    alignment: "Caotico Malvagio",
    ac: 15,
    ac_type: "armatura a scaglie",
    hp: 22,
    hp_dice: "5d8",
    speed: "9 m",
    ability_scores: { str: 14, dex: 12, con: 11, int: 6, wis: 10, cha: 7 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Gnoll"],
    challenge_rating: "1/2",
    environment: "Collina, Deserto, Foresta, Prateria",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Ascia da battaglia",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Gnoll Signore del Branco",
    size: "Media",
    type: "umanoide (gnoll)",
    alignment: "Caotico Malvagio",
    ac: 17,
    ac_type: "armatura a scaglie",
    hp: 45,
    hp_dice: "6d8 + 18",
    speed: "9 m",
    ability_scores: { str: 18, dex: 14, con: 16, int: 8, wis: 12, cha: 10 },
    skills: { "Intimidire": 4, "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Gnoll"],
    challenge_rating: "2",
    environment: "Collina, Deserto, Foresta, Prateria",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua ascia."
      },
      {
        name: "Ascia da battaglia",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Gnoll Zanna di Yeenoghu",
    size: "Media",
    type: "umanoide (gnoll)",
    alignment: "Caotico Malvagio",
    ac: 15,
    ac_type: "armatura a scaglie",
    hp: 67,
    hp_dice: "9d8 + 27",
    speed: "9 m",
    ability_scores: { str: 16, dex: 14, con: 16, int: 10, wis: 12, cha: 12 },
    skills: { "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Abissale", "Gnoll"],
    challenge_rating: "4",
    environment: "Collina, Deserto, Foresta, Prateria",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua ascia."
      },
      {
        name: "Ascia da battaglia",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Gnomo delle Profondità (Svirfneblin)",
    size: "Piccola",
    type: "umanoide (gnomo)",
    alignment: "Neutrale Buono",
    ac: 15,
    ac_type: "piastra",
    hp: 17,
    hp_dice: "5d6",
    speed: "9 m",
    ability_scores: { str: 12, dex: 14, con: 12, int: 13, wis: 12, cha: 10 },
    skills: { "Furtività": 4, "Percezione": 3 },
    senses: ["scurovisione 36 m", "Percezione passiva 13"],
    languages: ["Comune", "Gnomico", "Sottosuolo"],
    challenge_rating: "1/2",
    environment: "Sottosuolo",
    traits: [],
    actions: [
      {
        name: "Randello",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Svirfneblin (Gnomo delle Profondità)",
    size: "Piccola",
    type: "umanoide (gnomo)",
    alignment: "Neutrale Buono",
    ac: 15,
    ac_type: "piastra",
    hp: 17,
    hp_dice: "5d6",
    speed: "9 m",
    ability_scores: { str: 12, dex: 14, con: 12, int: 13, wis: 12, cha: 10 },
    skills: { "Furtività": 4, "Percezione": 3 },
    senses: ["scurovisione 36 m", "Percezione passiva 13"],
    languages: ["Comune", "Gnomico", "Sottosuolo"],
    challenge_rating: "1/2",
    environment: "Sottosuolo",
    traits: [],
    actions: [
      {
        name: "Randello",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Bugbear",
    size: "Media",
    type: "umanoide (goblinoide)",
    alignment: "Caotico Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 27,
    hp_dice: "5d8 + 5",
    speed: "9 m",
    ability_scores: { str: 15, dex: 14, con: 13, int: 8, wis: 11, cha: 9 },
    skills: { "Furtività": 6 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Comune", "Goblin"],
    challenge_rating: "1",
    environment: "Foresta, Prateria, Sottosuolo",
    traits: [
      {
        name: "Sorpresa",
        description: "Ha un attacco a sorpresa con un danno extra."
      }
    ],
    actions: [
      {
        name: "Clava",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Bugbear Capotribù",
    size: "Media",
    type: "umanoide (goblinoide)",
    alignment: "Caotico Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d8 + 18",
    speed: "9 m",
    ability_scores: { str: 17, dex: 14, con: 16, int: 10, wis: 12, cha: 11 },
    skills: { "Furtività": 6 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: ["Comune", "Goblin"],
    challenge_rating: "3",
    environment: "Foresta, Prateria, Sottosuolo",
    traits: [
      {
        name: "Sorpresa",
        description: "Ha un attacco a sorpresa con un danno extra."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua clava."
      },
      {
        name: "Clava",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Goblin",
    size: "Piccola",
    type: "umanoide (goblinoide)",
    alignment: "Neutrale Malvagio",
    ac: 15,
    ac_type: "armatura di cuoio, scudo",
    hp: 7,
    hp_dice: "2d6",
    speed: "9 m",
    ability_scores: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8 },
    skills: { "Furtività": 6 },
    senses: ["scurovisione 18 m", "Percezione passiva 9"],
    languages: ["Comune", "Goblin"],
    challenge_rating: "1/4",
    environment: "Collina, Foresta, Prateria, Sottosuolo",
    traits: [
      {
        name: "Fuga Agile",
        description: "Può fare un'azione bonus per disimpegnarsi o nascondersi."
      }
    ],
    actions: [
      {
        name: "Scimitarra",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Goblin Capo",
    size: "Piccola",
    type: "umanoide (goblinoide)",
    alignment: "Neutrale Malvagio",
    ac: 17,
    ac_type: "naturale",
    hp: 21,
    hp_dice: "6d6",
    speed: "9 m",
    ability_scores: { str: 10, dex: 14, con: 10, int: 10, wis: 10, cha: 12 },
    skills: { "Furtività": 6 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Comune", "Goblin"],
    challenge_rating: "1",
    environment: "Collina, Foresta, Prateria, Sottosuolo",
    traits: [
      {
        name: "Fuga Agile",
        description: "Può fare un'azione bonus per disimpegnarsi o nascondersi."
      }
    ],
    actions: [
      {
        name: "Scimitarra",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Hobgoblin",
    size: "Media",
    type: "umanoide (goblinoide)",
    alignment: "Legale Malvagio",
    ac: 18,
    ac_type: "piastra",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "9 m",
    ability_scores: { str: 13, dex: 12, con: 12, int: 10, wis: 10, cha: 9 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Comune", "Goblin"],
    challenge_rating: "1/2",
    environment: "Collina, Deserto, Foresta, Prateria, Sottosuolo",
    traits: [],
    actions: [
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d8 + 1",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Hobgoblin Capitano",
    size: "Media",
    type: "umanoide (goblinoide)",
    alignment: "Legale Malvagio",
    ac: 17,
    ac_type: "piastra",
    hp: 39,
    hp_dice: "6d8 + 12",
    speed: "9 m",
    ability_scores: { str: 15, dex: 14, con: 14, int: 12, wis: 10, cha: 13 },
    skills: {},
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Comune", "Goblin"],
    challenge_rating: "3",
    environment: "Collina, Deserto, Foresta, Prateria, Sottosuolo",
    traits: [
      {
        name: "Ordini",
        description: "Può dare ordini ai suoi alleati per attaccare."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Hobgoblin Signore della Guerra",
    size: "Media",
    type: "umanoide (goblinoide)",
    alignment: "Legale Malvagio",
    ac: 20,
    ac_type: "naturale",
    hp: 97,
    hp_dice: "13d8 + 39",
    speed: "9 m",
    ability_scores: { str: 20, dex: 16, con: 16, int: 14, wis: 11, cha: 17 },
    skills: { "Atletica": 7, "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Comune", "Goblin"],
    challenge_rating: "6",
    environment: "Collina, Deserto, Foresta, Prateria, Sottosuolo",
    traits: [
      {
        name: "Ordini",
        description: "Può dare ordini ai suoi alleati per attaccare."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi: due con la sua spada e uno con il suo scudo."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 8,
        reach: "1,5 m",
        damage: "1d8 + 5",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Grimlock",
    size: "Media",
    type: "umanoide (grimlock)",
    alignment: "Neutrale Malvagio",
    ac: 11,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "9 m",
    ability_scores: { str: 16, dex: 10, con: 12, int: 7, wis: 8, cha: 6 },
    skills: {},
    senses: ["vista cieca 9 m", "Percezione passiva 9"],
    languages: ["Comune", "Sottosuolo"],
    challenge_rating: "1/4",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Vista Cieca",
        description: "Non ha bisogno di occhi per vedere."
      }
    ],
    actions: [
      {
        name: "Ascia da battaglia",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Kenku",
    size: "Media",
    type: "umanoide (kenku)",
    alignment: "Caotico Neutrale",
    ac: 13,
    ac_type: "naturale",
    hp: 13,
    hp_dice: "3d8",
    speed: "9 m",
    ability_scores: { str: 10, dex: 16, con: 10, int: 11, wis: 10, cha: 10 },
    skills: { "Furtività": 5, "Percezione": 2 },
    senses: ["Percezione passiva 12"],
    languages: ["Comune"],
    challenge_rating: "1/4",
    environment: "Foresta, Urbano",
    traits: [
      {
        name: "Mimica",
        description: "Può imitare suoni e voci che ha sentito."
      }
    ],
    actions: [
      {
        name: "Spada Corta",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Kuo-Toa",
    size: "Media",
    type: "umanoide (kuo-toa)",
    alignment: "Neutrale Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 18,
    hp_dice: "4d8",
    speed: "6 m, nuoto 18 m",
    ability_scores: { str: 13, dex: 10, con: 11, int: 8, wis: 10, cha: 8 },
    skills: { "Percezione": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Kuo-Toa"],
    challenge_rating: "1/4",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Anfibio",
        description: "Può respirare sia in acqua che sulla terraferma."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Kuo-toa Esecutore",
    size: "Media",
    type: "umanoide (kuo-toa)",
    alignment: "Neutrale Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "5d8",
    speed: "6 m, nuoto 18 m",
    ability_scores: { str: 13, dex: 10, con: 11, int: 8, wis: 10, cha: 8 },
    skills: { "Percezione": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Kuo-Toa"],
    challenge_rating: "1",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Anfibio",
        description: "Può respirare sia in acqua che sulla terraferma."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Kuo-Toa Gran Sacerdote",
    size: "Media",
    type: "umanoide (kuo-toa)",
    alignment: "Neutrale Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 67,
    hp_dice: "9d8 + 27",
    speed: "6 m, nuoto 18 m",
    ability_scores: { str: 13, dex: 10, con: 16, int: 11, wis: 16, cha: 13 },
    skills: { "Percezione": 6 },
    senses: ["scurovisione 18 m", "Percezione passiva 16"],
    languages: ["Kuo-Toa"],
    challenge_rating: "6",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Anfibio",
        description: "Può respirare sia in acqua che sulla terraferma."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Lucertoloide",
    size: "Media",
    type: "umanoide (lucertoloide)",
    alignment: "Neutrale",
    ac: 15,
    ac_type: "naturale",
    hp: 27,
    hp_dice: "5d8 + 5",
    speed: "9 m, nuoto 9 m",
    ability_scores: { str: 15, dex: 11, con: 12, int: 7, wis: 12, cha: 7 },
    skills: { "Furtività": 4 },
    senses: ["Percezione passiva 11"],
    languages: ["Draconico"],
    challenge_rating: "1/2",
    environment: "Foresta, Palude",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua arma e uno con il morso."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Lucertoloide Sciamano",
    size: "Media",
    type: "umanoide (lucertoloide)",
    alignment: "Neutrale",
    ac: 13,
    ac_type: "naturale",
    hp: 27,
    hp_dice: "6d8 + 6",
    speed: "9 m, nuoto 9 m",
    ability_scores: { str: 15, dex: 11, con: 12, int: 7, wis: 14, cha: 7 },
    skills: { "Furtività": 4 },
    senses: ["Percezione passiva 12"],
    languages: ["Draconico"],
    challenge_rating: "2",
    environment: "Foresta, Palude",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da druido."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua arma e uno con il morso."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Re/Regina Lucertola",
    size: "Media",
    type: "umanoide (lucertoloide)",
    alignment: "Caotico Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "8d8 + 16",
    speed: "9 m, nuoto 9 m",
    ability_scores: { str: 17, dex: 11, con: 14, int: 9, wis: 14, cha: 10 },
    skills: { "Furtività": 4 },
    senses: ["Percezione passiva 12"],
    languages: ["Draconico"],
    challenge_rating: "4",
    environment: "Foresta, Palude",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua arma e uno con il morso."
      },
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Marinide",
    size: "Media",
    type: "umanoide (marinide)",
    alignment: "Neutrale",
    ac: 13,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "3 m, nuoto 9 m",
    ability_scores: { str: 12, dex: 12, con: 13, int: 9, wis: 10, cha: 12 },
    skills: { "Percezione": 2 },
    senses: ["Percezione passiva 12"],
    languages: ["Acquano", "Comune"],
    challenge_rating: "1/8",
    environment: "Costa, Subacqueo",
    traits: [
      {
        name: "Anfibio",
        description: "Può respirare sia in acqua che sulla terraferma."
      }
    ],
    actions: [
      {
        name: "Tridente",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Sciacallo Mannaro",
    size: "Media",
    type: "umanoide (mutaforma)",
    alignment: "Caotico Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 33,
    hp_dice: "6d8 + 6",
    speed: "12 m",
    ability_scores: { str: 12, dex: 15, con: 12, int: 10, wis: 11, cha: 10 },
    skills: { "Percezione": 2, "Furtività": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Comune", "Gnoll"],
    challenge_rating: "1/2",
    environment: "Deserto, Prateria",
    traits: [
      {
        name: "Mutaforma",
        description: "Può assumere la forma di un umanoide, di uno sciacallo o una forma ibrida."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Duergar",
    size: "Media",
    type: "umanoide (nano)",
    alignment: "Legale Malvagio",
    ac: 16,
    ac_type: "piastra",
    hp: 26,
    hp_dice: "4d8 + 8",
    speed: "7,5 m",
    ability_scores: { str: 14, dex: 11, con: 14, int: 11, wis: 10, cha: 9 },
    skills: { "Furtività": 2, "Percezione": 2 },
    senses: ["scurovisione 36 m", "Percezione passiva 12"],
    languages: ["Comune", "Nanico"],
    challenge_rating: "1",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Sunlight Sensitivity",
        description: "Ha svantaggio ai tiri per colpire in luce solare."
      }
    ],
    actions: [
      {
        name: "Martello da Guerra",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Orco",
    size: "Media",
    type: "umanoide (orco)",
    alignment: "Caotico Malvagio",
    ac: 13,
    ac_type: "pelle, scudo",
    hp: 15,
    hp_dice: "2d8 + 6",
    speed: "9 m",
    ability_scores: { str: 16, dex: 12, con: 16, int: 7, wis: 11, cha: 10 },
    skills: { "Intimidire": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Comune", " Orchesco"],
    challenge_rating: "1/2",
    environment: "Artico, Collina, Foresta, Montagna, Palude, Prateria, Sottosuolo",
    traits: [
      {
        name: "Aggressivo",
        description: "Può muoversi verso una creatura ostile come azione bonus."
      }
    ],
    actions: [
      {
        name: "Ascia Bipenne",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d12 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Orco Capotribù Guerriero",
    size: "Media",
    type: "umanoide (orco)",
    alignment: "Caotico Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d8 + 18",
    speed: "9 m",
    ability_scores: { str: 18, dex: 12, con: 16, int: 8, wis: 11, cha: 14 },
    skills: { "Intimidire": 4, "Percezione": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Comune", " Orchesco"],
    challenge_rating: "4",
    environment: "Artico, Collina, Foresta, Montagna, Palude, Prateria, Sottosuolo",
    traits: [
      {
        name: "Aggressivo",
        description: "Può muoversi verso una creatura ostile come azione bonus."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi: uno con l'ascia bipenne e uno con la sua lancia."
      },
      {
        name: "Ascia Bipenne",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d12 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Orco Occhio di Gruumsh",
    size: "Media",
    type: "umanoide (orco)",
    alignment: "Caotico Malvagio",
    ac: 16,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d8 + 18",
    speed: "9 m",
    ability_scores: { str: 16, dex: 12, con: 16, int: 7, wis: 14, cha: 12 },
    skills: { "Intimidire": 3, "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Comune", " Orchesco"],
    challenge_rating: "2",
    environment: "Artico, Collina, Foresta, Montagna, Palude, Prateria, Sottosuolo",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da chierico."
      }
    ],
    actions: [
      {
        name: "Ascia Bipenne",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d12 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Orog",
    size: "Media",
    type: "umanoide (orco)",
    alignment: "Caotico Malvagio",
    ac: 18,
    ac_type: "piastra",
    hp: 42,
    hp_dice: "5d8 + 20",
    speed: "9 m",
    ability_scores: { str: 18, dex: 12, con: 18, int: 11, wis: 12, cha: 10 },
    skills: { "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Comune", " Orchesco"],
    challenge_rating: "2",
    environment: "Artico, Collina, Foresta, Montagna, Prateria, Sottosuolo",
    traits: [
      {
        name: "Aggressivo",
        description: "Può muoversi verso una creatura ostile come azione bonus."
      }
    ],
    actions: [
      {
        name: "Ascia Bipenne",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d12 + 4",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Quaggoth",
    size: "Media",
    type: "umanoide (quaggoth)",
    alignment: "Caotico Neutrale",
    ac: 13,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d8 + 18",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 17, dex: 12, con: 16, int: 6, wis: 12, cha: 7 },
    skills: { "Percezione": 3, "Furtività": 3 },
    senses: ["scurovisione 36 m", "Percezione passiva 13"],
    languages: ["Sottosuolo"],
    challenge_rating: "2",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Quaggoth Thonot",
    size: "Media",
    type: "umanoide (quaggoth)",
    alignment: "Caotico Neutrale",
    ac: 13,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "8d8 + 16",
    speed: "9 m, scalare 9 m",
    ability_scores: { str: 17, dex: 12, con: 16, int: 6, wis: 15, cha: 7 },
    skills: { "Percezione": 4, "Furtività": 3 },
    senses: ["scurovisione 36 m", "Percezione passiva 14"],
    languages: ["Sottosuolo"],
    challenge_rating: "3",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da chierico."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Accolito",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 10,
    ac_type: "naturale",
    hp: 9,
    hp_dice: "2d8",
    speed: "9 m",
    ability_scores: { str: 10, dex: 10, con: 10, int: 10, wis: 14, cha: 11 },
    skills: { "Medicina": 4, "Ristabilimento": 4 },
    senses: ["Percezione passiva 12"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "1/4",
    environment: "Urbano",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da chierico."
      }
    ],
    actions: [
      {
        name: "Randello",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Arcimago",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 12,
    ac_type: "naturale",
    hp: 99,
    hp_dice: "18d8 + 18",
    speed: "9 m",
    ability_scores: { str: 10, dex: 14, con: 12, int: 20, wis: 15, cha: 16 },
    skills: { "Arcano": 13, "Storia": 13 },
    senses: ["Percezione passiva 12"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "12",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da mago."
      }
    ],
    actions: [
      {
        name: "Daga",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Assassino",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi Non Buono",
    ac: 15,
    ac_type: "naturale",
    hp: 78,
    hp_dice: "12d8 + 24",
    speed: "9 m",
    ability_scores: { str: 11, dex: 16, con: 14, int: 13, wis: 11, cha: 10 },
    skills: { "Furtività": 6, "Inganno": 4 },
    senses: ["Percezione passiva 10"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "8",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Attacco Furtivo",
        description: "Infligge danni extra quando attacca un bersaglio ignaro."
      }
    ],
    actions: [
      {
        name: "Spada Corta",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Bandito",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi Non Legale",
    ac: 12,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "9 m",
    ability_scores: { str: 11, dex: 12, con: 12, int: 10, wis: 10, cha: 10 },
    skills: { "Furtività": 3 },
    senses: ["Percezione passiva 10"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "1/8",
    environment: "Qualsiasi ambiente",
    traits: [],
    actions: [
      {
        name: "Spada Corta",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Berserker",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi Caotico",
    ac: 13,
    ac_type: "naturale",
    hp: 67,
    hp_dice: "9d8 + 27",
    speed: "9 m",
    ability_scores: { str: 16, dex: 12, con: 17, int: 9, wis: 11, cha: 9 },
    skills: { "Intimidire": 3 },
    senses: ["Percezione passiva 10"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "2",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Furia",
        description: "Infligge danni extra quando è in furia."
      }
    ],
    actions: [
      {
        name: "Ascia Grande",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d12 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Capitano dei Pirati",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi Non Legale",
    ac: 15,
    ac_type: "naturale",
    hp: 65,
    hp_dice: "10d8 + 20",
    speed: "9 m",
    ability_scores: { str: 15, dex: 14, con: 14, int: 12, wis: 11, cha: 12 },
    skills: { "Intimidire": 4, "Percezione": 3 },
    senses: ["Percezione passiva 13"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "2",
    environment: "Costa, Subacqueo",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada lunga."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Capo dei Banditi",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi Non Legale",
    ac: 15,
    ac_type: "naturale",
    hp: 65,
    hp_dice: "10d8 + 20",
    speed: "9 m",
    ability_scores: { str: 15, dex: 14, con: 14, int: 12, wis: 11, cha: 12 },
    skills: { "Intimidire": 4, "Percezione": 3 },
    senses: ["Percezione passiva 13"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "2",
    environment: "Qualsiasi ambiente",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada lunga."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Cavaliere",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 18,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "8d8 + 16",
    speed: "9 m",
    ability_scores: { str: 16, dex: 11, con: 14, int: 11, wis: 11, cha: 15 },
    skills: { "Atletica": 5, "Percezione": 3 },
    senses: ["Percezione passiva 13"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "3",
    environment: "Urbano",
    traits: [
      {
        name: "Devozione",
        description: "Può attirare gli attacchi dei nemici verso di sé."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada lunga."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Combattente Tribale",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 10,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "9 m",
    ability_scores: { str: 13, dex: 11, con: 12, int: 10, wis: 10, cha: 10 },
    skills: { "Sopravvivenza": 2 },
    senses: ["Percezione passiva 10"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "1/8",
    environment: "Qualsiasi ambiente",
    traits: [],
    actions: [
      {
        name: "Lancia",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Cortigiano (Vedi Nobile)",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 10,
    ac_type: "naturale",
    hp: 9,
    hp_dice: "2d8",
    speed: "9 m",
    ability_scores: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    skills: { "Persuasione": 2, "Storia": 2 },
    senses: ["Percezione passiva 10"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "1/8",
    environment: "Urbano",
    traits: [],
    actions: [
      {
        name: "Pugnale",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Cultista",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi Non Buono",
    ac: 12,
    ac_type: "naturale",
    hp: 9,
    hp_dice: "2d8",
    speed: "9 m",
    ability_scores: { str: 10, dex: 10, con: 10, int: 10, wis: 11, cha: 11 },
    skills: { "Inganno": 2 },
    senses: ["Percezione passiva 10"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "1/8",
    environment: "Qualsiasi ambiente",
    traits: [],
    actions: [
      {
        name: "Scimitarra",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d6",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Cultista Fanatico",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi Non Buono",
    ac: 14,
    ac_type: "naturale",
    hp: 33,
    hp_dice: "6d8 + 6",
    speed: "9 m",
    ability_scores: { str: 11, dex: 12, con: 13, int: 11, wis: 14, cha: 11 },
    skills: { "Inganno": 2, "Percezione": 4 },
    senses: ["Percezione passiva 14"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "2",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da chierico."
      }
    ],
    actions: [
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d8 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Druido",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 11,
    ac_type: "naturale",
    hp: 27,
    hp_dice: "5d8",
    speed: "9 m",
    ability_scores: { str: 10, dex: 12, con: 11, int: 13, wis: 15, cha: 11 },
    skills: { "Natura": 3, "Percezione": 4 },
    senses: ["Percezione passiva 14"],
    languages: ["Druidico", "Comune"],
    challenge_rating: "2",
    environment: "Foresta",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da druido."
      }
    ],
    actions: [
      {
        name: "Randello",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Esploratore",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 13,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "9 m",
    ability_scores: { str: 11, dex: 14, con: 12, int: 10, wis: 12, cha: 10 },
    skills: { "Sopravvivenza": 3 },
    senses: ["Percezione passiva 12"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "1/2",
    environment: "Qualsiasi ambiente",
    traits: [],
    actions: [
      {
        name: "Spada Corta",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Guardia",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 16,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "9 m",
    ability_scores: { str: 13, dex: 12, con: 12, int: 10, wis: 11, cha: 10 },
    skills: { "Percezione": 2 },
    senses: ["Percezione passiva 12"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "1/8",
    environment: "Urbano",
    traits: [],
    actions: [
      {
        name: "Lancia",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Mago",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 12,
    ac_type: "naturale",
    hp: 40,
    hp_dice: "9d8",
    speed: "9 m",
    ability_scores: { str: 9, dex: 14, con: 11, int: 17, wis: 12, cha: 11 },
    skills: { "Arcano": 5, "Storia": 5 },
    senses: ["Percezione passiva 11"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "6",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da mago."
      }
    ],
    actions: [
      {
        name: "Daga",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Malvivente",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 12,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "9 m",
    ability_scores: { str: 11, dex: 12, con: 12, int: 10, wis: 10, cha: 10 },
    skills: { "Furtività": 3 },
    senses: ["Percezione passiva 10"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "1/2",
    environment: "Qualsiasi ambiente",
    traits: [],
    actions: [
      {
        name: "Spada Corta",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Nobile",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 10,
    ac_type: "naturale",
    hp: 9,
    hp_dice: "2d8",
    speed: "9 m",
    ability_scores: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    skills: { "Persuasione": 2, "Storia": 2 },
    senses: ["Percezione passiva 10"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "1/8",
    environment: "Urbano",
    traits: [],
    actions: [
      {
        name: "Pugnale",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Pirata",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi Non Legale",
    ac: 12,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "9 m",
    ability_scores: { str: 11, dex: 12, con: 12, int: 10, wis: 10, cha: 10 },
    skills: { "Furtività": 3 },
    senses: ["Percezione passiva 10"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "1/8",
    environment: "Costa, Subacqueo",
    traits: [],
    actions: [
      {
        name: "Spada Corta",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Popolano",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 10,
    ac_type: "",
    hp: 4,
    hp_dice: "1d8",
    speed: "9 m",
    ability_scores: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    skills: {},
    senses: ["Percezione passiva 10"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "0",
    environment: "Qualsiasi ambiente",
    traits: [],
    actions: [
      {
        name: "Pugno",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Sacerdote",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 13,
    ac_type: "naturale",
    hp: 27,
    hp_dice: "5d8",
    speed: "9 m",
    ability_scores: { str: 10, dex: 12, con: 11, int: 13, wis: 16, cha: 13 },
    skills: { "Religione": 3, "Persuasione": 3 },
    senses: ["Percezione passiva 13"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "5",
    environment: "Urbano",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da chierico."
      }
    ],
    actions: [
      {
        name: "Mazze",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d6",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Sciamano Tribale (vedi Druido)",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 11,
    ac_type: "naturale",
    hp: 27,
    hp_dice: "5d8",
    speed: "9 m",
    ability_scores: { str: 10, dex: 12, con: 11, int: 13, wis: 15, cha: 11 },
    skills: { "Natura": 3, "Percezione": 4 },
    senses: ["Percezione passiva 14"],
    languages: ["Druidico", "Comune"],
    challenge_rating: "2",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Incantesimi",
        description: "Può lanciare incantesimi da druido."
      }
    ],
    actions: [
      {
        name: "Randello",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Spia",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 12,
    ac_type: "naturale",
    hp: 27,
    hp_dice: "6d8",
    speed: "9 m",
    ability_scores: { str: 10, dex: 15, con: 10, int: 12, wis: 14, cha: 12 },
    skills: { "Furtività": 4, "Percezione": 4 },
    senses: ["Percezione passiva 14"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "1",
    environment: "Urbano",
    traits: [
      {
        name: "Attacco Furtivo",
        description: "Infligge danni extra quando attacca un bersaglio ignaro."
      }
    ],
    actions: [
      {
        name: "Pugnale",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Veterano",
    size: "Media",
    type: "umanoide (qualsiasi razza)",
    alignment: "Qualsiasi",
    ac: 17,
    ac_type: "naturale",
    hp: 58,
    hp_dice: "9d8 + 18",
    speed: "9 m",
    ability_scores: { str: 16, dex: 13, con: 14, int: 10, wis: 11, cha: 10 },
    skills: { "Atletica": 5, "Percezione": 2 },
    senses: ["Percezione passiva 12"],
    languages: ["Qualsiasi linguaggio"],
    challenge_rating: "3",
    environment: "Qualsiasi ambiente",
    traits: [],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada lunga."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Sahuagin",
    size: "Media",
    type: "umanoide (sahuagin)",
    alignment: "Legale Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "4d8 + 4",
    speed: "9 m, nuoto 12 m",
    ability_scores: { str: 13, dex: 11, con: 12, int: 12, wis: 10, cha: 9 },
    skills: { "Percezione": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Sahuagin"],
    challenge_rating: "1/2",
    environment: "Costa, Subacqueo",
    traits: [
      {
        name: "Anfibio",
        description: "Può respirare sia in acqua che sulla terraferma."
      }
    ],
    actions: [
      {
        name: "Tridente",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Sahuagin Barone",
    size: "Grande",
    type: "umanoide (sahuagin)",
    alignment: "Legale Malvagio",
    ac: 15,
    ac_type: "naturale",
    hp: 75,
    hp_dice: "10d10 + 20",
    speed: "9 m, nuoto 12 m",
    ability_scores: { str: 16, dex: 13, con: 14, int: 14, wis: 13, cha: 12 },
    skills: { "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Sahuagin"],
    challenge_rating: "5",
    environment: "Costa, Subacqueo",
    traits: [
      {
        name: "Anfibio",
        description: "Può respirare sia in acqua che sulla terraferma."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua tre attacchi: uno con la sua spada e due con gli artigli."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Sahuagin Sacerdotessa",
    size: "Media",
    type: "umanoide (sahuagin)",
    alignment: "Legale Malvagio",
    ac: 14,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "4d8 + 4",
    speed: "9 m, nuoto 12 m",
    ability_scores: { str: 13, dex: 11, con: 12, int: 12, wis: 16, cha: 11 },
    skills: { "Percezione": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Sahuagin"],
    challenge_rating: "2",
    environment: "Costa, Subacqueo",
    traits: [
      {
        name: "Anfibio",
        description: "Può respirare sia in acqua che sulla terraferma."
      }
    ],
    actions: [
      {
        name: "Tridente",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Thri-Kreen",
    size: "Media",
    type: "umanoide (thri-kreen)",
    alignment: "Caotico Neutrale",
    ac: 13,
    ac_type: "naturale",
    hp: 39,
    hp_dice: "6d8 + 12",
    speed: "12 m",
    ability_scores: { str: 12, dex: 16, con: 14, int: 8, wis: 12, cha: 7 },
    skills: { "Percezione": 3, "Furtività": 5 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Thri-Kreen"],
    challenge_rating: "1",
    environment: "Deserto, Prateria",
    traits: [
      {
        name: "Veleno",
        description: "Il suo morso può infliggere danni da veleno."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con i suoi pugnali."
      },
      {
        name: "Pugnale",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d4 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Troglodita",
    size: "Media",
    type: "umanoide (troglodita)",
    alignment: "Caotico Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 13,
    hp_dice: "2d8 + 4",
    speed: "9 m",
    ability_scores: { str: 14, dex: 10, con: 14, int: 6, wis: 10, cha: 6 },
    skills: { "Furtività": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Troglodita"],
    challenge_rating: "1/4",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Puzza",
        description: "Il suo odore può stordire le creature vicine."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Cinghiale Mannaro",
    size: "Media",
    type: "umanoide (umano, mutaforma)",
    alignment: "Neutrale Malvagio",
    ac: 11,
    ac_type: "naturale",
    hp: 52,
    hp_dice: "8d8 + 16",
    speed: "9 m",
    ability_scores: { str: 17, dex: 10, con: 15, int: 10, wis: 11, cha: 8 },
    skills: { "Percezione": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Comune", "Druidico"],
    challenge_rating: "4",
    environment: "Collina, Foresta, Prateria",
    traits: [
      {
        name: "Mutaforma",
        description: "Può assumere la forma di un umanoide, di un cinghiale o una forma ibrida."
      }
    ],
    actions: [
      {
        name: "Zanna",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Lupo Mannaro",
    size: "Media",
    type: "umanoide (umano, mutaforma)",
    alignment: "Caotico Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 58,
    hp_dice: "9d8 + 18",
    speed: "9 m",
    ability_scores: { str: 15, dex: 14, con: 14, int: 10, wis: 11, cha: 10 },
    skills: { "Percezione": 4, "Furtività": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Comune", "Lupoide"],
    challenge_rating: "3",
    environment: "Collina, Foresta",
    traits: [
      {
        name: "Mutaforma",
        description: "Può assumere la forma di un umanoide, di un lupo o una forma ibrida."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d6 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Orso Mannaro",
    size: "Media",
    type: "umanoide (umano, mutaforma)",
    alignment: "Neutrale Buono",
    ac: 12,
    ac_type: "naturale",
    hp: 136,
    hp_dice: "16d8 + 64",
    speed: "12 m",
    ability_scores: { str: 19, dex: 10, con: 17, int: 11, wis: 12, cha: 12 },
    skills: { "Percezione": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 14"],
    languages: ["Comune", "Druidico"],
    challenge_rating: "5",
    environment: "Artico, Collina, Foresta",
    traits: [
      {
        name: "Mutaforma",
        description: "Può assumere la forma di un umanoide, di un orso o una forma ibrida."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 7,
        reach: "1,5 m",
        damage: "1d8 + 4",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Tigre Mannara",
    size: "Media",
    type: "umanoide (umano, mutaforma)",
    alignment: "Neutrale",
    ac: 12,
    ac_type: "naturale",
    hp: 92,
    hp_dice: "13d8 + 26",
    speed: "12 m",
    ability_scores: { str: 17, dex: 15, con: 14, int: 10, wis: 13, cha: 11 },
    skills: { "Percezione": 3, "Furtività": 4 },
    senses: ["scurovisione 18 m", "Percezione passiva 13"],
    languages: ["Comune", "Lupoide"],
    challenge_rating: "4",
    environment: "Deserto, Foresta, Prateria",
    traits: [
      {
        name: "Mutaforma",
        description: "Può assumere la forma di un umanoide, di una tigre o una forma ibrida."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Topo Mannaro",
    size: "Media",
    type: "umanoide (umano, mutaforma)",
    alignment: "Legale Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 33,
    hp_dice: "6d8 + 6",
    speed: "9 m",
    ability_scores: { str: 10, dex: 15, con: 12, int: 11, wis: 10, cha: 8 },
    skills: { "Furtività": 4, "Percezione": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Comune", "Rattoide"],
    challenge_rating: "2",
    environment: "Foresta, Urbano",
    traits: [
      {
        name: "Mutaforma",
        description: "Può assumere la forma di un umanoide, di un topo o una forma ibrida."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Mezzodrago (Archetipo)",
    size: "Varia",
    type: "umanoide (umano)",
    alignment: "Qualunque",
    ac: 13,
    ac_type: "naturale",
    hp: 58,
    hp_dice: "9d8 + 18",
    speed: "9 m",
    ability_scores: { str: 16, dex: 13, con: 14, int: 10, wis: 11, cha: 10 },
    skills: { "Percezione": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Comune", "Draconico"],
    challenge_rating: "Varia",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Soffio",
        description: "Può soffiare un cono di energia a seconda del tipo di drago."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "perforante"
      }
    ]
  },
  {
    name: "Mezzodrago Rosso Veterano",
    size: "Media",
    type: "umanoide (umano)",
    alignment: "Qualunque",
    ac: 18,
    ac_type: "piastra",
    hp: 75,
    hp_dice: "10d8 + 30",
    speed: "9 m",
    ability_scores: { str: 16, dex: 13, con: 16, int: 10, wis: 11, cha: 10 },
    skills: { "Percezione": 2 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Comune", "Draconico"],
    challenge_rating: "5",
    environment: "Qualsiasi ambiente",
    traits: [
      {
        name: "Soffio di Fuoco",
        description: "Soffia un cono di fuoco."
      }
    ],
    actions: [
      {
        name: "Multiattacco",
        description: "Effettua due attacchi con la sua spada lunga."
      },
      {
        name: "Spada Lunga",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d8 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Yuan-ti Sanguepuro",
    size: "Media",
    type: "umanoide (yuan-ti)",
    alignment: "Neutrale Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 44,
    hp_dice: "8d8 + 8",
    speed: "9 m",
    ability_scores: { str: 14, dex: 13, con: 12, int: 13, wis: 12, cha: 14 },
    skills: { "Inganno": 4, "Furtività": 3 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: ["Abissale", "Draconico"],
    challenge_rating: "1",
    environment: "Deserto, Foresta, Palude, Urbano",
    traits: [
      {
        name: "Mutaforma",
        description: "Può assumere la forma di un serpente."
      }
    ],
    actions: [
      {
        name: "Morso",
        type: "Mischia",
        to_hit: 4,
        reach: "1,5 m",
        damage: "1d4 + 2",
        damage_type: "perforante"
      }
    ]
  },
// Fine Umanoidi - Manuale dei Mostri
// src/data/dndMonsters.js

// Inizio Vegetali - Manuale dei Mostri
  {
    name: "Ago Maligno",
    size: "Media",
    type: "vegetale",
    alignment: "Neutrale Malvagio",
    ac: 12,
    ac_type: "naturale",
    hp: 11,
    hp_dice: "2d8 + 2",
    speed: "6 m",
    ability_scores: { str: 12, dex: 10, con: 13, int: 4, wis: 8, cha: 3 },
    senses: ["vista cieca 18 m", "Percezione passiva 9"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Foresta",
    traits: [
      {
        name: "Falsa Apparenza",
        description: "Sembra una pianta normale finché non si muove."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Albero Risvegliato",
    size: "Enorme",
    type: "vegetale",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 59,
    hp_dice: "7d12 + 14",
    speed: "6 m",
    ability_scores: { str: 19, dex: 6, con: 15, int: 10, wis: 10, cha: 7 },
    senses: ["Percezione passiva 10"],
    languages: ["Comune", "Druidico"],
    challenge_rating: "2",
    environment: "Foresta",
    traits: [
      {
        name: "Falsa Apparenza",
        description: "Sembra un albero normale finché non si muove."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 6,
        reach: "3 m",
        damage: "3d6 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Arbusto Maligno",
    size: "Piccola",
    type: "vegetale",
    alignment: "Neutrale Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 4,
    hp_dice: "1d6 + 1",
    speed: "6 m",
    ability_scores: { str: 8, dex: 13, con: 12, int: 4, wis: 8, cha: 3 },
    senses: ["vista cieca 18 m", "Percezione passiva 9"],
    languages: [],
    challenge_rating: "1/8",
    environment: "Foresta",
    traits: [
      {
        name: "Falsa Apparenza",
        description: "Sembra una pianta normale finché non si muove."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d4 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Boleto Stridente",
    size: "Media",
    type: "vegetale",
    alignment: "Senza Allineamento",
    ac: 5,
    ac_type: "",
    hp: 13,
    hp_dice: "3d8",
    speed: "0 m",
    ability_scores: { str: 1, dex: 1, con: 10, int: 1, wis: 10, cha: 1 },
    senses: ["vista cieca 9 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "0",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Reazione al Suono",
        description: "Quando rileva un suono, emette un urlo che può attirare altri mostri."
      }
    ],
    actions: []
  },
  {
    name: "Cespuglio Risvegliato",
    size: "Piccola",
    type: "vegetale",
    alignment: "Senza Allineamento",
    ac: 9,
    ac_type: "naturale",
    hp: 10,
    hp_dice: "3d6",
    speed: "6 m",
    ability_scores: { str: 3, dex: 8, con: 11, int: 10, wis: 10, cha: 6 },
    senses: ["Percezione passiva 10"],
    languages: ["Comune", "Druidico"],
    challenge_rating: "0",
    environment: "Foresta",
    traits: [
      {
        name: "Falsa Apparenza",
        description: "Sembra una pianta normale finché non si muove."
      }
    ],
    actions: [
      {
        name: "Ramo",
        type: "Mischia",
        to_hit: 0,
        reach: "1,5 m",
        damage: "1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Cumulo Strisciante",
    size: "Grande",
    type: "vegetale",
    alignment: "Senza Allineamento",
    ac: 15,
    ac_type: "naturale",
    hp: 65,
    hp_dice: "10d10 + 10",
    speed: "6 m, nuoto 6 m",
    ability_scores: { str: 18, dex: 8, con: 12, int: 1, wis: 10, cha: 5 },
    senses: ["vista cieca 18 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "5",
    environment: "Foresta, Palude",
    traits: [
      {
        name: "Assorbimento",
        description: "Assorbe i danni da fulmine per curarsi."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 6,
        reach: "1,5 m",
        damage: "2d8 + 4",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Fungo Viola",
    size: "Media",
    type: "vegetale",
    alignment: "Senza Allineamento",
    ac: 10,
    ac_type: "",
    hp: 18,
    hp_dice: "4d8",
    speed: "3 m",
    ability_scores: { str: 12, dex: 8, con: 11, int: 1, wis: 10, cha: 3 },
    senses: ["scurovisione 9 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Reazione al Movimento",
        description: "Può attaccare se una creatura si muove nelle sue vicinanze."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 3,
        reach: "1,5 m",
        damage: "1d6 + 1",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Miconide Adulto",
    size: "Media",
    type: "vegetale",
    alignment: "Legale Neutrale",
    ac: 11,
    ac_type: "naturale",
    hp: 22,
    hp_dice: "4d8 + 4",
    speed: "6 m",
    ability_scores: { str: 10, dex: 8, con: 12, int: 10, wis: 13, cha: 10 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: ["Telepatia 18 m"],
    challenge_rating: "1/2",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Spore",
        description: "Può emettere diversi tipi di spore per comunicare e difendersi."
      }
    ],
    actions: [
      {
        name: "Rapport Spore",
        description: "Emette spore che permettono la comunicazione telepaticamente."
      }
    ]
  },
  {
    name: "Miconide Germoglio",
    size: "Piccola",
    type: "vegetale",
    alignment: "Legale Neutrale",
    ac: 10,
    ac_type: "naturale",
    hp: 7,
    hp_dice: "2d6",
    speed: "6 m",
    ability_scores: { str: 8, dex: 8, con: 10, int: 10, wis: 10, cha: 10 },
    senses: ["scurovisione 18 m", "Percezione passiva 10"],
    languages: ["Telepatia 18 m"],
    challenge_rating: "0",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Spore",
        description: "Può emettere diversi tipi di spore per comunicare e difendersi."
      }
    ],
    actions: []
  },
  {
    name: "Miconide Sovrano",
    size: "Grande",
    type: "vegetale",
    alignment: "Legale Neutrale",
    ac: 13,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d10 + 12",
    speed: "6 m",
    ability_scores: { str: 12, dex: 8, con: 14, int: 10, wis: 15, cha: 12 },
    senses: ["scurovisione 18 m", "Percezione passiva 12"],
    languages: ["Telepatia 36 m"],
    challenge_rating: "2",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Spore",
        description: "Può emettere diversi tipi di spore per comunicare e difendersi."
      }
    ],
    actions: [
      {
        name: "Rapport Spore",
        description: "Emette spore che permettono la comunicazione telepaticamente."
      }
    ]
  },
  {
    name: "Quaggoth Servitore delle Spore",
    size: "Media",
    type: "vegetale",
    alignment: "Senza Allineamento",
    ac: 13,
    ac_type: "naturale",
    hp: 45,
    hp_dice: "6d8 + 18",
    speed: "9 m",
    ability_scores: { str: 17, dex: 12, con: 16, int: 6, wis: 12, cha: 7 },
    senses: ["scurovisione 18 m", "Percezione passiva 11"],
    languages: [],
    challenge_rating: "1",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Tattiche del Branco",
        description: "Ha vantaggio ai tiri per colpire se un alleato è vicino al bersaglio."
      }
    ],
    actions: [
      {
        name: "Artigli",
        type: "Mischia",
        to_hit: 5,
        reach: "1,5 m",
        damage: "1d6 + 3",
        damage_type: "taglienti"
      }
    ]
  },
  {
    name: "Rampicante Maligno",
    size: "Media",
    type: "vegetale",
    alignment: "Neutrale Malvagio",
    ac: 13,
    ac_type: "naturale",
    hp: 33,
    hp_dice: "6d8 + 6",
    speed: "6 m",
    ability_scores: { str: 15, dex: 8, con: 13, int: 4, wis: 8, cha: 3 },
    senses: ["vista cieca 18 m", "Percezione passiva 9"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Foresta",
    traits: [
      {
        name: "Falsa Apparenza",
        description: "Sembra una pianta normale finché non si muove."
      }
    ],
    actions: [
      {
        name: "Avviluppare",
        description: "Cattura una creatura con le sue liane per soffocarla."
      }
    ]
  },
  {
    name: "Servitore delle Spore (Archetipo)",
    size: "Media",
    type: "vegetale",
    alignment: "Senza Allineamento",
    ac: 10,
    ac_type: "naturale",
    hp: 10,
    hp_dice: "3d8",
    speed: "6 m",
    ability_scores: { str: 12, dex: 8, con: 11, int: 1, wis: 8, cha: 1 },
    senses: ["scurovisione 9 m", "Percezione passiva 9"],
    languages: [],
    challenge_rating: "1/4",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Resistenza",
        description: "Ha resistenza ai danni non magici."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 2,
        reach: "1,5 m",
        damage: "1d6",
        damage_type: "contundente"
      }
    ]
  },
  {
    name: "Spora Gassosa",
    size: "Grande",
    type: "vegetale",
    alignment: "Senza Allineamento",
    ac: 5,
    ac_type: "",
    hp: 1,
    hp_dice: "1d10",
    speed: "0 m, volare 3 m",
    ability_scores: { str: 1, dex: 1, con: 10, int: 1, wis: 10, cha: 1 },
    senses: ["vista cieca 18 m", "Percezione passiva 10"],
    languages: [],
    challenge_rating: "1/2",
    environment: "Sottosuolo",
    traits: [
      {
        name: "Imitazione",
        description: "Sembra un Beholder morto finché non si muove."
      }
    ],
    actions: [
      {
        name: "Esplosione Mortale",
        description: "Esplode in una nube di spore velenose quando viene distrutta."
      }
    ]
  },
  {
    name: "Treant",
    size: "Enorme",
    type: "vegetale",
    alignment: "Caotico Buono",
    ac: 16,
    ac_type: "naturale",
    hp: 126,
    hp_dice: "11d12 + 55",
    speed: "9 m",
    ability_scores: { str: 23, dex: 8, con: 21, int: 12, wis: 16, cha: 12 },
    senses: ["Percezione passiva 13"],
    languages: ["Comune", "Druidico"],
    challenge_rating: "9",
    environment: "Foresta",
    traits: [
      {
        name: "Falsa Apparenza",
        description: "Sembra un albero normale finché non si muove."
      },
      {
        name: "Animare Alberi",
        description: "Può animare fino a due alberi per combattere al suo fianco."
      }
    ],
    actions: [
      {
        name: "Schianto",
        type: "Mischia",
        to_hit: 10,
        reach: "3 m",
        damage: "3d6 + 6",
        damage_type: "contundente"
      }
    ]
  }
];
// Fine Vegetali - Manuale dei Mostri