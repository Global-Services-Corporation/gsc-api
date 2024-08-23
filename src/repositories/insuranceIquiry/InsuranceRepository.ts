import { Hospital, Insurance, Doctor, Condition, Inquiry, Benefits, Treatment, NetworkOfSpecialistHospitals } from "@prisma/client";
import { BadRequest, NullInformation, EmailNull} from '../../error/globalError';

export interface InsuranceDatabaseRepository {
    save( 
        name: string,
        nif: string,
        phone: string,
        email: string,
        hospital: Hospital,
        insurance: Insurance, 
        doctor: Doctor,
        condition: Condition,
        benefits: Benefits,
        networkOf: NetworkOfSpecialistHospitals,
        treatment: Treatment, 
        coberturaMedica: string
        ): Promise<Inquiry | BadRequest>;
    list(): Promise<Inquiry[] | NullInformation>;
    getbyId(id: string): Promise<Inquiry | NullInformation>;
    delete(id: string): Promise<Inquiry | BadRequest>;
    getByEmail(email: string): Promise<Inquiry | EmailNull>;
    getname(name: string): Promise<Inquiry | NullInformation>;
}