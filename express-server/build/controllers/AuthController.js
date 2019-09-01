"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
function logger(req, res, next) {
    console.log("Logger middleWare invoked!");
    next();
}
function requireAuth(req, res, next) {
    if (!req.session || !req.session.loggedIn) {
        res.redirect("/auth/login");
        return;
    }
    next();
}
exports.requireAuth = requireAuth;
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.getLogin = function (req, res) {
        res.send("<form method=\"POST\"><div><input name=\"email\" /></div><div><input name=\"password\" type=\"password\"/></div><button type=\"submit\">Submit</button></form>");
    };
    AuthController.prototype.postLogin = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email === "pouria@gmail.com" && password === "1234") {
            req.session = { loggedIn: true };
            res.redirect("/");
        }
        else {
            res.status(422).send("Invalid Email or Password");
        }
    };
    AuthController.prototype.getLogOut = function (req, res) {
        req.session = undefined;
        res.redirect("/auth/login");
    };
    __decorate([
        decorators_1.get("/login"),
        decorators_1.use(logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "getLogin", null);
    __decorate([
        decorators_1.post("/login"),
        decorators_1.bodyValidator(["email", "password"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "postLogin", null);
    __decorate([
        decorators_1.get("/logout"),
        decorators_1.use(logger),
        decorators_1.use(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "getLogOut", null);
    AuthController = __decorate([
        decorators_1.controller("/auth")
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
