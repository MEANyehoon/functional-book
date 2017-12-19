const _ = require('underscore');

function finder(valueFun, bestFun, coll) {
    return _.reduce(coll, (best, curr) => {
        var bestValue = valueFun(best);
        var currValue = valueFun(curr);

        return (bestValue === bestFun(bestValue, currValue)) ? best : curr;
    }, null)
}

const best = (fun, coll) => _.reduce(coll, (x, y) => fun(x, y) ? x : y);


exports.finder = finder;
exports.best = best;