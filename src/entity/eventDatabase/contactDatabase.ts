import {  Prisma } from "@prisma/client";
import { dbConection } from '../databaseConnector/conection';
import { ContactRepository } from '../../repositories/event/contactRepository';

export class ContactDatabase implements ContactRepository {
    
    async save(data: Prisma.ContactCreateInput) {
        const contact = await dbConection.contact.create({
            data
        });

        return contact;
    }

   async findById(id: number) {
        const getContact = await dbConection.contact.findUnique({
            where:{
                id,
            }
        });

        if(!getContact){
            return null;
        }

        return getContact;
    }

    async getAll() {
        const allContact = await dbConection.contact.findMany({});

        if(!allContact){
            return null;
        }

        return allContact;
    }
}
