import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth, db } from '@/firebaseConfig'
import { 
  collection, 
  query, 
  where, 
  onSnapshot, 
  doc, 
  addDoc,
  deleteDoc
} from 'firebase/firestore'

export const useAdventureStore = defineStore('adventure', () => {
  const adventuresList = ref([]);
  let adventuresListener = null;

  // Carica e tiene aggiornata la lista delle avventure del DM
  function subscribeToAdventures() {
    if (!auth.currentUser) return;
    if (adventuresListener) adventuresListener(); 

    const q = query(collection(db, 'adventures'), where('ownerId', '==', auth.currentUser.uid));
    
    adventuresListener = onSnapshot(q, (snapshot) => {
      adventuresList.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
  }

  // Crea una nuova avventura
  async function createNewAdventure(title = 'Nuova Avventura') {
    if (!auth.currentUser) return;
    await addDoc(collection(db, 'adventures'), {
      ownerId: auth.currentUser.uid,
      title: title,
      background: '',
      dmNotes: '',
      chapters: [],
      ambienti: [],
      png: [],
      mostri: [],
      tesori: [],
      immagini: [],
      mappe: []
    });
  }
  
  // Cancella un'avventura
  async function deleteAdventure(adventureId) {
    if (!adventureId) return;
    await deleteDoc(doc(db, 'adventures', adventureId));
  }

  // Pulisce l'ascoltatore al logout
  function clearStore() {
    if (adventuresListener) adventuresListener();
    adventuresListener = null;
    adventuresList.value = [];
  }

  return { 
    adventuresList, 
    subscribeToAdventures,
    createNewAdventure,
    deleteAdventure,
    clearStore
  }
})