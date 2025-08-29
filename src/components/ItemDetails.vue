<script setup>
defineProps({
  item: { type: Object, required: true },
})
defineEmits(['close'])
</script>

<template>
  <div class="details-overlay" @click.self="$emit('close')">
    <div class="details-modal">
      <div class="details-header">
        <h2>{{ item.name }}</h2>
        <button @click="$emit('close')" class="close-btn">×</button>
      </div>
      <div class="details-content">
        <img
          v-if="item.imageUrl"
          :src="item.imageUrl"
          class="item-image-display"
          alt="Immagine oggetto"
        />
        <p v-if="item.shareNotes" v-html="item.shareNotes.replace(/\n/g, '<br>')"></p>

        <p v-if="item.dmNotes" class="dm-notes-viewer">
          <strong>Note DM:</strong> {{ item.dmNotes }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}
.details-modal {
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  background-color: #fdfaf6;
  color: #333;
  border-radius: 8px;
  border: 2px solid #bca789;
  display: flex;
  flex-direction: column;
}
.details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 2px solid #bca789;
}
.details-header h2 {
  margin: 0;
  font-family: 'Times New Roman', serif;
}
.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #888;
}
.details-content {
  overflow-y: auto;
  padding: 20px;
  font-family: 'Times New Roman', serif;
  line-height: 1.6;
}
.item-image-display {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
}
/* Aggiungi in fondo a <style scoped> di ItemDetails.vue */
.dm-notes-viewer {
  margin-top: 1rem;
  padding: 10px;
  background-color: #fff8e1;
  border-left: 4px solid #f1c40f;
  font-style: italic;
  border-radius: 5px;
}
</style>
