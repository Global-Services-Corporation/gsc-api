import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import { GetAllSupportUseCase } from './getSupportUseCas';
import { InDatabaseSupport } from '../../repository/implementations/SupportInDataBase';
import { ZodError } from '../../../../error/globalError';

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