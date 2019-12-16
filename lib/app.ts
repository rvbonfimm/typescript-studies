import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/ContactRoutes";
import * as mongoose from "mongoose";

class App {
  public app: express.Application;
  public route: Routes = new Routes();
  public mongoUrl: string = "mongodb://localhost/typescriptstudies";

  constructor() {
    this.app = express();
    this.config();
    this.route.routes(this.app);
    this.mongoConnection();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoConnection(): void {
    mongoose.connect(this.mongoUrl, { 
      useNewUrlParser: true,
      useFindAndModify: false 
    });
  }
}

export default new App().app;