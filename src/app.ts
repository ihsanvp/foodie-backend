import express from 'express';
import type { Express } from 'express';

class App {
  public express: Express;

  constructor() {
    this.express = express();
    this.loadMiddlewares();
    this.loadRoutes();
  }

  private loadRoutes() {}

  private loadMiddlewares() {}
}

export default App;
