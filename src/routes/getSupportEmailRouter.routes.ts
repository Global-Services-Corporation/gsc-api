import { getSupportByEmailController } from '../controllers/support/useCases/getByEmail/getByEmailController';
import { FastifyInstance } from 'fastify';

export async function getSupportByEmail(app: FastifyInstance) {
    app.post('/support/email', getSupportByEmailController)
}