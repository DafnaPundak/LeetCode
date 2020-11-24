const hammingWeight = require("./numberOf1Bits");

test("the number of '1' bits in the input is 0", () => {
  expect(hammingWeight(0)).toEqual(0);
});
