import { BadRequest } from "../../../error/globalError";
import { Adesion } from "../../../interface/entitiesInterface";
import { AdesionRepository } from "../../../repositories/event/AdesionRepository"

export class CreateAdesionUseCase {
    constructor( private adesionRepository: AdesionRepository){}

   async execute({ email, name, nif, phone }:Adesion){
        const adesion = await this.adesionRepository.save({
            email,
            name, 
            nif, 
            phone
   });

        if(adesion instanceof BadRequest){
            throw new BadRequest("Não foi possível realizar cadastro❌");
        }

        return { adesion }
    }
}