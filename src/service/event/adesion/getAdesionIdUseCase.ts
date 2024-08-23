import { NullInformation } from "../../../error/globalError";
import { AdesionRepository } from "../../../repositories/event/AdesionRepository"

export class AdesionByIdUseCase {
    constructor( private adesionRepository: AdesionRepository){}

   async execute(id: number){
        const adesion = await this.adesionRepository.findById(id);

        if(!adesion){
            throw new NullInformation();
        }

        return { adesion }
    }
}