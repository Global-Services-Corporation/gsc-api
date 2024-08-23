import { FastifyInstance } from 'fastify';
import { getquirityUserByNameController } from '../controllers/insurance/getByNameController';

export async function getByIquirityName(app:FastifyInstance) {
    app.post('/iquirity/users', getquirityUserByNameController);
}