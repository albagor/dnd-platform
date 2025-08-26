// src/data/dndClassFeatures.js

export const dndClassFeatures = {
  "Barbaro": {
    1: [{ name: "Ira", description: "Bonus ai danni, vantaggio alle prove di Forza, resistenza a danni contondenti, perforanti, taglienti." }, { name: "Difesa Senza Armatura", description: "CA = 10 + mod Destrezza + mod Costituzione." }],
    2: [{ name: "Attacco Avventato", description: "Ottieni vantaggio ai tiri di attacco basati su Forza, ma gli attacchi contro di te hanno vantaggio." }, { name: "Percezione del Pericolo", description: "Vantaggio ai TS su Destrezza contro effetti che puoi vedere." }],
    3: [{ name: "Cammino Primordiale", description: "Scegli un cammino (es. Berserker)." }],
    4: [{ name: "Aumento Punteggi di Caratteristica", description: "Aumenti un punteggio di 2 o due punteggi di 1." }],
    5: [{ name: "Attacco Extra", description: "Puoi attaccare due volte invece di una quando usi l'azione Attaccare." }, { name: "Movimento Veloce", description: "La tua velocità aumenta di 3m se non indossi armature pesanti." }]
  },
  "Bardo": {
    1: [{ name: "Incantesimi", description: "Lanci incantesimi basati sul Carisma." }, { name: "Ispirazione Bardica (d6)", description: "Usi un'azione bonus per dare a una creatura un d6 da aggiungere a una prova, tiro di attacco o TS." }],
    2: [{ name: "Factotum", description: "Aggiungi metà del tuo bonus di competenza a qualsiasi prova di caratteristica in cui non sei competente." }, { name: "Canto di Riposo (d6)", description: "Durante un riposo breve, le creature che ti ascoltano recuperano 1d6 PF extra se spendono Dadi Vita." }],
    3: [{ name: "Collegio Bardico", description: "Scegli un collegio (es. Sapienza)." }, { name: "Maestria", description: "Scegli 2 tue competenze in abilità per raddoppiare il bonus di competenza." }],
    4: [{ name: "Aumento Punteggi di Caratteristica", description: "Aumenti un punteggio di 2 o due punteggi di 1." }],
    5: [{ name: "Fonte di Ispirazione", description: "Recuperi gli usi di Ispirazione Bardica con un riposo breve." }, { name: "Ispirazione Bardica (d8)", description: "Il dado di Ispirazione diventa un d8." }]
  },
  "Chierico": {
    1: [{ name: "Incantesimi", description: "Lanci incantesimi basati sulla Saggezza." }, { name: "Dominio Divino", description: "Scegli un dominio (es. Vita)." }, { name: "Privilegi di Dominio", description: "Ottieni privilegi basati sul dominio scelto." }],
    2: [{ name: "Incanalare Divinità (1/riposo)", description: "Usi effetti divini come Scacciare Non Morti." }],
    3: [{ name: "Incantesimi di 2° Livello", description: "Puoi preparare e lanciare incantesimi di 2° livello." }],
    4: [{ name: "Aumento Punteggi di Caratteristica", description: "Aumenti un punteggio di 2 o due punteggi di 1." }],
    5: [{ name: "Distruggere Non Morti (GS 1/2)", description: "I non morti scacciati con GS 1/2 o inferiore sono distrutti." }]
  },
  "Druido": {
    1: [{ name: "Incantesimi", description: "Lanci incantesimi basati sulla Saggezza." }, { name: "Druidico", description: "Conosci il Druidico, il linguaggio segreto dei druidi." }],
    2: [{ name: "Forma Selvatica (2/riposo)", description: "Puoi usare la tua azione per trasformarti in una bestia che hai già visto (GS 1/4 max, no velocità di volo)." }, { name: "Circolo Druidico", description: "Scegli un circolo (es. Terra)." }],
    3: [{ name: "Incantesimi di 2° Livello", description: "Puoi preparare e lanciare incantesimi di 2° livello." }],
    4: [{ name: "Aumento Punteggi di Caratteristica", description: "Aumenti un punteggio di 2 o due punteggi di 1." }, { name: "Uso Migliorato della Forma Selvatica", description: "Puoi trasformarti in bestie con GS 1/2 max (no velocità di volo)." }],
    5: [{ name: "Incantesimi di 3° Livello", description: "Puoi preparare e lanciare incantesimi di 3° livello." }]
  },
  "Guerriero": {
    1: [{ name: "Stile di Combattimento", description: "Adotti uno stile di combattimento come tua specialità." }, { name: "Recuperare Energie (1/riposo)", description: "Usi un'azione bonus per recuperare 1d10 + livello da guerriero PF." }],
    2: [{ name: "Azione Impetuosa (1/riposo)", description: "Puoi effettuare un'azione extra nel tuo turno." }],
    3: [{ name: "Archetipo Marziale", description: "Scegli un archetipo (es. Campione)." }],
    4: [{ name: "Aumento Punteggi di Caratteristica", description: "Aumenti un punteggio di 2 o due punteggi di 1." }],
    5: [{ name: "Attacco Extra", description: "Puoi attaccare due volte invece di una quando usi l'azione Attaccare." }]
  },
  "Ladro": {
    1: [{ name: "Maestria", description: "Scegli 2 tue competenze in abilità (o 1 e strumenti da ladro) per raddoppiare il bonus di competenza." }, { name: "Attacco Furtivo (1d6)", description: "Una volta per turno, puoi infliggere 1d6 danni extra a una creatura che colpisci se hai vantaggio o un alleato è entro 1,5m da essa." }, { name: "Gergo Ladresco", description: "Conosci il gergo segreto dei ladri." }],
    2: [{ name: "Azione Scaltra", description: "Puoi usare un'azione bonus per Scattare, Disimpegnare o Nasconderti." }],
    3: [{ name: "Archetipo Ladresco", description: "Scegli un archetipo (es. Assassino)." }, { name: "Attacco Furtivo (2d6)", description: "Il danno extra aumenta a 2d6." }],
    4: [{ name: "Aumento Punteggi di Caratteristica", description: "Aumenti un punteggio di 2 o due punteggi di 1." }],
    5: [{ name: "Schivata Istintiva", description: "Usi la tua reazione per dimezzare il danno di un attacco che puoi vedere." }, { name: "Attacco Furtivo (3d6)", description: "Il danno extra aumenta a 3d6." }]
  },
  "Mago": {
    1: [{ name: "Incantesimi", description: "Lanci incantesimi basati sull'Intelligenza." }, { name: "Recupero Arcano (1/giorno)", description: "Durante un riposo breve, recuperi slot incantesimo di livello combinato pari a metà del tuo livello da mago (arrotondato per eccesso)." }],
    2: [{ name: "Tradizione Arcana", description: "Scegli una scuola di magia (es. Invocazione)." }],
    3: [{ name: "Incantesimi di 2° Livello", description: "Puoi preparare e lanciare incantesimi di 2° livello." }],
    4: [{ name: "Aumento Punteggi di Caratteristica", description: "Aumenti un punteggio di 2 o due punteggi di 1." }],
    5: [{ name: "Incantesimi di 3° Livello", description: "Puoi preparare e lanciare incantesimi di 3° livello." }]
  },
  "Monaco": {
    1: [{ name: "Difesa Senza Armatura", description: "CA = 10 + mod Destrezza + mod Saggezza." }, { name: "Arti Marziali", description: "Puoi usare Destrezza per attacchi senz'armi e con armi da monaco. Puoi fare un attacco senz'armi come azione bonus dopo aver attaccato." }],
    2: [{ name: "Ki (2 punti)", description: "Hai punti Ki per alimentare le tue capacità mistiche. Recuperi tutti i punti con un riposo breve. CD Ki = 8 + bonus competenza + mod Saggezza." }, { name: "Movimento Senza Armatura", description: "La tua velocità aumenta di 3m." }],
    3: [{ name: "Tradizione Monastica", description: "Scegli una tradizione (es. Via della Mano Aperta)." }, { name: "Deviare Proiettili", description: "Usi la reazione per ridurre il danno di un attacco a distanza. Se lo riduci a 0, puoi spendere 1 Ki per contrattaccare." }],
    4: [{ name: "Aumento Punteggi di Caratteristica", description: "Aumenti un punteggio di 2 o due punteggi di 1." }, { name: "Caduta Lenta", description: "Usi la reazione per ridurre i danni da caduta di 5 volte il tuo livello da monaco." }],
    5: [{ name: "Attacco Extra", description: "Puoi attaccare due volte invece di una." }, { name: "Colpo Stordente", description: "Quando colpisci con un attacco da mischia, puoi spendere 1 Ki per forzare un TS su Costituzione o stordire il bersaglio." }]
  },
  "Paladino": {
    1: [{ name: "Percezione del Divino", description: "Rilevi la presenza di celestiali, immondi o non morti entro 18m." }, { name: "Imposizione delle Mani", description: "Hai una riserva di guarigione pari al tuo livello da paladino x 5." }],
    2: [{ name: "Stile di Combattimento", description: "Adotti uno stile di combattimento." }, { name: "Incantesimi", description: "Lanci incantesimi basati sul Carisma." }, { name: "Punizione Divina", description: "Quando colpisci con un attacco, puoi consumare uno slot incantesimo per infliggere danni radianti extra." }],
    3: [{ name: "Salute Divina", description: "Sei immune alle malattie." }, { name: "Giuramento Sacro", description: "Scegli un giuramento (es. Devozione)." }, { name: "Incanalare Divinità", description: "Ottieni opzioni di Incanalare Divinità basate sul tuo giuramento." }],
    4: [{ name: "Aumento Punteggi di Caratteristica", description: "Aumenti un punteggio di 2 o due punteggi di 1." }],
    5: [{ name: "Attacco Extra", description: "Puoi attaccare due volte invece di una." }]
  },
  "Ranger": {
    1: [{ name: "Nemico Prescelto", description: "Vantaggio alle prove di Saggezza (Sopravvivenza) per rintracciare i tuoi nemici prescelti." }, { name: "Esploratore Naturale", description: "Sei un maestro nell'attraversare un tipo di terreno prescelto." }],
    2: [{ name: "Stile di Combattimento", description: "Adotti uno stile di combattimento." }, { name: "Incantesimi", description: "Lanci incantesimi basati sulla Saggezza." }],
    3: [{ name: "Archetipo da Ranger", description: "Scegli un archetipo (es. Cacciatore)." }, { name: "Consapevolezza Primordiale", description: "Puoi percepire la presenza di certe creature." }],
    4: [{ name: "Aumento Punteggi di Caratteristica", description: "Aumenti un punteggio di 2 o due punteggi di 1." }],
    5: [{ name: "Attacco Extra", description: "Puoi attaccare due volte invece di una." }]
  },
  "Stregone": {
    1: [{ name: "Incantesimi", description: "Lanci incantesimi basati sul Carisma." }, { name: "Origine Stregonesca", description: "Scegli un'origine (es. Discendenza Draconica)." }],
    2: [{ name: "Fonte di Magia (2 punti)", description: "Hai punti stregoneria per creare effetti magici." }],
    3: [{ name: "Metamagia", description: "Scegli 2 opzioni di Metamagia (es. Incantesimo Raddoppiato)." }],
    4: [{ name: "Aumento Punteggi di Caratteristica", description: "Aumenti un punteggio di 2 o due punteggi di 1." }],
    5: [{ name: "Incantesimi di 3° Livello", description: "Puoi lanciare incantesimi di 3° livello." }]
  },
  "Warlock": {
    1: [{ name: "Patrono Ultraterreno", description: "Scegli un patrono (es. Immondo)." }, { name: "Magia del Patto", description: "Lanci incantesimi basati sul Carisma. Recuperi gli slot con un riposo breve." }],
    2: [{ name: "Suppliche Occulte", description: "Ottieni due suppliche occulte a tua scelta." }],
    3: [{ name: "Dono del Patto", description: "Scegli un dono dal tuo patrono (es. Patto della Catena)." }],
    4: [{ name: "Aumento Punteggi di Caratteristica", description: "Aumenti un punteggio di 2 o due punteggi di 1." }],
    5: [{ name: "Incantesimi di 3° Livello", description: "Puoi lanciare incantesimi di 3° livello." }]
  },
  "Artefice": { // Nota: L'Artefice non è nel PHB, ma lo includo come bonus da Tasha's
    1: [{ name: "Infusioni Magiche", description: "Impregni oggetti mondani con infusioni magiche." }, { name: "Piccolo Oggetto Magico", description: "Crei un piccolo effetto magico non dannoso." }],
    2: [{ name: "Infondere Oggetto", description: "Puoi infondere più oggetti." }],
    3: [{ name: "Specialista Artefice", description: "Scegli la tua specialità (es. Artigliere)." }, { name: "Lo Strumento Giusto per Ogni Lavoro", description: "Crei magicamente un set di strumenti da artigiano." }],
    4: [{ name: "Aumento Punteggi di Caratteristica", description: "Aumenti un punteggio di 2 o due punteggi di 1." }],
    5: [{ name: "Miglioramento dello Specialista", description: "Ottieni un nuovo privilegio dalla tua specialità." }]
  }
};