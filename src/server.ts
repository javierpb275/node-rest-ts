import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import indexRoutes from "./routes/indexRoutes";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.set("port", process.env.PORT || 3000);
    //Middlewares
    this.app.use(morgan("dev"));
    this.app.use(helmet());
  }

  routes() {
    this.app.use(indexRoutes);
  }

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server on port ${this.app.get("port")}`);
    });
  }
}

const server: Server = new Server();

server.start();
