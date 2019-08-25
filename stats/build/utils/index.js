"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStringDate = function (date) {
    var splittedDate = date.split("/");
    return new Date(parseInt(splittedDate[0], 10), parseInt(splittedDate[1], 10) - 1, parseInt(splittedDate[2], 10));
};
