<script setup lang="ts">

import type { Patient } from "~/types/patient"

defineProps<{
  patient: Patient
}>()

</script>

<template>

<div class="patientDetails">
<div class="patientImg">
  <img src="/images/user-regular.svg" alt="">
  </div>

<h2 class="patientName">{{ patient.name }}</h2>

<p>Age: {{ patient.age }}</p>
<p>Gender: {{ patient.gender }}</p>
<p>Mobile No: {{ patient.mobileNumber }}</p>
<p>Attendant: {{ patient.accompany }}</p>
<p>Attendant's Relation: {{ patient.accompanyTitle }}</p>

</div>

</template>

<style scoped>
.patientDetails{
  border: 2px solid black;
  margin: 12px;
  padding:12px;
  width: 240px;
  justify-items: center;
  align-content: center;
  border-radius: 6px;
}

.patientImg{
  width: 96px;
  height: 96px;
  border-radius: 48px;
  overflow: hidden;
  margin: 24px 0px;
  background-color: #c1bebe;
}
.patientImg img {
  width: 80%;
  height: 100%;
  object-fit: cover;
  margin: 10px;
}
.patientName{
  margin-bottom: 24px;
}

</style>