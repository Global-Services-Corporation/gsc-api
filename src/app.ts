import Fastify from 'fastify';
import cors from '@fastify/cors';
import { InsertInquirity } from './routes/createInquirityRouter.routes';
import { getAllUserIquerity } from './routes/getAlliquirityRouter.routes';
import {getIquirityByid } from './routes/getUserIquirityIdRouter.routes';
import { getByIquirityName } from './routes/getIquirityByNameRouter.routes';
import { deleteIquirity } from './routes/deleteIquirityRouter.routes';
import {  insertSupport } from './routes/createSupportRouter.routes';
import { deleteSupport } from './routes/deleteSupportRouter.routes';
import { getSupportByEmail } from './routes/getSupportEmailRouter.routes';
import { getAllSupport } from './routes/getAllSupportRouter.routes';
import { getSupportById } from './routes/getSupportByIdRouter.routes';
import { insertStudentInAcademy } from './routes/insertStudendAcademyRouter.routes';
import { getAllStudentInAcademy } from './routes/getAllStudentInAcademyRouter.routes';
import { getStudentById } from './routes/getStudentByIdRouter.routes';
import { getStudentByEmail } from './routes/getStudentByEmailRouter.routes';
import { getStudentByFullName } from './routes/getStudentByFullNameRouter.routes';

export const app = Fastify();

app.register(cors, { 
    origin: '*',
    methods:['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
});

app.register(InsertInquirity);
app.register(insertStudentInAcademy);
app.register(insertSupport);
app.register(deleteIquirity);
app.register(deleteSupport);
app.register(getAllUserIquerity);
app.register(getAllSupport);
app.register(getAllStudentInAcademy);
app.register(getByIquirityName);
app.register(getStudentByFullName);
app.register(getSupportByEmail);
app.register(getStudentByEmail);
app.register(getStudentById);
app.register(getIquirityByid);
app.register(getSupportById);