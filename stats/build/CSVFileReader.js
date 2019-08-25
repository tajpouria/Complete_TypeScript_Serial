"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader() {
    }
    CSVFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.csvFilePath, { encoding: "utf-8" })
            .split("\n")
            .map(function (item) { return item.split(","); })
            .map(this.mapOverRows);
    };
    return CSVFileReader;
}());
exports.CSVFileReader = CSVFileReader;
