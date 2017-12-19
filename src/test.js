const _ = require('underscore');
const { splat, unsplat } = require('./splat');
const { truthy, executeIfHasField } = require('./utils');
const { cat, construct, mapcat, interpose }  = require('./cat');


/**
 * test utils.js
 */
// console.log(truthy(false));  // false
// console.log(truthy(null));   // false
// console.log(truthy(undefined));  // false
// console.log(truthy(0));  // true
// console.log(truthy('')); // true
// console.log(truthy(1));  // true

// executeIfHasField([1,2,3], 'reverse');
// executeIfHasField({foo: 1}, 'foo');
// executeIfHasField([1,2,3], 'abc');



/**
 * test cat.js
 */
// console.log(cat([1,2], [3,4], [4,5,6]));    // [ 1, 2, 3, 4, 4, 5, 6 ]

// console.log(construct(1, [2,3,4])); // [ 1, 2, 3, 4 ]

// console.log(mapcat(function(e) {
//     return construct(e, [',']);
// }, [1,2,3]));   // [ 1, ',', 2, ',', 3, ',' ]

// console.log(interpose(',', [1,2,3]));  // [ 1, ',', 2, ',', 3 ]