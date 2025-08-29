// src/services/storageService.js
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '@/firebaseConfig'
import { auth } from '@/firebaseConfig'

// Funzione riutilizzabile per caricare qualsiasi immagine
export async function uploadImage(file, path) {
  if (!auth.currentUser) throw new Error('Utente non autenticato.')
  if (!file) throw new Error('Nessun file fornito.')

  // Crea un riferimento unico al file nel magazzino di Firebase
  const fullPath = `${path}/${auth.currentUser.uid}_${Date.now()}_${file.name}`
  const fileRef = storageRef(storage, fullPath)

  // Carica il file
  const uploadTask = await uploadBytes(fileRef, file)

  // Ottieni l'URL pubblico per visualizzare l'immagine
  const downloadURL = await getDownloadURL(uploadTask.ref)

  return downloadURL
}
