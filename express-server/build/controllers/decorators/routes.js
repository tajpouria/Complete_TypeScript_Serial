"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
})(Methods = exports.Methods || (exports.Methods = {}));
var MetadataKeys;
(function (MetadataKeys) {
    MetadataKeys["method"] = "method";
    MetadataKeys["path"] = "path";
    MetadataKeys["middleWare"] = "middleWare";
    MetadataKeys["validator"] = "validator";
})(MetadataKeys = exports.MetadataKeys || (exports.MetadataKeys = {}));
function routesBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routesBinder(Methods.get);
exports.post = routesBinder(Methods.post);
