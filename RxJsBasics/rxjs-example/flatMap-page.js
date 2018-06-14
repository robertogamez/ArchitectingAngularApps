let elem = document.getElementById('input');

let keyStream$ = Rx.Observable
    .fromEvent(elem, 'keyup')
    .map(ev => ev.key)
    .filter(key => key !== 'Backspace')
    .flatMap(key => Rx.Observable.from(getStarwarsCharacterStream(key)));

keyStream$.subscribe(key => console.log(key));

function getStarwarsCharacterStream(id) {
    return fetch('data' + id + '' + '.json', {
        'method': 'get',
        'content-type': 'application/json'
    })
    .then(data => data.json());
}

//fetch('data.json', {
//    'method': 'get',
//    'content-type': 'application/json'
//})
//.then(data => data.json())
//.then(data => console.log('data', data));

