"use strict";

function main(a) {
    return function second(b) {
        return a + b;
    }
}