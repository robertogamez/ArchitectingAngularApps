const Rx = require('rxjs/Rx');

let stream$ = Rx.Observable.of(1, 2, 3, 4);
let secondStream$ = Rx.Observable.of(5, 6, 7, 8);
let thirdStream$ = Rx.Observable.of(9, 10);

let zippedStream$ = Rx.Observable.zip(stream$, secondStream$, thirdStream$);

zippedStream$.subscribe(data => console.log(data));