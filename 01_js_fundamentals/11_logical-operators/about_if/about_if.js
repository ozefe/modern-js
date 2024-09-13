if (-1 || 0) alert("first"); // "first", (-1 || 0 evaluates to -1, which is truthy)
if (-1 && 0) alert("second"); // nothing, (-1 && 0 evaluates to 0, which is falsy)
if (null || (-1 && 1)) alert("third"); // "third", (-1 && 1 evaluates to 1, which is truthy and thus making null || 1 also truthy)
