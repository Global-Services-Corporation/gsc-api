import { FastifyInstance } from 'fastify';
import { getAllIquirityUserController } from '../service/insurance/useCases/getUsers/getUsersController';

export async function getAllUserIquerity(app:FastifyInstance) {
    app.get('/iquirity/users', getAllIquirityUserController)
}