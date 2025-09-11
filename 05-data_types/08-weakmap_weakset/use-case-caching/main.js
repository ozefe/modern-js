let obj = {
    /* let's say we have an object */
};

let result1 = process(obj); // calculated
let result1Weak = processWeak(obj);

// ...later, from another place of the code...
let result2 = process(obj); // remembered result taken from cache
let result2Weak = processWeak(obj); // remembered result taken from cache

// ...later, when the object is not needed any more:
obj = null;

// The object is still in cache, taking memory!
alert(`Cache size: ${getCacheSize()}`); // 1

// Can't get `cacheWeak.size`, as it's a `WeakMap`, but it's 0 or soon be 0
// When `obj` gets garbage collected, cached data will be removed as well
