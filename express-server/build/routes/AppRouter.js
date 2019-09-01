"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    Object.defineProperty(AppRouter, "instance", {
        get: function () {
            if (!AppRouter._instance) {
                this._instance = express_1.Router();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    return AppRouter;
}());
exports.AppRouter = AppRouter;
