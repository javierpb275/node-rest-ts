import { Request, Response, Router } from "express";

class PostRoutes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  getPosts(req: Request, res: Response) {
    res.send("hello");
  }

  getPost() {}

  createPost() {}

  updatePost() {}

  deletePost() {}

  routes() {
    this.router.get("/routes", this.getPosts);
  }
}

const postRoutes = new PostRoutes();

export default postRoutes.router;
