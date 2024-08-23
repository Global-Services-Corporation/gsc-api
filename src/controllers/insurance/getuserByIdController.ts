import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { IsuranceDatabase } from '../../entity/insuranceDatabase/InsuranceDataBase';
import { ZodError } from '../../error/globalError';
import { GetIquirityUserByIdUseCase } from '../../service/insurance/getUsersByidUseCase';

export async function getquirityUserByIdController(request: FastifyRequest, reply: FastifyReply) {

    const paramsSchema = z.object({
        id: z.string().uuid()
    });

    const { id } = paramsSchema.parse(request.params);

    try {
        const iquirityRepository = new IsuranceDatabase();
        const insertInsuranceData =  new GetIquirityUserByIdUseCase(iquirityRepository);
        const getInquitryuserByIdOrName = await insertInsuranceData.execute(id);

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