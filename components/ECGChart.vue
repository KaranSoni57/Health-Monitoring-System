<script setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps({ ecg: Number });

let chart = null;
const chartRef = ref(null);

// ❌ NOT reactive
let ecgData = [];

onMounted(async () => {
  const { default: Chart } = await import("chart.js/auto");

  const ctx = chartRef.value.getContext("2d");

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [{
        label: "ECG",
        data: [],
        borderColor: "red",
        borderWidth: 1
      }]
    },
    options: {
      animation: false,
      responsive: true,
      scales: {
        y: { min: 0, max: 4095 }
      }
    }
  });
});

// 🔥 throttle updates (prevents overload)
let lastUpdate = 0;

watch(() => props.ecg, (val) => {
  if (!chart) return;

  const now = Date.now();
  if (now - lastUpdate < 200) return;
  lastUpdate = now;

  // update normal array
  ecgData.push(val);

  if (ecgData.length > 50) {
    ecgData.shift();
  }

  // assign fresh copy (important)
  chart.data.labels = ecgData.map((_, i) => i);
  chart.data.datasets[0].data = [...ecgData];

  chart.update("none");
});
</script>

<template>
  <canvas ref="chartRef"></canvas>
</template>