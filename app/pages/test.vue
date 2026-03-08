<script setup lang="ts">

import { doctors } from "~/data/doctor"
import { patients } from "~/data/patient"
import { generateVitals } from "~/data/mockVitals"

import { ref, onMounted } from "vue"

const currentVitals = ref(generateVitals())

onMounted(() => {

  setInterval(() => {
    currentVitals.value = generateVitals()
  }, 1000)

})

</script>

<template>

<div>

<h1>Data Test Page</h1>

<h2>Doctors</h2>
<pre>{{ doctors }}</pre>

<h2>Patients</h2>
<pre>{{ patients }}</pre>

<h2>Mock Vitals (updates every second)</h2>
<pre>{{ currentVitals }}</pre>

<h2>Doctor Patient Mapping</h2>

<div v-for="doctor in doctors" :key="doctor.id">

<h2>{{ doctor.name }}</h2>

<ul>
<li
v-for="pid in doctor.assignedPatients"
:key="pid"
>
{{ patients.find(p => p.id === pid)?.name }} (ID: {{ pid }})
</li>

</ul>

</div>


</div>


</template>