import { FastifyInstance } from 'fastify';
import { getquirityUserByNameController } from '../service/insurance/useCases/getName/getByNameController';

export async function getByIquirityName(app:FastifyInstance) {
    app.post('/iquirity/users', getquirityUserByNameController);
}