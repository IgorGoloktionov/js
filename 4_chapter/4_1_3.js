'use strict';

function getSumPayment(obj) {
    let sum = 0;
    
    for (let key in obj) {
        sum += obj[key];
    }

    return sum;
}