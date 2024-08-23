import { FastifyRequest, FastifyReply} from "fastify";
import { z } from "zod";
import { CreateContactUseCase } from "../../../service/event/contact/createContactUseCase";
import { ContactDatabase } from "../../../entity/eventDatabase/contactDatabase"
import { BadRequest } from "../../../error/globalError";


export async function createContactController(request: FastifyRequest, reply: FastifyReply){
    const contactDataBodySchema = z.object({
        email: z.string({required_error: "email é obrigatório"}).email(),
        name: z.string({required_error: "O nome é obrigatório"}), 
        message: z.string({required_error: "Insira a mensagem"}), 
        phone: z.string({required_error:"Insere o numero de telemóvel"})
    });

    const {
        email,
        name,
        message,
        phone
    } = contactDataBodySchema.parse(request.body);

    const contactRepository = new ContactDatabase()
    const contactUseCase = new CreateContactUseCase(contactRepository);
    const insertData = await contactUseCase.execute({
         email,
         name,
        message,
        phone
    });

    if(insertData instanceof BadRequest){
        return reply.status(500).send({message: "Não foi possível registrar os dados ❌"});
    }

    return reply.status(201).send({message: "Envio realizado com sucesso✔"})

}