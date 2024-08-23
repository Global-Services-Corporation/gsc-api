import { SupportDatabaseRepository } from '../../repositories/support/SupportRepository';

export class GetAllSupportUseCase {
    constructor( private supportRepository: SupportDatabaseRepository){}

    async execute(){

        const getAllSupport = await this.supportRepository.list();

        return { getAllSupport };
    }
}