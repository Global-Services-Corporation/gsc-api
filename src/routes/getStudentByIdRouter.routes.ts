import { FastifyInstance } from 'fastify';
import { getStudentAcademyById } from '../controllers/academy/getStudentByIdAcademyController';

export async function getStudentById(app: FastifyInstance) {
    app.get('/academy/:id', getStudentAcademyById);
}