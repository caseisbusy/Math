"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radiusCalculator = void 0;
function radiusCalculator({ diameter, circumference, area }) {
    if (!area && !diameter && !circumference)
        throw new Error("Provide 1 arguement");
    if (area && diameter || area && circumference || diameter && circumference)
        throw new Error("Only 1 arguement");
    if (diameter) {
        return `Radius = ${diameter / 2}`;
    }
    else if (circumference) {
        return `Radius = ${circumference / (2 * Math.PI)}`;
    }
    if (area) {
        return `Radius = ${Math.sqrt(area / Math.PI)}`;
    }
}
exports.radiusCalculator = radiusCalculator;
