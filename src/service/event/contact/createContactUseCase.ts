import { BadRequest } from "../../../error/globalError";
import { Contact } from "../../../interface/entitiesInterface";
import { ContactRepository } from "../../../repositories/event/contactRepository"

export class CreateContactUseCase {
    constructor( private contactRepository: ContactRepository){}

   async execute({ name, email, phone, message }:Contact){
        const contact = await this.contactRepository.save({
                name, 
                email, 
                phone, 
                message
            });

        if(contact instanceof BadRequest){
            throw new BadRequest("Não foi possível realizar cadastro❌");
        }

        return { contact }
    }
}