const _ = require('underscore');
const { note } = require('./log');
const { isIndexed } = require('./utils');


function naiveNth(a, index) {
    return a[index];
}

function nth(a, index) {
    if (!_.isNumber(index)) fail('Excepited a number as the index');
    if (!isIndexed(a)) fail('Not supported on non-indexed type');
    if ((index < 0) || index > a.length - 1) {
        fail('Index value is out of bounds');
    }
    return a[index];
}

function second(a) {
    return nth(a, 1);
}
