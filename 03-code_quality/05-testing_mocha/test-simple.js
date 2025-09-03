// What functionality we're describing?
// Used to group "workers" -- the it blocks.
describe("pow -- simple test", function () {
    // in a human-readable way we describe the particular use case and
    // implement the function that tests it
    it("raises to n-th power", function () {
        // if the implementation is correct, this block should execute without
        // errors
        assert.equal(pow(2, 3), 8);
    });
});
