const Rx = require('rxjs/Rx');

//let stream$ = Rx.Observable.interval(1000);

//stream$.subscribe(data => console.log(data));

let stream2$ = Rx.Observable.interval(1000)
                .take(2);

// emits 0, 1, stops emitting thanks to take() operator
stream2$.subscribe(data => console.log(data));