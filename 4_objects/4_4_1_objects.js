'use strict'

let calculator = {
    read(a, b) {
        this.firstNumber = a;
        this.secondNumber = b;
    }, 
    sum() {
        return this.firstNumber + this.secondNumber;
    },
    mul() {
        return this.firstNumber * this.secondNumber;
    },
}
