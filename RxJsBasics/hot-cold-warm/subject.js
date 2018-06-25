const Rx = require("rxjs/Rx");

let subject = new Rx.Subject();

// emmits 1
subject.subscribe(data => console.log(data));

subject.next(10);

setTimeout(() => {
    subject.next(100);
}, 2000);