import KoaRouter from '@koa/router';
import BaseController from 'controllers/BaseController';
import PostsController from 'controllers/PostsController';

const Router = new KoaRouter();

BaseController.connect(Router, '/');
PostsController.connect(Router, '/posts');

export default Router;
