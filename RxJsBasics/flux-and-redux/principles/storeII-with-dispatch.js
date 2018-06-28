class Store {
    constructor() {
        this.state = {
            jedis: [],
            selectedJedi: null
        };
    }

    getState() {
        return this.state;
    }

    dispatch(action) {

    }
}

let action = {
    type: 'LOAD_JEDIS',
    payload: [
        { name: 'Yoda', id: 1 },
        { name: 'Palpatine', id: 2 },
        { name: 'Darth Vader', id: 3 }
    ]
};

store.dispatch(action);

console.log(store.getState());
