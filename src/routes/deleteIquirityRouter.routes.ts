import { deletequirityController } from '../controllers/insurance/useCases/deleteIquirity/deleteiquirityController';
import { FastifyInstance } from 'fastify';

export async function deleteIquirity(app:FastifyInstance) {
    app.delete('/iquirity/users/:id', deletequirityController)
}