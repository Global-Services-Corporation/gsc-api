import { SupportDatabaseRepository } from '../../repository/SupportRepository';
import { Support } from '../../../../interface/entitiesInterface';

export class CreateSupportUseCase {
    constructor( private supportRepository: SupportDatabaseRepository){}

    async execute({
        name,
        phone,
        email,
       message
    }:Support){

        const createSupport = await this.supportRepository.save(
            name,
            phone,
            email,
           message
        );

        return  { createSupport };
    }
}