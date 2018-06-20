function getData() {
    return new Promise(resolve => {
        console.log("this will be printed straight away");
        setTimeout(() => resolve("som data"), 3000);
    });
}

getData().then(data => console.log('3 seconds later', data));