"use strict";

function getWeekDay(date) {
    let arrDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return arrDay[date.getDay()]
}