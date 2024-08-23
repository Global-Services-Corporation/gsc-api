import { FastifyInstance } from 'fastify';
import { getAllIquirityUserController } from '../controllers/insurance/getUsersController';

export async function getAllUserIquerity(app:FastifyInstance) {
    app.get('/iquirity/users', getAllIquirityUserController)
}