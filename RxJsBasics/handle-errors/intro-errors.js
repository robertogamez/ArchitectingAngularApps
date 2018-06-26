﻿const Rx = require("rxjs/Rx");

let stream$ = Rx.Observable.create(observer => {
    observer.next(1);
    observer.error('An error is throw');
    observer.next(2);
}).catch(err => Rx.Observable.of(err));

stream$.subscribe(
    data => console.log(data),
    error => console.error(error)
);