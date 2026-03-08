interface Doctor {
    id: number;
    name: string;
    assignedPatients: number[];
}

const doctors: Doctor[] = [
    {
        id: 1,
        name: "Dr Sharma",
        assignedPatients: [1,2,4],
    },
    {
        id:2,
        name:"Dr Gupta",
        assignedPatients:[3,6],
    },
    {
        id:3,
        name:"Dr Prabha",
        assignedPatients:[5],
    },
]

export type {Doctor};
export {doctors};