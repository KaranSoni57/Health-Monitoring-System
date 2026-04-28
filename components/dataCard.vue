<script setup>
const props = defineProps({
  bpm: Number,
  ecg: Number,
  temp: Number,
  leads: Boolean,
  motion: Number,
  fall: Boolean
});
</script>

<template>
  <div class="grid">

    <div class="card">❤️ BPM: {{ bpm }}</div>

    <div class="card">📈 ECG Raw: {{ ecg }}</div>

    <div class="card">🌡 Temp: {{ temp }} °C</div>

    <div class="card">
      🔌 Leads: 
      <span :class="leads ? 'on' : 'off'">
        {{ leads ? "ON" : "OFF" }}
      </span>
    </div>

    <div class="card">🏃 Motion: {{ motion }}</div>

    <div class="card">
      🚨 Fall:
      <span :class="fall ? 'alert' : 'safe'">
        {{ fall ? "DETECTED" : "SAFE" }}
      </span>
    </div>

  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.card {
  padding: 12px;
  background: #222;
  color: white;
  border-radius: 8px;
}

.on {
  color: lime;
}

.off {
  color: red;
}

.alert {
  color: red;
}

.safe {
  color: lime;
}
</style>