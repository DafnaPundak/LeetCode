const reverseString = require("./reverseString");

test("", () => {
  expect(reverseString([])).toEqual([]);
});

test("", () => {
  expect(reverseString(["h", "i"])).toEqual(["i", "h"]);
});

test("", () => {
  expect(reverseString(["d", "o", "g"])).toEqual(["g", "o", "d"]);
});

test("", () => {
  expect(reverseString(["d", "o", "g", "!"])).toEqual(["!", "g", "o", "d"]);
});

test("", () => {
    expect(reverseString(["h", "e", "l", "l", "o"])).toEqual(["o", "l", "l", "e", "h"]);
  });
