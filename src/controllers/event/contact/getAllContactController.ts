import { FastifyRequest, FastifyReply} from "fastify";
import { GetAllContactUseCase } from "../../../service/event/contact/getAllContactUseCase";
import { ContactDatabase } from "../../../entity/eventDatabase/contactDatabase"

export async function getAllContactController(request: FastifyRequest, reply: FastifyReply){

    const contactRepository = new ContactDatabase()
    const contactUseCase = new GetAllContactUseCase(contactRepository);
    const getAllData = await contactUseCase.execute();

    if(!getAllData){
        return reply.status(500).send({message: "Não foi possível obter os dados ❌"});
    }

    return reply.status(201).send({getAllData})

}