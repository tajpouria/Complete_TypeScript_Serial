"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes");
function use(middleWare) {
    return function (target, key, desc) {
        var assignedMiddleWares = Reflect.getMetadata(routes_1.MetadataKeys.middleWare, target, key) || [];
        Reflect.defineMetadata(routes_1.MetadataKeys.middleWare, assignedMiddleWares.concat([middleWare]), target, key);
    };
}
exports.use = use;
