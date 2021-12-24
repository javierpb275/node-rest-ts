import { Request, Response, Router } from "express";

class IndexRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get("/", (req: Request, res: Response) =>
      res.send("Api: /api/posts")
    );
  }
}

const indexRoutes: IndexRoutes = new IndexRoutes();

export default indexRoutes.router;
