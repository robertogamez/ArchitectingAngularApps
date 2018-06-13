const Rx = require('rxjs/Rx');

const staticValuesStream$
    = Rx.Observable.of(1, 2, 3, 4)
                   .map(data => data + 1)
                   .filter(data => data % 2 === 0);

staticValuesStream$.subscribe(data => console.log(data));