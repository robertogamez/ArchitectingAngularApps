const Rx = require('rxjs/Rx');

//let stream$ = Rx.Observable.timer(1000);

// delay with 500 milliseconds
let streamWithDelay$ = Rx.Observable.timer(2000, 2000);

// emits 0 after 1000 milliseconds, then no more
//stream$.subscribe(data => console.log(data));
streamWithDelay$.subscribe(data => console.log(data));