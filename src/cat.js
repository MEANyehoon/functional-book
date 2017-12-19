const _ = require('underscore');
const { existy } = require('./utils');

function cat() {
    const head = _.first(arguments);
    if (existy(head)) {
        return head.concat.apply(head, _.rest(arguments));
    } else {
        return [];
    }
}

function construct(head, tail) {
    return cat([head], _.toArray(tail));
}

function mapcat(fn, coll) {
    return cat.apply(null, _.map(coll, fn));
}

function interpose(inter, coll) {
    return _.initial(mapcat(function(e) {
            return construct(e, [',']);
        }, [1,2,3]));
}

exports.cat = cat;
exports.construct = construct;
exports.mapcat = mapcat;
exports.interpose = interpose;

