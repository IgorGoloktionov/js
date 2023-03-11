"use strict";

function debounce(func, ms) {

    let isTimeEnd = false;
    
    return function() {
        if (isTimeEnd) return;

        func.apply(this, arguments);
        isTimeEnd = true;
        setTimeout(() => isTimeEnd = false, ms)
    }
}