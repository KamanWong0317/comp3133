const assert = require('assert')
const Calculator = require('../app/calculator')

describe("add, sub, div and mul functions", ()=>{

    it("add(1,2) expected result 3", () => {
        assert.equal(Calculator.add(1,2), 3)
    })

    it("add(1,2) expected result 5", () => {
        assert.equal(Calculator.add(1,2), 5)
    })

    it("sub(10,5) expected result 5", () => {
        assert.equal(Calculator.sub(10,5), 5)
    })

    it("sub(10,5) expected result 6", () => {
        assert.equal(Calculator.sub(10,5), 6)
    })

    it ("mul(2,3) expected result 6",()=>{
        assert.equal(Calculator.mul(2,3), 6)
    })

    it ("mul(2,3) expected result 7",()=>{
        assert.equal(Calculator.mul(2,3), 7)
    })

    it ("div(10,5) expected result 2",()=>{
        assert.equal(Calculator.div(10,5), 2)
    })

    it ("div(10,5) expected result 3",()=>{
        assert.equal(Calculator.div(10,5), 3)
    })
})