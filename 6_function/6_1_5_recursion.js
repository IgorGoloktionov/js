"use strict";

let arr = [];

function printList(obj) {
    
    if (obj.next) printList(obj.next);
    
    arr.push(obj.value);
  
    return arr;
}

console.log(printList(list))