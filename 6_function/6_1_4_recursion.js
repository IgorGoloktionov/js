"use strict";

let arr = [];

function printList(obj) {
    
    arr.push(obj.value);

    if (obj.next) printList(obj.next);

    return arr;
}

console.log(printList(list))