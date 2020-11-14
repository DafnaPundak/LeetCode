const rotate = require("./rotateArray");

test("", () => {
  expect(rotate([], 0)).toEqual([]);
});

test("", () => {
  expect(rotate([1, 2], 0)).toEqual([1, 2]);
});

test("", () => {
  expect(rotate([1, 2], 1)).toEqual([2, 1]);
});

test("", () => {
  expect(rotate([1, 2, 4, 0], 1)).toEqual([0, 1, 2, 4]);
});

test("", () => {
  expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
});
