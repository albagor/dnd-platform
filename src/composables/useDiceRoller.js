import { useDiceStore } from '@/stores/diceStore';
import { useToast } from 'vue-toastification';

export function useDiceRoller() {
  const diceStore = useDiceStore();
  const toast = useToast();

  /**
   * Esegue un tiro di dado d20 + modificatore, mostra un toast e salva nella cronologia.
   * @param {string} checkName - Il nome della prova (es. "Tiro Salvezza: Forza").
   * @param {number} modifier - Il modificatore da aggiungere al tiro.
   */
  const makeCheck = (checkName, modifier) => {
    const d20Result = Math.floor(Math.random() * 20) + 1;
    const total = d20Result + modifier;

    // Gestisce il segno del modificatore per una descrizione più chiara
    const modifierString = modifier >= 0 ? `+ ${modifier}` : `- ${Math.abs(modifier)}`;
    const description = `${checkName}: ${total} (d20: ${d20Result} ${modifierString})`;

    toast.info(description, {
        timeout: 4000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        icon: "fas fa-dice-d20",
    });

    diceStore.addRoll(20, total, description);
  };

  return { makeCheck };
}