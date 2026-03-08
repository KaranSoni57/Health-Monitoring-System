import { ref } from "vue"
import { generateVitals } from "../data/mockVitals"

const vitals = ref(generateVitals())

let interval: ReturnType<typeof setInterval>

export function useVitals() {

  function startVitals() {

    if (interval) {
      clearInterval(interval)
    }

    interval = setInterval(() => {
      vitals.value = generateVitals()
    }, 1000)

  }

  return {
    vitals,
    startVitals
  }
}