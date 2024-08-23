import { FastifyInstance } from 'fastify';
import { createSupportController } from '../controllers/support/createSupportController';
import { deleteSupportController } from '../controllers/support/deleteSupportController';
import { getAllSupportController } from '../controllers/support/getSupportController';
import { getByIdController } from '../controllers/support/getByIdController';
import { getSupportByEmailController } from '../controllers/support/getByEmailController';

export async function supportRouter(app:FastifyInstance) {
    app.post('/support', createSupportController);
    app.delete('/support/:id', deleteSupportController);
    app.get('/support', getAllSupportController);
    app.get('/support/:id', getByIdController);
    app.post('/support/email', getSupportByEmailController)
}