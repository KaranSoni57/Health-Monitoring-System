<script setup>
import { computed } from "vue";

import Navbar from "~/components/navbar.vue";
import PatientCard from "~/components/patientCard.vue";
import DataCard from "~/components/dataCard.vue";
import ECGChart from "~/components/ECGChart.vue";

import { useSensorData } from "~/composables/useSensorData";

const { data } = useSensorData();

// ✅ Safe computed values
const ecg = computed(() => data.value?.ecg ?? 0);
const ax = computed(() => data.value?.ax ?? 0);
const ay = computed(() => data.value?.ay ?? 0);
const az = computed(() => data.value?.az ?? 0);
const loPlus = computed(() => data.value?.loPlus ?? 1);
const loMinus = computed(() => data.value?.loMinus ?? 1);

// ✅ Motion magnitude
const motion = computed(() => {
  return Math.sqrt(ax.value * ax.value + ay.value * ay.value + az.value * az.value).toFixed(2);
});

// ✅ Leads status
const leads = computed(() => loPlus.value === 0 && loMinus.value === 0);

// ✅ Simple BPM (placeholder for now)
const bpm = computed(() => (ecg.value > 2000 ? 80 : 0));

// ✅ Fall detection
const fall = computed(() => motion.value > 12);
const temper = computed(() => data.value?.temp ?? 0);
</script>

<template>
  <div class="container">

    <!-- Navbar -->
    <Navbar />

    <!-- Patient Info -->
    <div class="section">
      <PatientCard />
    </div>

    <!-- Data Cards -->
    <div class="section">
      <DataCard
        :bpm="bpm"
        :ecg="ecg"
        :temp="42"
        :leads="leads"
        :motion="motion"
        :fall="fall"
      />
    </div>

    <!-- ECG Graph -->
    <div class="section chart">
      <ECGChart :ecg="ecg" />
    </div>

  </div>
</template>

<style scoped>
.container {
  background: #0a0a0a;
  min-height: 100vh;
  padding: 20px;
  color: white;
}

.section {
  margin: 20px 0;
}

.chart {
  background: #111;
  padding: 15px;
  border-radius: 10px;
}
</style>