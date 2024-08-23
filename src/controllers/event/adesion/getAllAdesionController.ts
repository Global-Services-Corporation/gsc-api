import { FastifyRequest, FastifyReply} from "fastify";
import { z } from "zod";
import { GetAllAdesionUseCase } from "../../../service/event/adesion/getAdesionUseCase";
import { AdesionDatabase } from "../../../entity/eventDatabase/adesionDatabase"

export async function getAllAdesionController(request: FastifyRequest, reply: FastifyReply){

    const adesionRepository = new AdesionDatabase()
    const adesionUseCase = new GetAllAdesionUseCase(adesionRepository);
    const getData = await adesionUseCase.execute();

    if(!getData){
        return reply.status(500).send({message: "Não foi possível obter os dados ❌"});
    }

    return reply.status(201).send({getData})

}