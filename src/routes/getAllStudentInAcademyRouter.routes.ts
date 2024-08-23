import { FastifyInstance } from 'fastify';
import { getAllStudentAcademy } from '../controllers/academy/getAllStudentAcademyController';

export async function getAllStudentInAcademy(app: FastifyInstance){
    app.get('/academy', getAllStudentAcademy);
}