// Test 1. Numerical comparisons
const maxCost = 20;
var fuel = 5;
var hullRepairs = 9;
test("The vehicle should be affordable", function() {
  expect(fuel + hullRepairs).toBeLessThan(maxCost);
});

// Test 2. String comparisons
var example = "Hi, my name is Polly.";
it("Should end with a period.", function() {
  let lastCharacter = example.substring(example.length - 1);
  expect(lastCharacter).toEqual(".");
});

// Test 2 b. Revisit test2
// this time testing a function
// that accepts a string and returns last character
describe("Sentence-finder", function() {
  const sentenceFinder = require("../../src/utils/sentence.js");

  test("should return true for strings ending with period", function() {
    expect(sentenceFinder(example)).toEqual(true);
  });

  test("should return false for strings not ending with period", function() {
    expect(sentenceFinder("Hi")).toEqual(false);
  });
});
