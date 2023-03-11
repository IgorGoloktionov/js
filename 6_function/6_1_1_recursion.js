"use strict";

function sumToByCycle(n) {

    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumToByCycle(100));

function sumToByRecursion(n) {

    return n <= 1 ? n : n + sumToByRecursion(n - 1);
}

console.log(sumToByRecursion(100));

function sumToByFormula(n) {
    return n * (n + 1) / 2;
}

console.log(sumToByFormula(100));