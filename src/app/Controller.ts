import Router from '@koa/router';
import Route from './Route';

export default class Controller {
  private router!: Router;

  public PREFIX!: string;
  public ROUTES: Route[] = [];

  public init() {
    // initialize router
    this.router = new Router();

    // register routes
    this.ROUTES.forEach((r) => {
      const connect = r.connect();
      this.router.register(connect.path, connect.methods, connect.handler);
    });

    return this;
  }

  public connect(router: Router, base = this.PREFIX) {
    router.use(base, this.router.routes(), this.router.allowedMethods());
  }
}
