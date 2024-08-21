import { SupportDatabaseRepository } from '../SupportRepository';
import {dbConection } from '../../../../database/conection';

export class InDatabaseSupport implements SupportDatabaseRepository {
    async save(
        name: string,
        email: string,
        phone: string,
        message: string
    ) {
      const create = await dbConection.support.create({
        data:{
            name,
            email,
            phone,
            message
        }
      });

      return create;
    }

    async list() {
        const getAll = await dbConection.support.findMany({});

        return getAll;
    }

    async getbyId(id: string) {
        const getSupportId = await dbConection.support.findUnique({
            where:{
                id
            }
        });

        return getSupportId;
    }

    async delete(id: string) {
      const deleteSupport = await dbConection.support.delete({
        where:{
            id
        }
      });
    }

    async getEmail(email: string) {
        const getClient = await dbConection.support.findFirst({
            where:{
                email
            }
        });

        return getClient;
    }
}