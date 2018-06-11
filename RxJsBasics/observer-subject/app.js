"use strict";
var subject_1 = require('./subject');
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
