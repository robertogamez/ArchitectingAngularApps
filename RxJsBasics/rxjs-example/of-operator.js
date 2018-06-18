// creation-operators/of.js
const Rx = require('rxjs/Rx');

const numberStream$ = Rx.Observable.of(1, 2, 3);
const objectStream$ = Rx.Observable.of({ age: 37 }, { name: 'Chris' });

// emits 123
numberStream$.subscribe(data => console.log(data));

// emits { age: 37 }, { name: 'chris' }  
objectStream$.subscribe(data => console.log(data));