"use strict"
function randomInteger(min, max) {

  let random = min - 1 + Math.random() * (max + 1 - min);
  return Math.ceil(random);

  }
  
  console.log( randomInteger(1, 3) );