<script setup lang="ts">

import { patients } from "~/data/patient"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const currentPatient = Number(route.params.id)

function changePatient(event: Event) {

  const target = event.target as HTMLSelectElement

  router.push(`/patient/${target.value}`)

}

</script>

<template>

<select :value="currentPatient" @change="changePatient">

<option
v-for="p in patients"
:key="p.id"
:value="p.id"
>
{{ p.name }}
</option>

</select>

</template>

<style scoped>

select {
  height: 32px;
  width: 160px;
  border: 3px solid black;
  border: none;
  border-radius: 8px;
}
</style>