var isPrime = require("./hw3")

describe("hw3", () => {
  it("should return correct answer when n = 1", () => {
    expect(isPrime(1)).toBe(false)
  })
  it("should return correct answer when n = 2", () => {
    expect(isPrime(2)).toBe(true)
  })
  it("should return correct answer when n = 3", () => {
    expect(isPrime(3)).toBe(true)
  })
  it("should return correct answer when n = 7", () => {
    expect(isPrime(7)).toBe(true)
  })
  it("should return correct answer when n = 41", () => {
    expect(isPrime(41)).toBe(true)
  })
  it("should return correct answer when n = 99", () => {
    expect(isPrime(99)).toBe(false)
  })
  it("should return correct answer when n = 100000", () => {
    expect(isPrime(100000)).toBe(false)
  })
})