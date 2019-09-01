import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import "reflect-metadata";

import { AppRouter } from "./routes/AppRouter";
import "./controllers/AuthController";
import "./controllers/RootController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["key"] }));

app.use(AppRouter.instance);

app.listen(3000, (): void => {
    console.log("Listening on port 3000");
});
