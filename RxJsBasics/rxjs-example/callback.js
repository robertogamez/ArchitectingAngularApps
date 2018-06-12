const Rx = require('rxjs/Rx');

function fnWithCallback(cb) {
    setTimeout(() => cb('data'), 3000);
}

let fnWithCallbackBinded = Rx.Observable.bindCallback(fnWithCallback);
let source$ = fnWithCallbackBinded();

source$.subscribe(data => console.log('callback', data));