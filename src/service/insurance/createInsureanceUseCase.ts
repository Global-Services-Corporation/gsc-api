import { InsuranceDatabaseRepository } from '../../repository/InsuranceRepository';
import { InsuranceType } from '../../../../interface/entitiesInterface';
import { EmailExist } from '../../../../error/globalError';
export class CreateInsuranceUseCase {
    constructor( private insuranceRepository: InsuranceDatabaseRepository){}

    async execute({
        name,
        nif,
        phone,
        email,
        hospital,
        insurance,
        doctor,
        condition,
        benefits,
        treatment,
        networkOf, 
        coberturaMedica
    }:InsuranceType){

        const getEmail = await this.insuranceRepository.getByEmail(email);

        if(getEmail == null){
            throw new EmailExist();
        }

        const createInquirity = await this.insuranceRepository.save(
            name,
            nif,
            phone,
            email,
            hospital,
            insurance,
            doctor,
            condition,
            benefits,
            treatment,
            networkOf, 
            coberturaMedica
        );

        return  { createInquirity };
    }
}