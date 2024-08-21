import { deleteSupportController } from '../controllers/support/useCases/deleteSupport/deleteSupportController';
import { FastifyInstance } from 'fastify';

export async function deleteSupport(app: FastifyInstance) {
    app.delete('/support/:id', deleteSupportController)
}