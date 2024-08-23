import { FastifyInstance } from 'fastify';
import { createSupportController } from '../service/support/useCases/createSupport/createSupportController';

export async function insertSupport(app:FastifyInstance) {
    app.post('/support', createSupportController)
}