class Store {
    constructor() {
        this.state = {
            jedis: [],
            selectedJedi: null
        }
    }

    getState() {
        return this.state;
    }

}

const store = new Store();

console.log(store.getState());