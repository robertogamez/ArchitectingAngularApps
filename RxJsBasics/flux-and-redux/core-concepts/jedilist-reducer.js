let actionLuke = {
    type: 'ADD_ITEM',
    payload: {
        name: 'Luke'
    }
};


let actionVader = {
    type: 'ADD_ITEM',
    payload: "Vader"
};

function jediListReducer(state = {}, action){
    switch(action.type){
        case "ADD_ITEM":
            return [...state, action.payload]
        default:
            return state;
    }
}

let state = jediListReducer([], actionLuke);
console.log(state);

state = jediListReducer(state, actionVader);
console.log(state);

module.exports = jediListReducer;