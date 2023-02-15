describe("isEmpty", function() {
    it("true", function() {
      assert.isTrue(isEmpty({}));
    });
  
    it("false", function() {
      assert.isFalse(isEmpty({
        anything: false
      }));
    });
});