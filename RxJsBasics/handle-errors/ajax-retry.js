//const Rx = require("rxjs/Rx");

let ajaxStream$ = Rx.Observable.ajax('UK1.json')
    .map(r => r.response)
    .retry(3);

ajaxStream$.subscribe(
    data => console.log('ajax result', data),
    err => console.error("ajax error", err)
);