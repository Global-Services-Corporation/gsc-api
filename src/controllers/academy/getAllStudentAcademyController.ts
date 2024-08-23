import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ZodError } from '../../error/globalError';
import { InDataBaseAcademyRepository } from "../../repository/implementations/InDataBaseAcademyRepository";
import { GetAllStudentAcademyUseCase } from "../../service/academy/useCase/getAllStudentAcademy/getAllStudentAcademyUseCase";

export async function getAllStudentAcademy(request: FastifyRequest, reply: FastifyReply) {

    try {
        const repository = new InDataBaseAcademyRepository();
        const getAllDataUseCase = new GetAllStudentAcademyUseCase(repository);
        const getAllData = await getAllDataUseCase.execute();

        return reply.status(200).send({ getAllData });

    } catch (error) {
        if( error instanceof z.ZodError){
            console.error(error);
            return new ZodError('Erro de validação');
        }

        throw error;
    }
}