import arrstar from "./hw1.js"

// var arrstar = require("./hw1");


describe("hw1", () => {
  it("should return correct answer when n = 1", () => {
    expect(arrstar(1)).toEqual(['*'])
  })
  it("should return correct answer when n = 5", () => {
    expect(arrstar(5)).toEqual(['*', '**', '***', '****', '*****'])
  })

  it("should return correct answer when n = 10", () => {
    expect(arrstar(10)).toEqual(['*', '**', '***', '****', '*****', '******', '*******', '********', '*********', '**********'])
  })

})