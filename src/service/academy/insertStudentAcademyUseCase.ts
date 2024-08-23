import { Academy } from "../../../../interface/entitiesInterface";
import { AcademyRepository } from "../../../../repositories/academy/AcademyRepository";

export class InsertStudentAcademyUseCase {
    constructor( private academyRepository: AcademyRepository ){}

   async execute({
        fullName,
        phone,
        email,
        bornDate
    }:Academy){


        const insertData = await this.academyRepository.save(
            fullName,
            phone,
            email,
            bornDate
        );

        return {insertData};
    }
}