// We use the global object to test for support of modern language features. For
// instance, test if a built-in `Promise` object exists (it doesn’t in really
// old browsers):
if (!window.Promise) {
    alert("Your browser is really old!");

    // If there’s none (say, we’re in an old browser), we can create
    // "polyfills": add functions that are not supported by the environment, but
    // exist in the modern standard:
    window.Promise = /*custom implementation of the modern language feature*/ 0;
}
