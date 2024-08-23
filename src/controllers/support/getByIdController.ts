import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { InDatabaseSupport } from '../../entity/supportDatabase/SupportInDataBase';
import { ZodError } from '../../error/globalError';
import { GetByIdUseCase } from '../../service/support/getByidUseCase';

export async function getByIdController(request: FastifyRequest, reply: FastifyReply) {

    const paramsSchema = z.object({
        id: z.string().uuid()
    });

    const { id } = paramsSchema.parse(request.params);

    try {
        const supportRepository = new InDatabaseSupport();
        const getSupport =  new GetByIdUseCase(supportRepository);
        const getById = await getSupport.execute(id);

        return reply.status(200).send({getById})
            
    } catch (error) {
            if( error instanceof z.ZodError){

                return new ZodError('Erro de validação');
            } else{
                return reply.status(500).send({ message: 'dados não encontrado'});
            }

            throw error;
    }
}