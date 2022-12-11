import Controller from 'app/Controller';
import Route from 'app/Route';

class PostsController extends Controller {
  PREFIX = '/posts';
  ROUTES = [this.index()];

  private index() {
    return new Route({
      path: '/',
      handler: async (c) => {
        c.body = {
          posts: [],
        };
      },
    });
  }

  private test() {
    return new Route({
      path: '/test',
      handler: async (c) => {
        c.body = {
          test: 'ok',
        };
      },
    });
  }
}

export default new PostsController().init();
