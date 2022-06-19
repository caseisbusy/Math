"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRadians = exports.toDegrees = void 0;
function toDegrees(radians) {
    return radians * 180 / Math.PI;
}
exports.toDegrees = toDegrees;
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}
exports.toRadians = toRadians;
