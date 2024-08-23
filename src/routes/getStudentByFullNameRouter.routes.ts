import { FastifyInstance } from "fastify";
import { getStudentAcademyByFullName } from '../controllers/academy/getStudentAcademyByFullNameController';

export async function getStudentByFullName(app: FastifyInstance){
    app.post('/academy/student', getStudentAcademyByFullName);
}