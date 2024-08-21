import  {getStudentAcademyByEmail } from '../controllers/academy/useCase/getByStudentEmail/getStudentAcademyByEmailController';
import { FastifyInstance } from 'fastify';

export async function getStudentByEmail(app: FastifyInstance){
    app.post('/academy/email', getStudentAcademyByEmail);
}