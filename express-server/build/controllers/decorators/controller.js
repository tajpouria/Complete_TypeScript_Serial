"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppRouter_1 = require("../../routes/AppRouter");
var routes_1 = require("./routes");
function bodyValidator(validators) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send("Invalid request");
            return;
        }
        for (var _i = 0, validators_1 = validators; _i < validators_1.length; _i++) {
            var validator = validators_1[_i];
            if (!req.body[validator]) {
                res.status(422).send("missing properties " + validator);
                return;
            }
        }
        next();
    };
}
function controller(prefix) {
    return function (constructor) {
        var router = AppRouter_1.AppRouter.instance;
        for (var key in constructor.prototype) {
            var routeHandler = constructor.prototype[key];
            var path = Reflect.getMetadata(routes_1.MetadataKeys.path, constructor.prototype, key);
            var method = Reflect.getMetadata(routes_1.MetadataKeys.method, constructor.prototype, key);
            var middleWares = Reflect.getMetadata(routes_1.MetadataKeys.middleWare, constructor.prototype, key) || [];
            var validators = Reflect.getMetadata(routes_1.MetadataKeys.validator, constructor.prototype, key) || [];
            if (path) {
                router[method]("" + prefix + path, middleWares.concat([bodyValidator(validators)]), routeHandler);
            }
        }
    };
}
exports.controller = controller;
