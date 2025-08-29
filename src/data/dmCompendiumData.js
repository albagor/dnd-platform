// src/data/dmCompendiumData.js
export const compendiumData = [
  {
    category: 'Azioni in Combattimento',
    rules: [
      {
        name: 'Attaccare',
        description:
          'Effettua un attacco in mischia o a distanza. Alcune capacità ti permettono di effettuare più attacchi con questa azione.',
      },
      {
        name: 'Lanciare un Incantesimo',
        description:
          "Lancia un incantesimo con tempo di lancio di '1 azione'. Non puoi lanciare un altro incantesimo nello stesso turno, eccetto un trucchetto con tempo di lancio di '1 azione'.",
      },
      {
        name: 'Scattare (Dash)',
        description:
          "Guadagni movimento extra per il turno corrente. L'aumento è pari alla tua velocità, dopo l'applicazione di qualsiasi modificatore.",
      },
      {
        name: 'Disimpegnarsi (Disengage)',
        description:
          'Il tuo movimento per il resto del turno non provoca attacchi di opportunità. Puoi muoverti senza timore di essere colpito da chi ti è vicino.',
      },
      {
        name: 'Schivare (Dodge)',
        description:
          "Fino all'inizio del tuo prossimo turno, qualsiasi tiro di attacco contro di te ha svantaggio (se puoi vedere l'attaccante) e fai i tiri salvezza su Destrezza con vantaggio.",
      },
      {
        name: 'Aiutare (Help)',
        description:
          'Fornisci vantaggio a un alleato al suo prossimo tiro per colpire contro una creatura entro 1.5m da te, oppure al suo prossimo tiro di abilità.',
      },
      {
        name: 'Nascondersi (Hide)',
        description:
          "Effettua una prova di Destrezza (Furtività). Se superi la prova di Saggezza (Percezione) di un nemico, ottieni la condizione 'nascosto'.",
      },
      {
        name: 'Preparare (Ready)',
        description:
          "Scegli un'azione e una condizione scatenante. Quando quella condizione si verifica, puoi usare la tua Reazione per eseguire l'azione preparata. Se l'azione è un incantesimo, devi mantenere la concentrazione.",
      },
      {
        name: 'Cercare (Search)',
        description:
          'Dedica la tua azione a trovare qualcosa. Il DM potrebbe richiedere una prova di Saggezza (Percezione) o Intelligenza (Indagare).',
      },
      {
        name: 'Usare un Oggetto',
        description:
          'Interagisci con un secondo oggetto o usi un oggetto che richiede la tua azione (es. applicare veleno, accendere una lanterna, usare un kit da guaritore).',
      },
      {
        name: 'Lottare (Grapple)',
        description:
          "Usa un attacco per afferrare una creatura. Effettua una prova di Forza (Atletica) contrapposta a quella di Forza (Atletica) o Destrezza (Acrobazia) del bersaglio. Se vinci, il bersaglio subisce la condizione 'afferrato' (velocità 0).",
      },
      {
        name: 'Spingere (Shove)',
        description:
          'Usa un attacco per spingere una creatura. Effettua una prova di Forza (Atletica) contrapposta. Se vinci, puoi far cadere il bersaglio prono o spingerlo di 1.5m lontano da te.',
      },
    ],
  },
  {
    category: 'Regole sulla Concentrazione',
    rules: [
      {
        name: 'Mantenere la Concentrazione',
        description:
          "Alcuni incantesimi richiedono di mantenere la concentrazione. Se perdi la concentrazione, l'incantesimo termina.",
      },
      {
        name: 'Cosa la Interrompe',
        description:
          '1. Lanciare un altro incantesimo che richiede concentrazione. 2. Subire danni. 3. Essere Incapacitato o ucciso.',
      },
      {
        name: 'TS per Danni',
        description:
          'Quando subisci danni mentre ti concentri, devi effettuare un tiro salvezza su Costituzione. La CD è 10 o la metà del danno subito (il valore più alto tra i due). Se subisci danni da più fonti (es. attacchi multipli), fai un tiro salvezza per ogni fonte di danno.',
      },
    ],
  },
  {
    category: 'Copertura',
    rules: [
      {
        name: 'Copertura Parziale (+2 CA)',
        description:
          "Un bersaglio ottiene copertura parziale se un ostacolo blocca almeno metà del suo corpo (es. un'altra creatura, un muretto basso).",
      },
      {
        name: 'Copertura a Tre Quarti (+5 CA)',
        description:
          "Un bersaglio ottiene copertura a tre quarti se un ostacolo blocca circa tre quarti del suo corpo (es. una feritoia, un tronco d'albero spesso).",
      },
      {
        name: 'Copertura Totale (Intarghettabile)',
        description:
          'Un bersaglio ha copertura totale se è completamente nascosto da un ostacolo (es. dietro un muro). Non può essere bersagliato direttamente da attacchi o incantesimi.',
      },
    ],
  },
  {
    category: 'Impostare una CD',
    rules: [
      {
        name: 'Molto Facile',
        description: "CD 5. Un'azione che quasi chiunque può compiere senza problemi.",
      },
      {
        name: 'Facile',
        description: 'CD 10. Richiede un minimo di sforzo, ma è alla portata di molti.',
      },
      {
        name: 'Medio',
        description:
          "CD 15. Un'azione che richiede un certo grado di abilità o fortuna. Il successo non è garantito.",
      },
      {
        name: 'Difficile',
        description:
          "CD 20. Un'azione che richiede un alto livello di abilità. Solo i più esperti possono riuscirci con regolarità.",
      },
      {
        name: 'Molto Difficile',
        description: "CD 25. Un'azione al limite delle capacità umane, quasi leggendaria.",
      },
      {
        name: 'Quasi Impossibile',
        description: "CD 30. Un'azione sovrumana, degna di un eroe mitologico.",
      },
    ],
  },
  {
    category: 'Viaggio e Trasporti',
    rules: [
      {
        name: 'Ritmo di Viaggio (Veloce)',
        description: 'Distanza: 6 km/ora, 48 km/giorno. Effetti: -5 alla Percezione passiva.',
      },
      {
        name: 'Ritmo di Viaggio (Normale)',
        description: 'Distanza: 4.5 km/ora, 36 km/giorno. Nessun effetto.',
      },
      {
        name: 'Ritmo di Viaggio (Lento)',
        description: 'Distanza: 3 km/ora, 27 km/giorno. Effetti: È possibile usare la furtività.',
      },
      {
        name: 'Cavallo da Sella',
        description: 'Velocità: 18m. Capacità di carico: 240kg. Distanza giornaliera: 80km.',
      },
      {
        name: 'Pony / Mulo',
        description:
          'Velocità: 12m. Capacità di carico: 112kg / 210kg. Distanza giornaliera: 64km.',
      },
      {
        name: 'Cane da Galoppo',
        description:
          'Velocità: 12m. Capacità di carico: 100kg. Distanza giornaliera: 64km. (Adatto a creature Piccole)',
      },

      {
        name: 'Cammello',
        description:
          'Velocità: 15m. Capacità di carico: 240kg. Distanza giornaliera: 80km (richiede metà acqua).',
      },
      {
        name: 'Elefante',
        description: 'Velocità: 12m. Capacità di carico: 660kg. Distanza giornaliera: 64km.',
      },
      {
        name: 'Carro o Carretto',
        description: 'Velocità: limitata dalla creatura che lo traina. Distanza giornaliera: 36km.',
      },
      { name: 'Nave a Remi', description: 'Velocità: 2.5 km/ora. Distanza giornaliera: 27km.' },
      { name: 'Nave a Vela', description: 'Velocità: 3 km/ora. Distanza giornaliera: 36km.' },
      { name: 'Nave da Guerra', description: 'Velocità: 4 km/ora. Distanza giornaliera: 40km.' },
    ],
  },
  {
    category: 'Condizioni',
    rules: [
      // Ho lasciato questa categoria più sintetica perché è principalmente un riferimento rapido
      {
        name: 'Accecato',
        description:
          'Svantaggio ai tiri di attacco. I tiri di attacco contro la creatura hanno vantaggio.',
      },
      {
        name: 'Affascinato',
        description:
          "Non può attaccare chi l'ha affascinato. Chi l'ha affascinato ha vantaggio alle prove sociali contro la creatura.",
      },
      {
        name: 'Assordato',
        description:
          "Non può sentire e fallisce automaticamente qualsiasi prova di abilità che richieda l'udito.",
      },
      { name: 'Avvelenato', description: 'Svantaggio ai tiri di attacco e alle prove di abilità.' },
      { name: 'Incapacitato', description: 'Non può compiere azioni o reazioni.' },
      {
        name: 'Invisibile',
        description:
          'I tiri di attacco contro la creatura hanno svantaggio, e i tiri di attacco della creatura hanno vantaggio.',
      },
      {
        name: 'Paralizzato',
        description:
          'Incapacitato. Fallisce TS su For e Des. Gli attacchi contro hanno vantaggio. I colpi da 1.5m sono critici.',
      },
      {
        name: 'Prono',
        description:
          "Svantaggio ai tiri di attacco. Gli attacchi contro hanno vantaggio se l'attaccante è entro 1.5m, altrimenti svantaggio.",
      },
      {
        name: 'Spaventato',
        description:
          'Svantaggio a tiri di abilità e attacco finché vede la fonte. Non può avvicinarsi alla fonte.',
      },
      {
        name: 'Stordito',
        description: 'Incapacitato. Fallisce TS su For e Des. Gli attacchi contro hanno vantaggio.',
      },
      {
        name: 'Trattenuto',
        description:
          'Velocità 0. Svantaggio ai tiri di attacco e ai TS su Des. Gli attacchi contro hanno vantaggio.',
      },
      {
        name: 'Privo di sensi',
        description:
          'Incapacitato, cade prono. Fallisce TS su For e Des. Attacchi contro hanno vantaggio. I colpi da 1.5m sono critici.',
      },
    ],
  },
  {
    category: 'Luce e Visione',
    rules: [
      {
        name: 'Luce Intensa',
        description: 'Area normalmente illuminata. Le creature possono vedere chiaramente.',
      },
      {
        name: 'Luce Fioca',
        description:
          'Area in penombra. Le creature hanno svantaggio alle prove di Saggezza (Percezione) che si basano sulla vista.',
      },
      {
        name: 'Oscurità',
        description:
          "Crea un'area pesantemente oscurata. Le creature con scurovisione non possono vedere al suo interno e le creature senza scurovisione sono considerate accecate.",
      },
      {
        name: 'Scurovisione',
        description:
          "Una creatura con scurovisione può vedere in luce fioca entro un raggio specificato come se fosse luce intensa, e nell'oscurità come se fosse luce fioca. Non può discernere i colori nell'oscurità.",
      },
      {
        name: 'Torcia',
        description: 'Emana luce intensa in un raggio di 6m e luce fioca per altri 6m. Dura 1 ora.',
      },
      {
        name: 'Lanterna Schermabile',
        description:
          "Emana luce intensa in un raggio di 9m e luce fioca per altri 9m. Dura 6 ore con un'ampolla d'olio.",
      },
    ],
  },
  {
    category: 'Statistiche Oggetti',
    rules: [
      {
        name: 'Classe Armatura Oggetti',
        description:
          'Stoffa: 11, Carta: 11, Corda: 11, Cristallo/Ghiaccio/Vetro: 13, Legno/Osso: 15, Pietra: 17, Ferro/Acciaio: 19, Mithral: 21, Adamantio: 23.',
      },
      {
        name: 'Punti Ferita Oggetti',
        description:
          'Minuscolo (serratura): 1d4, Piccolo (scudo): 1d6, Medio (barile): 4d8, Grande (carro): 5d10. Resiliente (oggetto magico): +2d10.',
      },
    ],
  },
]
