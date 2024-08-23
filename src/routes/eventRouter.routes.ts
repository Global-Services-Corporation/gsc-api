import { FastifyInstance } from "fastify";
import { createAdesionController } from "../controllers/event/adesion/CreateAdesionController";
import { getAdesionByIdController} from "../controllers/event/adesion/getAdesionIdController";
import { getAllAdesionController } from "../controllers/event/adesion/getAllAdesionController";

import { createContactController } from "../controllers/event/contact/createContactController";
import { getAllContactController } from "../controllers/event/contact/getAllContactController";
import { getContactByIdController } from "../controllers/event/contact/getContactIdController";


export async function eventRouter(app: FastifyInstance){
    app.post('/event/adesion', createAdesionController);
    app.get('/event/adesion/:id', getAdesionByIdController);
    app.get('/event/adesion', getAllAdesionController);


    app.post('/event/contact', createContactController);
    app.get('/event/contact/:id', getContactByIdController);
    app.get('/event/contact', getAllContactController);
}