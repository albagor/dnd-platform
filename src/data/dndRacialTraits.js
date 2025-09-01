// src/data/dndRacialTraits.js

export const dndRacialTraits = {
  Aarakocra: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Destrezza aumenta di 2 e la tua Saggezza aumenta di 1.',
      },
      {
        name: 'Volo',
        description:
          "Hai una velocità di volo di 15 metri. Non puoi volare se indossi un'armatura media o pesante.",
      },
      {
        name: 'Talons',
        description:
          "I tuoi artigli sono armi naturali che puoi usare per i colpi senz'armi. Se colpisci, infliggi 1d4 danni taglienti.",
      },
    ],
    subraces: {},
  },
  Aasimar: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'Il tuo Carisma aumenta di 2.',
      },
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
      },
    ],
    subraces: {
      Protettore: [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Saggezza aumenta di 1.',
        },
        {
          name: 'Sudario Radiante',
          description:
            "Al 3° livello, puoi usare la tua azione per scatenare un'energia divina. Per 1 minuto, emetti luce e ottieni una velocità di volo di 9m. Una volta per turno, puoi infliggere danni radianti extra pari al tuo livello.",
        },
      ],
      Flagello: [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Costituzione aumenta di 1.',
        },
        {
          name: 'Sudario Radiante',
          description:
            "Al 3° livello, puoi usare la tua azione per scatenare un'energia divina. Emetti luce e, alla fine di ogni tuo turno, tu e le creature vicine subite danni radianti pari a metà del tuo livello.",
        },
      ],
      Caduto: [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Forza aumenta di 1.',
        },
        {
          name: 'Sudario Necrotico',
          description:
            "Al 3° livello, puoi usare la tua azione per scatenare un'energia divina. Le creature vicine devono superare un TS su Carisma o essere spaventate. Una volta per turno, puoi infliggere danni necrotici extra pari al tuo livello.",
        },
      ],
    },
  },
  Cangiante: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'Il tuo Carisma aumenta di 2, e un altro punteggio a tua scelta aumenta di 1.',
      },
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
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Forza aumenta di 2 e la tua Saggezza aumenta di 1.',
      },
      { name: 'Fey', description: 'Il tuo tipo di creatura è fatato, invece che umanoide.' },
      {
        name: 'Carica',
        description:
          'Se ti muovi di almeno 9 metri in linea retta verso un bersaglio e poi lo colpisci con un attacco con arma da mischia nello stesso turno, puoi immediatamente effettuare un attacco bonus con i tuoi zoccoli.',
      },
      {
        name: 'Zoccoli',
        description:
          'I tuoi zoccoli sono armi naturali da mischia, con cui sei competente. Infliggono 1d4 + mod Forza danni contondenti.',
      },
      {
        name: 'Equino',
        description:
          'Sei considerato di una taglia più grande per determinare la tua capacità di trasporto. Inoltre, scalare è difficile per te.',
      },
    ],
    subraces: [],
  },
  Draconide: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Forza aumenta di 2 e il tuo Carisma aumenta di 1.',
      },
      {
        name: 'Discendenza Draconica',
        description:
          'Scegli un tipo di drago. Questo determina il tipo di danno e la forma della tua arma a soffio, e la tua resistenza al danno.',
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
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Costituzione aumenta di 2.',
      },
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
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Saggezza aumenta di 1.',
        },
        { name: 'Tenacia Nanica', description: 'Il tuo massimo dei PF aumenta di 1 per livello.' },
      ],
      'delle Montagne': [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Forza aumenta di 2.',
        },
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
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Destrezza aumenta di 2.',
      },
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
      'dei Boschi': [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Saggezza aumenta di 1.',
        },
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
      Alto: [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Intelligenza aumenta di 1.',
        },
        {
          name: 'Addestramento nelle Armi Elfiche',
          description: 'Competenza con spada lunga, spada corta, arco corto e arco lungo.',
        },
        {
          name: 'Trucchetto',
          description: 'Conosci un trucchetto dalla lista del mago (usa Intelligenza).',
        },
      ],
      'Drow (Oscuro)': [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'Il tuo Carisma aumenta di 1.',
        },
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
            "Conosci il trucchetto 'luci danzanti'. Al 3° livello, puoi lanciare 'luminescenza' una volta al giorno. Al 5° livello, 'oscurità' una volta al giorno (usa Carisma).",
        },
      ],
      'Shadar-kai': [
        {
          name: 'Resistenza Necrotica',
          description: 'Ottieni resistenza ai danni necrotici.',
        },
        {
          name: 'Benedizione della Regina Corvo',
          description:
            'Come azione bonus, puoi teletrasportarti magicamente fino a 9 metri in un punto libero che puoi vedere. Puoi usare questo tratto un numero di volte pari al tuo bonus di competenza, e recuperi tutti gli usi dopo un riposo lungo. A partire dal 3° livello, ottieni anche resistenza a tutti i danni per un turno dopo aver usato questo teletrasporto.',
        },
      ],
      Eladrin: [
        {
          name: 'Passo Fatato',
          description:
            'Come azione bonus, puoi teletrasportarti magicamente fino a 9 metri in un punto libero che puoi vedere. Puoi usare questo tratto un numero di volte pari al tuo bonus di competenza, e recuperi tutti gli usi dopo un riposo lungo.',
        },
        {
          name: 'Effetto Aggiuntivo del Passo Fatato',
          description:
            "A partire dal 3° livello, subito dopo aver usato il Passo Fatato, puoi forzare le creature entro 1,5 metri da te a effettuare un tiro salvezza basato sulla tua caratteristica da incantatore. L'effetto dipende dalla tua stagione (es. Charme per l'Estate, Paura per l'Inverno).",
        },
      ],
    },
  },
  Firbolg: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Saggezza aumenta di 2 e la tua Forza aumenta di 1.',
      },
      {
        name: 'Magia Firbolg',
        description:
          "Puoi lanciare 'individuazione del magico' e 'camuffare se stesso' una volta ciascuno per riposo breve/lungo.",
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
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Costituzione aumenta di 2.',
      },
    ],
    subraces: {
      "dell'Aria": [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Destrezza aumenta di 1.',
        },
        {
          name: 'Senza Respiro',
          description: 'Puoi trattenere il fiato indefinitamente finché non sei inabile.',
        },
        {
          name: 'Mescolarsi al Vento',
          description:
            "Puoi lanciare l'incantesimo 'levitazione' una volta per riposo lungo (usa Costituzione).",
        },
      ],
      'della Terra': [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Forza aumenta di 1.',
        },
        {
          name: 'Camminata Terrestre',
          description:
            'Puoi muoverti su terreno difficile fatto di terra o roccia senza spendere movimento extra.',
        },
        {
          name: 'Passare senza Tracce',
          description:
            "Puoi lanciare l'incantesimo 'passare senza tracce' una volta per riposo lungo (usa Costituzione).",
        },
      ],
      'del Fuoco': [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Intelligenza aumenta di 1.',
        },
        { name: 'Scurovisione', description: 'Raggio di 18 metri.' },
        { name: 'Resistenza al Fuoco', description: 'Hai resistenza ai danni da fuoco.' },
        {
          name: 'Raggiungere le Fiamme',
          description:
            "Conosci il trucchetto 'produrre fiamma'. Al 3° livello, puoi lanciare 'mani brucianti' una volta per riposo lungo (usa Costituzione).",
        },
      ],
      "dell'Acqua": [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Saggezza aumenta di 1.',
        },
        { name: "Resistenza all'Acido", description: 'Hai resistenza ai danni da acido.' },
        { name: 'Anfibio', description: 'Puoi respirare aria e acqua.' },
        { name: 'Velocità di Nuoto', description: 'Hai una velocità di nuoto di 9 metri.' },
        {
          name: "Richiamare l'Onda",
          description:
            "Conosci il trucchetto 'creare o distruggere acqua'. Al 3° livello, puoi lanciare 'creare o distruggere acqua' come incantesimo di 2° livello una volta per riposo lungo (usa Costituzione).",
        },
      ],
    },
  },
  Gith: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Intelligenza aumenta di 1.',
      },
    ],
    subraces: {
      Githyanki: [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Forza aumenta di 2.',
        },
        {
          name: 'Conoscenza Decadente',
          description: "Ottieni competenza in un'abilità o strumento a tua scelta.",
        },
        {
          name: 'Psionica Githyanki',
          description:
            "Conosci il trucchetto 'mano magica'. Al 3° livello, 'saltare'. Al 5°, 'passo velato'. (1 volta per riposo lungo, usa Intelligenza).",
        },
      ],
      Githzerai: [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Saggezza aumenta di 2.',
        },
        {
          name: 'Disciplina Mentale',
          description: "Vantaggio ai TS contro l'essere affascinato o spaventato.",
        },
        {
          name: 'Psionica Githzerai',
          description:
            "Conosci il trucchetto 'mano magica'. Al 3° livello, 'scudo'. Al 5°, 'individuazione dei pensieri'. (1 volta per riposo lungo, usa Saggezza).",
        },
      ],
    },
  },
  // Incolla questo codice subito dopo il codice della Parte 1, nello stesso file.
  Gnomo: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Intelligenza aumenta di 2.',
      },
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
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Destrezza aumenta di 1.',
        },
        {
          name: 'Illusionista Nato',
          description: "Conosci il trucchetto 'illusione minore' (usa Intelligenza).",
        },
        {
          name: 'Parlare con le Piccole Bestie',
          description: 'Puoi comunicare idee semplici a bestie di taglia Piccola o inferiore.',
        },
      ],
      'delle Rocce': [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Costituzione aumenta di 1.',
        },
        {
          name: "Conoscenza dell'Artefice",
          description:
            'Bonus doppio di competenza alle prove di Intelligenza (Storia) relative a oggetti magici, alchemici o tecnologici.',
        },
        {
          name: 'Inventore',
          description:
            'Con strumenti da inventore, puoi costruire un congegno a orologeria (Accendino, Carillon, Giocattolo a molla).',
        },
      ],
    },
  },
  Goliath: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Forza aumenta di 2 e la tua Costituzione aumenta di 1.',
      },
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
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Destrezza aumenta di 2.',
      },
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
          name: 'Incremento Punteggio di Caratteristica',
          description: 'Il tuo Carisma aumenta di 1.',
        },
        {
          name: 'Furtività Naturale',
          description:
            'Puoi tentare di nasconderti anche se sei oscurato solo da una creatura più grande di te.',
        },
      ],
      Tozzo: [
        {
          name: 'Incremento Punteggio di Caratteristica',
          description: 'La tua Costituzione aumenta di 1.',
        },
        {
          name: 'Resilienza dello Tozzo',
          description:
            'Vantaggio ai tiri salvezza contro il veleno e resistenza ai danni da veleno.',
        },
      ],
    },
  },
  Mezzelfo: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description:
          'Il tuo Carisma aumenta di 2, e altri due punteggi a tua scelta aumentano di 1.',
      },
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
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Forza aumenta di 2 e la tua Costituzione aumenta di 1.',
      },
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
          "Quando ottieni un critico con un'arma da mischia, puoi tirare uno dei dadi di danno dell'arma una volta in più.",
      },
    ],
    subraces: [],
  },
  'Infernale (Tiefling)': {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Intelligenza aumenta di 1 e il tuo Carisma aumenta di 2.',
      },
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
      },
    ],
    subraces: [],
  },
  Kenku: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Destrezza aumenta di 2 e la tua Saggezza aumenta di 1.',
      },
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
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Destrezza aumenta di 2 e la tua Forza diminuisce di 2.',
      },
      { name: 'Scurovisione', description: 'Raggio di 18 metri.' },
      {
        name: 'Sottomissione',
        description:
          'Come azione, puoi strisciare pateticamente per distrarre i nemici. Fino al tuo prossimo turno, i tiri di attacco dei tuoi alleati contro nemici entro 3 metri da te hanno vantaggio.',
      },
      {
        name: 'Tattiche di Branco',
        description:
          "Hai vantaggio al tiro di attacco contro una creatura se almeno uno dei tuoi alleati si trova entro 1,5 metri dalla creatura e l'alleato non è inabile.",
      },
      {
        name: 'Sensibilità alla Luce Solare',
        description:
          'Svantaggio ai tiri di attacco e alle prove di Saggezza (Percezione) basate sulla vista quando tu o il bersaglio siete in luce solare diretta.',
      },
    ],
    subraces: [],
  },
  Leonin: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Costituzione aumenta di 2 e la tua Forza aumenta di 1.',
      },
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
  // Incolla questo codice subito dopo il codice della Parte 2, nello stesso file.
  Lizardfolk: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Costituzione aumenta di 2 e la tua Saggezza aumenta di 1.',
      },
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
  Orco: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description:
          'La tua Forza aumenta di 2, la tua Costituzione aumenta di 1 e la tua Intelligenza diminuisce di 2.',
      },
      { name: 'Scurovisione', description: 'Raggio di 18 metri.' },
      {
        name: 'Aggressivo',
        description:
          'Come azione bonus, puoi muoverti fino alla tua velocità verso un nemico che puoi vedere o sentire. Devi terminare il tuo movimento più vicino al nemico di dove hai iniziato.',
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
        name: 'Incremento Punteggi di Caratteristica',
        description: 'Il tuo Carisma aumenta di 2 e la tua Destrezza aumenta di 1.',
      },
      { name: 'Fey', description: 'Il tuo tipo di creatura è fatato, invece che umanoide.' },
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
        name: 'Rivelazioni e Baldoria',
        description: 'Sei immune agli effetti che ti spaventano o ti affascinano.',
      },
    ],
    subraces: [],
  },
  Tabaxi: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Destrezza aumenta di 2 e il tuo Carisma aumenta di 1.',
      },
      { name: 'Scurovisione', description: 'Raggio di 18 metri.' },
      {
        name: 'Agilità Felina',
        description:
          'Puoi raddoppiare la tua velocità di movimento per un turno. Dopo, non puoi riutilizzarlo finché non ti muovi di 0 metri in un tuo turno.',
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
  Tortle: {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Forza aumenta di 2 e la tua Saggezza aumenta di 1.',
      },
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
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'La tua Forza, Costituzione e Carisma aumentano di 1.',
      },
      { name: 'Anfibio', description: 'Puoi respirare aria e acqua.' },
      {
        name: "Controllo dell'Aria e dell'Acqua",
        description:
          "Conosci il trucchetto 'creare o distruggere acqua'. Al 3° livello, puoi lanciare 'camminare sull'acqua' una volta per riposo lungo. Al 5°, 'muro d'acqua'. (usa Carisma).",
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
        name: 'Incremento Punteggi di Caratteristica',
        description: 'Tutti i tuoi punteggi di caratteristica aumentano di 1.',
      },
      {
        name: 'Linguaggi',
        description: 'Parli, leggi e scrivi il Comune e un linguaggio extra a tua scelta.',
      },
    ],
    subraces: [],
  },
  'Yuan-ti Pureblood': {
    base: [
      {
        name: 'Incremento Punteggi di Caratteristica',
        description: 'Il tuo Carisma aumenta di 2 e la tua Intelligenza aumenta di 1.',
      },
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
      },
    ],
    subraces: [],
  },
}
