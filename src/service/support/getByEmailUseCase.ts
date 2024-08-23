import { SupportDatabaseRepository } from '../../repositories/support/SupportRepository';

export class GetSupportByEmailUseCase {
    constructor( private supportRepository: SupportDatabaseRepository){}

    async execute(email: string){

        const getByEmail = await this.supportRepository.getEmail(email);

        return { getByEmail };
    }
}