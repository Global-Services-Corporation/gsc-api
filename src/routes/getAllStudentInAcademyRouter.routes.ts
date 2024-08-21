import { getAllStudentAcademy } from '../controllers/academy/useCase/getAllStudentAcademy/getAllStudentAcademyController';
import { FastifyInstance } from 'fastify';

export async function getAllStudentInAcademy(app: FastifyInstance){
    app.get('/academy', getAllStudentAcademy);
}