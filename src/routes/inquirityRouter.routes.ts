import { FastifyInstance } from 'fastify';
import { createInsuranceController } from '../controllers/insurance/createInsureanceController';
import { getAllIquirityUserController } from '../controllers/insurance/getUsersController';
import { getquirityUserByIdController } from '../controllers/insurance/getuserByIdController';
import { getquirityUserByNameController } from '../controllers/insurance/getByNameController';
import { deletequirityController } from '../controllers/insurance/deleteiquirityController';

export  async function inquirityRouter(app:FastifyInstance){
    app.post('/iquirity', createInsuranceController);
    app.get('/iquirity', getAllIquirityUserController);
    app.get('/iquirity/:id', getquirityUserByIdController);
    app.post('/iquirity/name', getquirityUserByNameController);
    app.delete('/iquirity/:id', deletequirityController)
}


