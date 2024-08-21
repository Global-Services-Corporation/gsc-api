import { InsuranceDatabaseRepository } from '../../repository/InsuranceRepository';

export class DeleteIquirityUseCase {
    constructor( private insuranceRepository: InsuranceDatabaseRepository){}

    async execute(id: string){

        const deleteById = await this.insuranceRepository.delete(id);

        return { deleteById };
    }
}