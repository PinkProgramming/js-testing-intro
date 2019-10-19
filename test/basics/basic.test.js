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

// Test 3. introduce array (for strings)
const helloWords = ["hej", "hallå", "tjena", "tja", "hejsan"];

it("Should be a common Swedish greeting", function() {
  expect(helloWords).toContain("hej");
  expect(helloWords).toContain("hejsan");
});

it("Should not be an english greeting", function() {
  expect(helloWords).not.toContain("hi");
});

it("Should not be a goodbye greeting", function() {
  expect(helloWords).not.toContain("hejdå");
});
