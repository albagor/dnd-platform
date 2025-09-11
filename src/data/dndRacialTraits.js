// src/data/dndRacialTraits.js
export const dndRacialTraits = {
  Aarakocra: {
    base: [
      {
        name: 'Volo',
        description:
          "Hai una velocità di volo di 15 metri. Non puoi volare se indossi un'armatura media o pesante.",
      },
      {
        name: 'Artigli',
        description:
          "I tuoi artigli sono armi naturali che puoi usare per i colpi senz'armi. Se colpisci, infliggi 1d4 danni taglienti.",
      },
    ],
    subraces: {},
  },
  Aasimar: {
    base: [
      {
        name: 'Scurovisione',
        description:
          'Entro 18 metri, vedi in luce fioca come se fosse luce intensa e in oscurità come se fosse luce fioca.',
      },
      {
        name: 'Resistenza Celestiale',
        description: 'Hai resistenza ai danni necrotici e radianti.',
      },
      {
        name: 'Mani Guaritrici',
        description:
          'Come azione, puoi toccare una creatura e farle recuperare un numero di PF pari al tuo livello. (1 volta per riposo lungo).',
      },
      {
        name: 'Portatore di Luce',
        description:
          "Conosci il trucchetto 'luce'. Il Carisma è la tua caratteristica da incantatore per esso.",
        spells: [{ name: 'Luce', source: 'Aasimar' }],
      },
      {
        name: 'Rivelazione Celestiale',
        description:
          "Al 3° livello, puoi usare un'azione bonus per scatenare un'energia divina per 1 minuto. Una volta per riposo lungo. Scegli una forma (Protettore, Flagello, Caduto).",
      },
    ],
    subraces: {
      Protettore: [
        {
          name: 'Anima Radiosa',
          description:
            'Durante la Rivelazione, ottieni ali spettrali con velocità di volo di 9m e una volta per turno puoi infliggere danni radianti extra pari al tuo livello.',
        },
      ],
      Flagello: [
        {
          name: 'Consumo Radioso',
          description:
            'Durante la Rivelazione, emetti luce e alla fine di ogni tuo turno, tu e le creature vicine subite danni radianti pari a metà del tuo livello.',
        },
      ],
      Caduto: [
        {
          name: 'Sudario Necrotico',
          description:
            'Durante la Rivelazione, le creature vicine devono superare un TS su Carisma o essere spaventate. Una volta per turno, puoi infliggere danni necrotici extra pari al tuo livello.',
        },
      ],
    },
  },
  Bugbear: {
    base: [
      {
        name: 'Scurovisione',
        description:
          "Puoi vedere in luce fioca entro 18 metri come se fosse luce intensa, e nell'oscurità come se fosse luce fioca.",
      },
      {
        name: 'Arti Allungati',
        description:
          'Quando effettui un attacco in mischia nel tuo turno, la tua portata è superiore di 1,5 metri.',
      },
      {
        name: 'Costituzione Poderosa',
        description:
          'Sei considerato di una taglia più grande per determinare la tua capacità di trasporto.',
      },
      { name: 'Furtivo', description: "Hai competenza nell'abilità Furtività." },
      {
        name: 'Attacco a Sorpresa',
        description:
          "Se colpisci una creatura con un tiro per colpire che ha sorpresa, l'attacco infligge 2d6 danni extra.",
      },
    ],
    subraces: {},
  },
  Cangiante: {
    base: [
      {
        name: 'Mutaforma',
        description:
          'Come azione, puoi cambiare il tuo aspetto fisico, ma non la tua struttura corporea di base.',
      },
      {
        name: 'Istinti Mutevoli',
        description:
          'Ottieni competenza in due abilità a scelta tra Furtività, Inganno, Intuizione e Persuasione.',
      },
    ],
    subraces: [],
  },
  Centauro: {
    base: [
      {
        name: 'Carica',
        description:
          'Se ti muovi di almeno 9 metri in linea retta verso un bersaglio e poi lo colpisci con un attacco con arma da mischia nello stesso turno, puoi immediatamente effettuare un attacco bonus con i tuoi zoccoli.',
      },
      {
        name: 'Zoccoli',
        description:
          'I tuoi zoccoli sono armi naturali da mischia, con cui sei competente. Infliggono 1d6 + mod Forza danni contondenti.',
      },
      {
        name: 'Costituzione Equina',
        description:
          'Sei considerato di una taglia più grande per determinare la tua capacità di trasporto.',
      },
    ],
    subraces: [],
  },
  Dragonide: {
    base: [
      {
        name: 'Discendenza Draconica',
        description:
          'Scegli un tipo di drago. Questo determina il tipo di danno della tua arma a soffio e della tua resistenza.',
      },
      {
        name: 'Arma a Soffio',
        description:
          'Puoi usare la tua azione per esalare energia distruttiva. La CD del TS è 8 + mod Costituzione + bonus competenza.',
      },
      {
        name: 'Resistenza al Danno',
        description: 'Hai resistenza al tipo di danno associato alla tua discendenza draconica.',
      },
    ],
    subraces: [],
  },
  Nano: {
    base: [
      {
        name: 'Scurovisione',
        description:
          'Entro 18 metri, vedi in luce fioca come se fosse luce intensa e in oscurità come se fosse luce fioca.',
      },
      {
        name: 'Resilienza Nanica',
        description: 'Vantaggio ai TS contro veleno e resistenza ai danni da veleno.',
      },
      {
        name: 'Addestramento da Combattimento Nanico',
        description:
          'Competenza con ascia da battaglia, ascia, martello leggero e martello da guerra.',
      },
      {
        name: 'Competenza negli Strumenti',
        description:
          'Competenza in un tipo di strumenti da artigiano a scelta tra: da fabbro, da birraio o da muratore.',
      },
      {
        name: 'Conoscenza della Pietra',
        description:
          'Bonus doppio di competenza alle prove di Intelligenza (Storia) relative a opere in muratura.',
      },
    ],
    subraces: {
      'delle Colline': [
        { name: 'Tenacia Nanica', description: 'Il tuo massimo dei PF aumenta di 1 per livello.' },
      ],
      'delle Montagne': [
        {
          name: 'Addestramento nelle Armature Naniche',
          description: 'Competenza nelle armature leggere e medie.',
        },
      ],
    },
  },
  Elfo: {
    base: [
      {
        name: 'Scurovisione',
        description:
          'Entro 18 metri, vedi in luce fioca come se fosse luce intensa e in oscurità come se fosse luce fioca.',
      },
      { name: 'Sensi Acuti', description: "Hai competenza nell'abilità Percezione." },
      {
        name: 'Retaggio Fatato',
        description: "Vantaggio ai TS contro l'essere affascinato, immune al sonno magico.",
      },
      { name: 'Trance', description: 'Mediti per 4 ore invece di dormire per 8.' },
    ],
    subraces: {
      'Alti Elfi': [
        {
          name: 'Addestramento nelle Armi Elfiche',
          description: 'Competenza con spada lunga, spada corta, arco corto e arco lungo.',
        },
        {
          name: 'Trucchetto',
          description: 'Conosci un trucchetto dalla lista del mago (usa Intelligenza).',
          spells: [{ name: 'Trucchetto da Mago (a scelta)', source: 'Alto Elfo' }],
        },
      ],
      'Elfi dei Boschi': [
        {
          name: 'Addestramento nelle Armi Elfiche',
          description: 'Competenza con spada lunga, spada corta, arco corto e arco lungo.',
        },
        { name: 'Piede Lesto', description: 'La tua velocità base è 10,5 metri.' },
        {
          name: 'Maschera della Selva',
          description: 'Puoi tentare di nasconderti anche se sei solo leggermente oscurato.',
        },
      ],
      Drow: [
        {
          name: 'Scurovisione Superiore',
          description: 'La tua Scurovisione ha un raggio di 36 metri.',
        },
        {
          name: 'Sensibilità alla Luce Solare',
          description:
            'Svantaggio ai tiri di attacco e alle prove di Saggezza (Percezione) basate sulla vista quando tu o il bersaglio siete in luce solare diretta.',
        },
        {
          name: 'Magia Drow',
          description:
            "Conosci il trucchetto 'luci danzanti'. Al 3° livello, puoi lanciare 'luminescenza' una volta al giorno. Al 5°, 'oscurità' una volta al giorno (usa Carisma).",
          spells: [
            { name: 'Luci Danzanti', source: 'Drow' },
            { name: 'Luminescenza', source: 'Drow (Liv 3)' },
            { name: 'Oscurità', source: 'Drow (Liv 5)' },
          ],
        },
      ],
      'Shadar-kai': [
        { name: 'Resistenza Necrotica', description: 'Ottieni resistenza ai danni necrotici.' },
        {
          name: 'Benedizione della Regina Corvo',
          description:
            "Come azione bonus, puoi teletrasportarti fino a 9 metri. Puoi usarlo un numero di volte pari al tuo bonus di competenza per riposo lungo. Dal 3° livello, ottieni resistenza a tutti i danni fino all'inizio del tuo prossimo turno dopo il teletrasporto.",
        },
      ],
      Eladrin: [
        {
          name: 'Passo Fatato',
          description:
            'Come azione bonus, puoi teletrasportarti fino a 9 metri. Puoi usarlo un numero di volte pari al tuo bonus di competenza per riposo lungo.',
        },
        {
          name: 'Effetto Aggiuntivo del Passo Fatato',
          description:
            "A partire dal 3° livello, subito dopo aver usato il Passo Fatato, puoi emanare un effetto basato sulla tua stagione (es. Charme per l'Estate, Paura per l'Inverno).",
        },
      ],
    },
  },
  Firbolg: {
    base: [
      {
        name: 'Magia Firbolg',
        description:
          "Puoi lanciare 'individuazione del magico' e 'camuffare se stesso' una volta ciascuno per riposo breve/lungo.",
        spells: [
          { name: 'Individuazione del Magico', source: 'Firbolg' },
          { name: 'Camuffare Se Stesso', source: 'Firbolg' },
        ],
      },
      {
        name: 'Passo Nascosto',
        description:
          "Come azione bonus, puoi diventare invisibile fino all'inizio del tuo prossimo turno.",
      },
      {
        name: 'Fisico Possente',
        description:
          'Sei considerato di una taglia più grande per determinare la tua capacità di trasporto.',
      },
      {
        name: 'Parlata delle Bestie e delle Foglie',
        description: 'Hai la capacità limitata di comunicare con bestie e piante.',
      },
    ],
    subraces: [],
  },
  Genasi: {
    base: [],
    subraces: {
      "d'Aria": [
        { name: 'Scurovisione', description: 'Puoi vedere al buio entro 18 metri.' },
        { name: 'Senza Respiro', description: 'Puoi trattenere il fiato indefinitamente.' },
        {
          name: 'Mescolarsi al Vento',
          description: "Puoi lanciare l'incantesimo 'levitazione' una volta per riposo lungo.",
          spells: [{ name: 'Levitazione', source: 'Genasi (Aria)' }],
        },
      ],
      'di Terra': [
        { name: 'Scurovisione', description: 'Puoi vedere al buio entro 18 metri.' },
        {
          name: 'Camminata Terrestre',
          description:
            'Puoi muoverti su terreno difficile fatto di terra o roccia senza spendere movimento extra.',
        },
        {
          name: 'Passare senza Tracce',
          description:
            "Puoi lanciare l'incantesimo 'passare senza tracce' una volta per riposo lungo.",
          spells: [{ name: 'Passare senza Tracce', source: 'Genasi (Terra)' }],
        },
      ],
      'del Fuoco': [
        { name: 'Scurovisione', description: 'Raggio di 18 metri.' },
        { name: 'Resistenza al Fuoco', description: 'Hai resistenza ai danni da fuoco.' },
        {
          name: 'Magia del Fuoco',
          description:
            "Conosci il trucchetto 'produrre fiamma'. Al 3° livello, puoi lanciare 'mani brucianti' una volta per riposo lungo.",
          spells: [
            { name: 'Produrre Fiamma', source: 'Genasi (Fuoco)' },
            { name: 'Mani Brucianti', source: 'Genasi (Fuoco) (Liv 3)' },
          ],
        },
      ],
      "d'Acqua": [
        { name: 'Scurovisione', description: 'Puoi vedere al buio entro 18 metri.' },
        { name: "Resistenza all'Acido", description: 'Hai resistenza ai danni da acido.' },
        { name: 'Anfibio', description: 'Puoi respirare aria e acqua.' },
        { name: 'Velocità di Nuoto', description: 'Hai una velocità di nuoto di 9 metri.' },
        {
          name: "Magia dell'Acqua",
          description:
            "Conosci il trucchetto 'creare o distruggere acqua'. Al 3° livello, puoi lanciare 'camminare sull\'acqua'.",
          spells: [
            { name: 'Creare o Distruggere Acqua', source: 'Genasi (Acqua)' },
            { name: "Camminare sull'Acqua", source: 'Genasi (Acqua) (Liv 3)' },
          ],
        },
      ],
    },
  },
  Gith: {
    base: [{ name: 'Scurovisione', description: 'Puoi vedere al buio entro 18 metri.' }],
    subraces: {
      Githyanki: [
        {
          name: 'Conoscenza Decadente',
          description: "Ottieni competenza in un'abilità o strumento a tua scelta.",
        },
        {
          name: 'Psionica Githyanki',
          description:
            "Conosci il trucchetto 'mano magica'. Al 3° livello, 'saltare'. Al 5°, 'passo velato'. (1 volta per riposo lungo, usa Intelligenza).",
          spells: [
            { name: 'Mano Magica', source: 'Githyanki' },
            { name: 'Saltare', source: 'Githyanki (Liv 3)' },
            { name: 'Passo Velato', source: 'Githyanki (Liv 5)' },
          ],
        },
      ],
      Githzerai: [
        {
          name: 'Disciplina Mentale',
          description: "Vantaggio ai TS contro l'essere affascinato o spaventato.",
        },
        {
          name: 'Psionica Githzerai',
          description:
            "Conosci il trucchetto 'mano magica'. Al 3° livello, 'scudo'. Al 5°, 'individuazione dei pensieri'. (1 volta per riposo lungo, usa Saggezza).",
          spells: [
            { name: 'Mano Magica', source: 'Githzerai' },
            { name: 'Scudo', source: 'Githzerai (Liv 3)' },
            { name: 'Individuazione dei Pensieri', source: 'Githzerai (Liv 5)' },
          ],
        },
      ],
    },
  },
  Gnomo: {
    base: [
      {
        name: 'Scurovisione',
        description:
          'Entro 18 metri, vedi in luce fioca come se fosse luce intensa e in oscurità come se fosse luce fioca.',
      },
      {
        name: 'Astuzia Gnomesca',
        description:
          'Vantaggio a tutti i tiri salvezza su Intelligenza, Saggezza e Carisma contro la magia.',
      },
    ],
    subraces: {
      'delle Foreste': [
        {
          name: 'Illusionista Nato',
          description: "Conosci il trucchetto 'illusione minore' (usa Intelligenza).",
          spells: [{ name: 'Illusione Minore', source: 'Gnomo delle Foreste' }],
        },
        {
          name: 'Parlare con le Piccole Bestie',
          description: 'Puoi comunicare idee semplici a bestie di taglia Piccola o inferiore.',
        },
      ],
      'delle Rocce': [
        {
          name: "Conoscenza dell'Artefice",
          description:
            'Bonus doppio di competenza alle prove di Intelligenza (Storia) relative a oggetti magici, alchemici o tecnologici.',
        },
        {
          name: 'Inventore',
          description:
            'Con strumenti da inventore, puoi costruire un piccolo congegno a orologeria.',
        },
      ],
    },
  },
  Goblin: {
    base: [
      {
        name: 'Scurovisione',
        description:
          "Puoi vedere in luce fioca entro 18 metri come se fosse luce intensa, e nell'oscurità come se fosse luce fioca.",
      },
      {
        name: 'Retaggio Fatato',
        description: 'Hai vantaggio ai tiri salvezza per non essere affascinato.',
      },
      {
        name: 'Furia del Piccolo',
        description:
          'Quando danneggi una creatura con un attacco o un incantesimo e la taglia della creatura è più grande della tua, puoi infliggere danni extra pari al tuo bonus di competenza.',
      },
      {
        name: 'Fuga Agile',
        description:
          "Come azione bonus in ogni tuo turno, puoi compiere l'azione di Disimpegno o Nascondersi.",
      },
    ],
    subraces: {},
  },
  Goliath: {
    base: [
      { name: 'Atleta Nato', description: "Hai competenza nell'abilità Atletica." },
      {
        name: 'Tenacia della Pietra',
        description:
          'Puoi usare la tua reazione per ridurre il danno subito di 1d12 + mod Costituzione (1 volta per riposo breve/lungo).',
      },
      {
        name: 'Fisico Possente',
        description:
          'Sei considerato di una taglia più grande per determinare la tua capacità di trasporto.',
      },
      { name: "Abituato all'Altitudine", description: 'Sei acclimatato alle grandi altitudini.' },
    ],
    subraces: [],
  },
  Halfling: {
    base: [
      { name: 'Fortunato', description: 'Quando ottieni 1 a un tiro, puoi ripetere il tiro.' },
      { name: 'Coraggioso', description: "Vantaggio ai tiri salvezza contro l'essere spaventato." },
      {
        name: 'Agilità Halfling',
        description: 'Puoi muoverti attraverso lo spazio di qualsiasi creatura più grande di te.',
      },
    ],
    subraces: {
      Piedelesto: [
        {
          name: 'Furtività Naturale',
          description:
            'Puoi tentare di nasconderti anche se sei oscurato solo da una creatura più grande di te.',
        },
      ],
      Tozzo: [
        {
          name: 'Resilienza dello Tozzo',
          description:
            'Vantaggio ai tiri salvezza contro il veleno e resistenza ai danni da veleno.',
        },
      ],
    },
  },
  Hobgoblin: {
    base: [
      {
        name: 'Scurovisione',
        description:
          "Puoi vedere in luce fioca entro 18 metri come se fosse luce intensa, e nell'oscurità come se fosse luce fioca.",
      },
      {
        name: 'Retaggio Fatato',
        description: 'Hai vantaggio ai tiri salvezza per non essere affascinato.',
      },
      {
        name: 'Dono Fatato',
        description:
          "Come azione bonus, puoi compiere l'azione di Aiuto. Quando usi Aiuto, puoi fornire un beneficio extra (PF temporanei, velocità extra, o svantaggio al prossimo attacco del nemico). Puoi farlo un numero di volte pari al tuo bonus di competenza per riposo lungo.",
      },
    ],
    subraces: {},
  },
  Kenku: {
    base: [
      {
        name: 'Addestramento da Esperto',
        description:
          'Scegli due abilità tra Acrobazia, Furtività, Inganno e Rapidità di Mano. Ottieni competenza in esse.',
      },
      {
        name: 'Mimesi',
        description:
          'Puoi imitare suoni che hai sentito, inclusa la voce di altre persone. Vantaggio alle prove per ingannare gli altri.',
      },
      {
        name: 'Copia da Esperto',
        description:
          'Puoi duplicare la calligrafia o il lavoro artigianale di altre persone con una precisione sorprendente.',
      },
    ],
    subraces: [],
  },
  Koboldo: {
    base: [
      { name: 'Scurovisione', description: 'Raggio di 18 metri.' },
      {
        name: 'Grido Draconico',
        description:
          "Come azione bonus, puoi emettere un grido. Fino all'inizio del tuo prossimo turno, tu e i tuoi alleati avete vantaggio ai tiri per colpire contro i nemici entro 3 metri da te che possono sentirti.",
      },
      {
        name: 'Tattiche di Branco',
        description:
          "Hai vantaggio al tiro di attacco contro una creatura se almeno uno dei tuoi alleati si trova entro 1,5 metri dalla creatura e l'alleato non è inabile.",
      },
    ],
    subraces: [],
  },
  Leonin: {
    base: [
      {
        name: 'Artigli',
        description:
          'I tuoi artigli sono armi naturali che infliggono 1d4 + mod Forza danni taglienti.',
      },
      { name: 'Scurovisione', description: 'Raggio di 18 metri.' },
      {
        name: 'Istinto del Cacciatore',
        description:
          "Hai competenza in un'abilità a scelta tra Atletica, Intimidire, Percezione o Sopravvivenza.",
      },
      {
        name: 'Ruggito Terrificante',
        description:
          'Come azione bonus, puoi emettere un ruggito. Ogni creatura a tua scelta entro 3 metri deve superare un TS su Saggezza (CD 8 + bonus competenza + mod Costituzione) o essere spaventata fino alla fine del tuo prossimo turno.',
      },
    ],
    subraces: [],
  },
  Leporidon: {
    base: [
      {
        name: 'Innesco Leporino',
        description: 'Puoi aggiungere il tuo bonus di competenza al tuo tiro di iniziativa.',
      },
      { name: 'Sensi Leporini', description: "Hai competenza nell'abilità Percezione." },
      {
        name: 'Zampa Fortunata',
        description:
          'Quando fallisci un tiro salvezza di Destrezza, puoi usare la tua reazione per aggiungere 1d4 al tiro, potenzialmente trasformandolo in un successo.',
      },
      {
        name: 'Salto del Coniglio',
        description:
          'Come azione bonus, puoi saltare un numero di metri pari a 1,5 volte il tuo bonus di competenza, senza provocare attacchi di opportunità. Puoi usarlo un numero di volte pari al tuo bonus di competenza per riposo lungo.',
      },
    ],
    subraces: {},
  },
  Lizardfolk: {
    base: [
      {
        name: 'Morso',
        description: "Il tuo morso è un'arma naturale (1d6 perforante) con cui sei competente.",
      },
      {
        name: 'Artigianato Astuto',
        description: 'Puoi raccogliere ossa e pelli da creature morte per creare armi e scudi.',
      },
      { name: 'Trattenere il Fiato', description: 'Puoi trattenere il respiro fino a 15 minuti.' },
      {
        name: 'Istinto del Predatore',
        description:
          'Ottieni competenza in due abilità a scelta tra Addestrare Animali, Furtività, Percezione e Sopravvivenza.',
      },
      { name: 'Armatura Naturale', description: 'La tua CA base è 13 + mod Destrezza.' },
    ],
    subraces: [],
  },
  Mezzelfo: {
    base: [
      {
        name: 'Scurovisione',
        description:
          'Entro 18 metri, vedi in luce fioca come se fosse luce intensa e in oscurità come se fosse luce fioca.',
      },
      {
        name: 'Retaggio Fatato',
        description: "Vantaggio ai TS contro l'essere affascinato, immune al sonno magico.",
      },
      {
        name: 'Versatilità nelle Abilità',
        description: 'Ottieni competenza in due abilità a tua scelta.',
      },
    ],
    subraces: [],
  },
  Mezzorco: {
    base: [
      {
        name: 'Scurovisione',
        description:
          'Entro 18 metri, vedi in luce fioca come se fosse luce intensa e in oscurità come se fosse luce fioca.',
      },
      { name: 'Minaccioso', description: "Ottieni competenza nell'abilità Intimidire." },
      {
        name: 'Tenacia Implacabile',
        description:
          'Quando scendi a 0 PF ma non sei ucciso, puoi scendere a 1 PF invece. (1 volta per riposo lungo).',
      },
      {
        name: 'Attacchi Selvaggi',
        description:
          "Quando ottieni un critico con un'arma da mischia, puoi tirare uno dei dadi di danno dell'arma una volta in più e aggiungerlo al danno extra.",
      },
    ],
    subraces: [],
  },
  Minotauro: {
    base: [
      {
        name: 'Corna',
        description:
          "Le tue corna sono un'arma naturale da mischia, che infligge 1d6 + mod. Forza danni perforanti.",
      },
      {
        name: 'Carica Trafiggente',
        description:
          "Se ti muovi di almeno 3 metri in linea retta, puoi usare un'azione bonus per spingere un bersaglio di taglia Grande o inferiore di 3 metri.",
      },
      {
        name: 'Cornata Martellante',
        description:
          "Subito dopo aver colpito con un attacco in mischia durante un'azione di Scatto, puoi effettuare un attacco bonus con le corna.",
      },
    ],
    subraces: {},
  },
  Orco: {
    base: [
      { name: 'Scurovisione', description: 'Puoi vedere in luce fioca entro 18 metri.' },
      {
        name: 'Aggressivo',
        description:
          'Come azione bonus nel tuo turno, puoi muoverti fino alla tua velocità verso un nemico che puoi vedere o sentire.',
      },
      {
        name: 'Fisico Possente',
        description:
          'Sei considerato di una taglia più grande per determinare la tua capacità di trasporto.',
      },
    ],
    subraces: [],
  },
  Satiro: {
    base: [
      {
        name: 'Ariete',
        description:
          "Puoi usare la tua testa e le corna per fare colpi senz'armi. Se colpisci, infliggi 1d4 + mod Forza danni contondenti.",
      },
      {
        name: 'Resistenza Magica',
        description: 'Hai vantaggio ai tiri salvezza contro incantesimi e altri effetti magici.',
      },
      {
        name: 'Pifferaio Allegro',
        description: 'Hai competenza in Intrattenere e con uno strumento musicale a tua scelta.',
      },
      {
        name: 'Salto Gioioso',
        description: 'Puoi aggiungere 1d8 ai tuoi salti in alto e in lungo.',
      },
    ],
    subraces: [],
  },
  Sirena: {
    base: [
      { name: 'Anfibio', description: 'Puoi respirare aria e acqua.' },
      {
        name: 'Canto Accattivante',
        description:
          "Conosci il trucchetto 'amicizia'. Al 3° livello, puoi lanciare 'charme su persone' una volta per riposo lungo. Carisma è la caratteristica da incantatore.",
        spells: [
          { name: 'Amicizia', source: 'Sirena' },
          { name: 'Charme su Persone', source: 'Sirena (Liv 3)' },
        ],
      },
      {
        name: 'Guardiana del Profondo',
        description: 'Le creature acquatiche hanno una disposizione amichevole nei tuoi confronti.',
      },
    ],
    subraces: {},
  },
  Tabaxi: {
    base: [
      { name: 'Scurovisione', description: 'Puoi vedere in luce fioca entro 18 metri.' },
      {
        name: 'Agilità Felina',
        description:
          'Quando ti muovi nel tuo turno in combattimento, puoi raddoppiare la tua velocità. Una volta fatto, non puoi riutilizzarlo finché non ti muovi di 0 metri in uno dei tuoi turni.',
      },
      {
        name: 'Artigli del Gatto',
        description:
          'I tuoi artigli sono armi naturali (1d4 tagliente) e ti danno una velocità di scalata di 6m.',
      },
      {
        name: 'Istinto Felino',
        description: 'Hai competenza nelle abilità Furtività e Percezione.',
      },
    ],
    subraces: [],
  },
  Tiefling: {
    base: [
      {
        name: 'Scurovisione',
        description:
          'Entro 18 metri, vedi in luce fioca come se fosse luce intensa e in oscurità come se fosse luce fioca.',
      },
      { name: 'Resistenza Infernale', description: 'Hai resistenza ai danni da fuoco.' },
      {
        name: 'Eredità Infernale',
        description:
          "Conosci 'taumaturgia'. Al 3° livello, puoi lanciare 'rimprovero infernale' (2° liv.). Al 5°, 'oscurità'. (1 volta per riposo lungo, usa Carisma).",
        spells: [
          { name: 'Taumaturgia', source: 'Eredità Infernale' },
          { name: 'Rimprovero Infernale', source: 'Eredità Infernale (Liv 3)' },
          { name: 'Oscurità', source: 'Eredità Infernale (Liv 5)' },
        ],
      },
    ],
    subraces: [],
  },
  Tortle: {
    base: [
      { name: 'Artigli', description: 'I tuoi artigli sono armi naturali (1d4 tagliente).' },
      { name: 'Trattenere il Fiato', description: 'Puoi trattenere il respiro per 1 ora.' },
      {
        name: 'Guscio Naturale',
        description:
          'La tua CA base è 17. Non puoi indossare armature. Uno scudo si applica normalmente.',
      },
      {
        name: 'Ritirarsi nel Guscio',
        description:
          'Come azione, puoi ritirarti nel guscio. Ottieni +4 alla CA e vantaggio ai TS su Forza e Costituzione, ma sei prono, la tua velocità è 0 e hai svantaggio ai TS su Destrezza.',
      },
    ],
    subraces: [],
  },
  Tritone: {
    base: [
      { name: 'Anfibio', description: 'Puoi respirare aria e acqua.' },
      {
        name: "Controllo dell'Aria e dell'Acqua",
        description:
          "Conosci il trucchetto 'creare o distruggere acqua'. Al 3° livello, puoi lanciare 'camminare sull'acqua' una volta per riposo lungo. Al 5°, 'muro d'acqua'. (usa Carisma).",
        spells: [
          { name: 'Creare o Distruggere Acqua', source: 'Tritone' },
          { name: "Camminare sull'Acqua", source: 'Tritone (Liv 3)' },
          { name: "Muro d'Acqua", source: 'Tritone (Liv 5)' },
        ],
      },
      {
        name: 'Emissario del Mare',
        description: 'Puoi comunicare idee semplici con bestie che hanno una velocità di nuoto.',
      },
      {
        name: 'Guardiani delle Profondità',
        description: 'Sei abituato alle profondità oceaniche e hai resistenza ai danni da freddo.',
      },
    ],
    subraces: [],
  },
  Umano: {
    base: [
      {
        name: 'Linguaggi',
        description: 'Parli, leggi e scrivi il Comune e un linguaggio extra a tua scelta.',
      },
      {
        name: 'Variante (Opzionale)',
        description:
          "Invece di aumentare tutte le caratteristiche di 1, puoi aumentare due caratteristiche di 1, ottenere competenza in un'abilità e un talento a tua scelta.",
      },
    ],
    subraces: [],
  },
  'Yuan-ti Pureblood': {
    base: [
      { name: 'Scurovisione', description: 'Raggio di 18 metri.' },
      {
        name: 'Immunità al Veleno',
        description: 'Sei immune ai danni da veleno e alla condizione avvelenato.',
      },
      {
        name: 'Resistenza Magica',
        description: 'Hai vantaggio ai tiri salvezza contro incantesimi e altri effetti magici.',
      },
      {
        name: 'Innate Spellcasting',
        description:
          "Conosci il trucchetto 'spruzzo velenoso'. Al 3° livello, puoi lanciare 'suggestione animale' una volta per riposo lungo. (usa Carisma).",
        spells: [
          { name: 'Spruzzo Velenoso', source: 'Yuan-ti' },
          { name: 'Suggestione Animale', source: 'Yuan-ti (Liv 3)' },
        ],
      },
    ],
    subraces: [],
  },
}
