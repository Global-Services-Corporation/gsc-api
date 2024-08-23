import { FastifyInstance } from 'fastify';
import { deleteSupportController } from '../controllers/support/deleteSupportController';

export async function deleteSupport(app: FastifyInstance) {
    app.delete('/support/:id', deleteSupportController)
}