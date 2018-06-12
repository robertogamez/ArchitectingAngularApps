const Rx = require('rxjs/Rx');

let stream$ = Rx.Observable.create(observer => {
    observer.next(1);
    observer.complete();
});

stream$.subscribe(
    data => console.log('data', data),
    error => console.log('err', error),
    () => console.log('complete')
);