import { FastifyRequest, FastifyReply} from "fastify";
import { z } from "zod";
import { CreateAdesionUseCase } from "../../../service/event/adesion/createAdesionUseCase";
import { AdesionDatabase } from "../../../entity/eventDatabase/adesionDatabase"
import { BadRequest } from "../../../error/globalError";


export async function createAdesionController(request: FastifyRequest, reply: FastifyReply){
    const adesionDataBodySchema = z.object({
        email: z.string({required_error: "email é obrigatório"}).email(),
        name: z.string({required_error: "O nome é obrigatório"}), 
        nif: z.string({required_error: "Insira o nif"}), 
        phone: z.string({required_error:"Insere o numero de telemóvel"})
    });

    const {
        email,
        name,
        nif,
        phone
    } = adesionDataBodySchema.parse(request.body);

    const adesionRepository = new AdesionDatabase()
    const adesionUseCase = new CreateAdesionUseCase(adesionRepository);
    const insertData = await adesionUseCase.execute({
         email,
         name,
        nif,
        phone
    });

    if(insertData instanceof BadRequest){
        return reply.status(500).send({message: "Não foi possível registrar os dados ❌"});
    }

    return reply.status(201).send({message: "Envio realizado com sucesso✔"})

}