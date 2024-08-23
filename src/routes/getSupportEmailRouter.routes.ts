import { FastifyInstance } from 'fastify';
import { getSupportByEmailController } from '../controllers/support/getByEmailController';

export async function getSupportByEmail(app: FastifyInstance) {
    app.post('/support/email', getSupportByEmailController)
}