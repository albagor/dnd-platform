export const dndSubclasses = {
  Artefice: {
    choiceLevel: 3,
    options: {
      Alchimista: {
        3: [
          {
            name: 'Incantesimi da Alchimista',
            description:
              "Hai sempre preparati gli incantesimi 'parola guaritrice' e 'raggio di infermità'.",
            spells: [
              { name: 'Parola Guaritrice', source: 'Alchimista' },
              { name: 'Raggio di Infermità', source: 'Alchimista' },
            ],
          },
          {
            name: 'Omeopata Sperimentale',
            description:
              "Crei un 'elisir sperimentale' con effetti casuali durante ogni riposo lungo.",
          },
          {
            name: 'Competenza negli Strumenti',
            description: 'Ottieni competenza con gli strumenti da alchimista.',
          },
        ],
        5: [
          {
            name: 'Sapiente Alchemico',
            description:
              'Aggiungi il tuo mod di Intelligenza a un tiro di dado quando ripristini PF o infliggi danni da acido, necrotici, veleno o fuoco con un incantesimo da artefice.',
          },
          {
            name: 'Incantesimi da Alchimista (Liv 5)',
            description: "Hai sempre preparati 'raggio rovente' e 'invisibilità'.",
            spells: [
              { name: 'Raggio Rovente', source: 'Alchimista' },
              { name: 'Invisibilità', source: 'Alchimista' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi da Alchimista (Liv 9)',
            description: "Hai sempre preparati 'velocità' e 'nube maleodorante'.",
            spells: [
              { name: 'Velocità', source: 'Alchimista' },
              { name: 'Nube Maleodorante', source: 'Alchimista' },
            ],
          },
        ],
        13: [
          {
            name: 'Incantesimi da Alchimista (Liv 13)',
            description: "Hai sempre preparati 'morte apparente' e 'pelle di pietra'.",
            spells: [
              { name: 'Morte Apparente', source: 'Alchimista' },
              { name: 'Pelle di Pietra', source: 'Alchimista' },
            ],
          },
        ],
        17: [
          {
            name: 'Incantesimi da Alchimista (Liv 17)',
            description: "Hai sempre preparati 'nube mortale' e 'rianimare morti'.",
            spells: [
              { name: 'Nube Mortale', source: 'Alchimista' },
              { name: 'Rianimare Morti', source: 'Alchimista' },
            ],
          },
        ],
      },
      Artigliere: {
        3: [
          {
            name: 'Competenza negli Strumenti',
            description: 'Ottieni competenza con gli strumenti da intagliatore e da falegname.',
          },
          {
            name: "Incantesimi dell'Artigliere",
            description: "Ottieni incantesimi bonus come 'scudo' e 'onda tonante'.",
            spells: [
              { name: 'Scudo', source: 'Artigliere' },
              { name: 'Onda Tonante', source: 'Artigliere' },
            ],
          },
          {
            name: 'Cannone Eldritch',
            description:
              'Come azione, puoi creare un cannone magico che ti aiuta in battaglia (Lanciafiamme, Balista di Forza, Protettore).',
          },
        ],
        5: [
          {
            name: 'Focolaio Arcano',
            description:
              'Puoi incanalare i tuoi incantesimi attraverso il cannone e aggiungi 1d8 al tiro per i danni di un incantesimo da artefice.',
          },
          {
            name: "Incantesimi dell'Artigliere (Liv 5)",
            description: "Hai sempre preparati 'frantumare' e 'raggio rovente'.",
            spells: [
              { name: 'Frantumare', source: 'Artigliere' },
              { name: 'Raggio Rovente', source: 'Artigliere' },
            ],
          },
        ],
        9: [
          {
            name: "Incantesimi dell'Artigliere (Liv 9)",
            description: "Hai sempre preparati 'palla di fuoco' e 'muro di vento'.",
            spells: [
              { name: 'Palla di Fuoco', source: 'Artigliere' },
              { name: 'Muro di Vento', source: 'Artigliere' },
            ],
          },
        ],
        13: [
          {
            name: "Incantesimi dell'Artigliere (Liv 13)",
            description: "Hai sempre preparati 'scudo di fuoco' e 'muro di fuoco'.",
            spells: [
              { name: 'Scudo di Fuoco', source: 'Artigliere' },
              { name: 'Muro di Fuoco', source: 'Artigliere' },
            ],
          },
        ],
        17: [
          {
            name: "Incantesimi dell'Artigliere (Liv 17)",
            description: "Hai sempre preparati 'cono di freddo' e 'muro di forza'.",
            spells: [
              { name: 'Cono di Freddo', source: 'Artigliere' },
              { name: 'Muro di Forza', source: 'Artigliere' },
            ],
          },
        ],
      },
      'Fabbro da Battaglia': {
        3: [
          {
            name: 'Competenza negli Strumenti',
            description: 'Ottieni competenza con gli strumenti da fabbro.',
          },
          {
            name: 'Incantesimi del Fabbro da Battaglia',
            description: "Ottieni incantesimi bonus come 'eroismo' e 'punizione marchiante'.",
            spells: [
              { name: 'Eroismo', source: 'Fabbro da Battaglia' },
              { name: 'Punizione Marchiante', source: 'Fabbro da Battaglia' },
            ],
          },
          {
            name: 'Pronto alla Battaglia',
            description:
              "Quando attacchi con un'arma magica, puoi usare il tuo modificatore di Intelligenza invece di Forza o Destrezza.",
          },
          {
            name: "Difensore d'Acciaio",
            description: 'Costruisci un compagno canino robotico che combatte al tuo fianco.',
          },
        ],
        5: [
          { name: 'Attacco Extra', description: 'Puoi attaccare due volte invece di una.' },
          {
            name: 'Incantesimi del Fabbro da Battaglia (Liv 5)',
            description: "Hai sempre preparati 'arma magica' e 'vincolo protettivo'.",
            spells: [
              { name: 'Arma Magica', source: 'Fabbro da Battaglia' },
              { name: 'Vincolo Protettivo', source: 'Fabbro da Battaglia' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi del Fabbro da Battaglia (Liv 9)',
            description: "Hai sempre preparati 'aura di vitalità' e 'cerchio magico'.",
            spells: [
              { name: 'Aura di Vitalità', source: 'Fabbro da Battaglia' },
              { name: 'Cerchio Magico', source: 'Fabbro da Battaglia' },
            ],
          },
        ],
        13: [
          {
            name: 'Incantesimi del Fabbro da Battaglia (Liv 13)',
            description: "Hai sempre preparati 'pelle di pietra' e 'scudo di fuoco'.",
            spells: [
              { name: 'Pelle di Pietra', source: 'Fabbro da Battaglia' },
              { name: 'Scudo di Fuoco', source: 'Fabbro da Battaglia' },
            ],
          },
        ],
        17: [
          {
            name: 'Incantesimi del Fabbro da Battaglia (Liv 17)',
            description: "Hai sempre preparati 'punizione bandente' e 'rianimare morti'.",
            spells: [
              { name: 'Punizione Bandente', source: 'Fabbro da Battaglia' },
              { name: 'Rianimare Morti', source: 'Fabbro da Battaglia' },
            ],
          },
        ],
      },
      Armaiolo: {
        3: [
          {
            name: 'Competenza negli Strumenti',
            description: 'Ottieni competenza negli strumenti da fabbro e nelle armature pesanti.',
          },
          {
            name: 'Incantesimi da Armaiolo (Liv 3)',
            description:
              "Hai sempre preparati gli incantesimi 'Dardo Incantato' e 'Onda di Tuono'.",
            spells: [
              { name: 'Dardo Incantato', source: 'Armaiolo' },
              { name: 'Onda Tonante', source: 'Armaiolo' },
            ],
          },
          {
            name: 'Armatura Arcana',
            description:
              "Puoi trasformare un'armatura pesante in un'Armatura Arcana con due modelli (Guardiano e Infiltrato).",
          },
          {
            name: 'Modello Guardiano',
            description:
              'Ottieni Guanti Tonanti (attacco in mischia) e un Campo Difensivo (PF temporanei).',
          },
          {
            name: 'Modello Infiltrato',
            description:
              'Ottieni un Lanciatore Fulminante (attacco a distanza), velocità aumentata e vantaggio a Furtività.',
          },
        ],
        5: [
          {
            name: 'Attacco Extra',
            description:
              "Puoi attaccare due volte, anziché una, quando effettui l'azione di Attacco nel tuo turno.",
          },
          {
            name: 'Incantesimi da Armaiolo (Liv 5)',
            description:
              "Hai sempre preparati gli incantesimi 'Immagine Speculare' e 'Frantumare'.",
            spells: [
              { name: 'Immagine Speculare', source: 'Armaiolo' },
              { name: 'Frantumare', source: 'Armaiolo' },
            ],
          },
        ],
        9: [
          {
            name: "Modifiche all'Armatura",
            description:
              'Puoi infondere separatamente i pezzi della tua Armatura Arcana. Ottieni due infusioni extra.',
          },
          {
            name: 'Incantesimi da Armaiolo (Liv 9)',
            description: "Hai sempre preparati gli incantesimi 'Muro di Vento' e 'Velocità'.",
            spells: [
              { name: 'Fulmine', source: 'Armaiolo' },
              { name: 'Trama Ipnotica', source: 'Armaiolo' },
            ], // Corretti come da manuale
          },
        ],
        13: [
          {
            name: 'Incantesimi da Armaiolo (Liv 13)',
            description:
              "Hai sempre preparati gli incantesimi 'Scudo di Fuoco' e 'Invisibilità Superiore'.",
            spells: [
              { name: 'Scudo di Fuoco', source: 'Armaiolo' },
              { name: 'Invisibilità Superiore', source: 'Armaiolo' },
            ],
          },
        ],
        15: [
          {
            name: 'Armatura Perfezionata',
            description: 'I modelli della tua Armatura Arcana vengono potenziati.',
          },
        ],
        17: [
          {
            name: 'Incantesimi da Armaiolo (Liv 17)',
            description: "Hai sempre preparati gli incantesimi 'Passapareti' e 'Muro di Forza'.",
            spells: [
              { name: 'Passapareti', source: 'Armaiolo' },
              { name: 'Muro di Forza', source: 'Armaiolo' },
            ],
          },
        ],
      },
    },
  },
  Barbaro: {
    choiceLevel: 3,
    options: {
      'Cammino del Berserker': {
        3: [
          {
            name: 'Frenesia',
            description:
              "In ira, puoi entrare in frenesia per effettuare un attacco extra come azione bonus. Al termine dell'ira, subisci un livello di sfinimento.",
          },
        ],
      },
      'Cammino del Combattente Totemico': {
        3: [
          {
            name: 'Cercatore di Totem',
            description:
              "Ottieni gli incantesimi 'parlare con gli animali' e 'senso animale' come rituali.",
          },
          {
            name: 'Spirito Totemico',
            description:
              'Scegli uno spirito totem (Orso, Aquila, Lupo) che ti conferisce benefici mentre sei in ira.',
          },
        ],
      },
      'Cammino della Magia Selvaggia': {
        3: [
          {
            name: 'Percezione della Magia',
            description: 'Come azione, puoi percepire la presenza di incantesimi e oggetti magici.',
          },
          {
            name: 'Ondata di Magia Selvaggia',
            description:
              'Quando entri in ira, tiri sulla tabella della Magia Selvaggia per un effetto magico casuale.',
          },
        ],
      },
      'Cammino della Via Guerriera Ancestrale': {
        3: [
          {
            name: 'Protettori Ancestrali',
            description:
              "Mentre sei in ira, il primo nemico che colpisci ha svantaggio ad attaccare chiunque altro tranne te, e i tuoi alleati ottengono resistenza ai danni di quell'attacco.",
          },
        ],
      },
      'Cammino dello Zelota': {
        3: [
          {
            name: 'Furia Divina',
            description:
              'Mentre sei in ira, il primo nemico che colpisci in ogni tuo turno subisce 1d6 + metà del tuo livello da barbaro danni radianti o necrotici extra.',
          },
          {
            name: 'Guerriero degli Dei',
            description:
              'Se un incantesimo per riportarti in vita viene lanciato su di te, non sono necessari componenti materiali.',
          },
        ],
      },
    },
  },
  Bardo: {
    choiceLevel: 3,
    options: {
      'Collegio della Creazione': {
        3: [
          {
            name: 'Nota della Creazione',
            description:
              "Quando dai a qualcuno un'Ispirazione Bardica, crei una nota danzante che può essere usata per vari effetti.",
          },
          {
            name: 'Oggetto di Scena',
            description:
              'Come azione, puoi creare un oggetto non magico che dura per un certo numero di ore.',
          },
        ],
      },
      "Collegio dell'Eloquenza": {
        3: [
          {
            name: 'Lingua Argentea',
            description:
              'Quando fai una prova di Persuasione o Inganno, qualsiasi tiro di 9 o inferiore sul d20 viene considerato un 10.',
          },
          {
            name: 'Discorso Inquietante',
            description:
              "Come azione bonus, spendi un'Ispirazione Bardica per far sì che un nemico sottragga il risultato del dado al suo prossimo tiro salvezza.",
          },
        ],
      },
      'Collegio del Glamour': {
        3: [
          {
            name: 'Manto di Ispirazione',
            description:
              "Come azione bonus, spendi un'ispirazione per dare a te e ad alcuni alleati PF temporanei e la possibilità di muoversi con la reazione.",
          },
          {
            name: 'Aspetto Incantevole',
            description:
              'Come azione bonus, puoi assumere un aspetto ultraterreno per 1 minuto, che ti aiuta a influenzare gli altri.',
          },
        ],
      },
      'Collegio della Sapienza': {
        3: [
          {
            name: 'Competenze Bonus',
            description: 'Ottieni competenza in tre abilità a tua scelta.',
          },
          {
            name: 'Parole Taglienti',
            description:
              "Usi la reazione e un'ispirazione per sottrarre il risultato del dado a un tiro nemico.",
          },
        ],
      },
      'Collegio delle Spade': {
        3: [
          {
            name: 'Competenza Bonus',
            description: 'Ottieni competenza in armature medie e scimitarre.',
          },
          {
            name: 'Stile di Combattimento',
            description: 'Scegli tra Combattere con Due Armi o Duellare.',
          },
          {
            name: 'Lama Fiorita',
            description:
              "Puoi usare un'arma come focus per i tuoi incantesimi e usare un'Ispirazione Bardica per applicare una 'Fioritura' ai tuoi attacchi.",
          },
        ],
      },
      'Collegio del Valore': {
        3: [
          {
            name: 'Competenza Bonus',
            description: 'Ottieni competenza in armature medie, scudi e armi da guerra.',
          },
          {
            name: 'Ispirazione da Combattimento',
            description:
              'Un alleato con Ispirazione Bardica può aggiungerla ai danni o usarla come reazione per aumentare la sua CA.',
          },
        ],
      },
      'Collegio dei Sussurri': {
        3: [
          {
            name: 'Lame Psichiche',
            description:
              "Quando colpisci con un'arma, puoi spendere un'ispirazione per infliggere 2d6 danni psichici extra.",
          },
          {
            name: 'Parole di Terrore',
            description:
              'Puoi parlare con un umanoide per 1 minuto per instillargli una paura profonda.',
          },
        ],
      },
    },
  },
  Chierico: {
    choiceLevel: 1,
    options: {
      'Dominio della Conoscenza': {
        1: [
          {
            name: 'Incantesimi di Dominio',
            description: "Hai sempre preparati 'comando' e 'identificare'.",
            spells: [
              { name: 'Comando', source: 'Dominio della Conoscenza' },
              { name: 'Identificare', source: 'Dominio della Conoscenza' },
            ],
          },
          {
            name: 'Benedizioni della Conoscenza',
            description:
              'Impari due linguaggi e ottieni competenza con bonus doppio in due abilità a scelta tra Arcano, Storia, Natura o Religione.',
          },
        ],
        2: [
          {
            name: 'Incanalare Divinità: Conoscenza delle Ere',
            description: "Ottieni competenza temporanea in un'abilità o strumento.",
          },
        ],
        3: [
          {
            name: 'Incantesimi di Dominio (Liv 3)',
            description: "Hai sempre preparati 'augurio' e 'suggestione'.",
            spells: [
              { name: 'Augurio', source: 'Dominio della Conoscenza' },
              { name: 'Suggestione', source: 'Dominio della Conoscenza' },
            ],
          },
        ],
        5: [
          {
            name: 'Incantesimi di Dominio (Liv 5)',
            description: "Hai sempre preparati 'anti-individuazione' e 'parlare con i morti'.",
            spells: [
              { name: 'Anti-individuazione', source: 'Dominio della Conoscenza' },
              { name: 'Parlare con i Morti', source: 'Dominio della Conoscenza' },
            ],
          },
        ],
        7: [
          {
            name: 'Incantesimi di Dominio (Liv 7)',
            description: "Hai sempre preparati 'confusione' e 'occhio arcano'.",
            spells: [
              { name: 'Confusione', source: 'Dominio della Conoscenza' },
              { name: 'Occhio Arcano', source: 'Dominio della Conoscenza' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Dominio (Liv 9)',
            description: "Hai sempre preparati 'scrutare' e 'leggenda'.",
            spells: [
              { name: 'Scrutare', source: 'Dominio della Conoscenza' },
              { name: 'Leggenda', source: 'Dominio della Conoscenza' },
            ],
          },
        ],
      },
      'Dominio della Forgia': {
        1: [
          {
            name: 'Incantesimi di Dominio',
            description: "Hai sempre preparati 'identificare' e 'punizione bruciante'.",
            spells: [
              { name: 'Identificare', source: 'Dominio della Forgia' },
              { name: 'Punizione Bruciante', source: 'Dominio della Forgia' },
            ],
          },
          {
            name: 'Competenza Bonus',
            description: 'Ottieni competenza in armature pesanti e strumenti da fabbro.',
          },
          {
            name: 'Benedizione della Forgia',
            description: "Puoi rendere un'arma o un'armatura +1 fino al prossimo riposo lungo.",
          },
        ],
        2: [
          {
            name: "Incanalare Divinità: Benedizione dell'Artigiano",
            description: 'Puoi creare un semplice oggetto di metallo.',
          },
        ],
        3: [
          {
            name: 'Incantesimi di Dominio (Liv 3)',
            description: "Hai sempre preparati 'arma magica' e 'scudo termico'.",
            spells: [
              { name: 'Arma Magica', source: 'Dominio della Forgia' },
              { name: 'Scudo Termico', source: 'Dominio della Forgia' },
            ],
          },
        ],
        5: [
          {
            name: 'Incantesimi di Dominio (Liv 5)',
            description: "Hai sempre preparati 'arma elementale' e 'protezione dall\'energia'.",
            spells: [
              { name: 'Arma Elementale', source: 'Dominio della Forgia' },
              { name: "Protezione dall'Energia", source: 'Dominio della Forgia' },
            ],
          },
        ],
        7: [
          {
            name: 'Incantesimi di Dominio (Liv 7)',
            description: "Hai sempre preparati 'fabbricare' e 'muro di fuoco'.",
            spells: [
              { name: 'Fabbricare', source: 'Dominio della Forgia' },
              { name: 'Muro di Fuoco', source: 'Dominio della Forgia' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Dominio (Liv 9)',
            description: "Hai sempre preparati 'animare oggetti' e 'muro di pietra'.",
            spells: [
              { name: 'Animare Oggetti', source: 'Dominio della Forgia' },
              { name: 'Muro di Pietra', source: 'Dominio della Forgia' },
            ],
          },
        ],
      },
      'Dominio della Guerra': {
        1: [
          {
            name: 'Incantesimi di Dominio',
            description: "Hai sempre preparati 'favore divino' e 'scudo della fede'.",
            spells: [
              { name: 'Favore Divino', source: 'Dominio della Guerra' },
              { name: 'Scudo della Fede', source: 'Dominio della Guerra' },
            ],
          },
          {
            name: 'Competenza Bonus',
            description: 'Ottieni competenza in armature pesanti e armi da guerra.',
          },
          {
            name: 'Prete Guerriero',
            description:
              "Quando usi l'azione Attaccare, puoi effettuare un attacco con arma come azione bonus.",
          },
        ],
        2: [
          {
            name: 'Incanalare Divinità: Colpo Guidato',
            description: 'Ottieni un bonus di +10 a un tiro per colpire.',
          },
        ],
        3: [
          {
            name: 'Incantesimi di Dominio (Liv 3)',
            description: "Hai sempre preparati 'arma magica' e 'arma spirituale'.",
            spells: [
              { name: 'Arma Magica', source: 'Dominio della Guerra' },
              { name: 'Arma Spirituale', source: 'Dominio della Guerra' },
            ],
          },
        ],
        5: [
          {
            name: 'Incantesimi di Dominio (Liv 5)',
            description: "Hai sempre preparati 'manto del crociato' e 'guardiani spirituali'.",
            spells: [
              { name: 'Manto del Crociato', source: 'Dominio della Guerra' },
              { name: 'Guardiani Spirituali', source: 'Dominio della Guerra' },
            ],
          },
        ],
        7: [
          {
            name: 'Incantesimi di Dominio (Liv 7)',
            description: "Hai sempre preparati 'libertà di movimento' e 'pelle di pietra'.",
            spells: [
              { name: 'Libertà di Movimento', source: 'Dominio della Guerra' },
              { name: 'Pelle di Pietra', source: 'Dominio della Guerra' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Dominio (Liv 9)',
            description: "Hai sempre preparati 'colpo infuocato' e 'colpo di fiamma'.",
            spells: [
              { name: 'Colpo Infuocato', source: 'Dominio della Guerra' },
              { name: 'Colpo di Fiamma', source: 'Dominio della Guerra' },
            ],
          },
        ],
      },
      'Dominio della Luce': {
        1: [
          {
            name: 'Incantesimi di Dominio',
            description: "Hai sempre preparati 'mani brucianti' e 'luminescenza'.",
            spells: [
              { name: 'Mani Brucianti', source: 'Dominio della Luce' },
              { name: 'Luminescenza', source: 'Dominio della Luce' },
            ],
          },
          { name: 'Trucchetto Bonus', description: "Impari il trucchetto 'luce'." },
          {
            name: 'Interdizione Ardente',
            description: 'Come reazione, puoi imporre svantaggio a un attacco contro di te.',
          },
        ],
        2: [
          {
            name: "Incanalare Divinità: Radianza dell'Aurora",
            description: "Dissipi l'oscurità e infliggi danni radianti.",
          },
        ],
        3: [
          {
            name: 'Incantesimi di Dominio (Liv 3)',
            description: "Hai sempre preparati 'raggio rovente' e 'sfera infuocata'.",
            spells: [
              { name: 'Raggio Rovente', source: 'Dominio della Luce' },
              { name: 'Sfera Infuocata', source: 'Dominio della Luce' },
            ],
          },
        ],
        5: [
          {
            name: 'Incantesimi di Dominio (Liv 5)',
            description: "Hai sempre preparati 'palla di fuoco' e 'luce diurna'.",
            spells: [
              { name: 'Palla di Fuoco', source: 'Dominio della Luce' },
              { name: 'Luce Diurna', source: 'Dominio della Luce' },
            ],
          },
        ],
        7: [
          {
            name: 'Incantesimi di Dominio (Liv 7)',
            description: "Hai sempre preparati 'guardiano della fede' e 'muro di fuoco'.",
            spells: [
              { name: 'Guardiano della Fede', source: 'Dominio della Luce' },
              { name: 'Muro di Fuoco', source: 'Dominio della Luce' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Dominio (Liv 9)',
            description: "Hai sempre preparati 'colpo di fiamma' e 'scrutare'.",
            spells: [
              { name: 'Colpo di Fiamma', source: 'Dominio della Luce' },
              { name: 'Scrutare', source: 'Dominio della Luce' },
            ],
          },
        ],
      },
      'Dominio della Morte': {
        1: [
          {
            name: 'Incantesimi di Dominio',
            description: "Hai sempre preparati 'falso vivere' e 'raggio di infermità'.",
            spells: [
              { name: 'Falso Vivere', source: 'Dominio della Morte' },
              { name: 'Raggio di Infermità', source: 'Dominio della Morte' },
            ],
          },
          { name: 'Competenza Bonus', description: 'Ottieni competenza nelle armi da guerra.' },
          {
            name: 'Mietitore',
            description:
              'Impari un trucchetto di necromanzia. Se lo lanci su una creatura, puoi bersagliarne due se sono vicine.',
          },
        ],
        2: [
          {
            name: 'Incanalare Divinità: Tocco Mortale',
            description:
              "Quando colpisci con un'arma da mischia, puoi infliggere 5 + il doppio del tuo livello da chierico danni necrotici extra.",
          },
        ],
        3: [
          {
            name: 'Incantesimi di Dominio (Liv 3)',
            description: "Hai sempre preparati 'cecità/sordità' e 'raggio di indebolimento'.",
            spells: [
              { name: 'Cecità/Sordità', source: 'Dominio della Morte' },
              { name: 'Raggio di Indebolimento', source: 'Dominio della Morte' },
            ],
          },
        ],
        5: [
          {
            name: 'Incantesimi di Dominio (Liv 5)',
            description: "Hai sempre preparati 'animare morti' e 'tocco del vampiro'.",
            spells: [
              { name: 'Animare Morti', source: 'Dominio della Morte' },
              { name: 'Tocco del Vampiro', source: 'Dominio della Morte' },
            ],
          },
        ],
        7: [
          {
            name: 'Incantesimi di Dominio (Liv 7)',
            description: "Hai sempre preparati 'interdizione alla morte' e 'piaga'.",
            spells: [
              { name: 'Interdizione alla Morte', source: 'Dominio della Morte' },
              { name: 'Piaga', source: 'Dominio della Morte' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Dominio (Liv 9)',
            description: "Hai sempre preparati 'guscio anti-vita' e 'nube mortale'.",
            spells: [
              { name: 'Guscio Anti-vita', source: 'Dominio della Morte' },
              { name: 'Nube Mortale', source: 'Dominio della Morte' },
            ],
          },
        ],
      },
      'Dominio della Natura': {
        1: [
          {
            name: 'Incantesimi di Dominio',
            description:
              "Hai sempre preparati 'amicizia con gli animali' e 'parlare con gli animali'.",
            spells: [
              { name: 'Amicizia con gli Animali', source: 'Dominio della Natura' },
              { name: 'Parlare con gli Animali', source: 'Dominio della Natura' },
            ],
          },
          {
            name: 'Discepolo della Natura',
            description:
              "Impari un trucchetto da druido e ottieni competenza in un'abilità (Addestrare Animali, Natura o Sopravvivenza).",
          },
          { name: 'Competenza Bonus', description: 'Ottieni competenza nelle armature pesanti.' },
        ],
        2: [
          {
            name: 'Incanalare Divinità: Ammaliare Animali e Piante',
            description: 'Scacci o ammalii bestie e vegetali.',
          },
        ],
        3: [
          {
            name: 'Incantesimi di Dominio (Liv 3)',
            description: "Hai sempre preparati 'crescita di spine' e 'pelle coriacea'.",
            spells: [
              { name: 'Crescita di Spine', source: 'Dominio della Natura' },
              { name: 'Pelle Coriacea', source: 'Dominio della Natura' },
            ],
          },
        ],
        5: [
          {
            name: 'Incantesimi di Dominio (Liv 5)',
            description: "Hai sempre preparati 'muro di vento' e 'crescita vegetale'.",
            spells: [
              { name: 'Muro di Vento', source: 'Dominio della Natura' },
              { name: 'Crescita Vegetale', source: 'Dominio della Natura' },
            ],
          },
        ],
        7: [
          {
            name: 'Incantesimi di Dominio (Liv 7)',
            description: "Hai sempre preparati 'dominare bestie' e 'ramp-icante afferrante'.",
            spells: [
              { name: 'Dominare Bestie', source: 'Dominio della Natura' },
              { name: 'Rampicante Afferrante', source: 'Dominio della Natura' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Dominio (Liv 9)',
            description: "Hai sempre preparati 'piaga degli insetti' e 'muro di pietra'.",
            spells: [
              { name: 'Piaga degli Insetti', source: 'Dominio della Natura' },
              { name: 'Muro di Pietra', source: 'Dominio della Natura' },
            ],
          },
        ],
      },
      "Dominio dell'Ordine": {
        1: [
          {
            name: 'Incantesimi di Dominio',
            description: "Hai sempre preparati 'comando' e 'eroismo'.",
            spells: [
              { name: 'Comando', source: "Dominio dell'Ordine" },
              { name: 'Eroismo', source: "Dominio dell'Ordine" },
            ],
          },
          {
            name: 'Competenza Bonus',
            description:
              "Ottieni competenza in armature pesanti e in un'abilità (Intimidire o Persuasione).",
          },
          {
            name: "Voce dell'Autorità",
            description:
              "Quando lanci un incantesimo su un alleato, puoi usare la reazione per permettere a quell'alleato di fare un attacco.",
          },
        ],
        2: [
          {
            name: 'Incanalare Divinità: Ordine Esigente',
            description: 'Forzi le creature a gettare ciò che impugnano e a cadere prone.',
          },
        ],
        3: [
          {
            name: 'Incantesimi di Dominio (Liv 3)',
            description: "Hai sempre preparati 'blocca persona' e 'zona di verità'.",
            spells: [
              { name: 'Blocca Persona', source: "Dominio dell'Ordine" },
              { name: 'Zona di Verità', source: "Dominio dell'Ordine" },
            ],
          },
        ],
        5: [
          {
            name: 'Incantesimi di Dominio (Liv 5)',
            description: "Hai sempre preparati 'parola guaritrice di massa' e 'lentezza'.",
            spells: [
              { name: 'Parola Guaritrice di Massa', source: "Dominio dell'Ordine" },
              { name: 'Lentezza', source: "Dominio dell'Ordine" },
            ],
          },
        ],
        7: [
          {
            name: 'Incantesimi di Dominio (Liv 7)',
            description: "Hai sempre preparati 'compulsione' e 'localizza creatura'.",
            spells: [
              { name: 'Compulsione', source: "Dominio dell'Ordine" },
              { name: 'Localizza Creatura', source: "Dominio dell'Ordine" },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Dominio (Liv 9)',
            description: "Hai sempre preparati 'comunione' e 'dominare persone'.",
            spells: [
              { name: 'Comunione', source: "Dominio dell'Ordine" },
              { name: 'Dominare Persone', source: "Dominio dell'Ordine" },
            ],
          },
        ],
      },
      'Dominio della Pace': {
        1: [
          {
            name: 'Incantesimi di Dominio',
            description: "Hai sempre preparati 'eroismo' e 'santuario'.",
            spells: [
              { name: 'Eroismo', source: 'Dominio della Pace' },
              { name: 'Santuario', source: 'Dominio della Pace' },
            ],
          },
          {
            name: 'Strumento della Pace',
            description:
              "Ottieni competenza in un'abilità (Intuizione, Intrattenere o Persuasione).",
          },
          {
            name: 'Legame Incoraggiante',
            description:
              'Puoi creare un legame tra creature. Finché sono vicine, possono aggiungere un d4 ai tiri di attacco, prove di caratteristica o TS una volta per turno.',
          },
        ],
        2: [
          {
            name: 'Incanalare Divinità: Balsamo della Pace',
            description: 'Come azione, ti muovi e puoi curare le creature che attraversi.',
          },
        ],
        3: [
          {
            name: 'Incantesimi di Dominio (Liv 3)',
            description: "Hai sempre preparati 'aiuto' e 'vincolo protettivo'.",
            spells: [
              { name: 'Aiuto', source: 'Dominio della Pace' },
              { name: 'Vincolo Protettivo', source: 'Dominio della Pace' },
            ],
          },
        ],
        5: [
          {
            name: 'Incantesimi di Dominio (Liv 5)',
            description: "Hai sempre preparati 'faro di speranza' e 'inviare'.",
            spells: [
              { name: 'Faro di Speranza', source: 'Dominio della Pace' },
              { name: 'Inviare', source: 'Dominio della Pace' },
            ],
          },
        ],
        7: [
          {
            name: 'Incantesimi di Dominio (Liv 7)',
            description: "Hai sempre preparati 'aura di purezza' e 'sfera elastica di otiluke'.",
            spells: [
              { name: 'Aura di Purezza', source: 'Dominio della Pace' },
              { name: 'Sfera Elastica di Otiluke', source: 'Dominio della Pace' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Dominio (Liv 9)',
            description:
              "Hai sempre preparati 'ristorare superiore' e 'legame telepatico di rary'.",
            spells: [
              { name: 'Ristorare Superiore', source: 'Dominio della Pace' },
              { name: 'Legame Telepatico di Rary', source: 'Dominio della Pace' },
            ],
          },
        ],
      },
      'Dominio della Tempesta': {
        1: [
          {
            name: 'Incantesimi di Dominio',
            description: "Hai sempre preparati 'nube di nebbia' e 'onda tonante'.",
            spells: [
              { name: 'Nube di Nebbia', source: 'Dominio della Tempesta' },
              { name: 'Onda Tonante', source: 'Dominio della Tempesta' },
            ],
          },
          {
            name: 'Competenza Bonus',
            description: 'Ottieni competenza in armature pesanti e armi da guerra.',
          },
          {
            name: 'Ira della Tempesta',
            description:
              'Come reazione quando vieni colpito, infliggi 2d8 danni da fulmine o tuono.',
          },
        ],
        2: [
          {
            name: 'Incanalare Divinità: Furia Distruttiva',
            description: 'Infliggi il massimo dei danni da fulmine o tuono.',
          },
        ],
        3: [
          {
            name: 'Incantesimi di Dominio (Liv 3)',
            description: "Hai sempre preparati 'folata di vento' e 'frantumare'.",
            spells: [
              { name: 'Folata di Vento', source: 'Dominio della Tempesta' },
              { name: 'Frantumare', source: 'Dominio della Tempesta' },
            ],
          },
        ],
        5: [
          {
            name: 'Incantesimi di Dominio (Liv 5)',
            description: "Hai sempre preparati 'richiamare il fulmine' e 'tempesta di nevischio'.",
            spells: [
              { name: 'Richiamare il Fulmine', source: 'Dominio della Tempesta' },
              { name: 'Tempesta di Nevischio', source: 'Dominio della Tempesta' },
            ],
          },
        ],
        7: [
          {
            name: 'Incantesimi di Dominio (Liv 7)',
            description: "Hai sempre preparati 'controllare acqua' e 'tempesta di ghiaccio'.",
            spells: [
              { name: 'Controllare Acqua', source: 'Dominio della Tempesta' },
              { name: 'Tempesta di Ghiaccio', source: 'Dominio della Tempesta' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Dominio (Liv 9)',
            description: "Hai sempre preparati 'onda distruttiva' e 'piaga degli insetti'.",
            spells: [
              { name: 'Onda Distruttiva', source: 'Dominio della Tempesta' },
              { name: 'Piaga degli Insetti', source: 'Dominio della Tempesta' },
            ],
          },
        ],
      },
      "Dominio dell'Inganno": {
        1: [
          {
            name: 'Incantesimi di Dominio',
            description: "Hai sempre preparati 'charme su persone' e 'camuffare se stesso'.",
            spells: [
              { name: 'Charme su Persone', source: "Dominio dell'Inganno" },
              { name: 'Camuffare Se Stesso', source: "Dominio dell'Inganno" },
            ],
          },
          {
            name: "Benedizione dell'Ingannatore",
            description:
              'Come azione, puoi toccare una creatura consenziente diversa da te e darle vantaggio alle prove di Destrezza (Furtività).',
          },
        ],
        2: [
          {
            name: 'Incanalare Divinità: Invocare Duplicità',
            description: 'Crei un duplicato illusorio che ti dà vantaggio agli attacchi.',
          },
        ],
        3: [
          {
            name: 'Incantesimi di Dominio (Liv 3)',
            description: "Hai sempre preparati 'immagine speculare' e 'passare senza tracce'.",
            spells: [
              { name: 'Immagine Speculare', source: "Dominio dell'Inganno" },
              { name: 'Passare senza Tracce', source: "Dominio dell'Inganno" },
            ],
          },
        ],
        5: [
          {
            name: 'Incantesimi di Dominio (Liv 5)',
            description: "Hai sempre preparati 'intermittenza' e 'dissolvi magie'.",
            spells: [
              { name: 'Intermittenza', source: "Dominio dell'Inganno" },
              { name: 'Dissolvi Magie', source: "Dominio dell'Inganno" },
            ],
          },
        ],
        7: [
          {
            name: 'Incantesimi di Dominio (Liv 7)',
            description: "Hai sempre preparati 'porta dimensionale' e 'polimorfia'.",
            spells: [
              { name: 'Porta Dimensionale', source: "Dominio dell'Inganno" },
              { name: 'Polimorfia', source: "Dominio dell'Inganno" },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Dominio (Liv 9)',
            description: "Hai sempre preparati 'dominare persone' e 'modificare memoria'.",
            spells: [
              { name: 'Dominare Persone', source: "Dominio dell'Inganno" },
              { name: 'Modificare Memoria', source: "Dominio dell'Inganno" },
            ],
          },
        ],
      },
      'Dominio del Crepuscolo': {
        1: [
          {
            name: 'Incantesimi di Dominio',
            description: "Hai sempre preparati 'luminescenza' e 'sonno'.",
            spells: [
              { name: 'Luminescenza', source: 'Dominio del Crepuscolo' },
              { name: 'Sonno', source: 'Dominio del Crepuscolo' },
            ],
          },
          {
            name: 'Competenza Bonus',
            description: 'Ottieni competenza in armature pesanti e armi da guerra.',
          },
          {
            name: 'Occhi della Notte',
            description: 'Hai scurovisione fino a 90m e puoi condividerla con gli alleati.',
          },
          {
            name: 'Vigilanza Benedetta',
            description: 'Dai a un alleato vantaggio al suo prossimo tiro di iniziativa.',
          },
        ],
        2: [
          {
            name: 'Incanalare Divinità: Santuario del Crepuscolo',
            description:
              'Crei una sfera di crepuscolo che dà a te e ai tuoi alleati PF temporanei o termina un effetto di charme/paura.',
          },
        ],
        3: [
          {
            name: 'Incantesimi di Dominio (Liv 3)',
            description: "Hai sempre preparati 'raggio di luna' e 'vedere invisibilità'.",
            spells: [
              { name: 'Raggio di Luna', source: 'Dominio del Crepuscolo' },
              { name: 'Vedere Invisibilità', source: 'Dominio del Crepuscolo' },
            ],
          },
        ],
        5: [
          {
            name: 'Incantesimi di Dominio (Liv 5)',
            description: "Hai sempre preparati 'aura di vitalità' e 'capanna di leomund'.",
            spells: [
              { name: 'Aura di Vitalità', source: 'Dominio del Crepuscolo' },
              { name: 'Capanna di Leomund', source: 'Dominio del Crepuscolo' },
            ],
          },
        ],
        7: [
          {
            name: 'Incantesimi di Dominio (Liv 7)',
            description: "Hai sempre preparati 'aura di vita' e 'invisibilità superiore'.",
            spells: [
              { name: 'Aura di Vita', source: 'Dominio del Crepuscolo' },
              { name: 'Invisibilità Superiore', source: 'Dominio del Crepuscolo' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Dominio (Liv 9)',
            description: "Hai sempre preparati 'cerchio di potere' e 'fuorviare'.",
            spells: [
              { name: 'Cerchio di Potere', source: 'Dominio del Crepuscolo' },
              { name: 'Fuorviare', source: 'Dominio del Crepuscolo' },
            ],
          },
        ],
      },
      'Dominio della Vita': {
        1: [
          {
            name: 'Incantesimi di Dominio',
            description: "Hai sempre preparati 'benedizione' e 'cura ferite'.",
            spells: [
              { name: 'Benedizione', source: 'Dominio della Vita' },
              { name: 'Cura Ferite', source: 'Dominio della Vita' },
            ],
          },
          { name: 'Competenza Bonus', description: 'Ottieni competenza nelle armature pesanti.' },
          {
            name: 'Discepolo della Vita',
            description:
              "Gli incantesimi di cura di 1° livello o superiore ripristinano 2 + il livello dell'incantesimo PF aggiuntivi.",
          },
        ],
        2: [
          {
            name: 'Incanalare Divinità: Preservare Vita',
            description:
              'Come azione, ripristini un ammontare di PF pari a 5 volte il tuo livello da chierico, diviso tra le creature a tua scelta.',
          },
        ],
        3: [
          {
            name: 'Incantesimi di Dominio (Liv 3)',
            description: "Hai sempre preparati 'ristorare inferiore' e 'arma spirituale'.",
            spells: [
              { name: 'Ristorare Inferiore', source: 'Dominio della Vita' },
              { name: 'Arma Spirituale', source: 'Dominio della Vita' },
            ],
          },
        ],
        5: [
          {
            name: 'Incantesimi di Dominio (Liv 5)',
            description: "Hai sempre preparati 'faro di speranza' e 'rianimare'.",
            spells: [
              { name: 'Faro di Speranza', source: 'Dominio della Vita' },
              { name: 'Rianimare', source: 'Dominio della Vita' },
            ],
          },
        ],
        7: [
          {
            name: 'Incantesimi di Dominio (Liv 7)',
            description: "Hai sempre preparati 'guardiano della fede' e 'interdizione alla morte'.",
            spells: [
              { name: 'Guardiano della Fede', source: 'Dominio della Vita' },
              { name: 'Interdizione alla Morte', source: 'Dominio della Vita' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Dominio (Liv 9)',
            description: "Hai sempre preparati 'cura ferite di massa' e 'rianimare morti'.",
            spells: [
              { name: 'Cura Ferite di Massa', source: 'Dominio della Vita' },
              { name: 'Rianimare Morti', source: 'Dominio della Vita' },
            ],
          },
        ],
      },
    },
  },
  Druido: {
    choiceLevel: 2,
    options: {
      'Circolo dei Sogni': {
        2: [
          {
            name: "Balsamo della Corte d'Estate",
            description:
              'Hai una riserva di d6 che puoi usare come azione bonus per curare creature a distanza.',
          },
        ],
      },
      'Circolo della Terra': {
        2: [
          { name: 'Trucchetto Bonus', description: 'Impari un trucchetto da druido aggiuntivo.' },
          {
            name: 'Recupero Naturale',
            description: 'Durante un riposo breve, recuperi slot incantesimo spesi.',
          },
        ],
        3: [
          {
            name: 'Incantesimi del Circolo',
            description:
              'Ottieni accesso a incantesimi aggiuntivi basati sul tipo di terra scelto (Artico, Costa, Deserto, Foresta, Montagna, Palude, Sottosuolo).',
          },
        ],
      },
      'Circolo della Luna': {
        2: [
          {
            name: 'Forma Selvatica da Combattimento',
            description:
              'Usi la Forma Selvatica come azione bonus e puoi assumere forme di bestie con GS 1.',
          },
          {
            name: 'Forme del Circolo',
            description: 'Le tue forme selvatiche possono essere più potenti.',
          },
        ],
      },
      'Circolo del Pastore': {
        2: [
          {
            name: 'Favella Spirituale',
            description: "Impari 'parlare con gli animali' e puoi parlare con le bestie.",
          },
          {
            name: 'Totem Spirituale',
            description:
              "Come azione bonus, evochi uno spirito totem (Orso, Aquila, Unicorno) che fornisce un'aura benefica.",
          },
        ],
      },
      'Circolo delle Spore': {
        2: [
          {
            name: 'Incantesimi del Circolo',
            description: "Hai sempre preparati 'tocco gelido'.",
            spells: [{ name: 'Tocco Gelido', source: 'Circolo delle Spore' }],
          },
          {
            name: 'Aura di Spore',
            description: 'Come reazione, infliggi 1d4 danni necrotici a una creatura vicina.',
          },
          {
            name: 'Simbiosi Selvatica',
            description:
              "Usi una Forma Selvatica per ottenere PF temporanei e raddoppiare i danni dell'Aura di Spore.",
          },
        ],
        3: [
          {
            name: 'Incantesimi del Circolo (Liv 3)',
            description: "Hai sempre preparati 'cecita/sordita' e 'raggio di indebolimento'.",
            spells: [
              { name: 'Cecità/Sordità', source: 'Circolo delle Spore' },
              { name: 'Raggio di Indebolimento', source: 'Circolo delle Spore' },
            ],
          },
        ],
        5: [
          {
            name: 'Incantesimi del Circolo (Liv 5)',
            description: "Hai sempre preparati 'animare morti' e 'nube maleodorante'.",
            spells: [
              { name: 'Animare Morti', source: 'Circolo delle Spore' },
              { name: 'Nube Maleodorante', source: 'Circolo delle Spore' },
            ],
          },
        ],
      },
      'Circolo degli Astri': {
        2: [
          {
            name: 'Mappa Stellare',
            description:
              "Crei una mappa stellare che funge da focus. Impari il trucchetto 'guida'.",
          },
          {
            name: 'Forma Stellata',
            description:
              'Usi una Forma Selvatica per assumere una forma stellata (Arciere, Calice, Drago) con benefici unici.',
          },
        ],
      },
    },
  },

  Guerriero: {
    choiceLevel: 3,
    options: {
      'Arciere Arcano': {
        3: [
          {
            name: "Conoscenza dell'Arciere Arcano",
            description:
              "Ottieni competenza in Arcano o Natura e impari un trucchetto ('prestidigitazione' o 'druidismo').",
            spells: [{ name: 'Prestidigitazione', source: 'Arciere Arcano (o Druidismo)' }],
          },
          {
            name: 'Tiro Arcano',
            description:
              'Impari due opzioni di Tiro Arcano (es. Freccia Esplosiva, Freccia Vincolante) da applicare ai tuoi attacchi con arco.',
          },
        ],
      },
      Cavaliere: {
        3: [
          {
            name: 'Competenza Bonus',
            description: "Ottieni competenza in un'abilità o un linguaggio.",
          },
          {
            name: 'Nato per la Sella',
            description:
              'Vantaggio ai TS per non cadere da cavallo e puoi montare/smontare con solo 1,5m di movimento.',
          },
          {
            name: 'Marcatura Inesorabile',
            description:
              'Quando colpisci una creatura, puoi marcarla, dandole svantaggio ad attaccare chiunque altro.',
          },
        ],
      },
      Campione: {
        3: [
          {
            name: 'Critico Migliorato',
            description:
              'I tuoi attacchi mettono a segno un colpo critico con un risultato di 19 o 20.',
          },
        ],
      },
      'Maestro di Battaglia': {
        3: [
          {
            name: 'Studente di Guerra',
            description: 'Ottieni competenza in un tipo di strumenti da artigiano.',
          },
          {
            name: 'Superiorità in Combattimento',
            description: 'Ottieni 4 dadi di superiorità (d8) e impari 3 manovre a tua scelta.',
          },
        ],
      },
      'Cavaliere Mistico': {
        3: [
          {
            name: 'Incantesimi',
            description:
              'Impari a lanciare incantesimi da mago (INT). Conosci tre trucchetti e tre incantesimi di 1° livello, di cui due devono essere di abiurazione e/o invocazione.',
          },
          {
            name: "Legame con l'Arma",
            description:
              'Puoi legare a te fino a due armi, non puoi essere disarmato da esse e puoi evocarle nella tua mano come azione bonus.',
          },
        ],
      },
      Samurai: {
        3: [
          {
            name: 'Competenza Bonus',
            description:
              "Ottieni competenza in un'abilità (Storia, Intuizione, Intrattenere o Persuasione).",
          },
          {
            name: 'Spirito Combattivo',
            description:
              'Come azione bonus, puoi darti PF temporanei e vantaggio a tutti i tiri di attacco con arma fino alla fine del turno.',
          },
        ],
      },
    },
  },
  Ladro: {
    choiceLevel: 3,
    options: {
      Assassino: {
        3: [
          {
            name: 'Competenze Bonus',
            description: 'Competenza con kit da travestimento e kit da avvelenatore.',
          },
          {
            name: 'Assassinare',
            description:
              'Vantaggio agli attacchi contro creature che non hanno ancora agito. I colpi contro creature sorprese sono critici.',
          },
        ],
      },
      Inquisitore: {
        3: [
          {
            name: "Orecchio per l'Inganno",
            description:
              'La tua prova di Saggezza (Intuizione) per determinare se una creatura sta mentendo è considerata un 8 + bonus, se il tiro è inferiore.',
          },
          {
            name: 'Occhio per i Dettagli',
            description:
              "Puoi usare un'azione bonus per fare una prova di Percezione per individuare una creatura o un oggetto nascosto o una prova di Indagare per decifrare indizi.",
          },
        ],
      },
      'Mente Maestra': {
        3: [
          {
            name: "Maestro dell'Intrigo",
            description:
              'Ottieni competenza con il kit da travestimento, il kit da falsario e un set da gioco. Impari anche due linguaggi.',
          },
          {
            name: 'Maestro della Tattica',
            description:
              "Puoi usare l'azione Aiutare come azione bonus. Inoltre, puoi aiutare un alleato entro 9m.",
          },
        ],
      },
      Esploratore: {
        3: [
          {
            name: 'Escursionista',
            description: 'Ottieni competenza (con bonus doppio) in Natura e Sopravvivenza.',
          },
          {
            name: 'Agguato',
            description:
              "Vantaggio all'iniziativa. Vantaggio agli attacchi contro creature che non hanno ancora agito nel primo round.",
          },
        ],
      },
      'Spadaccino (Swashbuckler)': {
        3: [
          {
            name: 'Gioco di Piedi Fantasioso',
            description:
              'Se fai un attacco in mischia contro una creatura, essa non può fare attacchi di opportunità contro di te per il resto del turno.',
          },
          {
            name: 'Audacia Sfrontata',
            description:
              "Aggiungi il tuo mod di Carisma all'iniziativa. Puoi usare l'Attacco Furtivo se sei entro 1,5m dal bersaglio e nessun altro è vicino a te.",
          },
        ],
      },
      'Mistificatore Arcano': {
        3: [
          {
            name: 'Incantesimi',
            description:
              'Impari a lanciare incantesimi da mago (INT). Conosci tre trucchetti e tre incantesimi di 1° livello, di cui due devono essere di ammaliamento e/o illusione.',
          },
          {
            name: 'Raggiro Magico',
            description:
              'Come azione, puoi creare una distrazione magica. Le creature a tua scelta entro 9m fanno una prova di Saggezza (Intuizione) contro la CD dei tuoi incantesimi. Se falliscono, hai vantaggio alla tua prossima prova di Destrezza (Rapidità di Mano) contro di loro.',
          },
        ],
      },
      Ladro: {
        3: [
          {
            name: 'Mani Veloci',
            description:
              "Usi l'azione bonus per fare una prova di Rapidità di Mano, usare strumenti da ladro o l'azione 'Usare un oggetto'.",
          },
          {
            name: 'Scalatore del Secondo Piano',
            description:
              'Scalare non costa movimento extra e puoi fare un salto in lungo migliorato.',
          },
        ],
      },
    },
  },
  Mago: {
    choiceLevel: 2,
    options: {
      'Scuola di Abiurazione': {
        2: [
          {
            name: 'Studioso di Abiurazione',
            description: 'Tempo e costo per copiare incantesimi di abiurazione sono dimezzati.',
          },
          { name: 'Interdizione Arcana', description: 'Crei uno scudo magico protettivo con PF.' },
        ],
      },
      'Scuola di Ammaliamento': {
        2: [
          {
            name: 'Studioso di Ammaliamento',
            description: 'Tempo e costo per copiare incantesimi di ammaliamento sono dimezzati.',
          },
          {
            name: 'Sguardo Ammaliatore',
            description: 'Come azione, puoi affascinare una creatura entro 1,5m.',
          },
        ],
      },
      'Scuola di Divinazione': {
        2: [
          {
            name: 'Studioso di Divinazione',
            description: 'Tempo e costo per copiare incantesimi di divinazione sono dimezzati.',
          },
          {
            name: 'Presagio',
            description:
              'Dopo un riposo lungo, tiri due d20 e registri i risultati. Puoi sostituire qualsiasi tiro con uno di questi.',
          },
        ],
      },
      'Scuola di Evocazione': {
        2: [
          {
            name: 'Studioso di Evocazione',
            description: 'Tempo e costo per copiare incantesimi di evocazione sono dimezzati.',
          },
          {
            name: 'Evocazione Minore',
            description: 'Come azione, puoi creare un oggetto non magico inerte.',
          },
        ],
      },
      'Scuola di Illusione': {
        2: [
          {
            name: 'Studioso di Illusione',
            description: 'Tempo e costo per copiare incantesimi di illusione sono dimezzati.',
          },
          {
            name: 'Illusione Minore Migliorata',
            description:
              "Impari 'illusione minore'. Se già lo conosci, ne impari un altro. Puoi creare suono e immagine con un solo lancio.",
          },
        ],
      },
      'Scuola di Invocazione': {
        2: [
          {
            name: 'Studioso di Invocazione',
            description: 'Tempo e costo per copiare incantesimi di invocazione sono dimezzati.',
          },
          {
            name: 'Scolpire Incantesimi',
            description:
              'Crei zone di sicurezza nei tuoi incantesimi di invocazione per proteggere gli alleati.',
          },
        ],
      },
      'Scuola di Necromanzia': {
        2: [
          {
            name: 'Studioso di Necromanzia',
            description: 'Tempo e costo per copiare incantesimi di necromanzia sono dimezzati.',
          },
          {
            name: 'Tristo Raccolto',
            description: 'Se uccidi una creatura con un incantesimo, recuperi PF.',
          },
        ],
      },
      'Scuola di Trasmutazione': {
        2: [
          {
            name: 'Studioso di Trasmutazione',
            description: 'Tempo e costo per copiare incantesimi di trasmutazione sono dimezzati.',
          },
          {
            name: 'Alchimia Minore',
            description:
              'Puoi trasmutare un materiale (legno, pietra, etc.) in un altro per 1 ora.',
          },
        ],
      },
      'Magia da Guerra': {
        2: [
          {
            name: 'Deviazione Arcana',
            description:
              'Come reazione quando vieni colpito o fallisci un TS, puoi ottenere +2 alla CA o +4 al TS.',
          },
          {
            name: 'Sovraccarico Tattico',
            description:
              'Quando usi la tua azione per lanciare un trucchetto, puoi usare la tua azione bonus per fare un attacco con arma.',
          },
        ],
      },
    },
  },
  Monaco: {
    choiceLevel: 3,
    options: {
      'Via della Mano Aperta': {
        3: [
          {
            name: 'Tecnica della Mano Aperta',
            description:
              'Quando colpisci con Raffica di Colpi, puoi far cadere prono, spingere o impedire le reazioni del bersaglio.',
          },
        ],
      },
      "Via dell'Ombra": {
        3: [
          {
            name: "Arti dell'Ombra",
            description:
              "Puoi spendere 2 punti Ki per lanciare 'oscurità', 'passo velato', 'silenzio' o 'passare senza tracce'.",
            spells: [
              { name: 'Oscurità', source: "Arti dell'Ombra" },
              { name: 'Passo Velato', source: "Arti dell'Ombra" },
              { name: 'Silenzio', source: "Arti dell'Ombra" },
              { name: 'Passare senza Tracce', source: "Arti dell'Ombra" },
            ],
          },
        ],
      },
      'Via dei Quattro Elementi': {
        3: [
          {
            name: 'Discepolo degli Elementi',
            description:
              'Impari discipline elementali che ti permettono di manipolare gli elementi spendendo punti Ki per lanciare incantesimi.',
          },
        ],
      },
      "Via dell'Anima Solare": {
        3: [
          {
            name: 'Raggio del Sole Radiante',
            description:
              "Puoi lanciare proiettili di luce a distanza che infliggono danni radianti. Puoi anche spendere Ki per lanciare 'mani brucianti'.",
          },
        ],
      },
      'Via del Maestro Ubriaco': {
        3: [
          {
            name: 'Competenza Bonus',
            description: 'Ottieni competenza in Intrattenere e con gli strumenti da birraio.',
          },
          {
            name: "Tecnica dell'Ubriaco",
            description:
              "Quando usi Raffica di Colpi, ottieni il beneficio dell'azione Disimpegnare e la tua velocità aumenta di 3m.",
          },
        ],
      },
    },
  },
  Paladino: {
    choiceLevel: 3,
    options: {
      'Giuramento di Devozione': {
        3: [
          {
            name: 'Incantesimi di Giuramento',
            description: "Hai sempre preparati 'protezione dal bene e dal male' e 'santuario'.",
            spells: [
              { name: 'Protezione dal Bene e dal Male', source: 'Giuramento di Devozione' },
              { name: 'Santuario', source: 'Giuramento di Devozione' },
            ],
          },
          {
            name: 'Incanalare Divinità',
            description: "Ottieni 'Arma Sacra' (+ mod Carisma al TxC) e 'Scacciare i Sacrileghi'.",
          },
        ],
        5: [
          {
            name: 'Incantesimi di Giuramento (Liv 5)',
            description: "Hai sempre preparati 'ristorare inferiore' e 'zona di verità'.",
            spells: [
              { name: 'Ristorare Inferiore', source: 'Giuramento di Devozione' },
              { name: 'Zona di Verità', source: 'Giuramento di Devozione' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Giuramento (Liv 9)',
            description: "Hai sempre preparati 'faro di speranza' e 'dissolvi magie'.",
            spells: [
              { name: 'Faro di Speranza', source: 'Giuramento di Devozione' },
              { name: 'Dissolvi Magie', source: 'Giuramento di Devozione' },
            ],
          },
        ],
        13: [
          {
            name: 'Incantesimi di Giuramento (Liv 13)',
            description: "Hai sempre preparati 'guardiano della fede' e 'libertà di movimento'.",
            spells: [
              { name: 'Guardiano della Fede', source: 'Giuramento di Devozione' },
              { name: 'Libertà di Movimento', source: 'Giuramento di Devozione' },
            ],
          },
        ],
        17: [
          {
            name: 'Incantesimi di Giuramento (Liv 17)',
            description: "Hai sempre preparati 'colpo di fiamma' e 'comunione'.",
            spells: [
              { name: 'Colpo di Fiamma', source: 'Giuramento di Devozione' },
              { name: 'Comunione', source: 'Giuramento di Devozione' },
            ],
          },
        ],
      },
      'Giuramento degli Antichi': {
        3: [
          {
            name: 'Incantesimi di Giuramento',
            description: "Hai sempre preparati 'laccio' e 'parlare con gli animali'.",
            spells: [
              { name: 'Laccio', source: 'Giuramento degli Antichi' },
              { name: 'Parlare con gli Animali', source: 'Giuramento degli Antichi' },
            ],
          },
          {
            name: 'Incanalare Divinità',
            description:
              "Ottieni 'Ira della Natura' (incatena un bersaglio) e 'Scacciare gli Infedeli' (scacci fatati e immondi).",
          },
        ],
        5: [
          {
            name: 'Incantesimi di Giuramento (Liv 5)',
            description: "Hai sempre preparati 'passo velato' e 'raggio di luna'.",
            spells: [
              { name: 'Passo Velato', source: 'Giuramento degli Antichi' },
              { name: 'Raggio di Luna', source: 'Giuramento degli Antichi' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Giuramento (Liv 9)',
            description: "Hai sempre preparati 'crescita vegetale' e 'protezione dall\'energia'.",
            spells: [
              { name: 'Crescita Vegetale', source: 'Giuramento degli Antichi' },
              { name: "Protezione dall'Energia", source: 'Giuramento degli Antichi' },
            ],
          },
        ],
        13: [
          {
            name: 'Incantesimi di Giuramento (Liv 13)',
            description: "Hai sempre preparati 'pelle di pietra' e 'tempesta di ghiaccio'.",
            spells: [
              { name: 'Pelle di Pietra', source: 'Giuramento degli Antichi' },
              { name: 'Tempesta di Ghiaccio', source: 'Giuramento degli Antichi' },
            ],
          },
        ],
        17: [
          {
            name: 'Incantesimi di Giuramento (Liv 17)',
            description:
              "Hai sempre preparati 'comunione con la natura' e 'passare attraverso gli alberi'.",
            spells: [
              { name: 'Comunione con la Natura', source: 'Giuramento degli Antichi' },
              { name: 'Passare Attraverso gli Alberi', source: 'Giuramento degli Antichi' },
            ],
          },
        ],
      },
      'Giuramento di Vendetta': {
        3: [
          {
            name: 'Incantesimi di Giuramento',
            description: "Hai sempre preparati 'anatema' e 'marchio del cacciatore'.",
            spells: [
              { name: 'Anatema', source: 'Giuramento di Vendetta' },
              { name: 'Marchio del Cacciatore', source: 'Giuramento di Vendetta' },
            ],
          },
          {
            name: 'Incanalare Divinità',
            description:
              "Ottieni 'Abiurare Nemico' (spaventi un bersaglio) e 'Voto di Inimicizia' (vantaggio agli attacchi contro una creatura).",
          },
        ],
        5: [
          {
            name: 'Incantesimi di Giuramento (Liv 5)',
            description: "Hai sempre preparati 'blocca persona' e 'passo velato'.",
            spells: [
              { name: 'Blocca Persona', source: 'Giuramento di Vendetta' },
              { name: 'Passo Velato', source: 'Giuramento di Vendetta' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Giuramento (Liv 9)',
            description: "Hai sempre preparati 'protezione dall\'energia' e 'velocità'.",
            spells: [
              { name: "Protezione dall'Energia", source: 'Giuramento di Vendetta' },
              { name: 'Velocità', source: 'Giuramento di Vendetta' },
            ],
          },
        ],
        13: [
          {
            name: 'Incantesimi di Giuramento (Liv 13)',
            description: "Hai sempre preparati 'esilio' e 'porta dimensionale'.",
            spells: [
              { name: 'Esilio', source: 'Giuramento di Vendetta' },
              { name: 'Porta Dimensionale', source: 'Giuramento di Vendetta' },
            ],
          },
        ],
        17: [
          {
            name: 'Incantesimi di Giuramento (Liv 17)',
            description: "Hai sempre preparati 'blocca mostri' e 'scrutare'.",
            spells: [
              { name: 'Blocca Mostri', source: 'Giuramento di Vendetta' },
              { name: 'Scrutare', source: 'Giuramento di Vendetta' },
            ],
          },
        ],
      },
      'Giuramento di Conquista': {
        3: [
          {
            name: 'Incantesimi di Giuramento',
            description: "Hai sempre preparati 'armatura di agathys' e 'comando'.",
            spells: [
              { name: 'Armatura di Agathys', source: 'Giuramento di Conquista' },
              { name: 'Comando', source: 'Giuramento di Conquista' },
            ],
          },
          {
            name: 'Incanalare Divinità',
            description:
              "Ottieni 'Presenza Conquistatrice' (spaventi i nemici) e 'Colpo Guidato' (+10 a un tiro di attacco).",
          },
        ],
        5: [
          {
            name: 'Incantesimi di Giuramento (Liv 5)',
            description: "Hai sempre preparati 'arma spirituale' e 'blocca persona'.",
            spells: [
              { name: 'Arma Spirituale', source: 'Giuramento di Conquista' },
              { name: 'Blocca Persona', source: 'Giuramento di Conquista' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Giuramento (Liv 9)',
            description: "Hai sempre preparati 'lentezza' e 'paura'.",
            spells: [
              { name: 'Lentezza', source: 'Giuramento di Conquista' },
              { name: 'Paura', source: 'Giuramento di Conquista' },
            ],
          },
        ],
        13: [
          {
            name: 'Incantesimi di Giuramento (Liv 13)',
            description: "Hai sempre preparati 'dominare bestie' e 'pelle di pietra'.",
            spells: [
              { name: 'Dominare Bestie', source: 'Giuramento di Conquista' },
              { name: 'Pelle di Pietra', source: 'Giuramento di Conquista' },
            ],
          },
        ],
        17: [
          {
            name: 'Incantesimi di Giuramento (Liv 17)',
            description: "Hai sempre preparati 'dominare persone' e 'nube mortale'.",
            spells: [
              { name: 'Dominare Persone', source: 'Giuramento di Conquista' },
              { name: 'Nube Mortale', source: 'Giuramento di Conquista' },
            ],
          },
        ],
      },
      'Giuramento di Redenzione': {
        3: [
          {
            name: 'Incantesimi di Giuramento',
            description: "Hai sempre preparati 'santuario' e 'sonno'.",
            spells: [
              { name: 'Santuario', source: 'Giuramento di Redenzione' },
              { name: 'Sonno', source: 'Giuramento di Redenzione' },
            ],
          },
          {
            name: 'Incanalare Divinità',
            description: "Ottieni 'Rimprovero dell'Emissario' e 'Spirito Guerriero'.",
          },
        ],
        5: [
          {
            name: 'Incantesimi di Giuramento (Liv 5)',
            description: "Hai sempre preparati 'calmare emozioni' e 'blocca persona'.",
            spells: [
              { name: 'Calmare Emozioni', source: 'Giuramento di Redenzione' },
              { name: 'Blocca Persona', source: 'Giuramento di Redenzione' },
            ],
          },
        ],
        9: [
          {
            name: 'Incantesimi di Giuramento (Liv 9)',
            description: "Hai sempre preparati 'contromagia' e 'trama ipnotica'.",
            spells: [
              { name: 'Contromagia', source: 'Giuramento di Redenzione' },
              { name: 'Trama Ipnotica', source: 'Giuramento di Redenzione' },
            ],
          },
        ],
        13: [
          {
            name: 'Incantesimi di Giuramento (Liv 13)',
            description: "Hai sempre preparati 'sfera elastica di otiluke' e 'pelle di pietra'.",
            spells: [
              { name: 'Sfera Elastica di Otiluke', source: 'Giuramento di Redenzione' },
              { name: 'Pelle di Pietra', source: 'Giuramento di Redenzione' },
            ],
          },
        ],
        17: [
          {
            name: 'Incantesimi di Giuramento (Liv 17)',
            description: "Hai sempre preparati 'blocca mostri' e 'muro di forza'.",
            spells: [
              { name: 'Blocca Mostri', source: 'Giuramento di Redenzione' },
              { name: 'Muro di Forza', source: 'Giuramento di Redenzione' },
            ],
          },
        ],
      },
    },
  },
  Ranger: {
    choiceLevel: 3,
    options: {
      Cacciatore: {
        3: [
          {
            name: 'Preda del Cacciatore',
            description:
              'Scegli tra Sterminatore di Colossi, Cacciatore di Giganti, o Sterminatore di Orde.',
          },
        ],
      },
      'Signore delle Bestie': {
        3: [
          {
            name: 'Compagno Animale',
            description:
              'Ottieni un compagno animale (bestia di GS 1/4 o inferiore) che ti obbedisce.',
          },
        ],
      },
      'Cacciatore di Mostri': {
        3: [
          {
            name: "Incantesimi dell'Uccisore",
            description: "Hai sempre preparati 'protezione dal bene e dal male'.",
            spells: [{ name: 'Protezione dal Bene e dal Male', source: 'Cacciatore di Mostri' }],
          },
          {
            name: 'Conoscenza del Cacciatore',
            description:
              'Ottieni un dado di superiorità (d6) per scoprire le vulnerabilità di un nemico.',
          },
          {
            name: "Preda dell'Uccisore",
            description:
              'Come azione bonus, marchi una creatura. Infliggi 1d6 danni extra contro di essa.',
          },
        ],
        5: [
          {
            name: "Incantesimi dell'Uccisore (Liv 5)",
            description: "Hai sempre preparati 'zona di verità'.",
            spells: [{ name: 'Zona di Verità', source: 'Cacciatore di Mostri' }],
          },
        ],
      },
      "Errante dell'Orizzonte": {
        3: [
          {
            name: "Incantesimi dell'Errante",
            description: "Hai sempre preparati 'protezione dal bene e dal male'.",
            spells: [{ name: 'Protezione dal Bene e dal Male', source: "Errante dell'Orizzonte" }],
          },
          {
            name: 'Individuazione Portali',
            description: 'Puoi percepire la presenza di portali planari.',
          },
          {
            name: 'Guerriero Planare',
            description:
              'Come azione bonus, puoi infliggere 1d8 danni da forza extra e rendere il danno magico.',
          },
        ],
        5: [
          {
            name: "Incantesimi dell'Errante (Liv 5)",
            description: "Hai sempre preparati 'passo velato'.",
            spells: [{ name: 'Passo Velato', source: "Errante dell'Orizzonte" }],
          },
        ],
      },
      'Custode delle Profondità': {
        3: [
          {
            name: 'Magia Aggiuntiva',
            description: "Impari 'immagine speculare'.",
            spells: [{ name: 'Immagine Speculare', source: 'Custode delle Profondità' }],
          },
          {
            name: 'Tentacolo delle Profondità',
            description:
              'Come azione bonus, puoi manifestare un tentacolo spettrale che attacca i tuoi nemici.',
          },
        ],
        5: [
          {
            name: 'Magia Aggiuntiva (Liv 5)',
            description: "Impari 'silenzio'.",
            spells: [{ name: 'Silenzio', source: 'Custode delle Profondità' }],
          },
        ],
      },
    },
  },
  Stregone: {
    choiceLevel: 1,
    options: {
      'Discendenza Draconica': {
        1: [
          {
            name: 'Antenato Draconico',
            description:
              'Scegli un tipo di drago come antenato, ottieni resistenza e parli il draconico.',
          },
          {
            name: 'Resilienza Draconica',
            description:
              'Il tuo massimo dei PF aumenta di 1 per livello. CA base = 13 + mod Destrezza.',
          },
        ],
      },
      'Magia Selvaggia': {
        1: [
          {
            name: 'Ondata di Magia Selvaggia',
            description: 'Il DM può farti tirare sulla tabella della Magia Selvaggia.',
          },
          {
            name: 'Venti del Caos',
            description:
              "Puoi ottenere vantaggio a un tiro. Dopo, il DM può attivare un'ondata di magia selvaggia.",
          },
        ],
      },
      'Anima Divina': {
        1: [
          {
            name: 'Favore Divino',
            description:
              'Scegli un allineamento (bene, male, legge, caos, neutralità) e ottieni un incantesimo associato.',
            spells: [{ name: 'Cura Ferite (o Infliggi Ferite)', source: 'Anima Divina' }],
          },
          {
            name: 'Magia Potenziata',
            description:
              'Quando curi o infliggi danni, puoi spendere 1 punto stregoneria per ripetere un numero di dadi pari al tuo mod di Carisma.',
          },
        ],
      },
      "Patto dell'Ombra": {
        1: [
          {
            name: "Incantesimi dell'Ombra",
            description: "Impari 'illusione minore'.",
            spells: [{ name: 'Illusione Minore', source: "Patto dell'Ombra" }],
          },
          {
            name: "Occhi dell'Oscurità",
            description:
              "Ottieni scurovisione fino a 36m. Puoi lanciare 'oscurità' spendendo 2 punti stregoneria.",
          },
          {
            name: 'Forza della Tomba',
            description:
              'Quando scendi a 0 PF, puoi fare un TS su Carisma (CD 5 + danno subito) per scendere invece a 1 PF.',
          },
        ],
      },
      'Mente Aberrante': {
        1: [
          {
            name: 'Incantesimi Psionici',
            description:
              "Ottieni incantesimi bonus come 'dissonanza sussurrante' e 'tentacoli di Hadar'.",
            spells: [
              { name: 'Dissonanza Sussurrante', source: 'Mente Aberrante' },
              { name: 'Tentacoli di Hadar', source: 'Mente Aberrante' },
            ],
          },
          {
            name: 'Parole Telepatiche',
            description: 'Puoi formare un legame telepatico con un numero di creature.',
          },
        ],
      },
    },
  },
  Warlock: {
    choiceLevel: 1,
    options: {
      'Il Grande Antico': {
        1: [
          {
            name: 'Lista Incantesimi Espansa',
            description:
              "Ottieni accesso a 'risata incontenibile di Tasha' e 'dissonanza sussurrante'.",
            spells: [
              { name: 'Risata Incontenibile di Tasha', source: 'Il Grande Antico' },
              { name: 'Dissonanza Sussurrante', source: 'Il Grande Antico' },
            ],
          },
          {
            name: 'Mente Risvegliata',
            description: 'Puoi comunicare telepaticamente con qualsiasi creatura entro 9m.',
          },
        ],
      },
      "L'Immondo": {
        1: [
          {
            name: 'Lista Incantesimi Espansa',
            description: "Ottieni accesso a 'mani brucianti' e 'comando'.",
            spells: [
              { name: 'Mani Brucianti', source: "L'Immondo" },
              { name: 'Comando', source: "L'Immondo" },
            ],
          },
          {
            name: "Benedizione dell'Oscuro",
            description: 'Quando riduci una creatura ostile a 0 PF, ottieni PF temporanei.',
          },
        ],
      },
      'Il Signore Fatato': {
        1: [
          {
            name: 'Lista Incantesimi Espansa',
            description: "Ottieni accesso a 'charme su persone' e 'luminescenza'.",
            spells: [
              { name: 'Charme su Persone', source: 'Il Signore Fatato' },
              { name: 'Luminescenza', source: 'Il Signore Fatato' },
            ],
          },
          {
            name: 'Presenza Fatata',
            description: 'Come azione, puoi affascinare o spaventare le creature vicine.',
          },
        ],
      },
      'Il Celestiale': {
        1: [
          {
            name: 'Lista Incantesimi Espansa',
            description: "Ottieni accesso a 'cura ferite' e 'parola guaritrice'.",
            spells: [
              { name: 'Cura Ferite', source: 'Il Celestiale' },
              { name: 'Parola Guaritrice', source: 'Il Celestiale' },
            ],
          },
          { name: 'Trucchetti Espansi', description: "Impari 'luce' e 'fiamma sacra'." },
          {
            name: 'Luce Guaritrice',
            description:
              'Hai una riserva di d6 che puoi usare come azione bonus per curare creature a distanza.',
          },
        ],
      },
      'La Lama Maledetta (Hexblade)': {
        1: [
          {
            name: 'Lista Incantesimi Espansa',
            description: "Ottieni accesso a 'ira' e 'scudo'.",
            spells: [
              { name: 'Ira', source: 'Lama Maledetta' },
              { name: 'Scudo', source: 'Lama Maledetta' },
            ],
          },
          {
            name: 'Maledizione della Lama Maledetta',
            description:
              'Come azione bonus, maledici una creatura. Ottieni un bonus ai danni contro di essa, fai critico con 19-20 e recuperi PF se muore.',
          },
          {
            name: 'Guerriero Maledetto',
            description:
              'Ottieni competenza in armature medie, scudi e armi da guerra. Puoi usare il Carisma per i tiri di attacco e per i danni con la tua arma.',
          },
        ],
      },
    },
  },
}
