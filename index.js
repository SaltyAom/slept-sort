"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Slept sort
 * @param { number[] } array Array of number to be sorted.
 * @returns { Promise } Sorted array.
 */
exports.default = (array) => new Promise(resolve => {
    let _sorted = [];
    array.map(number => setTimeout((_) => {
        _sorted.push(number);
        if (_sorted.length === array.length)
            resolve(_sorted);
    }, number));
});
//# sourceMappingURL=index.js.map