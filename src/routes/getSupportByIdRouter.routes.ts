import { FastifyInstance } from "fastify";
import { getByIdController } from '../service/support/useCases/getClientById/getByIdController';

export async function getSupportById(app: FastifyInstance){
    app.get('/support/:id', getByIdController)
}