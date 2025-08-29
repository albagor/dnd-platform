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
  deleteDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore'
import { useToast } from 'vue-toastification'

export const useAdventureStore = defineStore('adventure', () => {
  const adventuresList = ref([])
  const activeAdventureId = ref(null)
  let adventuresListener = null
  const toast = useToast()

  function subscribeToAdventures() {
    if (!auth.currentUser) return
    if (adventuresListener) adventuresListener()

    const q = query(collection(db, 'adventures'), where('ownerId', '==', auth.currentUser.uid))

    adventuresListener = onSnapshot(q, (snapshot) => {
      adventuresList.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    })
  }

  function setActiveAdventure(adventureId) {
    activeAdventureId.value = adventureId
  }

  async function addAccordionItem(sectionId, item) {
    if (!activeAdventureId.value) {
      toast.error("Per favore, seleziona un'avventura prima di aggiungere un elemento.")
      return
    }
    const docRef = doc(db, 'adventures', activeAdventureId.value)
    const newItem = { ...item, id: Date.now().toString() }

    await updateDoc(docRef, {
      [sectionId]: arrayUnion(newItem),
    })
  }

  async function createNewAdventure(title = 'Nuova Avventura') {
    if (!auth.currentUser) return
    return addDoc(collection(db, 'adventures'), {
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
      mappe: [],
    })
  }

  async function deleteAdventure(adventureId) {
    if (!adventureId) return
    return deleteDoc(doc(db, 'adventures', adventureId))
  }

  function clearStore() {
    if (adventuresListener) adventuresListener()
    adventuresListener = null
    adventuresList.value = []
    activeAdventureId.value = null
  }

  return {
    adventuresList,
    activeAdventureId,
    subscribeToAdventures,
    createNewAdventure,
    deleteAdventure,
    clearStore,
    setActiveAdventure,
    addAccordionItem,
  }
})
