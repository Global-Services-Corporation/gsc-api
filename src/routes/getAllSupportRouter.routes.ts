import { FastifyInstance } from "fastify";
import { getAllSupportController } from '../controllers/support/getSupportController';

export async function getAllSupport(app: FastifyInstance){
    app.get('/support', getAllSupportController)
}