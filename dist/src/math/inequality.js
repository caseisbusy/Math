"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inequality = void 0;
function inequality(num, num2) {
    if (num > num2) {
        return `${num} is greater than ${num2}`;
    }
    else if (num < num2) {
        return `${num} is smaller than ${num2}`;
    }
    else if (num <= num2) {
        return `${num} is greater than or equal to ${num2}`;
    }
    else if (num >= num2) {
        return `${num} is less than or equal to ${num2}`;
    }
}
exports.inequality = inequality;
