//  mocha and chai test cases to validate
// Arithmetic functios percentage and square

const assert = require('assert')
const Arithmetic = require('../Arithmetic')

describe("Validating Arithmetic functions", ()=>{
    assert.equal(Arithmetic.square(12), 144)

    it("square(3) should return 9", () => {
        assert.equal(Arithmetic.square(3), 9)
    })

    it("square(12) should return 144", () => {
        assert.equal(Arithmetic.square(12), 144)
    })

    it("square(4) should not return 8", () => {
        assert.notEqual(Arithmetic.square(4), 8)
    })

    it("square(2) should return 5", () => {
        assert.equal(Arithmetic.square(2), 5)
    })

    it ("percentage(20, 50) should return 40",()=>{
        assert.equal(Arithmetic.percentage(20,50), 40)
    })

    it ("percentage(20, 100) should return 20",()=>{
        assert.equal(Arithmetic.percentage(20,100), 20)
    })

    it ("percentage(20, 20) should return 10",()=>{
        assert.equal(Arithmetic.percentage(20,20), 10)
    })

})