import { FastifyInstance } from 'fastify';
import { deleteSupportController } from '../service/support/useCases/deleteSupport/deleteSupportController';

export async function deleteSupport(app: FastifyInstance) {
    app.delete('/support/:id', deleteSupportController)
}