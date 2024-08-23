import { Academy } from "@prisma/client";
import { NullInformation } from "../../../../error/globalError";
import { AcademyRepository } from "../../../../repositories/academy/AcademyRepository";

export class GetStudentAcademyByIdUseCase {
    constructor( private academyRepository: AcademyRepository ){}

   async execute(id: string){

        const getDataById: Academy | NullInformation = await this.academyRepository.getbyId(id);

        if(getDataById instanceof NullInformation){
            return new NullInformation();
        }

        return getDataById;
    }
}