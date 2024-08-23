import { Hospital, Insurance, Doctor, Condition, Inquiry, Benefits, Treatment, NetworkOfSpecialistHospitals } from "@prisma/client";

export type InsuranceType = {
    name: string,
    nif: string,
    phone: string,
    email: string,
    benefits: Benefits,
    hospital: Hospital, 
    doctor: Doctor, 
    treatment: Treatment, 
    insurance: Insurance, 
    networkOf: NetworkOfSpecialistHospitals, 
    condition: Condition,
    coberturaMedica: string
}

export interface Support {
    name: string,
    email: string
    phone: string
    message: string
}

export type Academy = {
    fullName: string,
    phone: string,
    email: string,
    bornDate: Date
}

export interface Contact {
    name: string,
    email: string
    phone: string
    message: string
}
export interface Adesion {
    name: string
    email: string
    phone: string
    nif: string
}