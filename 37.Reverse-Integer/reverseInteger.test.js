const reverse = require("./reverseInteger");

// test("", () => {
//   expect(reverse("")).toEqual("");
// });

test("", () => {
  expect(reverse(1)).toEqual(1);
});

test("", () => {
  expect(reverse(12)).toEqual(21);
});

test("", () => {
  expect(reverse(123)).toEqual(321);
});

test("", () => {
  expect(reverse(1234)).toEqual(4321);
});

test("", () => {
  expect(reverse(-123)).toEqual(-321);
});

test("", () => {
  expect(reverse(0)).toEqual(0);
});

test("", () => {
  expect(reverse(120)).toEqual(21);
});

test("", () => {
  expect(reverse(1534236469)).toEqual(0);
});

test("", () => {
  expect(reverse(-2147483648)).toEqual(0);
});

test("", () => {
  expect(reverse(-1563847412)).toEqual(0);
});
