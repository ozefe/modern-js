// A recursive (recursively-defined) data structure is a structure that
// replicates itself in parts. In the HTML document, an HTML-tag may contain a
// list of:
// - Text pieces
// - HTML-comments
// - Other HTML-tags (that in turn may contain text pieces, comments and/or
//   other tags)

// Linked List
// let arr = [obj1, obj2, obj3];

// There's a problem with arrays: The "delete element" and "insert element"
// operations are expensive. For instance, `arr.unshift(obj)` operation has to
// renumber all elements to make room for a new `obj`, and if the array is big,
// it takes time. Same with `arr.shift()`.

// Alternatively, if we really need fast insertion/deletion, we can choose
// another data structure called a linked list. The linked list element is
// recursively defined as an object with:
// - `value`
// - `next` property referencing the next linked list element or `null` if
//   that's the end
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

// Alternative construction:
list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;

// The list can be easily split into multiple parts and later joined back:
let secondList = list.next.next; // 3,4
list.next.next = null;

// To join:
list.next.next = secondList;

// And we can insert or remove items in any place:
// prepend the new value to the list
list = { value: "new item", next: list };

// To remove a value from the middle, change `next` of the previous one:
list.next = list.next.next; // "new item",2,3,4

// The main drawback is that we can't easily access an element by its number. In
// an array that's easy: `arr[n]` is a direct reference. But in the list we need
// to start from the first item and go next N times to get the Nth element.

// Lists can be enhanced:
// - We can add property `prev` in addition to `next` to reference the previous
//   element, to move back easily.
// - We can also add a variable named `tail` referencing the last element of the
//   list (and update it when adding/removing elements from the end).
