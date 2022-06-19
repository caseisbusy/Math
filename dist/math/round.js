"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = void 0;
function round(num, num2 = 1) {
    return num2 * Math.round(num / num2);
}
exports.round = round;
