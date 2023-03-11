"use strict";

function unique(arr) {
    let targetArr = [];
  
    for (let item of arr) {
        if (!targetArr.includes(item)) {
            targetArr.push(item);
        }
    }
  
    return targetArr;
}