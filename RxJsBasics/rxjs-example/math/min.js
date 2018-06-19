const Rx = require('rxjs/Rx');

let streamOfValue$ = Rx.Observable.of(1, 2, 3, 4).min();

streamOfValue$.subscribe(data => console.log(data));