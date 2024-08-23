import { AcademyRepository } from "../../../../repositories/academy/AcademyRepository";

export class GetAllStudentAcademyUseCase {
    constructor( private academyRepository: AcademyRepository ){}

   async execute(){

      const getAllData = await this.academyRepository.list();
     return getAllData;
    
    }
}