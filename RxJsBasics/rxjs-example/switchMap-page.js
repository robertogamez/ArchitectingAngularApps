let elem = document.getElementById('input');

let keyStream$ = Rx.Observable.fromEvent(elem, 'keyup');

function longRunningTask(input) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('response based on ' + input);
        }, 5000);
    });
}

let longRunningStream$ = keyStream$.map(ev => ev.key)
                            .filter(key => elem.value.length > 3)
                            .filter(key => key !== 'Backspace')
                            .switchMap(key => Rx.Observable.from(longRunningTask(elem.value))
                            );

longRunningStream$.subscribe(data => console.log(data));