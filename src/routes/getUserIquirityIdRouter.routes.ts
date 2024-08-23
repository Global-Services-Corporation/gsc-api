import { FastifyInstance } from "fastify";
import { getquirityUserByIdController } from '../controllers/insurance/getuserByIdController';

export async function getIquirityByid(app:FastifyInstance) {
    app.get('/iquirity/users/:id', getquirityUserByIdController);
}