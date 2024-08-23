import { NullInformation } from "../../../error/globalError";
import { ContactRepository } from "../../../repositories/event/contactRepository"

export class GetContactByIdUseCase {
    constructor( private contactRepository: ContactRepository){}

   async execute(id: number){
        const contact = await this.contactRepository.findById(id);

        if(!contact){
            throw new NullInformation();
        }

        return { contact }
    }
}