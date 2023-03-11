"use strict";
let n = 13;
main:
for (let i = 2; i <= n; i++) {
    for (let k = 2; k < i; k++) {
        if (i % k == 0) continue main
    }
    console.log(i)
}
