"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = void 0;
function mod(num, limit) {
    if (!limit) {
        return 0;
    }
    const modulo = num % limit;
    if (num >= 0) {
        return modulo;
    }
    else if (modulo < 0) {
        return (modulo + limit) % limit;
    }
    else {
        return 0;
    }
}
exports.mod = mod;
