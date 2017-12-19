const { construct } =  require('../cat')

const _  = require('underscore');

function project(table /**, ...keys | key[]*/) {
    var args = _.toArray(arguments);
    return _.map(table, function(obj) {
        return _.pick.apply(null, construct(obj, _.rest(args)));
    })
}

function rename(obj, newNames) {
    return _.reduce(newNames, function(ret, value/*newName*/, key/*oldName*/) {
        if (_.has(obj, key)) {
            ret[value] = obj[key];
            return ret;
        } else {
            return ret;
        }
    }, _.omit.apply(null, construct(obj, _.keys(newNames))));
}

function as(table, newNames) {
    return _.map(table, function(obj) {
        return rename(obj, newNames);
    })
}

exports.project = project;
exports.rename = rename;
exports.as = as;