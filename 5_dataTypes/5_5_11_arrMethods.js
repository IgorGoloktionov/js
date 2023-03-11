"use strict";

function getAverageAge(users) {

    return (users.reduce(((sumAge, item) =>  sumAge = sumAge + item.age), 0) / users.length);
    
}