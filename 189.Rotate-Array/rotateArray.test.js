const rotate = require("./rotateArray")

test("", ()=> {
    expect(rotate([], 0)).toEqual([])
})

test("", ()=> {
    expect(rotate([1,2], 0)).toEqual([1,2])
})

test("", ()=> {
    expect(rotate([1,2], 1)).toEqual([2,1])
})