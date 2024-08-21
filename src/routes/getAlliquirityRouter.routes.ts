import { getAllIquirityUserController } from '../controllers/insurance/useCases/getUsers/getUsersController';
import { FastifyInstance } from 'fastify';

export async function getAllUserIquerity(app:FastifyInstance) {
    app.get('/iquirity/users', getAllIquirityUserController)
}