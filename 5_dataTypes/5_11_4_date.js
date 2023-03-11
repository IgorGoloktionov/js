"use strict";

function getDateAgo(date, days) {
    return (new Date(date.getTime() - days * 24 * 3600 * 1000)).getDate();
}