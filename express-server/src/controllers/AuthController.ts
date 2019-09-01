import { Request, Response, NextFunction } from "express";
import { controller, get, use, bodyValidator, post } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
    console.log("Logger middleWare invoked!");
    next();
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (!req.session || !req.session.loggedIn) {
        res.redirect("/auth/login");
        return;
    }
    next();
}

@controller("/auth")
export class AuthController {
    @get("/login")
    @use(logger)
    getLogin(req: Request, res: Response): void {
        res.send(
            `<form method="POST"><div><input name="email" /></div><div><input name="password" type="password"/></div><button type="submit">Submit</button></form>`
        );
    }

    @post("/login")
    @bodyValidator(["email", "password"])
    postLogin(req: Request, res: Response): void {
        const { email, password } = req.body;
        if (email === "pouria@gmail.com" && password === "1234") {
            req.session = { loggedIn: true };
            res.redirect("/");
        } else {
            res.status(422).send("Invalid Email or Password");
        }
    }

    @get("/logout")
    @use(logger)
    @use(requireAuth)
    getLogOut(req: Request, res: Response): void {
        req.session = undefined;
        res.redirect("/auth/login");
    }
}
