function printListIterative(list) {
    let listPart = list;
    while (listPart) {
        alert(`Item: ${listPart.value}`);
        listPart = listPart.next;
    }
}

function printListRecursive(list) {
    if (list) {
        alert(`Item: ${list.value}`);
        printListRecursive(list.next);
    }
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

printListIterative(list);
printListRecursive(list);
