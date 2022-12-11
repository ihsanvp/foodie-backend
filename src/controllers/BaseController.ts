import Controller from 'app/Controller';
import Route from 'app/Route';

class BaseController extends Controller {
  ROUTES = [this.index()];

  private index() {
    return new Route({
      path: '/',
      handler: async (c) => {
        c.body = {
          message: 'Hello 3',
        };
      },
    });
  }
}

export default new BaseController().init();
