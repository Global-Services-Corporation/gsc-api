import { createSupportController } from '../controllers/support/useCases/createSupport/createSupportController';
import { FastifyInstance } from 'fastify';

export async function insertSupport(app:FastifyInstance) {
    app.post('/support', createSupportController)
}