const reverse = require("./reverseInteger");

test("", () => {
  expect(reverse("")).toEqual("");
});

test("", () => {
  expect(reverse(1)).toEqual(1);
});
