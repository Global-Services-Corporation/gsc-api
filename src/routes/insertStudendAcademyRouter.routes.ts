import { FastifyInstance } from "fastify";
import { insertStudentAcademy } from "../controllers/academy/inserStudentAcademyController";

export async function insertStudentInAcademy(app: FastifyInstance) {
    app.post('/academy', insertStudentAcademy);
}