let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;

// the object will be removed from memory

john = { name: "John" };

let array = [john];

john = null; // overwrite the reference

// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]

john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // overwrite the reference

// john is stored inside the map,
// we can get it by using map.keys()

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
weakMap.set("test", "Whoops"); // TypeError, because "test" is not an object

john = { name: "John" };

weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // overwrite the reference

// john is removed from memory!

let visitsCountMap = new Map(); // map: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

john = { name: "John" };

countUser(john); // count his visits

// later john leaves us
john = null;

let visitsCountWeakMap = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountWeakMap.get(user) || 0;
  visitsCountWeakMap.set(user, count + 1);
}

john = { name: "John" };

countUser(john); // count his visits

// later john leaves us
john = null;

// john gets garbage-collected

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

// Now we use process() in another file:

obj = {
  /* let's say we have an object */
};

let result1 = process(obj); // calculated

// ...later, from another place of the code...
let result2 = process(obj); // remembered result taken from cache

// ...later, when the object is not needed anymore:
obj = null;

alert(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)

cache = new WeakMap();

// calculate and remember the result
function process(obj) {
  if (cache.has(obj)) return cache.get(obj);

  let result = /* calculate the result for */ obj;

  cache.set(obj, result);
  return result;
}

obj = {
  /* some object */
};

result1 = process(obj);
result2 = process(obj);

// ...later, when the object is not needed anymore:
obj = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon to be 0
// When obj gets garbage collected, cached data will be removed as well

let visitedSet = new WeakSet();

john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically
