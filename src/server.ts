import express from "express";
import morgan from "morgan";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
  }

  config() {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan('dev'));
  }

  routes() {}

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server on port ${this.app.get("port")}`);
    });
  }
}

const server: Server = new Server();

server.start();
