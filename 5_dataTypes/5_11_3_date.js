"use strict";

function getLocalDay(date) {
    return date.getDay() < 1 ? 7 : date.getDay();
}