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
