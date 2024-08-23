import { FastifyInstance } from 'fastify';
import { createInsuranceController } from '../controllers/insurance/createInsureanceController';

export  async function InsertInquirity(app:FastifyInstance){
    app.post('/iquirity', createInsuranceController);
}