const Rx = require("rxjs/Rx");

let behaviorSubject = new Rx.BehaviorSubject('default value');

behaviorSubject.subscribe(data => console.log(data));

// long running AJAX scenario
setTimeout(() => {
    return Rx.Observable.ajax('data.json').map(r => r.response)
        .subscribe(data => behaviorSubject.next(data));
}, 1200);