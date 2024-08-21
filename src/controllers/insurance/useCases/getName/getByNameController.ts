import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import { GetIquirityUserNameUseCase } from './getByNameUseCase';
import { IsuranceDatabase } from '../../repository/implementations/InsuranceDataBase';
import { ZodError } from '../../../../error/globalError';

export async function getquirityUserByNameController(request: FastifyRequest, reply: FastifyReply) {

    const bodySchema = z.object({
        name: z.string()
    });

    const { name } = bodySchema.parse(request.body);

    try {
        const iquirityRepository = new IsuranceDatabase();
        const insertInsuranceData =  new GetIquirityUserNameUseCase(iquirityRepository);
        const getInquitryuserByIdOrName = await insertInsuranceData.execute(name);

        return reply.status(200).send({getInquitryuserByIdOrName})
            
    } catch (error) {
            if( error instanceof z.ZodError){

                return new ZodError('Erro de validação');
            } else{
                return reply.status(500).send({ message: 'dados não encontrado'});
            }

            throw error;
    }
}