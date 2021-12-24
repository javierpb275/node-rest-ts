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
        this.router.get("/routes", this.getPosts);
    }
}
const postRoutes = new PostRoutes();
exports.default = postRoutes.router;
