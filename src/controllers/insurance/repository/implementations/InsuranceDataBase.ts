import { InsuranceDatabaseRepository } from '../InsuranceRepository';
import {dbConection } from '../../../../database/conection';
import { Hospital, Insurance, Doctor, Condition, Benefits, Treatment, NetworkOfSpecialistHospitals, Inquiry } from "@prisma/client";
import { BadRequest, NullInformation, EmailNull } from '../../../../error/globalError';

export class IsuranceDatabase implements InsuranceDatabaseRepository {
    
    async save(
        name: string,
        nif: string,
        phone: string,
        email: string,
        hospital: Hospital,
        insurance: Insurance, 
        doctor: Doctor,
        condition: Condition,
        benefits: Benefits,
        networkOf: NetworkOfSpecialistHospitals,
        treatment: Treatment, 
        coberturaMedica: string
    ) {
        const creating = await dbConection.inquiry.create({
            data:{
                name,
                nif,
                phone,
                email,
                benefits, 
                hospital, 
                doctor, 
                treatment, 
                insurance, 
                networkOf, 
                condition,
                coberturaMedica
            }
        });
        
        if(creating instanceof BadRequest){
            return new BadRequest("Dados não inseridos na base de dados!")
        }

        return creating;
    }

   async getbyId(id: string) {
        const getIquiryId = await dbConection.inquiry.findUnique({
            where:{
                id,
            }
        });

        if(!getIquiryId){
            return new NullInformation();
        }

        return getIquiryId;
    }
    async getByEmail(email: string) {
        const getEmail = await dbConection.inquiry.findUnique({
            where:{
                email
            }
        });

        if(!getEmail){
            return new EmailNull();
        }

        return getEmail;
    }

    async list() {
        const getAllIquirity = await dbConection.inquiry.findMany({});

        if(!getAllIquirity){
            return new NullInformation();
        }

        return getAllIquirity;
    }

    async delete(id: string) {
        const deleteIquiry = await dbConection.inquiry.delete({
            where:{
                id
            }
        });

        if(deleteIquiry instanceof BadRequest){
            return new BadRequest("Informação não deletada!")
        }

        return deleteIquiry;
    }
    async getname(name: string) {
        const getByName = await dbConection.inquiry.findFirst({
            where:{
                name
            }
        });

        if(!getByName){
            return new NullInformation();
        }

        return getByName;
    }
}
