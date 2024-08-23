import { EmailNull } from "../../error/globalError";
import { AcademyRepository } from "../../repositories/academy/AcademyRepository";

export class GetStudentAcademyEmailUseCase {
    constructor( private academyRepository: AcademyRepository ){}

   async execute(email: string){

        const getStudentByEmail = await this.academyRepository.getByEmail(email);

        if(!getStudentByEmail){
            return new EmailNull();
        }

        return getStudentByEmail;
    }
}