import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ZodError } from '../../../../error/globalError';
import { InDataBaseAcademyRepository } from "../../repository/implementations/InDataBaseAcademyRepository";
import { InsertStudentAcademyUseCase } from "./insertStudentAcademyUseCase";

export async function insertStudentAcademy(request: FastifyRequest, reply: FastifyReply) {

    const dateStringSchema = z.preprocess((arg) => {
        if (typeof arg === 'string') {
          const [day, month, year] = arg.split('/').map(Number);
          if (day && month && year) {
            // Adiciona 2000 ao ano se for representado como dois dígitos
            const fullYear = year < 100 ? year + 2000 : year;
            return new Date(fullYear, month - 1, day);
          }
        }
        return arg;
      }, z.date());
      
    const schemaBody = z.object({
        fullName: z.string({message: "insira seu nome completo"}),
        phone: z.string({message: "número de telemóvel deve existir"}),
        email: z.string().email({message: "e-mail deve ser válido ter no mínimo 5 caracteres"}).min(5),
        bornDate: dateStringSchema
    });

    const {
        fullName,
        phone,
        email,
        bornDate
    } = schemaBody.parse(request.body);

    try {
        const repository = new InDataBaseAcademyRepository();
        const insertDataUseCase = new InsertStudentAcademyUseCase(repository);
        const insertData = await insertDataUseCase.execute({
            fullName,
            phone,
            email,
            bornDate
    });

    return reply.status(201).send({ insertData });

    } catch (error) {
        if( error instanceof z.ZodError){
            console.error(error);
            return new ZodError('Erro de validação');
        } else{
            return reply.status(500).send({message: "Erro ao enviar os dados!"})
        }
        
        throw error;
    }
}