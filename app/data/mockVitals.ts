interface Vitals {
    heartRate:number;
    glucoseLevel:number;
    bodyTemp:number,
    ECG:number;
}

// base values for simulation
let heartRate: number = 72
let glucoseLevel: number = 110
let bodyTemp: number = 36.8

function generateHeartRate(): number {
    heartRate += (Math.random() - 0.5)*2;
    return Math.round(heartRate);
}

function generateGlucose(): number {
  glucoseLevel += (Math.random() - 0.5) * 1.5
  return Math.round(glucoseLevel)
}

function generateBodyTemp(): number {
  bodyTemp += (Math.random() - 0.5) * 0.05
  return Number(bodyTemp.toFixed(2))
}

function generateECG(): number {
  return Math.sin(Date.now() / 100) + Math.random() * 0.8 + 1
}

function generateVitals(): Vitals {
  return {
    heartRate: generateHeartRate(),
    glucoseLevel: generateGlucose(),
    bodyTemp: generateBodyTemp(),
    ECG: generateECG()
  }
}

export type { Vitals }
export {
  generateHeartRate,
  generateGlucose,
  generateBodyTemp,
  generateECG,
  generateVitals
}