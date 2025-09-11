let visitsCountWeakMap = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUserWeak(user) {
    let count = visitsCountWeakMap.get(user) || 0;
    visitsCountWeakMap.set(user, count + 1);
}
