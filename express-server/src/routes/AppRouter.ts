import { Router } from "express";

export class AppRouter {
    private static _instance: Router;

    static get instance(): Router {
        if (!AppRouter._instance) {
            this._instance = Router();
        }
        return this._instance;
    }
}
