'use strict';

function sum(first) {

    let currentSum = first;
  
    function inner(next) {
      currentSum += next;
      return inner;
    }
  
    inner.toString = function() {
      return currentSum;
    };
  
    return inner;
  }

console.log(JSON.parse(sum(4)(6)))