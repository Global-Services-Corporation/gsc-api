import { Academy } from "@prisma/client";
import { NullInformation } from "../../error/globalError";
import { AcademyRepository } from "../../repositories/academy/AcademyRepository";

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