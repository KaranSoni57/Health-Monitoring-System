<script setup lang="ts">

import { useRoute } from "vue-router"
import type { Patient } from "~/types/patient"
import { patients } from "~/data/patient"

import Navbar from "../../components/AppNavBar.vue"
import PatientSelector from "../../components/PatientSelector.vue"
import PatientDetails from "../../components/PatientDetails.vue"
import VitalTabs from "../../components/VitalsTabs.vue"
import EcgChart from "../../components/ECGChart.vue"

const route = useRoute()

const patientId = Number(route.params.id)

const patient = patients.find(p => p.id === patientId) as Patient

</script>

<template>

<div>

<Navbar>

<template #patient-selector>
<PatientSelector />
</template>

</Navbar>

<div class="dashboard">

<PatientDetails :patient="patient" />

<div class="center">

<VitalTabs />

<EcgChart />

</div>

</div>

</div>

</template>

<style scoped>

.dashboard{
display:flex;
}

.center{
flex:1;
padding:20px;
}

</style>