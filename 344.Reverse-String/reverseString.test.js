const reverseString = require("./reverseString")

test("", () => {
    expect(reverseString([])).toEqual([])
})

test("", () => {
    expect(reverseString(["h", "i"])).toEqual(["i", "h"])
})

test("", () => {
    expect(reverseString(["d", "o", "g"])).toEqual(["g", "o", "d"])
})