const hammingWeight = require("./numberOf1Bits");

test("the number of '1' bits in the input is 0", () => {
  expect(hammingWeight(0)).toEqual(0);
});

test("The input has a total of one '1' bits", () => {
  expect(hammingWeight(1)).toEqual(1);
});

test("The input has a total of one '1' bits", () => {
  expect(hammingWeight(10)).toEqual(1);
});

test("The input has a total of one '1' bits", () => {
  expect(hammingWeight(110)).toEqual(2);
});

test("The input has a total of one '1' bits", () => {
  expect(hammingWeight(11010)).toEqual(3);
});

// test("The input has a total of two '1' bits", () => {
//   expect(hammingWeight(01)).toEqual(1);
// });
