import { FastifyInstance } from 'fastify';
import { deletequirityController } from '../controllers/insurance/deleteiquirityController';

export async function deleteIquirity(app:FastifyInstance) {
    app.delete('/iquirity/users/:id', deletequirityController)
}