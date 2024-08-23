import { FastifyInstance } from 'fastify';
import { getStudentAcademyByEmail } from '../controllers/academy/getStudentAcademyByEmailController';

export async function getStudentByEmail(app: FastifyInstance){
    app.post('/academy/email', getStudentAcademyByEmail);
}