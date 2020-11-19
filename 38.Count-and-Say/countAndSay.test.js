const countAndSay = require("./countAndSay");

test("", () => {
  expect(countAndSay(1)).toEqual("1");
});

test("", () => {
  expect(countAndSay(2)).toEqual("11");
});

test("", () => {
    expect(countAndSay(3)).toEqual("21");
  });

  test("", () => {
    expect(countAndSay(4)).toEqual("1211");
  });

  test("", () => {
    expect(countAndSay(5)).toEqual("111221");
  });

  test("", () => {
    expect(countAndSay(6)).toEqual("312211");
  });
  
  test("", () => {
    expect(countAndSay(7)).toEqual("13112221");
  });

  test("", () => {
    expect(countAndSay(8)).toEqual("1113213211");
  });

  test("", () => {
    expect(countAndSay(9)).toEqual("31131211131221");
  });