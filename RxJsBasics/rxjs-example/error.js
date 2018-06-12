const Rx = require('rxjs/Rx');

let stream$ = Rx.Observable.create(observer => {
    observer.error('We have an error');
});

stream$.subscribe(
    data => console.log('data', data),
    error => console.error('err', error)
);