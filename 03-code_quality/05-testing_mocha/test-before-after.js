describe("test -- before, after, beforeEach, afterEach", function () {
    before(() => alert("Testing started -- before all tests"));
    after(() => alert("Testing finished -- after all tests"));

    beforeEach(() => console.log("Before a test -- enter a test"));
    afterEach(() => console.log("After a test -- exit a test"));

    it("test 1", () => alert(1));
    it("test 2", () => alert(2));
});
