import express from 'express';
import type { Express } from 'express';

export default class App {
  public express: Express;

  constructor() {
    this.express = express();
    this.loadMiddlewares();
    this.loadRoutes();
  }

  private loadRoutes() {}

  private loadMiddlewares() {}
}
