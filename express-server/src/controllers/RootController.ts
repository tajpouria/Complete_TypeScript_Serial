import { Request, Response, NextFunction } from "express";
import { controller, get, use, bodyValidator, post } from "./decorators";
import { requireAuth } from "./AuthController";

@controller("")
export class AuthController {
    @get("/")
    getRoot(req: Request, res: Response): void {
        res.send(`<h1>Sweet home</h1>`);
    }

    @get("/protected")
    @use(requireAuth)
    getProtected(req: Request, res: Response): void {
        res.send("Protected path");
    }
}
