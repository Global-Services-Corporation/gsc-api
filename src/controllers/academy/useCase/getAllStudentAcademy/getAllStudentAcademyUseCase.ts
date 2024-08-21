import { AcademyRepository } from "../../repository/AcademyRepository";

export class GetAllStudentAcademyUseCase {
    constructor( private academyRepository: AcademyRepository ){}

   async execute(){

      const getAllData = await this.academyRepository.list();
     return getAllData;
    
    }
}