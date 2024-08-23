import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { InDatabaseSupport } from '../../entity/supportDatabase/SupportInDataBase';
import { ZodError } from '../../error/globalError';
import { GetSupportByEmailUseCase } from '../../service/support/getByEmailUseCase';

export async function getSupportByEmailController(request: FastifyRequest, reply: FastifyReply) {

    const bodySchema = z.object({
        email: z.string().email()
    });

    const { email } = bodySchema.parse(request.body);

    try {
        const supportRepository = new InDatabaseSupport();
        const supportByEmail =  new GetSupportByEmailUseCase(supportRepository);
        const supportEmail = await supportByEmail.execute(email);

        return reply.status(200).send({supportEmail})
            
    } catch (error) {
        if( error instanceof z.ZodError){
            return new ZodError('Erro de validação');
        } else{
            return reply.status(500).send({ message: 'dados não encontrado'});
        }
       throw error;
    }
}