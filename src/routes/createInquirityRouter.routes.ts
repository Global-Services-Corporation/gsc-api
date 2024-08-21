import { createInsuranceController } from '../controllers/insurance/useCases/createInsurance/createInsureanceController';
import { FastifyInstance } from 'fastify';

export  async function InsertInquirity(app:FastifyInstance){
    app.post('/iquirity', createInsuranceController);
}