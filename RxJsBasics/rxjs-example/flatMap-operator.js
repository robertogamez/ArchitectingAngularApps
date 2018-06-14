const Rx = require('rxjs/Rx');

let stream$ = Rx.Observable.of(1, 2, 3)
    .flatMap(data => Rx.Observable.of(data));

stream$.subscribe(data => {
    console.log(data);
});