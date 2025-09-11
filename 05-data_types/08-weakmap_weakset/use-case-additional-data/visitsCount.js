let visitsCountMap = new Map(); // map: user => visits count

// increase the visits count
function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}
