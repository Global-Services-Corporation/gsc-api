import { FastifyInstance } from "fastify";
import { insertStudentAcademy } from "../controllers/academy/useCase/InsertStudentAcademy/inserStudentAcademyController";

export async function insertStudentInAcademy(app: FastifyInstance) {
    app.post('/academy', insertStudentAcademy);
}