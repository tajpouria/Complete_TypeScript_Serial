"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        if (this.collection instanceof Array) {
            for (var i = 0; i <= length; i++) {
                for (var j = 0; j <= length - i - 1; j++) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
            }
        }
        if (typeof this.collection === "string") {
        }
    };
    return Sorter;
}());
var sorter = new Sorter([1, 4, 6, -2, 3]);
sorter.sort();
