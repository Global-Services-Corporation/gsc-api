import {  Prisma } from "@prisma/client";
import { dbConection } from '../databaseConnector/conection';
import { AdesionRepository } from '../../repositories/event/AdesionRepository';

export class AdesionDatabase implements AdesionRepository {
    
    async save(data: Prisma.AdesionCreateInput) {
        const adesion = await dbConection.adesion.create({
            data
        });

        return adesion;
    }

   async findById(id: number) {
        const getAdesion = await dbConection.adesion.findUnique({
            where:{
                id,
            }
        });

        if(!getAdesion){
            return null;
        }

        return getAdesion;
    }

    async getAll() {
        const allAdesion = await dbConection.adesion.findMany({});

        if(!allAdesion){
            return null;
        }

        return allAdesion;
    }
}
