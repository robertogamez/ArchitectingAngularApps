const Rx = require('rxjs/Rx');

const staticValuesStream$
    = Rx.Observable.of(1, 2, 3, 4)
                   .do(data => console.log('do of', data))
                   .map(data => data + 1)
                   .do(data => console.log('do map', data))
                   .filter(data => data % 2 === 0)
                   .do(data => console.log('do filter', data));

staticValuesStream$.subscribe(data => console.log(data));