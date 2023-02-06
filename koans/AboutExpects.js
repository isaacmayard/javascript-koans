describe('About Expects', function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', function() {

  // Your journey begins here: Replace the word false with true 
    expect(true).toBeTruthy();
  });

  // To understand reality, we must compare our expectations against reality.
  it('should expect equality', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    expect(actualValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it('should assert equality a better way', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
    expect(actualValue = FILL_ME_IN).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = (1 + 1).toString();

  // toBe() will always use === to compare.
    expect(FILL_ME_IN).toBe(expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
  it('should have filled in values', function() {
    expect(FILL_ME_IN).toEqual(FILL_ME_IN);
  });
});
