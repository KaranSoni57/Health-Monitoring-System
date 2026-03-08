import { doctors } from "~/data/doctor";
import { patients } from "~/data/patient";

function usePatients() {

  function getDoctorPatients(doctorId: number) {

    const doctor = doctors.find(d => d.id === doctorId)

    if (!doctor) return []

    return doctor.assignedPatients.map(id =>
      patients.find(p => p.id === id)
    )

  }

  return {
    doctors,
    patients,
    getDoctorPatients
  }
}

export { usePatients };