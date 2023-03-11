"use strict";

function getSecondsToday() {
    let timeNow = new Date();
    let dataToday = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate())
    return Math.floor((timeNow.getTime() - dataToday.getTime()) / 1000)
}