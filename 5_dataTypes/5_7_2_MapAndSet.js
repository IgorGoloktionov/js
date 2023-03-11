"use strict";

function aclean(arr) {

    return Array.from(
        (arr.reduce((targetMap, word) => 
            targetMap.set(word.
                toUpperCase().
                split('').
                sort().
                join('')
                , word)
            , new Map()))
        .values())
}
