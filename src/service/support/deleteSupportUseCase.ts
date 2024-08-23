import { SupportDatabaseRepository } from '../../repositories/support/SupportRepository';

export class DeleteSupportUseCase {
    constructor( private supportRepository: SupportDatabaseRepository){}

    async execute( id: string){

        const deleteSupport = await this.supportRepository.delete( id );

        return  { deleteSupport };
    }
}