import { FastifyRequest, FastifyReply} from "fastify";
import { GetContactByIdUseCase } from "../../../service/event/contact/getContactIdUseCase";
import { ContactDatabase } from "../../../entity/eventDatabase/contactDatabase"
import { z } from "zod";

export async function getContactByIdController(request: FastifyRequest, reply: FastifyReply){
    const contactSchemaParam = z.object({
        id: z.coerce.number()
    });

    const { id } = contactSchemaParam .parse(request.params);

    const contactRepository = new ContactDatabase()
    const contactUseCase = new GetContactByIdUseCase(contactRepository);
    const getData = await contactUseCase.execute(id);

    if(!getData){
        return reply.status(500).send({message: "Não foi possível obter os dados ❌"});
    }

    return reply.status(201).send({getData})

}