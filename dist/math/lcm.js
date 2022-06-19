"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lcm = void 0;
const gcd_1 = require("./gcd");
function lcm(a, b) {
    return a / (0, gcd_1.gcd)(a, b) * b;
}
exports.lcm = lcm;
