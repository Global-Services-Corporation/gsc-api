import { FastifyInstance } from 'fastify';
import { deletequirityController } from '../service/insurance/useCases/deleteIquirity/deleteiquirityController';

export async function deleteIquirity(app:FastifyInstance) {
    app.delete('/iquirity/users/:id', deletequirityController)
}