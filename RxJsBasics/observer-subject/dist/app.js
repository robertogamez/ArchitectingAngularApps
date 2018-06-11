"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subject_1 = require("./subject");
var product_model_1 = require("./product.model");
var product_ui_1 = require("./product-ui");
var subject = new subject_1.Subject();
var observer = {
    update: function () { return console.log('First Observer Updated'); }
};
var observer2 = {
    update: function () { return console.log('Second Observer Updated'); }
};
subject.attach(observer);
subject.attach(observer2);
subject.notify();
var subjectProduct = new product_model_1.ProductModel();
var observerProduct = new product_ui_1.ProductUI(subjectProduct);
var observerProduct2 = new product_ui_1.ProductUI(subjectProduct);
subjectProduct.title = 'RxJs in Action';
