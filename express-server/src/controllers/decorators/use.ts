import { RequestHandler } from "express";
import { MetadataKeys } from "./routes";

export function use(middleWare: RequestHandler) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        const assignedMiddleWares =
            Reflect.getMetadata(MetadataKeys.middleWare, target, key) || [];

        Reflect.defineMetadata(
            MetadataKeys.middleWare,
            [...assignedMiddleWares, middleWare],
            target,
            key
        );
    };
}
