const Rx = require('rxjs/Rx');

let stream$ = Rx.Observable.from(new Promise(resolve, reject) => {
    resolve('some data');
});

stream$.subscribe(data => console.log(data));

let stream2$ = Rx.Observable.from([1,2,3,4]);

stream2$.subscribe(data => console.log(data));