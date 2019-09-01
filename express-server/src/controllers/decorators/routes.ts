import { RequestHandler } from "express";

export enum Methods {
    "get" = "get",
    "post" = "post"
}
export enum MetadataKeys {
    "method" = "method",
    "path" = "path",
    "middleWare" = "middleWare",
    "validator" = "validator"
}

interface RouteHandlerDescriptor extends PropertyDescriptor {
    value?: RequestHandler;
}

function routesBinder(method: Methods) {
    return function(path: string) {
        return function(
            target: any,
            key: string,
            desc: RouteHandlerDescriptor
        ) {
            Reflect.defineMetadata(MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys.method, method, target, key);
        };
    };
}

export const get = routesBinder(Methods.get);
export const post = routesBinder(Methods.post);
