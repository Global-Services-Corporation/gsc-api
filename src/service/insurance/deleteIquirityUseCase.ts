import { InsuranceDatabaseRepository } from '../../repositories/insuranceIquiry/InsuranceRepository';
export class DeleteIquirityUseCase {
    constructor( private insuranceRepository: InsuranceDatabaseRepository){}

    async execute(id: string){

        const deleteById = await this.insuranceRepository.delete(id);

        return { deleteById };
    }
}