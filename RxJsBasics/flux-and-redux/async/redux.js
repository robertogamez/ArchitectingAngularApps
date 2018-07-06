const bookReducer = require('./book-reducer.js');
const EventEmitter = require('events');
const emitter = new EventEmitter();

let state = {
    book: []
}

function store(state = { }, action){
    return {
        book: bookReducer(state.items, action)
    };
}

    export function getState() {
    return state;
}

    export function dispatch(action){
    const oldState = state;
    state = store(state, action);
    emitter.emit("changed");
}

    export function select(slice){
    return state[slice];
}

export function subscribe(cb){
    emitter.on('changed', cb);
}

module.exports = {
    getState, dispatch, select, subscribe
}

