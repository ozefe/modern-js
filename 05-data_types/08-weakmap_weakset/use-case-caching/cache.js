// Another common example is caching. We can store ("cache") results from a
// function, so that future calls on the same object can reuse it.
let cache = new Map();

// calculate and remember the result
function process(obj) {
    if (!cache.has(obj)) {
        let result = /* calculations of the result for */ obj;

        cache.set(obj, result);
        return result;
    }

    return cache.get(obj);
}

// Helper function to get the current cache size
function getCacheSize() {
    return cache.size;
}
