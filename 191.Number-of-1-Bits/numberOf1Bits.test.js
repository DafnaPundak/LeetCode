const hammingWeight = require("./numberOf1Bits");

test("the number of '1' bits in the input is 0", () => {
  expect(hammingWeight(0)).toEqual(0);
});

test("The input has a total of one '1' bits", () => {
  expect(hammingWeight(1)).toEqual(1);
});

test("The input has a total of one '1' bits", () => {
  expect(hammingWeight("10")).toEqual(1);
});

test("The input has a total of two '1' bits", () => {
  expect(hammingWeight("000000000000000000000100010000000")).toEqual(2);
});
