// In the past, as there was only `var`, and it has no block-level visibility,
// programmers invented a way to emulate it. What they did was called
// "immediately-invoked function expressions" (abbreviated as IIFE).

// Here, a Function Expression is created and immediately called. So the code
// executes right away and has its own private variables. The parentheses around
// the function is a trick to show JavaScript that the function is created in
// the context of another expression, and hence it’s a Function Expression: it
// needs no name and can be called immediately.
(function () {
    var message = "Hello";
    alert(message); // Hello
})();

// Ways to create IIFE:
(function() {
  alert("Parentheses around the function");
})();

(function() {
  alert("Parentheses around the whole thing");
}());

!function() {
  alert("Bitwise NOT operator starts the expression");
}();

+function() {
  alert("Unary plus starts the expression");
}();
