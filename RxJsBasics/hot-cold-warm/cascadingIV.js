let countriesElem = document.getElementById("countries");
let citiesElem = document.getElementById("cities");
let restaurantsElem = document.getElementById("restaurants");

let countriesStream$ = Rx.Observable.fromEvent(countriesElem, 'select');
let citiesStream$ = Rx.Observable.fromEvent(citiesElem, 'select');
let restaurantsStream = Rx.Observable.fromEvent(restaurantsElem, 'select');

fetchCountries();

function buildList(list, items) {
    list.innerHTML = '';
    items.forEach(item => {
        let elem = document.createElement('option');
        elem.innerHTML = item;
        list.appendChild(elem);
    });
}

function fetchBy(by) {
    return Rx.Observable.ajax(`${by}.json`).map(r => r.response);
}

function fetchCountries() {
    return Rx.Observable
        .ajax('countries.json')
        .map(r => r.response)
        .subscribe(countries => buildList(countriesElem, countries.data));
}

function populateCountries() {
    fetchCountries()
        .map(r => r.response)
        .subscribe(countries => buildDropList(countriesElem, countries));
}

function clearSelection() {
    citiesElem.innerHTML = "";
    restaurantsElem.innerHTML = "";
}


let cities$ = new Rx.Subject();
cities$.subscribe(cities => buildList(citiesElem, cities));

let restaurant$ = new Rx.Subject();
restaurant$.subscribe(restaurants => buildList(restaurantsElem, restaurants));

Rx.Observable.fromEvent(countriesElem, 'change')
    .map(event => event.target.value)
    .do(val => clearSelection())
    .switchMap(selectedCountry => fetchBy(selectedCountry))
    .subscribe(cities => cities$.next(cities.data));

Rx.Observable.fromEvent(citiesElem, 'change')
    .map(ev => ev.target.value)
    .switchMap(selectedCity => fetchBy(selectedCity))
    .subscribe(restaurants => restaurant$.next(restaurants.data));

Rx.Observable.fromEvent(restaurantsElem, "change")
    .map(ev => ev.target.value)
    .subscribe(selectedRestaurant => console.log('selected restaurant', selectedRestaurant));