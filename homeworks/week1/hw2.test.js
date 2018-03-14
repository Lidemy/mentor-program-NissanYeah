var capitalize = require("./hw2");


describe("hw2", () => {
  it("should return correct answer when str = nick", () => {
    expect(capitalize('nick')).toBe('Nick')
  })
  it("should return correct answer when str = nick", () => {
    expect(capitalize('Nick')).toBe('Nick')
  })
  it("should return correct answer when str = nick", () => {
    expect(capitalize(',hello')).toBe(',hello')
  })
})