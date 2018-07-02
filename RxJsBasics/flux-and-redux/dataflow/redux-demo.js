import { dispatch, getState, subscribe, select } from './redux';
const { createItem } = require('./actions.js');

subscribe(() => {
    console.log('store changed');
});

console.log('initial state', getState());