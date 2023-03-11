"use strict";

function delay(func, ms) {

    return function(...args) {
        return setTimeout(func.apply(this, args), ms);
    }
}