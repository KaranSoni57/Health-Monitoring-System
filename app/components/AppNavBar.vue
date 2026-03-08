<script setup lang="ts">
import { doctors } from "~/data/doctor"

const loggedDoctor = doctors[0]   // mock login for now
</script>

<template>

<div class="navbar">

<div class="patientSelector">
<slot name="patient-selector" />
</div>

<div class="title">
    <h3>Health Monitoring System</h3>
</div>

<div class="doctorDetails">
 {{ loggedDoctor?.name }}
</div>

</div>

</template>

<style scoped>
.navbar{
display:flex;
justify-content:space-between;
padding:12px 48px;
background:#1e293b;
color:white;
height: 32px;
align-items: center;
}
.doctorDetails{
    font-size: 20px;
    
}
</style>