<script setup>
import { onMounted, ref, watch } from "vue";
import Chart from "chart.js/auto";

const props = defineProps({
  ecg: Number
});

let chart;
const chartRef = ref(null);
const ecgData = ref([]);

onMounted(() => {
  const ctx = chartRef.value.getContext("2d");

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [{
        label: "ECG Signal",
        data: [],
        borderColor: "red",
        borderWidth: 1,
        tension: 0.3
      }]
    },
    options: {
      animation: false,
      scales: {
        y: { min: 0, max: 4095 }
      }
    }
  });
});

watch(() => props.ecg, (val) => {
  if (!chart) return;

  ecgData.value.push(val);
  if (ecgData.value.length > 100) ecgData.value.shift();

  chart.data.labels = ecgData.value.map((_, i) => i);
  chart.data.datasets[0].data = ecgData.value;
  chart.update();
});
</script>

<template>
  <div class="card">
    <h3>ECG Live</h3>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<style scoped>
.card {
  padding: 16px;
  background: #111;
  color: white;
  border-radius: 10px;
}
</style>