"use strict";

function shuffle(array) {
    let sortMassiv = array.map (function(item) {
    return  {"val" : item , "rand" : Math.random()};
    })
   
   
    sortMassiv.sort( (a, b) => a["rand"] - b["rand"] );
   
   
    return sortMassiv.map (item => item["val"]);
}