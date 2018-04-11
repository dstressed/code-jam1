/*
function make(...all) {
    if (typeof all[0] === 'function') return null;
    let memory = all;
    function addToMemory(...all) {
        if (typeof all[0] === 'function') {
            return memory.reduce(all[0]);
        }
        memory = memory.concat(all);
        return addToMemory;
    }
    return addToMemory;
}
*/

/*
function make() {
    let memory = (Array.isArray(arguments[0])) ? arguments[0] : [].slice.apply(arguments);
    return function(...more) {
        if (more[0] instanceof Function) return memory.reduce(more[0]);
        return make(memory.concat(more));
    };
}
*/

function make(...rest) {
    return (...more) => {
        if (more[0] instanceof Function) return rest.reduce(more[0]);
        return make(...rest, ...more);
    };
}