import { Academy } from "@prisma/client";
import { AcademyRepository } from "../../repository/AcademyRepository";
import { NullInformation } from "../../../../error/globalError";

export class GetStudentAcademyByNameUseCase {
    constructor( private academyRepository: AcademyRepository ){}

   async execute(fullName: string){

        const getStudentByName: Academy | NullInformation = await this.academyRepository.getFullName(fullName);

        if(!getStudentByName){
            return new NullInformation();
        }

        return getStudentByName;
    }
}