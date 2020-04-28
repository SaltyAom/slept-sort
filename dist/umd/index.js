(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=index.js.map