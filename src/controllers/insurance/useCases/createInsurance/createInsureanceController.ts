import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateInsuranceUseCase } from './createInsureanceUseCase';
import { IsuranceDatabase } from '../../repository/implementations/InsuranceDataBase';
import { ZodError } from '../../../../error/globalError';

export async function createInsuranceController(request: FastifyRequest, reply: FastifyReply) {
    
    const schemaBody =  z.object({
        name: z.string(),
        nif: z.string(),
        phone: z.string(),
        email: z.string().email(),
        hospital: z.enum(["Yes", "No"]).default("No"),   
        insurance: z.enum(["Monthly", "Quarterly", "Annually"]).default("Monthly"),
        doctor: z.enum(["Yes", "No"]).default("No"),
        condition: z.enum(["Yes", "No"]).default("No"),
        benefits: z.enum(["MedicalConsultations", "Exams", "Hospitalization"]).default("Hospitalization"),
        treatment: z.enum(["Yes", "No"]).default("No"),
        networkOf: z.enum(["Yes", "No"]).default("No"),
        coberturaMedica: z.string()

    });
    
    const { 
        name,
        nif,
        phone,
        email,
        hospital,
        insurance,
        doctor,
        condition,
        benefits,
        treatment,
        networkOf, 
        coberturaMedica
     } = schemaBody.parse(request.body)

    try {
        const iquirityRepository = new IsuranceDatabase();
        const insertInsuranceData =  new CreateInsuranceUseCase(iquirityRepository);
        const createInquitry = await insertInsuranceData.execute({
            name,
            nif,
            phone,
            email,
            hospital,
            insurance,
            doctor,
            condition,
            benefits,
            treatment,
            networkOf, 
            coberturaMedica
        });

        return reply.status(201).send({ message: "Created insurance iquiry successfully", createInquitry})
            
    } catch (error) {
            if( error instanceof z.ZodError){
                console.error(error);
                return new ZodError('Erro de validação');
            } else {
                console.log(error)
                return reply.status(500).send({ message: 'Erro ao enviar os dados!'});
            }

        throw error;
    }
}