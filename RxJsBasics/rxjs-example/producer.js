const Rx = require('rxjs/Rx');

class Producer {
    constructor() {
        this.countMax = 5;
        this.current = 0;
    }

    hasValues() {
        return this.current < this.countMax;
    }

    next() {
        return this.current++;
    }
}

let stream$ = Rx.Observable.create(observer => {
    let producer = new Producer();

    while (producer.hasValues()) {
        observer.next(producer.next());
    }
});

stream$.subscribe(data => console.log("data", data));