import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateSupportUseCase } from './createSupportUseCase';
import { InDatabaseSupport } from '../../repository/implementations/SupportInDataBase';
import { ZodError } from '../../../../error/globalError';

export async function createSupportController(request: FastifyRequest, reply: FastifyReply) {
    
    const schemaBody =  z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string(),
        message: z.string()
    });
    
    const { 
        name,
        phone,
        email,
        message
     } = schemaBody.parse(request.body)

    try {
        const supportRepository = new InDatabaseSupport();
        const insertSupportData =  new CreateSupportUseCase(supportRepository);
        const createSupport = await insertSupportData.execute({
            name,
            phone,
            email,
            message
        });

        return reply.status(201).send({ message: "Created support successfully", createSupport})
            
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