const _ = require('underscore');

const existy = x => x != null;
const truthy = x => x !== false && existy(x);

const doWhen = (condition, action) => {
    if (truthy(condition)) {
        return action();
    } else {
        return undefined;
    }
}

exports.isIndexed = x => _.isArray(x) || _.isString(x);

exports.existy = existy;

exports.truthy = truthy;

exports.executeIfHasField = (target, name) => doWhen(existy(target[name]), () => {
    const result = _.result(target, name);
    return result;
})