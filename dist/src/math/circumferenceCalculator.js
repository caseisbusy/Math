"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circumferenceCalculator = void 0;
function circumferenceCalculator({ radius, area, diameter }) {
    if (!radius && !area && !diameter)
        throw new Error("Provide 1 arguement");
    if (radius && diameter || radius && area || diameter && area)
        throw new Error("Only 1 arguement");
    if (radius) {
        return `Circumference = ${2 * (Math.PI * radius)}`;
    }
}
exports.circumferenceCalculator = circumferenceCalculator;
