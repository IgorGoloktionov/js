"use strict";

function copySorted(arr) {

    let newArr = arr.slice(0);
    return newArr.sort((a, b) => a.localeCompare(b));

}
  
