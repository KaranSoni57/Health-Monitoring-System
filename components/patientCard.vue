<script setup>
</script>

<template>
  <div class="card">
    <h2>Patient Info</h2>

    <p>Name: John Doe</p>
    <p>Age: 45</p>
    <p>Condition: Cardiac Monitoring</p>

    <div class="actions">
      <button class="btn">📞 Call Telemedicine</button>
      <button class="btn alert">🚨 Send Alert</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 16px;
  background: #1c1c1c;
  color: white;
  border-radius: 10px;
}

.actions {
  margin-top: 10px;
}

.btn {
  margin-right: 10px;
  padding: 8px 12px;
}

.alert {
  background: red;
  color: white;
}
</style>