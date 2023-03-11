"use strict";

function checkSpam(str) {

    let lowerStr = str.toLowerCase();
    return (lowerStr.includes("XXX".toLowerCase()) || lowerStr.includes("viagra".toLowerCase()));

}