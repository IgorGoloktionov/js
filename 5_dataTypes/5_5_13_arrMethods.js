"use strict";

function groupById(arr) {

    let targetObj = arr.reduce(((accum, item) => {
        accum[item.id] = item; 
        return accum;
    }), {})

    return targetObj;

}
