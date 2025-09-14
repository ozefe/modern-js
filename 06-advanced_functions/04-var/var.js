// The `var` declaration is similar to `let`. Most of the time we can replace
// `let` by `var` or vice-versa and expect things to work:
var message = "Hi";
alert(message); // Hi

// But internally `var` is a very different beast, that originates from very old
// times. It’s generally not used in modern scripts, but still lurks in the old
// ones.
