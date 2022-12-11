import { Context, Next, Middleware } from 'koa';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type Handler = (c: Context, next: Next) => Promise<void>;
type Constructor = {
  methods?: Method[];
  path: string;
  handler: Handler;
};

export default class Route {
  private methods: Method[];
  private path: string;
  private handler: Handler;
  private middlewares: Middleware[];

  constructor(args: Constructor) {
    this.path = args.path;
    this.handler = args.handler;
    this.middlewares = [];
    this.methods = ['GET'];
  }

  public with(middleware: Middleware) {
    this.middlewares.push(middleware);
  }

  public connect() {
    return {
      methods: this.methods,
      path: this.path,
      handler: [...this.middlewares, this.handler],
    };
  }
}
