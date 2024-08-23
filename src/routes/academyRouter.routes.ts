import { FastifyInstance } from "fastify";
import { insertStudentAcademy } from "../controllers/academy/inserStudentAcademyController";
import { getAllStudentAcademy } from '../controllers/academy/getAllStudentAcademyController';
import { getStudentAcademyByEmail } from '../controllers/academy/getStudentAcademyByEmailController';
import { getStudentAcademyByFullName } from '../controllers/academy/getStudentAcademyByFullNameController';
import { getStudentAcademyById } from '../controllers/academy/getStudentByIdAcademyController';

export async function academyRouter(app: FastifyInstance) {
    app.post('/academy', insertStudentAcademy);
    app.get('/academy/student', getAllStudentAcademy);
    app.post('/academy/student/email', getStudentAcademyByEmail);
    app.post('/academy/student/name', getStudentAcademyByFullName);
    app.get('/academy/student/:id', getStudentAcademyById);
}