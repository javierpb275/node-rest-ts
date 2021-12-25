import { Request, Response, Router } from "express";
import UserModel, { User } from "../models/User";

class UserRoutes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  public async getUsers(req: Request, res: Response): Promise<void> {
    const users: User[] = await UserModel.find();
    res.json(users);
  }

  public async getUser(req: Request, res: Response): Promise<void> {
    const user = await UserModel.findOne({ email: req.params.email });
    res.json(user);
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    const newUser: User = new UserModel(req.body);
    await newUser.save();
    res.json({ data: newUser });
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    const { email } = req.params;
    const updatedUser = await UserModel.findOneAndUpdate({ email }, req.body, {
      new: true,
    });
    res.json(updatedUser);
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    const { email } = req.params;
    const deletedUser = await UserModel.findOneAndDelete({ email });
    res.json(deletedUser);
  }

  routes() {
    this.router.get("/", this.getUsers);
    this.router.get("/:email", this.getUser);
    this.router.post("/", this.createUser);
    this.router.put("/:email", this.updateUser);
    this.router.delete("/:email", this.deleteUser);
  }
}

const userRoutes = new UserRoutes();

export default userRoutes.router;
