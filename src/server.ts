import Koa from 'koa';
import parser from 'koa-bodyparser';
import json from 'koa-json';
import cors from '@koa/cors';
import Router from 'router';

const App = new Koa();
const PORT = process.env.PORT || 8000;

// Middlewares
App.use(json());
App.use(cors());

App.use(Router.routes());
App.use(Router.allowedMethods());

App.listen(PORT, () => console.log(`🚀 Server listening http://127.0.0.1:${PORT}/ 🚀`));
