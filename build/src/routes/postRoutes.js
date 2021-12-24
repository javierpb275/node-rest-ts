"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PostRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getPosts(req, res) {
        res.send("hello");
    }
    getPost() { }
    createPost() { }
    updatePost() { }
    deletePost() { }
    routes() {
        this.router.get("/", this.getPosts);
        this.router.get("/:url", this.getPost);
        this.router.post("/", this.createPost);
        this.router.put("/:url", this.updatePost);
        this.router.delete("/:url", this.deletePost);
    }
}
const postRoutes = new PostRoutes();
exports.default = postRoutes.router;
