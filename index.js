"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Slept sort
 * @param { number[] } array Array of number to be sorted.
 * @returns { Promise } Sorted array.
 */
const sleptSort = (array) => new Promise(resolve => {
    let _sorted = [];
    array.forEach(number => {
        setTimeout(() => {
            _sorted.push(number);
            if (_sorted.length === array.length)
                resolve(_sorted);
        }, number);
    });
});
exports.default = sleptSort;
//# sourceMappingURL=index.js.map