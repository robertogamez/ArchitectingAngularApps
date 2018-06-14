"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var subject_1 = require('./subject');
var ProductModel = (function (_super) {
    __extends(ProductModel, _super);
    function ProductModel() {
        _super.apply(this, arguments);
        this.titleValue = '';
        this.makeValue = '';
    }
    Object.defineProperty(ProductModel.prototype, "title", {
        get: function () {
            return this.titleValue;
        },
        set: function (value) {
            this.titleValue = value;
            this.notify();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ProductModel.prototype, "make", {
        get: function () {
            return this.makeValue;
        },
        set: function (value) {
            this.makeValue = value;
            this.notify();
        },
        enumerable: true,
        configurable: true
    });
    return ProductModel;
}(subject_1.Subject));
exports.ProductModel = ProductModel;
