import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteSupportUseCase } from './deleteSupportUseCase';
import { InDatabaseSupport } from '../../repository/implementations/SupportInDataBase';
import { ZodError } from '../../../../error/globalError';

export async function deleteSupportController(request: FastifyRequest, reply: FastifyReply) {
    
    const schemaParams =  z.object({
        id: z.string().uuid()
    });
    
    const { id } = schemaParams.parse(request.params)

    try {
        const supportRepository = new InDatabaseSupport();
        const deleteSupportData =  new DeleteSupportUseCase(supportRepository);
        const createSupport = await deleteSupportData.execute( id );

        return reply.status(200).send({ message: "Deleted support successfully" })
            
    } catch (error) {
        if( error instanceof z.ZodError){
            console.error(error);
            return new ZodError('Erro de validação');
        } else {
            return reply.status(500).send({ message: 'Erro inesperado!'});
        }

        throw error;
    }
}