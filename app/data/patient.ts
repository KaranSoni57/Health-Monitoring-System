import type { Patient } from "~/types/patient"

const patients: Patient[] = [
    {
        id:1,
        name:"Shubham Chauhan",
        age:34,
        gender:"male",
        mobileNumber:9327886543,
        accompany:"Sweta Chauhan",
        accompanyTitle:"Wife",
    },
    {
        id:2,
        name:"Rajiv Chauhan",
        age:14,
        gender:"male",
        mobileNumber:9327886544,
        accompany:"Sydney Chauhan",
        accompanyTitle:"Mother",
    },
    {
        id:3,
        name:"Anita Singh",
        age:54,
        gender:"female",
        mobileNumber:9327886545,
        accompany:"Gurdas Singh",
        accompanyTitle:"Son",
    },
    {
        id:4,
        name:"Rohan Patel",
        age:19,
        gender:"male",
        mobileNumber:9327886546,
        accompany:"Anuj Patel",
        accompanyTitle:"Father",
    },
    {
        id:5,
        name:"Arjun Nair",
        age:24,
        gender:"male",
        mobileNumber:9327886547,
        accompany:"None",
        accompanyTitle:"None",
    },
    {
        id:6,
        name:"Kavita Sharma",
        age:34,
        gender:"female",
        mobileNumber:9327886548,
        accompany:"Rajesh Sharma",
        accompanyTitle:"Husband",
    },
]

export type {Patient};
export {patients};