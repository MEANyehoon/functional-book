const { truthy } = require('./utils');


/**
 * 比较器转换器
 * 将返回值为boolean类型的函数 -> 返回-1|0|1的函数
 */
exports.comparator = function (pred) {
    return function(x, y) {
        return truthy(pred(x, y)) ? -1 : truthy(pred(y, x)) ? 1 : 0;
    }
}
