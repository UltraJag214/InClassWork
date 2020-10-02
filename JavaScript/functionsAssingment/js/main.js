// Write a function fact(n) that returns the factorial number of n

function fact(n) {
    if(n == 1) {
        return 1;
    }

    return n * fact(n - 1);
}

console.log(fact(7));