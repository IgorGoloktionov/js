"use strict";

function getSecondsToTomorrow() {
    let timeNow = new Date();
    let dataTomorrow = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate() + 1)
    return Math.floor((timeNow.getTime() - dataTomorrow.getTime()) / 1000)
}