// src/data/dndFeats.js

export const dndFeats = [
  {
    name: 'Allerta',
    prerequisite: 'Nessuno',
    description:
      "Ottieni un bonus di +5 all'iniziativa. Non puoi essere sorpreso finché sei cosciente. Le altre creature non ottengono vantaggio ai tiri per colpire contro di te come risultato dell'essere nascoste.",
  },
  {
    name: 'Atleta',
    prerequisite: 'Nessuno',
    description:
      'Aumenti di 1 la Forza o la Destrezza. Rialzarsi da prono consuma solo 1,5 metri di movimento. Scalare non richiede movimento extra. Puoi compiere un salto in lungo o in alto con rincorsa dopo esserti mosso di soli 1,5 metri.',
  },
  {
    name: 'Attore',
    prerequisite: 'Carisma 13 o superiore',
    description:
      "Aumenti di 1 il Carisma. Hai vantaggio alle prove di Carisma (Inganno) e (Intrattenere) quando cerchi di spacciarti per un'altra persona. Puoi imitare la parlata di un'altra persona o i suoni prodotti da altre creature.",
  },
  {
    name: 'Carica',
    prerequisite: 'Nessuno',
    description:
      "Quando usi l'azione di Scatto, se ti muovi di almeno 3 metri in linea retta, puoi effettuare un attacco in mischia come azione bonus o spingere una creatura fino a 3 metri.",
  },
  {
    name: 'Combattente a Due Armi',
    prerequisite: 'Nessuno',
    description:
      "Ottieni un bonus di +1 alla CA mentre impugni un'arma da mischia diversa in ogni mano. Puoi usare il combattimento con due armi anche quando le armi da mischia a una mano non sono leggere. Puoi sguainare o rinfoderare due armi a una mano quando normalmente potresti farne solo una.",
  },
  {
    name: 'Iniziato alla Magia',
    prerequisite: 'Nessuno',
    description:
      "Scegli una classe: Bardo, Chierico, Druido, Mago, Stregone o Warlock. Impari due trucchetti a tua scelta dalla lista di quella classe. Inoltre, scegli un incantesimo di 1° livello da quella stessa lista. Puoi lanciare quell'incantesimo una volta per riposo lungo. La caratteristica da incantatore per questi incantesimi dipende dalla classe che hai scelto.",
    spells: [
      { name: 'Due Trucchetti (a scelta)', source: 'Talento: Iniziato alla Magia' },
      { name: 'Un Incantesimo di 1° Livello (a scelta)', source: 'Talento: Iniziato alla Magia' },
    ],
  },
  {
    name: 'Fortunato',
    prerequisite: 'Nessuno',
    description:
      "Hai 3 punti fortuna. Ogni volta che effettui un tiro per colpire, una prova di caratteristica o un tiro salvezza, puoi spendere un punto fortuna per tirare un d20 aggiuntivo. Puoi scegliere di usare questo tiro aggiuntivo prima o dopo aver effettuato il tiro, ma prima che gli effetti del tiro vengano applicati. Puoi anche spendere un punto fortuna quando un tiro per colpire viene effettuato contro di te, tirando un d20 e scegliendo quale dei due tiri usare (quello dell'attaccante o il tuo). Recuperi i punti fortuna dopo un riposo lungo.",
  },
  {
    name: 'Guaritore',
    prerequisite: 'Nessuno',
    description:
      'Quando usi un kit di guarigione per stabilizzare una creatura morente, quella creatura recupera anche 1 punto ferita. Come azione, puoi spendere un uso di un kit di guarigione per far recuperare a una creatura 1d6 + 4 punti ferita, più un numero di punti ferita aggiuntivi pari al massimo dei Dadi Vita della creatura. La creatura non può recuperare punti ferita in questo modo di nuovo finché non completa un riposo breve o lungo.',
  },
  {
    name: 'Maestro delle Armi Pesanti',
    prerequisite: "Competenza con almeno un'arma pesante",
    description:
      "Nel tuo turno, quando metti a segno un colpo critico con un'arma da mischia o riduci una creatura a 0 punti ferita, puoi effettuare un attacco con un'arma da mischia come azione bonus. Prima di effettuare un attacco con un'arma pesante in cui sei competente, puoi scegliere di subire una penalità di -5 al tiro per colpire. Se l'attacco colpisce, aggiungi +10 al danno dell'attacco.",
  },
  {
    name: 'Resiliente',
    prerequisite: 'Nessuno',
    description:
      'Aumenti un punteggio di caratteristica a tua scelta di 1. Ottieni competenza nei tiri salvezza che usano la caratteristica scelta.',
  },
  {
    name: 'Tiratore Scelto',
    prerequisite: "Competenza con almeno un'arma a distanza",
    description:
      "Attaccare a lunga gittata non impone svantaggio ai tuoi tiri per colpire con armi a distanza. I tuoi attacchi con armi a distanza ignorano la copertura a metà e a tre quarti. Prima di effettuare un attacco con un'arma a distanza in cui sei competente, puoi scegliere di subire una penalità di -5 al tiro per colpire. Se l'attacco colpisce, aggiungi +10 al danno dell'attacco.",
  },
  {
    name: 'Abile',
    prerequisite: 'Nessuno',
    description: 'Ottieni competenza in una combinazione a tua scelta di tre abilità o strumenti.',
  },
  {
    name: 'Accurato',
    prerequisite: 'Nessuno',
    description:
      'Aumenti di 1 la Destrezza. Quando effettui un attacco con un’arma a distanza, puoi ignorare la penalità per attaccare a lunga distanza.',
  },
  {
    name: 'Armatura Media Master',
    prerequisite: 'Competenza nelle armature medie',
    description:
      'Quando indossi un’armatura media, non subisci penalità alla Destrezza (fino a +3 invece di +2).',
  },
  {
    name: 'Armatura Pesante Master',
    prerequisite: 'Competenza nelle armature pesanti',
    description:
      'Quando indossi un’armatura pesante, la tua velocità non è ridotta. Ottieni resistenza ai danni contundenti causati da cadute.',
  },
  {
    name: 'Attacco a Mani Nude',
    prerequisite: 'Nessuno',
    description:
      'I tuoi attacchi senz’armi infliggono 1d4 danni. Quando colpisci una creatura con un attacco senz’armi, puoi usare un’azione bonus per tentare di afferrare o atterrare la creatura.',
  },
  {
    name: 'Difensore con Scudo',
    prerequisite: 'Competenza negli scudi',
    description:
      'Se una creatura colpisce un bersaglio diverso da te entro 1,5 m, puoi usare la tua reazione per imporre svantaggio al tiro per colpire.',
  },
  {
    name: 'Duro a Morire',
    prerequisite: 'Costituzione 13 o superiore',
    description:
      'Aumenti di 1 la Costituzione. Quando tiri un dado per i punti ferita, considera 2 come risultato minimo.',
  },
  {
    name: 'Esperto di Balestre',
    prerequisite: 'Competenza con balestre',
    description:
      'Ignori la proprietà ricarica delle balestre. Quando effettui un attacco con un’arma a distanza come azione, puoi effettuare un attacco con una balestra a mano come azione bonus.',
  },
  {
    name: 'Esperto di Scudi',
    prerequisite: 'Competenza negli scudi',
    description: 'Puoi usare uno scudo come arma improvvisata (1d4 danni contundenti).',
  },
  {
    name: 'Esperto di Stocco',
    prerequisite: 'Competenza con stocco',
    description:
      'Quando impugni uno stocco, puoi aggiungere il tuo bonus di competenza due volte alle prove di Furtività.',
  },
  {
    name: 'Esperto di Bastone',
    prerequisite: 'Competenza con bastone',
    description: 'Quando impugni un bastone, puoi usarlo come arma versatile (1d8 danni).',
  },
  {
    name: 'Esperto di Frusta',
    prerequisite: 'Competenza con frusta',
    description: 'Quando impugni una frusta, la sua portata aumenta di 1,5 m.',
  },
  {
    name: 'Esperto di Lancia',
    prerequisite: 'Competenza con lancia',
    description: 'Quando impugni una lancia a due mani, infliggi 1d8 danni invece di 1d6.',
  },
  {
    name: 'Esperto di Mazza',
    prerequisite: 'Competenza con mazza',
    description:
      'Quando impugni una mazza, puoi aggiungere il tuo bonus di competenza due volte alle prove di Intimidire.',
  },
  {
    name: 'Esperto di Spada Lunga',
    prerequisite: 'Competenza con spada lunga',
    description: 'Quando impugni una spada lunga a due mani, infliggi 1d10 danni invece di 1d8.',
  },
  {
    name: 'Esperto di Spada Corta',
    prerequisite: 'Competenza con spada corta',
    description:
      'Quando impugni una spada corta, puoi aggiungere il tuo bonus di competenza due volte alle prove di Acrobazia.',
  },
  {
    name: 'Esperto di Trappole',
    prerequisite: 'Nessuno',
    description:
      'Ottieni competenza negli strumenti da ladro. Puoi disinnescare trappole magiche e meccaniche con vantaggio.',
  },
  {
    name: 'Fortificato',
    prerequisite: 'Nessuno',
    description:
      'Ottieni resistenza ai danni da veleno. Hai vantaggio ai tiri salvezza contro malattie e veleni.',
  },
  {
    name: 'Incantatore da Guerra',
    prerequisite: 'Nessuno',
    description:
      'Hai vantaggio ai tiri salvezza per mantenere la concentrazione. Puoi effettuare un attacco di opportunità lanciando un incantesimo.',
  },
  {
    name: 'Iniziato alla Magia Rituale',
    prerequisite: 'Capacità di lanciare incantesimi',
    description:
      'Impari due incantesimi rituali di 1° livello a tua scelta da una lista di classe.',
    spells: [
      { name: 'Due Incantesimi Rituali di 1° Livello (a scelta)', source: 'Talento: Ritualista' },
    ],
  },
  {
    name: 'Ispirazione',
    prerequisite: 'Nessuno',
    description: 'Ottieni ispirazione bardica una volta per riposo lungo.',
  },
  {
    name: 'Maestro delle Armature Leggere',
    prerequisite: 'Competenza nelle armature leggere',
    description: 'Quando indossi un’armatura leggera, la tua velocità aumenta di 1,5 m.',
  },
  {
    name: 'Maestro delle Armature Medie',
    prerequisite: 'Competenza nelle armature medie',
    description: 'Quando indossi un’armatura media, la penalità alla Destrezza è ridotta.',
  },
  {
    name: 'Maestro delle Armature Pesanti',
    prerequisite: 'Competenza nelle armature pesanti',
    description: 'Quando indossi un’armatura pesante, la tua velocità non è ridotta.',
  },
  {
    name: 'Maestro delle Armi da Mischia',
    prerequisite: 'Competenza con armi da mischia',
    description:
      'Quando effettui un attacco con un’arma da mischia, puoi aggiungere il tuo bonus di competenza due volte ai danni.',
  },
  {
    name: 'Maestro delle Armi da Tiro',
    prerequisite: 'Competenza con armi da tiro',
    description:
      'Quando effettui un attacco con un’arma da tiro, puoi aggiungere il tuo bonus di competenza due volte ai danni.',
  },
  {
    name: 'Maestro delle Armi Leggere',
    prerequisite: 'Competenza con armi leggere',
    description:
      'Quando effettui un attacco con un’arma leggera, puoi aggiungere il tuo bonus di competenza due volte ai danni.',
  },
  {
    name: 'Maestro delle Armi Versatili',
    prerequisite: 'Competenza con armi versatili',
    description:
      'Quando impugni un’arma versatile a due mani, infliggi il massimo del dado di danno.',
  },
  {
    name: 'Maestro di Scudo',
    prerequisite: 'Competenza negli scudi',
    description:
      'Se usi l’azione Schivata, ottieni vantaggio ai tiri salvezza su Destrezza contro effetti che ti permettono un TS per dimezzare i danni.',
  },
  {
    name: 'Mobile',
    prerequisite: 'Nessuno',
    description:
      'La tua velocità aumenta di 3 m. Quando effettui un attacco in mischia contro una creatura, non provichi attacchi di opportunità da quella creatura per il resto del turno.',
  },
  {
    name: 'Osservatore',
    prerequisite: 'Nessuno',
    description:
      'Aumenti di 1 la Saggezza o l’Intelligenza. Ottieni +5 alla Percezione passiva e puoi leggere le labbra.',
  },
  {
    name: 'Poliglotta',
    prerequisite: 'Nessuno',
    description: 'Impari tre lingue a tua scelta.',
  },
  {
    name: 'Prodigio',
    prerequisite: 'Umano',
    description: 'Ottieni competenza in una abilità, un linguaggio e un talento a tua scelta.',
  },
  {
    name: 'Ritualista',
    prerequisite: 'Capacità di lanciare incantesimi',
    description:
      'Impari due incantesimi rituali di 1° livello a tua scelta da una lista di classe.',
  },
  {
    name: 'Sentinella',
    prerequisite: 'Nessuno',
    description:
      'Quando colpisci una creatura con un attacco di opportunità, la velocità della creatura diventa 0 per il resto del turno. Le creature provocano attacchi di opportunità anche se usano Disimpegno.',
  },
  {
    name: 'Specialista in Incantesimi',
    prerequisite: 'Capacità di lanciare incantesimi',
    description:
      'Aumenti di 1 la caratteristica da incantatore. Hai vantaggio alle prove per superare la resistenza agli incantesimi.',
  },
  {
    name: 'Tavern Brawler',
    prerequisite: 'Nessuno',
    description:
      'Aumenti di 1 la Forza o la Costituzione. Ottieni competenza nelle armi improvvisate. Puoi tentare di afferrare una creatura come azione bonus dopo averla colpita con un attacco senz’armi o con un’arma improvvisata.',
  },
  {
    name: 'Tenace',
    prerequisite: 'Nessuno',
    description:
      'Ottieni vantaggio ai tiri salvezza contro condizioni che ti causano lo stato prono o paralizzato.',
  },
  {
    name: 'War Caster',
    prerequisite: 'Capacità di lanciare incantesimi',
    description:
      'Hai vantaggio ai tiri salvezza per mantenere la concentrazione. Puoi lanciare incantesimi come reazione agli attacchi di opportunità.',
  },
  {
    name: 'Weapon Master',
    prerequisite: 'Nessuno',
    description:
      'Aumenti di 1 la Forza o la Destrezza. Ottieni competenza in quattro armi a tua scelta.',
  },
]
