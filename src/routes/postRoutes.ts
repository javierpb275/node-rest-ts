import { Request, Response, Router } from "express";
import PostModel, { Post } from "../models/Post";

class PostRoutes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  public async getPosts(req: Request, res: Response): Promise<void> {
    const posts: Post[] = await PostModel.find();
    res.json(posts);
  }

  public async getPost(req: Request, res: Response): Promise<void> {
    const post = await PostModel.findOne({ url: req.params.url });
    res.json(post);
  }

  public async createPost(req: Request, res: Response): Promise<void> {
    const { title, url, content, image } = req.body;
    const newPost: Post = new PostModel({ title, url, content, image });
    await newPost.save();
    res.json({ data: newPost });
  }

  public async updatePost(req: Request, res: Response): Promise<void> {
    const { url } = req.params;
    const updatedPost = await PostModel.findOneAndUpdate({ url }, req.body, {
      new: true,
    });
    res.json(updatedPost);
  }

  public async deletePost(req: Request, res: Response): Promise<void> {
    const { url } = req.params;
    const deletedPost = await PostModel.findOneAndDelete({ url });
    res.json(deletedPost);
  }

  routes() {
    this.router.get("/", this.getPosts);
    this.router.get("/:url", this.getPost);
    this.router.post("/", this.createPost);
    this.router.put("/:url", this.updatePost);
    this.router.delete("/:url", this.deletePost);
  }
}

const postRoutes = new PostRoutes();

export default postRoutes.router;
