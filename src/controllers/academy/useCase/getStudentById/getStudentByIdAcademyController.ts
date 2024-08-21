import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ZodError } from '../../../../error/globalError';
import { InDataBaseAcademyRepository } from "../../repository/implementations/InDataBaseAcademyRepository";
import { GetStudentAcademyByIdUseCase } from "./getByIdStudentAcademyUseCase";

export async function getStudentAcademyById(request: FastifyRequest, reply: FastifyReply) {
    const schemaParms = z.object({
        id: z.string().uuid()
    });
    const { id } = schemaParms.parse(request.params)
    try {
        const repository = new InDataBaseAcademyRepository();
        const getDataUseCase = new GetStudentAcademyByIdUseCase(repository);
        const getAllData = await getDataUseCase.execute(id);

        return reply.status(200).send({ getAllData });

    } catch (error) {
        if( error instanceof z.ZodError){
            console.error(error);
            return new ZodError('Erro de validação');
        }

        throw error;
    }
}