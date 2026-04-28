<script setup>
import Navbar from "~/components/navbar.vue";
import PatientCard from "~/components/patientCard.vue";
import DataCard from "~/components/dataCard.vue";
import ECGChart from "~/components/ECGChart.vue";
import { useSensorData } from "~/composables/useSensorData";

const { data } = useSensorData();

// fallback values to avoid undefined errors
const bpm = computed(() => data.value?.bpm || 0);
const ecg = computed(() => data.value?.ecg || 0);
const motion = computed(() => data.value?.motion || 0);

// leads logic
const leads = computed(() => {
  return data.value?.loPlus === 0 && data.value?.loMinus === 0;
});

// simple fall detection (basic)
const fall = computed(() => {
  return motion.value > 13;
});
</script>

<template>
  <div class="container">

    <!-- Navbar -->
    <Navbar />

    <!-- Top Section -->
    <div class="top">
      <PatientCard />
    </div>

    <!-- Data Cards -->
    <DataCard
      :bpm="bpm"
      :ecg="ecg"
      :temp="36.5"
      :leads="leads"
      :motion="motion"
      :fall="fall"
    />

    <!-- ECG Graph -->
    <div class="chart">
      <ECGChart :ecg="ecg" />
    </div>

  </div>
</template>

<style scoped>
.container {
  background: #0a0a0a;
  min-height: 100vh;
  padding: 20px;
}

.top {
  margin: 20px 0;
}

.chart {
  margin-top: 20px;
}
</style>