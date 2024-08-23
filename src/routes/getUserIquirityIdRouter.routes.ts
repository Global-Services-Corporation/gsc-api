import { FastifyInstance } from "fastify";
import { getquirityUserByIdController } from '../service/insurance/useCases/getUsersByid/getuserByIdController';

export async function getIquirityByid(app:FastifyInstance) {
    app.get('/iquirity/users/:id', getquirityUserByIdController);
}