import { Contact, Prisma } from "@prisma/client";

export interface ContactRepository {
    save(data: Prisma.ContactCreateInput):Promise<Contact>;
    getAll(): Promise<Contact[] | null>;
    findById(id: number): Promise<Contact | null>;
}