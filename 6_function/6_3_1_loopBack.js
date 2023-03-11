"use strict";

function main(a) {
    return function second(b) {
        return a + b;
    }
}


console.log(sum(4)(5))