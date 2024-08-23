import { FastifyInstance } from 'fastify';
import { createSupportController } from '../controllers/support/createSupportController';

export async function insertSupport(app:FastifyInstance) {
    app.post('/support', createSupportController)
}