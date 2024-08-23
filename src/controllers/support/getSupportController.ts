import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { InDatabaseSupport } from '../../entity/supportDatabase/SupportInDataBase';
import { ZodError } from '../../error/globalError';
import { GetAllSupportUseCase } from '../../service/support/getSupportUseCas';

export async function getAllSupportController(request: FastifyRequest, reply: FastifyReply) {

    try {
        const supportRepository = new InDatabaseSupport();
        const getSupportData =  new GetAllSupportUseCase(supportRepository);
        const allSupport = await getSupportData.execute();

        return reply.status(200).send({allSupport})
            
    } catch (error) {
            if( error instanceof z.ZodError){

                return new ZodError('Erro de validação');
            } else{
                return reply.status(500).send({ message: 'erro interno do servidor'});
            }
    }
}