const Rx = require('rxjs/Rx');

let firstStream$ = Rx.Observable.interval(500).take(3);
let secondStream$ = Rx.Observable.interval(500).take(5);

let combinedStream$ = Rx.Observable.combineLatest(firstStream$, secondStream$);

combinedStream$.subscribe(data => console.log(data));