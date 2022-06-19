"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mean = void 0;
function mean(array) {
    return array.reduce((a, b) => a + b, 0) / array.length;
}
exports.mean = mean;
