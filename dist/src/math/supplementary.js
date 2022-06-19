"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplementary = void 0;
function supplementary(num, num2) {
    if (!num)
        return `Provide atleast 1 number`;
    if (!num2 && num === 180)
        return `There is no second supplementarty number`;
    if (!num2 && num < 180) {
        let res = 180 - num;
        return `Your second supplementarty number is ${res}`;
    }
    if (!num2 && num > 180) {
        return `Your number is higher than 180`;
    }
    if (num2 + num > 180) {
        return `Your 2 numbers are higher than 180`;
    }
    if (num2 + num === 180) {
        return `${num} and ${num2} are equal to 180`;
    }
    if (num2 && num + num2 < 180) {
        let ress = num + num2;
        let res = 180 - ress;
        return `Your third supplementarty number is ${res}`;
    }
}
exports.supplementary = supplementary;
