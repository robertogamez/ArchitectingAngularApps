let elem = document.getElementById('input');

//let keyStream$ = Rx.Observable
//    .fromEvent(elem, 'keyup')
//    .map(ev => ev.key)
//    .filter(key => key !== 'Backspace')
//    .flatMap(key => Rx.Observable.from(getStarwarsCharacterStream(key)));

//keyStream$.subscribe(key => console.log(key));

//function getStarwarsCharacterStream(id) {
//    return fetch('data' + id + '' + '.json', {
//        'method': 'get',
//        'content-type': 'application/json'
//    })
//    .then(data => data.json());
//}
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
                            .flatMap(key => Rx.Observable.from(longRunningTask(elem.value))
                            );

longRunningStream$.subscribe(data => console.log(data));

//fetch('data.json', {
//    'method': 'get',
//    'content-type': 'application/json'
//})
//.then(data => data.json())
//.then(data => console.log('data', data));

