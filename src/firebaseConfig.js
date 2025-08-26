// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Incolla qui la configurazione del tuo progetto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBbC_g_QplO3wAlkEz6ySsUMabE54OiRXk",
  authDomain: "dnd-strumenti-interattivi.firebaseapp.com",
  projectId: "dnd-strumenti-interattivi",
  storageBucket: "dnd-strumenti-interattivi.firebasestorage.app",
  messagingSenderId: "183257426282",
  appId: "1:183257426282:web:372db53251cefe22d49d13",
  measurementId: "G-68SHG6QQ34"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);

// Esporta i servizi che useremo
export const auth = getAuth(app);
export const db = getFirestore(app);