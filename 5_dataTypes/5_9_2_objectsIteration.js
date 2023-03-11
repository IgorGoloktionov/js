"use strict";

function count(obj) {

    let count = 0;

    for (let item of Object.keys(obj)) count += 1

    return count
    
}
