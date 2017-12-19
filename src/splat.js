
exports.splat = function(fn) {
    return function(array) {
        return fn.apply(null, array);
    }
}

exports.unsplat = function(fn) {
    return function() {
        return fn.call(null, [].slice.call(arguments));
    }
}