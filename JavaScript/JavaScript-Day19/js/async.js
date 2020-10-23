// callback

function someFunction(param1, param2) {
    // some code
    console.log('done been loaded');
}


window.onload = someFunction;

document.getElementById('greeting').onclick = () => {
    console.log("got clicked");
}

setTimeout(() => {
    console.log('done and done');
}, 2000);

const array = ['we', 'are', 'done', 'and', 'done'];

function capAsync(anArray, callback) {
    window.setTimeout(function () {
        callback(anArray.toString().toUpperCase().split(','));
    }, Math.random() * 2000 + 1000);
}

function handledModifiedArray(modifiedArrayStr) {
    document.getElementById('array3').innerText = modifiedArrayStr;
}

let newCoolStr = capAsync(array, handledModifiedArray); //not what you think will happen

function capFirstLetterAsync(array, cb) {
    setTimeout(() => {
        const newArray = array.map(
            (string => string[0].toUpperCase() + string.substr(1))
        );
        cb(newArray);
    }, Math.random() * 2000 + 1000);
}

function handler(array) {
    console.log('got an array: ', array);
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('all done here');
    }, Math.random() * 2000 + 1000)
});

promise.then((str) => {
    console.log(str);
});

promise.then((str) => {
    console.log(2 + ' ' + str);
});

promise.then((str) => {
    console.log(3 + ' ' + str);
});

const someOtherArray = ['some', 'other', 'strings', 'in', 'here']

document.getElementById('array').innerText = someOtherArray;

function capAsync2(anArray) {
    return new Promise((resolve, reject) => {
        window.setTimeout(function () {
            const newArray = anArray.toString().toUpperCase().splot(',');
            resolve(newArray);
        }, Math.random() * 2000 + 1000);
    });
}

let capAsync2Promise = capAsync2(someOtherArray);

capAsync2Promise.then(handledModifiedArray);

function handledModifiedArray(modifiedArrayStr) {
    document.getElementById('array').innerText = modifiedArrayStr;
}