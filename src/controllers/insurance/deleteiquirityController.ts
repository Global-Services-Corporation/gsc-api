import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { IsuranceDatabase } from '../../../../entity/insuranceDatabase/InsuranceDataBase';
import { ZodError } from '../../../../error/globalError';
import { DeleteIquirityUseCase } from './deleteIquirityUseCase';

export async function deletequirityController(request: FastifyRequest, reply: FastifyReply) {

    const paramSchema = z.object({
        id: z.string().uuid()
    });

    const { id } = paramSchema.parse(request.params);

    try {
        const iquirityRepository = new IsuranceDatabase();
        const insertInsuranceData =  new DeleteIquirityUseCase(iquirityRepository);
        const deleteData = await insertInsuranceData.execute(id);

        return reply.status(200).send({message: "Delete data successfully"})
            
    } catch (error) {
            if( error instanceof z.ZodError){

                return new ZodError('Erro de validação');
            } else{
                return reply.status(500).send({ message: 'dados não encontrado'});
            }

            throw error;
    }
}