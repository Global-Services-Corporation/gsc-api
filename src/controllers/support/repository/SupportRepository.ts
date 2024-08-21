import { Support } from "@prisma/client";
export interface SupportDatabaseRepository {
    save(
        name: string,
        email: string,
        phone: string,
        message: string
    ): Promise<Support | null>;
    list(): Promise<Support[] | null>;
    getbyId(id: string): Promise<Support | null>;
    delete(id: string): Promise<void | Error>;
    getEmail(email: string): Promise<Support | null>
}