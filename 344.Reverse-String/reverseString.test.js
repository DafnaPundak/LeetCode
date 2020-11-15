const reverseString = require("./reverseString")

test("", () => {
    expect(reverseString([])).toEqual([])
})

test("", () => {
    expect(reverseString(["h", "i"])).toEqual(["i", "h"])
})