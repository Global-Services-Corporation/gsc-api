import { FastifyInstance } from 'fastify';
import { createInsuranceController } from '../service/insurance/useCases/createInsurance/createInsureanceController';

export  async function InsertInquirity(app:FastifyInstance){
    app.post('/iquirity', createInsuranceController);
}