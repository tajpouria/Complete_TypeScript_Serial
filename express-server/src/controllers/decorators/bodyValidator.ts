import { MetadataKeys } from "./routes";

export function bodyValidator(validators: string[]) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata(
            MetadataKeys.validator,
            validators,
            target,
            key
        );
    };
}
