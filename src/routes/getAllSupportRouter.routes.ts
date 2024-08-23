import { FastifyInstance } from "fastify";
import { getAllSupportController } from '../service/support/useCases/getClientSupport/getSupportController';

export async function getAllSupport(app: FastifyInstance){
    app.get('/support', getAllSupportController)
}