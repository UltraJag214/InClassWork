function splice(start, count, ...items) {
    console.log(items);
    // this function overrides the last one
}
    splice(0, 5); // works fine
    splice(2, 4, 'banana', 'apple', 'fig'); // works fine



function findLongest(...strings) {
    let longest = strings[0];

    for (let i = 0; i< strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }

    return longest;
}

let result = findLongest('dream', 'big', 'dreams');

console.log('The longest word was: ' + result)


// Write a function that takes two parameters. 
// The first parameter is a function and the 
// second one can be anything. 
// Return the result of the function you passed 
// in having given it the passed in parameter as a parameter.
// Test it with this:  

function execute(fn, a) {
    let result = fn(a);
    return result;
};

function duplicate(p) {
    return p + p;
}

let answer1 = execute(duplicate, 'yum ');

let answer2 = execute(p => 5 * p, 10);

let answer = execute(function (a) {
    return a + a;
}, 'yum ');
// result == 'yum yum'
console.log(answer);
console.log(answer1);
console.log(answer2);

//Arrow functions 


// Recursion

// Write a function fib(n) that a takes an integer 
// n and returns the nth fibonacci number
// Example:
// n = 10
// 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34

function fib(n) {
    if(n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fib(n - 2) + fib(n - 1);
}

let fib3 = fib(10);
console.log('fib where n = 3 is : ' + fib3);

