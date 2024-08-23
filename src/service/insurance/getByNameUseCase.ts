import { InsuranceDatabaseRepository } from '../../repository/InsuranceRepository';

export class GetIquirityUserNameUseCase {
    constructor( private insuranceRepository: InsuranceDatabaseRepository){}

    async execute(name: string){

        const getByName = await this.insuranceRepository.getname(name);

        return { getByName };
    }
}