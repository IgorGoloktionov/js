"use strict";

function topSalaries(slaries) {
    
    let [maxSalary, maxName] = [0, 0];
    
    for (let [name, salary] of Object.entries(slaries)) {

        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}