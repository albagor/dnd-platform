import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  Timestamp,
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const db = getFirestore()
const auth = getAuth()

/**
 * Genera un nuovo codice DM, lo salva su Firestore e lo restituisce.
 */
export async function generateDmCode() {
  const code = 'DM_' + Math.random().toString(36).substr(2, 8)
  const userId = auth.currentUser.uid
  await addDoc(collection(db, 'dmCodes'), {
    code,
    userId,
    createdAt: Timestamp.now(),
  })
  return code
}

/**
 * Verifica se il codice DM inserito esiste su Firestore.
 * Restituisce true se valido, false altrimenti.
 */
export async function verifyDmCode(inputCode) {
  const q = query(collection(db, 'dmCodes'), where('code', '==', inputCode))
  const snapshot = await getDocs(q)
  return !snapshot.empty
}
