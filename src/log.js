
module.exports = {
    fail(thing) {
        throw new Error(thing);
    },
    warn(thing) {
        console.log('WARNING:', thing);
    },
    note(thing) {
        console.log('NOTE:', thing);
    }
}