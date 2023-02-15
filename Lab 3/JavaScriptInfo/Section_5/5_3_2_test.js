describe("checkSpam", function() {
  it('First line', function() {
    assert.isTrue(checkSpam('buy ViAgRA now'));
  });

  it('Second line', function() {
    assert.isTrue(checkSpam('free xxxxx'));
  });

  it('Third line', function() {
    assert.isFalse(checkSpam('innocent rabbit'));
  });
});