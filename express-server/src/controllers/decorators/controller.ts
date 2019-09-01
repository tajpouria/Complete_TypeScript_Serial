import { RequestHandler, Request, Response, NextFunction } from "express";
import { AppRouter } from "../../routes/AppRouter";
import { Methods, MetadataKeys } from "./routes";

function bodyValidator(validators: string[]): RequestHandler {
    return function(req: Request, res: Response, next: NextFunction) {
        if (!req.body) {
            res.status(422).send("Invalid request");
            return;
        }

        for (let validator of validators) {
            if (!req.body[validator]) {
                res.status(422).send(`missing properties ${validator}`);
                return;
            }
        }

        next();
    };
}

export function controller(prefix: string) {
    return function(constructor: Function) {
        const router = AppRouter.instance;
        for (let key in constructor.prototype) {
            const routeHandler = constructor.prototype[key];

            const path = Reflect.getMetadata(
                MetadataKeys.path,
                constructor.prototype,
                key
            );

            const method: Methods = Reflect.getMetadata(
                MetadataKeys.method,
                constructor.prototype,
                key
            );

            const middleWares =
                Reflect.getMetadata(
                    MetadataKeys.middleWare,
                    constructor.prototype,
                    key
                ) || [];

            const validators =
                Reflect.getMetadata(
                    MetadataKeys.validator,
                    constructor.prototype,
                    key
                ) || [];

            if (path) {
                router[method](
                    `${prefix}${path}`,
                    [...middleWares, bodyValidator(validators)],
                    routeHandler
                );
            }
        }
    };
}
