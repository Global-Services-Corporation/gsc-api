import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ZodError } from '../../error/globalError';
import { InDataBaseAcademyRepository } from "../../entity/academyDatabase/InDataBaseAcademyRepository";
import { GetStudentAcademyByNameUseCase } from "../../service/academy/getStudentAcademyByFullNameUseCase";

export async function getStudentAcademyByFullName(request: FastifyRequest, reply: FastifyReply) {
    const schemaBody = z.object({
        fullName: z.string()
    });
    const { fullName } = schemaBody.parse(request.body)
    try {
        const repository = new InDataBaseAcademyRepository();
        const getNameDataUseCase = new GetStudentAcademyByNameUseCase(repository);
        const getNameData = await getNameDataUseCase.execute(fullName);

        return reply.status(200).send({ getNameData });

    } catch (error) {
        if( error instanceof z.ZodError){
            console.error(error);
            return new ZodError('Erro de validação');
        }

        throw error;
    }
}