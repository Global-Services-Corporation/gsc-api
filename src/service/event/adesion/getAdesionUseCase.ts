import { NullInformation } from "../../../error/globalError";
import { AdesionRepository } from "../../../repositories/event/AdesionRepository"

export class GetAllAdesionUseCase {
    constructor( private adesionRepository: AdesionRepository){}

   async execute(){
        const adesion = await this.adesionRepository.getAll();

        if(!adesion){
            throw new NullInformation();
        }

        return { adesion }
    }
}