describe("ucFirst", function() {
    it('First line', function() {
      assert.strictEqual(ucFirst("john"), "John");
    });
  
    it("Second line", function() {
      assert.strictEqual(ucFirst(""), "");
    });
  });