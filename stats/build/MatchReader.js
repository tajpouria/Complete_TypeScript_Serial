"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CSVFileReader_1 = require("./CSVFileReader");
var utils_1 = require("./utils");
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader(csvFilePath) {
        var _this = _super.call(this) || this;
        _this.csvFilePath = csvFilePath;
        _this.data = [];
        return _this;
    }
    MatchReader.prototype.mapOverRows = function (match) {
        return [
            utils_1.parseStringDate(match[0]),
            match[1],
            match[2],
            parseInt(match[3], 10),
            parseInt(match[4], 10),
            match[5],
            match[6]
        ];
    };
    return MatchReader;
}(CSVFileReader_1.CSVFileReader));
exports.MatchReader = MatchReader;
