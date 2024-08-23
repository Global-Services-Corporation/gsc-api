import { FastifyRequest, FastifyReply} from "fastify";
import { z } from "zod";
import { AdesionByIdUseCase } from "../../../service/event/adesion/getAdesionIdUseCase";
import { AdesionDatabase } from "../../../entity/eventDatabase/adesionDatabase"

export async function getAdesionByIdController(request: FastifyRequest, reply: FastifyReply){
    const adesionDataParamsSchema = z.object({
        id: z.coerce.number()
    });

    const { id } = adesionDataParamsSchema.parse(request.params);

    const adesionRepository = new AdesionDatabase()
    const adesionUseCase = new AdesionByIdUseCase(adesionRepository);
    const getData = await adesionUseCase.execute(id);

    if(!getData){
        return reply.status(500).send({message: "Não foi possível obter os dados ❌"});
    }

    return reply.status(201).send({getData})

}