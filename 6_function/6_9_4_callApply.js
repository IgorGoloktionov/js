"use strict";

function throttle(f, ms) {
    let isCalled = false;
    let saveThis;
    let saveArguments;

    const wrapper = function() {
        if (isCalled) {
            saveThis = this;
            saveArguments = arguments;
            return;
        }

        f.apply(this, arguments);
        isCalled = true;
        setTimeout(() => {
            isCalled = false;
            if (saveArguments) {
                wrapper.apply(saveThis, saveArguments);
                saveThis = saveArguments = null;
            }
        }, ms)
    }
    return wrapper;
}