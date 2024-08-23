import { NullInformation } from "../../../error/globalError";
import { ContactRepository } from "../../../repositories/event/contactRepository"

export class GetAllContactUseCase {
    constructor( private contactRepository: ContactRepository){}

   async execute(){
        const contact = await this.contactRepository.getAll();

        if(!contact){
            throw new NullInformation();
        }

        return { contact }
    }
}