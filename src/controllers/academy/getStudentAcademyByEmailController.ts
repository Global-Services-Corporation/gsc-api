import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ZodError } from '../../error/globalError';
import { InDataBaseAcademyRepository } from "../../entity/academyDatabase/InDataBaseAcademyRepository";
import { GetStudentAcademyEmailUseCase } from "../../service/academy/getStudentAcademyByEmailUseCase";

export async function getStudentAcademyByEmail(request: FastifyRequest, reply: FastifyReply) {
    const schemaBody = z.object({
        email: z.string().email().min(5)
    });
    const { email } = schemaBody.parse(request.body)
    try {
        const repository = new InDataBaseAcademyRepository();
        const getEmailDataUseCase = new GetStudentAcademyEmailUseCase(repository);
        const getEmailData = await getEmailDataUseCase.execute(email);

        return reply.status(200).send({ getEmailData });

    } catch (error) {
        if( error instanceof z.ZodError){
            console.error(error);
            return new ZodError('Erro de validação');
        }

        throw error;
    }
}