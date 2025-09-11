let cacheWeak = new WeakMap();

// calculate and remember the result
function processWeak(obj) {
    if (!cacheWeak.has(obj)) {
        let result = /* calculate the result for */ obj;

        cacheWeak.set(obj, result);
        return result;
    }

    return cacheWeak.get(obj);
}
