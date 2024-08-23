import { FastifyInstance } from "fastify";
import { getByIdController } from '../controllers/support/getByIdController';

export async function getSupportById(app: FastifyInstance){
    app.get('/support/:id', getByIdController)
}