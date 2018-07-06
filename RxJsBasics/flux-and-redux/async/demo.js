const { fetchBookLoading, fetchBookSuccess, fetchBookError } = require('./book-actions.js');
const { dispatch, getState } = require('./redux.js');

function fetchBook(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                title: 'A new hope - the book'
            });
        });
    });
}

console.log(getState());
dispatch(fetchBookLoading());
console.log(getState());

async function main(){
    try {
        const book = await fetchBook();
        dispatch(fetchBookSuccess(book));
        console.log(getState());
    } catch (err) {
        dispatch(fetchBookError(err));
        console.log(getState());
    }
}

main();