function f() {
    alert(this.name);
}

// The exotic bound function object returned by `f.bind(...)` remembers the
// context (and arguments if provided) only at creation time. A function cannot
// be re-bound.
f = f.bind({ name: "John" }).bind({ name: "Ann" });

f(); // John
