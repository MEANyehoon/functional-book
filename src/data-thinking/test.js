const _ = require('underscore');
const { project, rename, as } = require('./index');

const library = [{
    title: 'SICP',
    Isbn: '0262010771',
    ed: 1
}, {
    title: 'SICP',
    Isbn: '0262510871',
    ed: 2
}, {
    title: 'Joy of Clojure',
    Isbn: '1935182641',
    ed: 1
}];

// console.log(project(library, ['title', 'Isbn']));
// console.log(project(library, 'title', 'Isbn'));
// ==>  [ { title: 'SICP', Isbn: '0262010771' },
//      { title: 'SICP', Isbn: '0262510871' },
//      { title: 'Joy of Clojure', Isbn: '1935182641' } ]

// console.log(project(project(library, 'title', 'Isbn'), 'Isbn'));
// ==> [ { Isbn: '0262010771' },
//     { Isbn: '0262510871' },
//     { Isbn: '1935182641' } ]

// console.log(rename(library[0], {title: 'abc'}));
// ==> { Isbn: '0262010771', ed: 1, abc: 'SICP' }

// console.log(as(library, {ed: 'abcd'}));
// ==> [ { title: 'SICP', Isbn: '0262010771', abcd: 1 },
//     { title: 'SICP', Isbn: '0262510871', abcd: 2 },
//     { title: 'Joy of Clojure', Isbn: '1935182641', abcd: 1 } ]

// console.log(project(as(library, {ed: 'abcd'}), 'abcd'));
// ==> [ { abcd: 1 }, { abcd: 2 }, { abcd: 1 } ]



function allOf() {
    return !!_.reduce(_.toArray(arguments), function(ret, arg) {
        if (ret){
            ret = (arg instanceof Function) ? arg() : arg;
        } 
        return ret;

    }, true);
}

function A() {
    return true;
}
function B() {
    return false;
}

console.log(allOf(A,0,A,A));