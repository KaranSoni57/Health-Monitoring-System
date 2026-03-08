<script setup lang="ts">
import { useVitals } from "../composables/useVitals"
import { onMounted } from "vue"



const { vitals, startVitals } = useVitals()

onMounted(() => {
  startVitals()
})


</script>

<template>

<div class="tab-container">

<div class="tabs">
<h5>Heart Rate</h5>
<p>{{ vitals.heartRate }} BPM</p>
</div>
<div class="tabs">
<h5>SpO2</h5>
<p>{{ vitals.spo }}%</p>
</div>
<div class="tabs">
<h5>Glucose Level</h5>
<p>{{vitals.glucoseLevel}} mg/dL</p>
</div>
<div class="tabs">
<h5>Temperature</h5>
<p>{{ vitals.bodyTemp }} °C</p>
</div>



</div>

</template>

<style scoped>
.tab-container{
    display: flex;
}
.tabs{
    border: 2px solid black;
    margin: 12px;
    padding: 12px;
    height: 60px;
    width: 100px;
    justify-items: center;
    border-radius: 6px;
}
.tabs h5{
    margin-bottom: 12px;
}
</style>