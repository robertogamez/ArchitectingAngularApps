const Rx = require("rxjs/Rx");

let subject = new Rx.Subject();
subject.next('Subject first value');

// emmits subject second value
subject.subscribe(data => console.log('subscribe - subject', data));
subject.next('subject second value');

let behaviourSubject = new Rx.BehaviorSubject('behaviorsubject initial value');
behaviourSubject.next("behaviorsubject first value");
behaviourSubject.next("behaviorsubject second value");

// emits 'behaviorsubject second value', 'behaviorsubject third value'
behaviourSubject.subscribe(data => console.log('subscribe - behaviorsubject', data));

behaviourSubject.next("behaviorsubject third value");