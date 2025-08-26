// src/data/dndFeatureChoices.js

export const dndFeatureChoices = {
  "Stile di Combattimento": {
    // Questa chiave corrisponde esattamente al nome del privilegio in dndClassFeatures.js
    type: "fightingStyle", // Un tipo per aiutarci a gestirlo
    options: [
      { name: "Difesa", description: "Mentre indossi un'armatura, ottieni un bonus di +1 alla CA." },
      { name: "Combattere con Armi Grandi", description: "Quando ottieni 1 o 2 a un tiro per i danni con un'arma da mischia che impugni con due mani, puoi ripetere il tiro (devi usare il nuovo risultato)." },
      { name: "Protezione", description: "Quando una creatura che vedi attacca un bersaglio diverso da te entro 1,5m, puoi usare la reazione per imporre svantaggio al tiro di attacco." },
      { name: "Tiro", description: "Ottieni un bonus di +2 ai tiri di attacco che effettui con le armi a distanza." },
      { name: "Combattere con Due Armi", description: "Quando combatti con due armi, puoi aggiungere il tuo modificatore di caratteristica ai danni del secondo attacco." },
      { name: "Duellare", description: "Quando impugni un'arma da mischia in una mano e nessun'altra arma, ottieni un bonus di +2 ai tiri per i danni con quell'arma." }
    ]
  }
};