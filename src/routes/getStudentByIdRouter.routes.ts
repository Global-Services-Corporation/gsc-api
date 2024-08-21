import { getStudentAcademyById } from '../controllers/academy/useCase/getStudentById/getStudentByIdAcademyController';
import { FastifyInstance } from 'fastify';

export async function getStudentById(app: FastifyInstance) {
    app.get('/academy/:id', getStudentAcademyById);
}