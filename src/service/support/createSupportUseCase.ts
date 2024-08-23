import { Support } from '../../../../interface/entitiesInterface';
import { SupportDatabaseRepository } from '../../../../repositories/support/SupportRepository';

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