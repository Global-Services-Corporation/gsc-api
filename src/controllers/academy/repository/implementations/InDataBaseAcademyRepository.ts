import { Academy } from "@prisma/client";
import { NullInformation } from "../../../../error/globalError";
import { AcademyRepository } from "../AcademyRepository";
import { dbConection } from "../../../../database/conection";
import { BadRequest } from '../../../../error/globalError';
import { EmailNull } from '../../../../error/globalError';

export class InDataBaseAcademyRepository implements AcademyRepository {
    
   async  save(fullName: string, phone: string, email: string, bornDate: Date): Promise<Academy | BadRequest> {
        const save_student = await dbConection.academy.create({
            data:{
                fullName,
                email,
                bornDate,
                phone
            }
        });

        if(save_student instanceof BadRequest){
            return new BadRequest("Erro ao inserir os dados no banco de dados!");
        }

        return save_student;
    }

    async getbyId(id: string): Promise<Academy | NullInformation> {
        const getStudentById = await dbConection.academy.findUnique({
            where:{
                id
            }
        });

        if(!getStudentById){
            return new NullInformation();
        }

        return getStudentById;
    }

    async list(): Promise<Academy[] | NullInformation> {
        const getAllStudent = await dbConection.academy.findMany({});

        if(!getAllStudent){
            return new NullInformation();
        }

        return getAllStudent;
    }

   async getFullName(fullName: string): Promise<Academy | NullInformation> {
        const getStudentByName = await dbConection.academy.findFirst({
            where:{
                fullName
            }
        });

        if(!getStudentByName){
            return new NullInformation();
        }
        
        return getStudentByName;
    }

    async getByEmail(email: string): Promise<Academy | EmailNull> {
        const getByEmail = await dbConection.academy.findFirst({
            where:{
                email
            }
        });

        if(!getByEmail){
            return new EmailNull();
        }

        return getByEmail;
    }
}