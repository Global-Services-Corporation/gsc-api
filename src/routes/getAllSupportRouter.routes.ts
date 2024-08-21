import { FastifyInstance } from "fastify";
import { getAllSupportController } from '../controllers/support/useCases/getClientSupport/getSupportController';

export async function getAllSupport(app: FastifyInstance){
    app.get('/support', getAllSupportController)
}