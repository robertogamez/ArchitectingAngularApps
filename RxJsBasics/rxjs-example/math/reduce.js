const Rx = require('rxjs/Rx');

let stream = Rx.Observable.of(1, 2, 3, 4).reduce((acc, curr) => acc + curr);

stream.subscribe(data => console.log(data));

let stream$ = Rx.Observable.of({ name : "chris" }, { age: 38 })
                .reduce((acc, curr) => Object.assign({}, acc, curr));

stream$.subscribe(data => console.log(data));