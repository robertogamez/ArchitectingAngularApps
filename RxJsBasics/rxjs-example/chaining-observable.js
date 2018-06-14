const Rx = require('rxjs/Rx');

let stream$ = Rx.Observable.of(1, 2, 3).map(data => Rx.Observable.of(data));

stream$.subscribe(data => {
    data.subscribe(val => console.log(val));
});