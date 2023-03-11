"use strict";

function Calculator() {

    this.methods = {

        '+': (a, b) => a + b,
        '-': (a, b) => a - b,

    };

    this.calculate = function(str) {

        let a = +(str.split(' '))[0];
        let MathOp = (str.split(' '))[1];
        let b = +(str.split(' '))[2];

        if (!this.methods[MathOp] || !isFinite(a) || !isFinite(b)) return NaN;

        return this.methods[MathOp](a, b); 

    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}