import { SupportDatabaseRepository } from '../../repository/SupportRepository';

export class GetByIdUseCase {
    constructor( private supportRepository: SupportDatabaseRepository){}

    async execute(id: string){

        const getById = await this.supportRepository.getbyId(id);

        return { getById };
    }
}