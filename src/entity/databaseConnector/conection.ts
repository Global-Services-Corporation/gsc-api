import { PrismaClient } from '@prisma/client';
import { env } from '../../env/index';

const dbConection = new PrismaClient({
    log: env.NODE_ENV == 'dev' ? ['query'] : []
})

export { dbConection };
