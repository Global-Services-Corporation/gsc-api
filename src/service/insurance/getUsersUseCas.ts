import { InsuranceDatabaseRepository } from '../../repositories/insuranceIquiry/InsuranceRepository';

export class GetAllIquirityUserUseCase {
    constructor( private insuranceRepository: InsuranceDatabaseRepository){}

    async execute(){

        const getAllInquirity = await this.insuranceRepository.list();

        return { getAllInquirity };
    }
}