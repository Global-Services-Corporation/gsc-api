import { Academy } from "@prisma/client";
import { AcademyRepository } from "../../repository/AcademyRepository";
import { NullInformation } from "../../../../error/globalError";

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