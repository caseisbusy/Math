"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diameterCalculator = void 0;
function diameterCalculator({ area, radius, circumference }) {
    if (!area && !radius && !circumference)
        throw new Error("Provide 1 arguement");
    if (area && radius || area && circumference || radius && circumference)
        throw new Error("Only 1 arguement");
    if (radius) {
        return `Diameter = ${(radius * 2)}`;
    }
    else if (circumference) {
        return `Diameter = ${(circumference / Math.PI)}`;
    }
    if (area) {
        return `Diameter = ${2 * (Math.sqrt(area / Math.PI))}`;
    }
}
exports.diameterCalculator = diameterCalculator;
