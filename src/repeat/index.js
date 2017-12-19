const _ = require('underscore');


const repeat = (times, VALUE) => _.map(_.range(times), () => VALUE);

// 使用函数，而不是值
const repeatedly = (times, fun) => _.map(_.range(times), fun);

const iterateUntil = (fun, check, init) => {
    let ret = [];

    for (let i = 0, result = fun(init, i); check(result, i); i++) {
        ret.push(result);
        result = fun(result, i);
    }
    
    return ret;

}

const ret = iterateUntil(x => x+x, (x, i) => i < 10, 1);
console.log(ret);