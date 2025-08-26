// src/data/dndSubclasses.js

export const dndSubclasses = {
  "Artefice": {
    choiceLevel: 3,
    options: {
      "Alchimista": {
        3: [{ name: "Omeopata Sperimentale", description: "Crei un 'elisir sperimentale' con effetti casuali durante ogni riposo lungo." }, { name: "Competenza negli Strumenti", description: "Ottieni competenza con gli strumenti da alchimista." }],
        5: [{ name: "Sapiente Alchemico", description: "Aggiungi il tuo mod di Intelligenza a un tiro di dado quando ripristini PF o infliggi danni da acido, necrotici, veleno o fuoco con un incantesimo da artefice." }]
      },
      "Artigliere": {
        3: [{ name: "Competenza negli Strumenti", description: "Ottieni competenza con gli strumenti da intagliatore e da falegname." }, { name: "Incantesimi dell'Artigliere", description: "Ottieni incantesimi bonus come 'scudo' e 'onda tonante'." }, { name: "Cannone Eldritch", description: "Come azione, puoi creare un cannone magico che ti aiuta in battaglia (Lanciafiamme, Balista di Forza, Protettore)." }],
        5: [{ name: "Focolaio Arcano", description: "Puoi incanalare i tuoi incantesimi attraverso il cannone e aggiungi 1d8 al tiro per i danni di un incantesimo da artefice." }]
      },
      "Fabbro da Battaglia": {
        3: [{ name: "Competenza negli Strumenti", description: "Ottieni competenza con gli strumenti da fabbro." }, { name: "Incantesimi del Fabbro da Battaglia", description: "Ottieni incantesimi bonus come 'eroismo' e 'punizione marchiante'." }, { name: "Pronto alla Battaglia", description: "Quando attacchi con un'arma magica, puoi usare il tuo modificatore di Intelligenza invece di Forza o Destrezza." }, { name: "Difensore d'Acciaio", description: "Costruisci un compagno canino robotico che combatte al tuo fianco." }],
        5: [{ name: "Attacco Extra", description: "Puoi attaccare due volte invece di una." }]
      }
    }
  },
  "Barbaro": {
    choiceLevel: 3,
    options: {
      "Cammino del Berserker": { 3: [{ name: "Frenesia", description: "In ira, puoi entrare in frenesia per effettuare un attacco extra come azione bonus. Al termine dell'ira, subisci un livello di sfinimento." }] },
      "Cammino del Combattente Totemico": { 3: [{ name: "Cercatore di Totem", description: "Ottieni gli incantesimi 'parlare con gli animali' e 'senso animale' come rituali." }, { name: "Spirito Totemico", description: "Scegli uno spirito totem (Orso, Aquila, Lupo) che ti conferisce benefici mentre sei in ira." }] },
      "Cammino della Magia Selvaggia": { 3: [{ name: "Percezione della Magia", description: "Come azione, puoi percepire la presenza di incantesimi e oggetti magici." }, { name: "Ondata di Magia Selvaggia", description: "Quando entri in ira, tiri sulla tabella della Magia Selvaggia per un effetto magico casuale." }] },
      "Cammino della Via Guerriera Ancestrale": { 3: [{ name: "Protettori Ancestrali", description: "Mentre sei in ira, il primo nemico che colpisci ha svantaggio ad attaccare chiunque altro tranne te, e i tuoi alleati ottengono resistenza ai danni di quell'attacco." }] },
      "Cammino dello Zelota": { 3: [{ name: "Furia Divina", description: "Mentre sei in ira, il primo nemico che colpisci in ogni tuo turno subisce 1d6 + metà del tuo livello da barbaro danni radianti o necrotici extra." }, { name: "Guerriero degli Dei", description: "Se un incantesimo per riportarti in vita viene lanciato su di te, non sono necessari componenti materiali." }] }
    }
  },
  "Bardo": {
    choiceLevel: 3,
    options: {
      "Collegio della Creazione": { 3: [{ name: "Nota della Creazione", description: "Quando dai a qualcuno un'Ispirazione Bardica, crei una nota danzante che può essere usata per vari effetti (es. infliggere danni, creare copertura)." }, { name: "Oggetto di Scena", description: "Come azione, puoi creare un oggetto non magico che dura per un certo numero di ore." }] },
      "Collegio dell'Eloquenza": { 3: [{ name: "Lingua Argentea", description: "Quando fai una prova di Persuasione o Inganno, qualsiasi tiro di 9 o inferiore sul d20 viene considerato un 10." }, { name: "Discorso Inquietante", description: "Come azione bonus, spendi un'Ispirazione Bardica per far sì che un nemico sottragga il risultato del dado al suo prossimo tiro salvezza." }] },
      "Collegio del Glamour": { 3: [{ name: "Manto di Ispirazione", description: "Come azione bonus, spendi un'ispirazione per dare a te e ad alcuni alleati PF temporanei e la possibilità di muoversi con la reazione." }, { name: "Aspetto Incantevole", description: "Come azione bonus, puoi assumere un aspetto ultraterreno per 1 minuto, che ti aiuta a influenzare gli altri." }] },
      "Collegio della Sapienza": { 3: [{ name: "Competenze Bonus", description: "Ottieni competenza in tre abilità a tua scelta." }, { name: "Parole Taglienti", description: "Usi la reazione e un'ispirazione per sottrarre il risultato del dado a un tiro nemico." }] },
      "Collegio delle Spade": { 3: [{ name: "Competenza Bonus", description: "Ottieni competenza in armature medie e scimitarre." }, { name: "Stile di Combattimento", description: "Scegli tra Combattere con Due Armi o Duellare." }, { name: "Lama Fiorita", description: "Puoi usare un'arma come focus per i tuoi incantesimi. Puoi attaccare e poi usare un'Ispirazione Bardica per applicare una 'Fioritura' (es. aumentare il danno, spingere il nemico, aumentare la tua CA)." }] },
      "Collegio del Valore": { 3: [{ name: "Competenza Bonus", description: "Ottieni competenza in armature medie, scudi e armi da guerra." }, { name: "Ispirazione da Combattimento", description: "Un alleato con Ispirazione Bardica può aggiungerla ai danni o usarla come reazione per aumentare la sua CA." }] },
      "Collegio dei Sussurri": { 3: [{ name: "Lame Psichiche", description: "Quando colpisci una creatura con un'arma, puoi spendere un'ispirazione per infliggere 2d6 danni psichici extra." }, { name: "Parole di Terrore", description: "Puoi parlare con un umanoide per 1 minuto per instillargli una paura profonda. Deve superare un TS su Saggezza o essere spaventato da te o da un'altra creatura a tua scelta." }] }
    }
  },
// Incolla questo codice subito dopo il codice della Parte 1, nello stesso file.

  "Chierico": {
    choiceLevel: 1,
    options: {
      "Dominio della Conoscenza": { 1: [{ name: "Benedizioni della Conoscenza", description: "Impari due linguaggi e ottieni competenza con bonus doppio in due abilità (Arcano, Storia, Natura, Religione)." }], 2: [{ name: "Incanalare Divinità: Conoscenza delle Ere", description: "Ottieni competenza temporanea in un'abilità o strumento." }] },
      "Dominio della Forgia": { 1: [{ name: "Competenza Bonus", description: "Ottieni competenza in armature pesanti e strumenti da fabbro." }, { name: "Benedizione della Forgia", description: "Puoi rendere un'arma o un'armatura +1 fino al prossimo riposo lungo." }], 2: [{ name: "Incanalare Divinità: Benedizione dell'Artigiano", description: "Puoi creare un semplice oggetto di metallo." }] },
      "Dominio della Guerra": { 1: [{ name: "Competenza Bonus", description: "Ottieni competenza in armature pesanti e armi da guerra." }, { name: "Prete Guerriero", description: "Quando usi l'azione Attaccare, puoi effettuare un attacco come azione bonus." }], 2: [{ name: "Incanalare Divinità: Colpo Guidato", description: "Ottieni un bonus di +10 a un tiro di attacco." }] },
      "Dominio della Luce": { 1: [{ name: "Trucchetto Bonus", description: "Impari il trucchetto 'luce'." }, { name: "Interdizione Ardente", description: "Come reazione, puoi imporre svantaggio a un attacco contro di te." }], 2: [{ name: "Incanalare Divinità: Radianza dell'Aurora", description: "Dissipi l'oscurità e infliggi danni radianti." }] },
      "Dominio della Morte": { 1: [{ name: "Competenza Bonus", description: "Ottieni competenza nelle armi da guerra." }, { name: "Mietitore", description: "Impari un trucchetto di necromanzia. Se lo lanci su una creatura, puoi bersagliarne due se sono vicine." }], 2: [{ name: "Incanalare Divinità: Tocco Mortale", description: "Quando colpisci con un'arma da mischia, puoi infliggere 5 + il doppio del tuo livello da chierico danni necrotici extra." }] },
      "Dominio della Natura": { 1: [{ name: "Discepolo della Natura", description: "Impari un trucchetto da druido e ottieni competenza in un'abilità (Addestrare Animali, Natura o Sopravvivenza)." }, { name: "Competenza Bonus", description: "Ottieni competenza nelle armature pesanti." }], 2: [{ name: "Incanalare Divinità: Ammaliare Animali e Piante", description: "Scacci o ammalii bestie e vegetali." }] },
      "Dominio dell'Ordine": { 1: [{ name: "Competenza Bonus", description: "Ottieni competenza in armature pesanti e in un'abilità (Intimidire o Persuasione)." }, { name: "Voce dell'Autorità", description: "Quando lanci un incantesimo su un alleato, puoi usare la reazione per permettere a quell'alleato di fare un attacco." }], 2: [{ name: "Incanalare Divinità: Ordine Esigente", description: "Forzi le creature a gettare ciò che impugnano e a cadere prone." }] },
      "Dominio della Pace": { 1: [{ name: "Strumento della Pace", description: "Ottieni competenza in un'abilità (Intuizione, Intrattenere o Persuasione)." }, { name: "Legame Incoraggiante", description: "Puoi creare un legame tra creature. Finché sono vicine, possono aggiungere un d4 ai tiri di attacco, prove di caratteristica o TS una volta per turno." }], 2: [{ name: "Incanalare Divinità: Balsamo della Pace", description: "Come azione, ti muovi e puoi curare le creature che attraversi." }] },
      "Dominio della Tempesta": { 1: [{ name: "Competenza Bonus", description: "Ottieni competenza in armature pesanti e armi da guerra." }, { name: "Ira della Tempesta", description: "Come reazione quando vieni colpito, infliggi 2d8 danni da fulmine o tuono." }], 2: [{ name: "Incanalare Divinità: Furia Distruttiva", description: "Infliggi il massimo dei danni da fulmine o tuono." }] },
      "Dominio dell'Inganno": { 1: [{ name: "Benedizione dell'Ingannatore", description: "Dai vantaggio alle prove di Furtività a un alleato." }], 2: [{ name: "Incanalare Divinità: Invocare Duplicità", description: "Crei un duplicato illusorio che ti dà vantaggio agli attacchi." }] },
      "Dominio del Crepuscolo": { 1: [{ name: "Competenza Bonus", description: "Ottieni competenza in armature pesanti e armi da guerra." }, { name: "Occhi della Notte", description: "Hai scurovisione fino a 90m e puoi condividerla con gli alleati." }, { name: "Vigilanza Benedetta", description: "Dai a un alleato vantaggio al suo prossimo tiro di iniziativa." }], 2: [{ name: "Incanalare Divinità: Santuario del Crepuscolo", description: "Crei una sfera di crepuscolo che dà a te e ai tuoi alleati PF temporanei o termina un effetto di charme/paura alla fine di ogni loro turno." }] },
      "Dominio della Vita": { 1: [{ name: "Competenza Bonus", description: "Ottieni competenza nelle armature pesanti." }, { name: "Discepolo della Vita", description: "Gli incantesimi di cura ripristinano PF aggiuntivi." }], 2: [{ name: "Incanalare Divinità: Preservare Vita", description: "Come azione, ripristini PF pari a 5 volte il tuo livello da chierico." }] }
    }
  },
  "Druido": {
    choiceLevel: 2,
    options: {
      "Circolo dei Sogni": { 2: [{ name: "Balsamo della Corte d'Estate", description: "Hai una riserva di d6 che puoi usare come azione bonus per curare creature a distanza." }] },
      "Circolo della Terra": { 2: [{ name: "Trucchetto Bonus", description: "Impari un trucchetto da druido aggiuntivo." }, { name: "Recupero Naturale", description: "Durante un riposo breve, recuperi slot incantesimo spesi." }], 3: [{ name: "Incantesimi del Circolo", description: "Ottieni accesso a incantesimi aggiuntivi basati sul tipo di terra scelto." }] },
      "Circolo della Luna": { 2: [{ name: "Forma Selvatica da Combattimento", description: "Usi la Forma Selvatica come azione bonus e puoi assumere forme di bestie con GS 1." }, { name: "Forme del Circolo", description: "Le tue forme selvatiche possono essere più potenti." }] },
      "Circolo del Pastore": { 2: [{ name: "Favella Spirituale", description: "Impari 'parlare con gli animali' e puoi parlare con le bestie." }, { name: "Totem Spirituale", description: "Come azione bonus, evochi uno spirito totem (Orso, Aquila, Unicorno) che fornisce un'aura benefica." }] },
      "Circolo delle Spore": { 2: [{ name: "Aura di Spore", description: "Come reazione, infliggi 1d4 danni necrotici a una creatura vicina." }, { name: "Simbiosi Selvatica", description: "Usi una Forma Selvatica per ottenere PF temporanei e raddoppiare i danni dell'Aura di Spore." }] },
      "Circolo degli Astri": { 2: [{ name: "Mappa Stellare", description: "Crei una mappa stellare che funge da focus. Impari il trucchetto 'guida'." }, { name: "Forma Stellata", description: "Usi una Forma Selvatica per assumere una forma stellata (Arciere, Calice, Drago) con benefici unici." }] }
    }
  },
  // Incolla questo codice subito dopo il codice della Parte 2, nello stesso file.
// Questa parte finale contiene tutte le altre classi

  "Guerriero": {
    choiceLevel: 3,
    options: {
      "Arciere Arcano": { 3: [{ name: "Tiro Arcano", description: "Impari due opzioni di Tiro Arcano (es. Freccia Esplosiva, Freccia Vincolante) da applicare ai tuoi attacchi con arco." }, { name: "Conoscenza dell'Arciere Arcano", description: "Ottieni competenza in Arcano o Natura e impari un trucchetto ('prestidigitazione' o 'druidismo')." }] },
      "Cavaliere": { 3: [{ name: "Competenza Bonus", description: "Ottieni competenza in un'abilità o un linguaggio." }, { name: "Nato per la Sella", description: "Vantaggio ai TS per non cadere da cavallo e puoi montare/smontare con solo 1,5m di movimento." }, { name: "Marcatura Inesorabile", description: "Quando colpisci una creatura, puoi marcarla, dandole svantaggio ad attaccare chiunque altro." }] },
      "Campione": { 3: [{ name: "Critico Migliorato", description: "I tuoi attacchi mettono a segno un colpo critico con un risultato di 19 o 20." }] },
      "Maestro di Battaglia": { 3: [{ name: "Studente di Guerra", description: "Ottieni competenza in un tipo di strumenti da artigiano." }, { name: "Superiorità in Combattimento", description: "Ottieni 4 dadi di superiorità (d8) e impari 3 manovre a tua scelta." }] },
      "Cavaliere Mistico": { 3: [{ name: "Incantesimi", description: "Impari a lanciare incantesimi da mago (INT)." }, { name: "Legame con l'Arma", description: "Puoi legare a te fino a due armi, non puoi essere disarmato da esse e puoi evocarle nella tua mano come azione bonus." }] },
      "Samurai": { 3: [{ name: "Competenza Bonus", description: "Ottieni competenza in un'abilità (Storia, Intuizione, Intrattenere o Persuasione)." }, { name: "Spirito Combattivo", description: "Come azione bonus, puoi darti PF temporanei e vantaggio a tutti i tiri di attacco con arma fino alla fine del turno." }] }
    }
  },
  "Ladro": {
    choiceLevel: 3,
    options: {
      "Assassino": { 3: [{ name: "Competenze Bonus", description: "Competenza con kit da travestimento e kit da avvelenatore." }, { name: "Assassinare", description: "Vantaggio agli attacchi contro creature che non hanno ancora agito. I colpi contro creature sorprese sono critici." }] },
      "Inquisitore": { 3: [{ name: "Orecchio per l'Inganno", description: "Se sospetti un inganno, puoi fare una prova di Saggezza (Intuizione) contro una CD fissa di 8 + mod Inganno + competenza del bersaglio per determinare se sta mentendo." }, { name: "Occhio per i Dettagli", description: "Puoi usare un'azione bonus per fare una prova di Saggezza (Percezione) per individuare una creatura o un oggetto nascosto o una prova di Intelligenza (Indagare) per decifrare indizi." }, { name: "Intuizione Penetrante", description: "Quando fai una prova di Saggezza (Intuizione) per determinare se una creatura sta mentendo, hai vantaggio." }] },
      "Mente Maestra": { 3: [{ name: "Maestro dell'Intrigo", description: "Ottieni competenza con il kit da travestimento, il kit da falsario e un set da gioco. Impari anche due linguaggi." }, { name: "Maestro della Tattica", description: "Puoi usare l'azione Aiutare come azione bonus. Inoltre, puoi aiutare un alleato entro 9m." }] },
      "Esploratore": { 3: [{ name: "Escursionista", description: "Ottieni competenza (con bonus doppio) in Natura e Sopravvivenza." }, { name: "Agguato", description: "Vantaggio all'iniziativa. Vantaggio agli attacchi contro creature che non hanno ancora agito nel primo round." }] },
      "Spadaccino (Swashbuckler)": { 3: [{ name: "Gioco di Piedi Fantasioso", description: "Se fai un attacco in mischia contro una creatura, essa non può fare attacchi di opportunità contro di te." }, { name: "Audacia Sfrontata", description: "Aggiungi il tuo mod di Carisma all'iniziativa. Puoi usare l'Attacco Furtivo se sei entro 1,5m dal bersaglio e nessun altro è vicino a te." }] },
      "Mistificatore Arcano": { 3: [{ name: "Incantesimi", description: "Impari a lanciare incantesimi da mago (INT)." }, { name: "Raggiro Magico", description: "Distrai le creature vicine per dare vantaggio a te o a un alleato." }] },
      "Ladro": { 3: [{ name: "Mani Veloci", description: "Usi l'azione bonus per fare una prova di Rapidità di Mano, usare strumenti da ladro o l'azione 'Usare un oggetto'." }, { name: "Scalatore del Secondo Piano", description: "Scalare non costa movimento extra e puoi fare un salto in lungo migliorato." }] }
    }
  },
  "Mago": {
    choiceLevel: 2,
    options: {
      "Scuola di Abiurazione": { 2: [{ name: "Studioso di Abiurazione", description: "Tempo e costo per copiare incantesimi di abiurazione sono dimezzati." }, { name: "Interdizione Arcana", description: "Crei uno scudo magico protettivo con PF." }] },
      "Scuola di Ammaliamento": { 2: [{ name: "Studioso di Ammaliamento", description: "Tempo e costo per copiare incantesimi di ammaliamento sono dimezzati." }, { name: "Sguardo Ammaliatore", description: "Come azione, puoi affascinare una creatura entro 1,5m." }] },
      "Scuola di Divinazione": { 2: [{ name: "Studioso di Divinazione", description: "Tempo e costo per copiare incantesimi di divinazione sono dimezzati." }, { name: "Presagio", description: "Dopo un riposo lungo, tiri due d20 e registri i risultati. Puoi sostituire qualsiasi tiro con uno di questi." }] },
      "Scuola di Evocazione": { 2: [{ name: "Studioso di Evocazione", description: "Tempo e costo per copiare incantesimi di evocazione sono dimezzati." }, { name: "Evocazione Minore", description: "Come azione, puoi creare un oggetto non magico inerte." }] },
      "Scuola di Illusione": { 2: [{ name: "Studioso di Illusione", description: "Tempo e costo per copiare incantesimi di illusione sono dimezzati." }, { name: "Illusione Minore Migliorata", description: "Impari 'illusione minore'. Se già lo conosci, ne impari un altro. Puoi creare suono e immagine con un solo lancio." }] },
      "Scuola di Invocazione": { 2: [{ name: "Studioso di Invocazione", description: "Tempo e costo per copiare incantesimi di invocazione sono dimezzati." }, { name: "Scolpire Incantesimi", description: "Crei zone di sicurezza nei tuoi incantesimi di invocazione per proteggere gli alleati." }] },
      "Scuola di Necromanzia": { 2: [{ name: "Studioso di Necromanzia", description: "Tempo e costo per copiare incantesimi di necromanzia sono dimezzati." }, { name: "Tristo Raccolto", description: "Se uccidi una creatura con un incantesimo, recuperi PF." }] },
      "Scuola di Trasmutazione": { 2: [{ name: "Studioso di Trasmutazione", description: "Tempo e costo per copiare incantesimi di trasmutazione sono dimezzati." }, { name: "Alchimia Minore", description: "Puoi trasmutare un materiale (legno, pietra, etc.) in un altro per 1 ora." }] },
      "Magia da Guerra": { 2: [{ name: "Deviazione Arcana", description: "Come reazione quando vieni colpito o fallisci un TS, puoi ottenere +2 alla CA o +4 al TS." }, { name: "Sovraccarico Tattico", description: "Quando usi la tua azione per lanciare un trucchetto, puoi usare la tua azione bonus per fare un attacco con arma." }] }
    }
  },
  "Monaco": {
    choiceLevel: 3,
    options: {
      "Via della Mano Aperta": { 3: [{ name: "Tecnica della Mano Aperta", description: "Quando colpisci con Raffica di Colpi, puoi far cadere prono, spingere o impedire le reazioni del bersaglio." }] },
      "Via dell'Ombra": { 3: [{ name: "Arti dell'Ombra", description: "Puoi spendere 2 punti Ki per lanciare 'oscurità', 'passo velato', 'silenzio' o 'passare senza tracce'." }] },
      "Via dei Quattro Elementi": { 3: [{ name: "Discepolo degli Elementi", description: "Impari discipline elementali che ti permettono di manipolare gli elementi spendendo punti Ki." }] },
      "Via dell'Anima Solare": { 3: [{ name: "Raggio del Sole Radiante", description: "Puoi lanciare proiettili di luce a distanza che infliggono danni radianti. Puoi anche spendere Ki per lanciare 'mani brucianti'." }] },
      "Via del Maestro Ubriaco": { 3: [{ name: "Competenza Bonus", description: "Ottieni competenza in Intrattenere e con gli strumenti da birraio." }, { name: "Tecnica dell'Ubriaco", description: "Quando usi Raffica di Colpi, ottieni il beneficio dell'azione Disimpegnare e la tua velocità aumenta di 3m." }] }
    }
  },
  "Paladino": {
    choiceLevel: 3,
    options: {
      "Giuramento di Devozione": { 3: [{ name: "Incanalare Divinità", description: "Ottieni 'Arma Sacra' (+ mod Carisma al TxC) e 'Scacciare i Sacrileghi'." }] },
      "Giuramento degli Antichi": { 3: [{ name: "Incanalare Divinità", description: "Ottieni 'Ira della Natura' (incatena un bersaglio) e 'Scacciare gli Infedeli' (scacci fatati e immondi)." }] },
      "Giuramento di Vendetta": { 3: [{ name: "Incanalare Divinità", description: "Ottieni 'Abiurare Nemico' (spaventi un bersaglio) e 'Voto di Inimicizia' (vantaggio agli attacchi contro una creatura)." }] },
      "Giuramento di Conquista": { 3: [{ name: "Incanalare Divinità", description: "Ottieni 'Presenza Conquistatrice' (spaventi i nemici) e 'Colpo Guidato' (+10 a un tiro di attacco)." }] },
      "Giuramento di Redenzione": { 3: [{ name: "Incanalare Divinità", description: "Ottieni 'Rimprovero dell'Emissario' (come reazione, se un nemico danneggia un altro, puoi forzarlo a subire metà di quel danno) e 'Spirito Guerriero' (la tua aura aumenta la CA degli alleati)." }] }
    }
  },
  "Ranger": {
    choiceLevel: 3,
    options: {
      "Cacciatore": { 3: [{ name: "Preda del Cacciatore", description: "Scegli tra Sterminatore di Colossi, Cacciatore di Giganti, o Sterminatore di Orde." }] },
      "Signore delle Bestie": { 3: [{ name: "Compagno Animale", description: "Ottieni un compagno animale (bestia di GS 1/4 o inferiore) che ti obbedisce." }] },
      "Cacciatore di Mostri": { 3: [{ name: "Conoscenza del Cacciatore", description: "Ottieni un dado di superiorità (d6) per scoprire le vulnerabilità di un nemico." }, { name: "Preda dell'Uccisore", description: "Come azione bonus, marchi una creatura. Infliggi 1d6 danni extra contro di essa." }] },
      "Errante dell'Orizzonte": { 3: [{ name: "Individuazione Portali", description: "Puoi percepire la presenza di portali planari." }, { name: "Guerriero Planare", description: "Come azione bonus, puoi infliggere 1d8 danni da forza extra e rendere il danno magico." }] },
      "Custode delle Profondità": { 3: [{ name: "Magia Aggiuntiva", description: "Impari 'immagine speculare'." }, { name: "Tentacolo delle Profondità", description: "Come azione bonus, puoi manifestare un tentacolo spettrale che attacca i tuoi nemici." }] }
    }
  },
  "Stregone": {
    choiceLevel: 1,
    options: {
      "Discendenza Draconica": { 1: [{ name: "Antenato Draconico", description: "Scegli un tipo di drago come antenato." }, { name: "Resilienza Draconica", description: "Il tuo massimo dei PF aumenta di 1 per livello. CA base = 13 + mod Destrezza." }] },
      "Magia Selvaggia": { 1: [{ name: "Ondata di Magia Selvaggia", description: "Il DM può farti tirare sulla tabella della Magia Selvaggia." }, { name: "Venti del Caos", description: "Puoi ottenere vantaggio a un tiro. Dopo, il DM può attivare un'ondata di magia selvaggia." }] },
      "Anima Divina": { 1: [{ name: "Favore Divino", description: "Scegli un allineamento (bene, male, legge, caos, neutralità) e ottieni un incantesimo associato." }, { name: "Magia Potenziata", description: "Quando curi o infliggi danni, puoi spendere 1 punto stregoneria per ripetere un numero di dadi pari al tuo mod di Carisma." }] },
      "Patto dell'Ombra": { 1: [{ name: "Occhi dell'Oscurità", description: "Ottieni scurovisione fino a 36m. Puoi lanciare 'oscurità' spendendo 2 punti stregoneria." }, { name: "Forza della Tomba", description: "Quando scendi a 0 PF, puoi fare un TS su Carisma (CD 5 + danno subito) per scendere invece a 1 PF." }] },
      "Mente Aberrante": { 1: [{ name: "Incantesimi Psionici", description: "Ottieni incantesimi bonus come 'dissonanza sussurrante' e 'tentacoli di Hadar'." }, { name: "Parole Telepatiche", description: "Puoi formare un legame telepatico con un numero di creature." }] }
    }
  },
  "Warlock": {
    choiceLevel: 1,
    options: {
      "Il Grande Antico": { 1: [{ name: "Mente Risvegliata", description: "Puoi comunicare telepaticamente con qualsiasi creatura entro 9m." }] },
      "L'Immondo": { 1: [{ name: "Benedizione dell'Oscuro", description: "Quando riduci una creatura ostile a 0 PF, ottieni PF temporanei." }] },
      "Il Signore Fatato": { 1: [{ name: "Presenza Fatata", description: "Come azione, puoi affascinare o spaventare le creature vicine." }] },
      "Il Celestiale": { 1: [{ name: "Trucchetti Espansi", description: "Impari 'luce' e 'fiamma sacra'." }, { name: "Luce Guaritrice", description: "Hai una riserva di d6 che puoi usare come azione bonus per curare creature a distanza." }] },
      "La Lama Maledetta (Hexblade)": { 1: [{ name: "Maledizione della Lama Maledetta", description: "Come azione bonus, maledici una creatura. Ottieni un bonus ai danni contro di essa, fai critico con 19-20 e recuperi PF se muore." }, { name: "Guerriero Maledetto", description: "Ottieni competenza in armature medie, scudi e armi da guerra. Puoi usare il Carisma per i tiri di attacco e per i danni con la tua arma." }] }
    }
  }
};