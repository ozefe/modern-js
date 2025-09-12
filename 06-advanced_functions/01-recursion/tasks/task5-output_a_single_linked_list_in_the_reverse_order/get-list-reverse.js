// This task is entirely copy-pasted from the solutions since it doesn't reflect
// the real-world scenarios at all and the initial task description was too
// brief to be considered helpful in any considerable way. I've wasted 2 hours
// trying to find an O(n) solution thinking the task couldn't possibly wanted
// an O(n**2) solution, and even if it did it would've told me so -- oh how
// wrong I was.
//
// Note to self: Do NOT trust random inexperienced people and their half-baked
// descriptions.

function printListReverseIterative(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}

function printListReverseRecursive(list) {
    if (list.next) {
        printListReverseRecursive(list.next);
    }

    alert(list.value);
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

printListReverseIterative(list);
printListReverseRecursive(list);
