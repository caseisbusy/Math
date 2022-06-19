"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complementary = void 0;
function complementary(num, num2) {
    if (!num)
        return `Provide atleast 1 number`;
    if (!num2 && num === 90)
        return `There is no second complementary number`;
    if (!num2 && num < 90) {
        let res = 90 - num;
        return `Your second complementary number is ${res}`;
    }
    if (!num2 && num > 90) {
        return `Your number is higher than 90`;
    }
    if (num2 + num > 90) {
        return `Your 2 numbers are higher than 90`;
    }
    if (num2 + num === 90) {
        return `${num} and ${num2} are equal to 90`;
    }
    if (num2 && num + num2 < 90) {
        let ress = num + num2;
        let res = 90 - ress;
        return `Your third complementary number is ${res}`;
    }
}
exports.complementary = complementary;
