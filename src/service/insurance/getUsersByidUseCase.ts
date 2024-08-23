import { InsuranceDatabaseRepository } from '../../repositories/insuranceIquiry/InsuranceRepository';
export class GetIquirityUserByIdUseCase {
    constructor( private insuranceRepository: InsuranceDatabaseRepository){}

    async execute(id: string){

        const getById = await this.insuranceRepository.getbyId(id);

        return { getById };
    }
}