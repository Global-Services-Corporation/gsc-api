import Fastify from 'fastify';
import cors from '@fastify/cors';
import { academyRouter } from "./routes/academyRouter.routes";
import { eventRouter } from "./routes/eventRouter.routes";
import { inquirityRouter } from "./routes/inquirityRouter.routes";
import { supportRouter } from "./routes/supportRouter.routes";

export const app = Fastify();

app.register(cors, { 
    origin: '*',
    methods:['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
});

app.register(academyRouter);
app.register(eventRouter);
app.register(inquirityRouter);
app.register(supportRouter);