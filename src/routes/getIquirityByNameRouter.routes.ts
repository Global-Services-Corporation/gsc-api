import { getquirityUserByNameController } from '../controllers/insurance/useCases/getName/getByNameController';
import { FastifyInstance } from 'fastify';

export async function getByIquirityName(app:FastifyInstance) {
    app.post('/iquirity/users', getquirityUserByNameController);
}