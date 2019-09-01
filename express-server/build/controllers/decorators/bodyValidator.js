"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes");
function bodyValidator(validators) {
    return function (target, key, desc) {
        Reflect.defineMetadata(routes_1.MetadataKeys.validator, validators, target, key);
    };
}
exports.bodyValidator = bodyValidator;
