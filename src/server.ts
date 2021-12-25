import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import compression from "compression";
import cors from "cors";

//Routes:
import indexRoutes from "./routes/indexRoutes";
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    mongoose
      .connect(`${process.env.MONGODB_URL}`)
      .then((db) => console.log("db is connected"))
      .catch((err) => console.log("error connecting to db"));
    //Settings
    this.app.set("port", process.env.PORT || 3000);
    //Middlewares
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(cors());
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use("/api/posts", postRoutes);
    this.app.use("/api/users", userRoutes);
  }

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server on port ${this.app.get("port")}`);
    });
  }
}

const server: Server = new Server();

server.start();
