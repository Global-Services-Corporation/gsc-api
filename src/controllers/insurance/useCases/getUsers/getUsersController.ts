import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import { GetAllIquirityUserUseCase } from './getUsersUseCas';
import { IsuranceDatabase } from '../../repository/implementations/InsuranceDataBase';
import { ZodError } from '../../../../error/globalError';

export async function getAllIquirityUserController(request: FastifyRequest, reply: FastifyReply) {

    try {
        const iquirityRepository = new IsuranceDatabase();
        const insertInsuranceData =  new GetAllIquirityUserUseCase(iquirityRepository);
        const allInquitryuser = await insertInsuranceData.execute();

        return reply.status(200).send({allInquitryuser})
            
    } catch (error) {
            if( error instanceof z.ZodError){

                return new ZodError('Erro de validação');
            } else{
                return reply.status(500).send({ message: 'erro interno do servidor'});
            }
    }
}