<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { db } from '@/firebaseConfig'
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc, // <-- Aggiungi questo
  updateDoc,
} from 'firebase/firestore' // <-- Aggiungi questo
import { useUserStore } from '@/stores/userStore' // Importiamo lo store dell'utente

// Definiamo le props che il componente riceve
const props = defineProps({
  adventureId: { type: String, required: true },
  dmId: { type: String, required: true },
  recipientId: { type: String, required: true }, // L'ID di chi riceve il messaggio
  recipientName: { type: String, default: 'Utente' },
})

const emit = defineEmits(['close'])
const userStore = useUserStore() // Usiamo lo store per sapere chi siamo

// Dati reattivi del componente
const messages = ref([])
const newMessage = ref('')
let unsubscribe = null // Variabile per memorizzare la funzione di "stop ascolto"
const chatBodyRef = ref(null) // Riferimento al contenitore dei messaggi per lo scroll

// QUESTA È LA LOGICA DI RICEZIONE IN TEMPO REALE
// In PrivateChat.vue

onMounted(() => {
  if (!props.adventureId || !props.dmId || !props.recipientId) {
    console.error('Chat: ID mancanti!')
    return
  }

  const userIds = [userStore.user.uid, props.recipientId].sort()
  const chatId = userIds.join('_')
  const messagesCol = collection(
    db,
    'adventures',
    props.adventureId,
    'privateChats',
    chatId,
    'messages',
  )
  const q = query(messagesCol, orderBy('timestamp'))

  unsubscribe = onSnapshot(q, (snapshot) => {
    const loadedMessages = []

    // --- INIZIO BLOCCO MODIFICATO ---
    snapshot.docs.forEach((document) => {
      const messageData = document.data()
      loadedMessages.push({ id: document.id, ...messageData })

      // Controlla se il messaggio è stato ricevuto (non inviato da noi)
      // e se non è ancora stato segnato come letto.
      if (messageData.recipientId === userStore.user.uid && messageData.read === false) {
        // Se entrambe le condizioni sono vere, aggiorna il documento
        const messageRef = doc(
          db,
          'adventures',
          props.adventureId,
          'privateChats',
          chatId,
          'messages',
          document.id,
        )
        updateDoc(messageRef, {
          read: true,
        })
      }
    })
    // --- FINE BLOCCO MODIFICATO ---

    messages.value = loadedMessages

    // Scrolla automaticamente fino all'ultimo messaggio
    nextTick(() => {
      if (chatBodyRef.value) {
        chatBodyRef.value.scrollTop = chatBodyRef.value.scrollHeight
      }
    })
  })
})

// Quando il componente viene chiuso, smettiamo di ascoltare per non consumare risorse
onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})

// QUESTA È LA LOGICA DI INVIO MESSAGGIO
// Dentro PrivateChat.vue

async function sendMessage() {
  if (!newMessage.value.trim()) return

  const userIds = [userStore.user.uid, props.recipientId].sort()
  const chatId = userIds.join('_')
  const messagesCol = collection(
    db,
    'adventures',
    props.adventureId,
    'privateChats',
    chatId,
    'messages',
  )

  // Modifica solo questo blocco
  await addDoc(messagesCol, {
    text: newMessage.value,
    senderId: userStore.user.uid,
    recipientId: props.recipientId,
    timestamp: serverTimestamp(),
    read: false, // <-- ECCO LA RIGA MANCANTE!
  })

  newMessage.value = ''
}
</script>

<template>
  <div class="chat-widget">
    <div class="chat-header">
      <h3>Chat con {{ recipientName }}</h3>
      <button @click="$emit('close')" class="close-btn">&times;</button>
    </div>
    <div class="chat-body" ref="chatBodyRef">
      <div
        v-for="message in messages"
        :key="message.id"
        class="message"
        :class="message.senderId === userStore.user.uid ? 'sent' : 'received'"
      >
        <p>{{ message.text }}</p>
      </div>
    </div>
    <div class="chat-footer">
      <textarea
        v-model="newMessage"
        @keydown.enter.prevent="sendMessage"
        placeholder="Scrivi un messaggio..."
      ></textarea>
      <button @click="sendMessage">Invia</button>
    </div>
  </div>
</template>

<style scoped>
/* ... il tuo CSS di prima ... */
.chat-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  height: 450px;
  background-color: #fdfaf6;
  border: 2px solid #bca789;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1001;
  font-family: sans-serif;
}
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #e9e2d9;
  border-bottom: 1px solid #bca789;
  border-radius: 8px 8px 0 0;
}
.chat-header h3 {
  margin: 0;
  font-size: 1.1em;
  color: #5c3d03;
}
.close-btn {
  background: none;
  border: none;
  font-size: 1.8em;
  cursor: pointer;
  color: #888;
}
.chat-body {
  flex-grow: 1;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.message {
  padding: 8px 12px;
  border-radius: 15px;
  max-width: 80%;
  line-height: 1.4;
}
.message.sent {
  background-color: #3498db;
  color: white;
  align-self: flex-end;
  border-bottom-right-radius: 3px;
}
.message.received {
  background-color: #ecf0f1;
  color: #333;
  align-self: flex-start;
  border-bottom-left-radius: 3px;
}
.message p {
  margin: 0;
}
.chat-footer {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
}
.chat-footer textarea {
  flex-grow: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  resize: none;
  font-family: inherit;
  font-size: 1em;
  margin-right: 10px;
}
.chat-footer button {
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0 15px;
  cursor: pointer;
  font-weight: bold;
}
</style>
