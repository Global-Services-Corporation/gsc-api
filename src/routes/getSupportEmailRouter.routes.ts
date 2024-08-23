import { FastifyInstance } from 'fastify';
import { getSupportByEmailController } from '../service/support/useCases/getByEmail/getByEmailController';

export async function getSupportByEmail(app: FastifyInstance) {
    app.post('/support/email', getSupportByEmailController)
}