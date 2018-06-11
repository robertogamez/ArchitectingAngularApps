"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductUI = /** @class */ (function () {
    function ProductUI(model) {
        this.model = model;
        this.model.attach(this);
        this.renderUI();
    }
    ProductUI.prototype.renderUI = function () {
        console.log('calling RenderUI');
        this.draw();
    };
    ProductUI.prototype.draw = function () {
        // implement
        console.log("calling draw: " + this.model.title);
    };
    ProductUI.prototype.update = function () {
        console.log('calling update');
        this.renderUI();
    };
    return ProductUI;
}());
exports.ProductUI = ProductUI;
