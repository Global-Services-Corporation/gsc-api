import { Adesion, Prisma } from "@prisma/client";


export interface AdesionRepository {
    save(data: Prisma.AdesionCreateInput):Promise<Adesion>;
    getAll(): Promise<Adesion[] | null>;
    findById(id: number): Promise<Adesion | null>;
}