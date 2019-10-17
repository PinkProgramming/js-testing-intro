const fetchPage = require("../utils/fetchPage.js");
const extractLinks = require("../utils/extractLinks.js");

describe("Hyperlink checks", function() {
  const localUrl = "/index.html";
  const remoteUrl = "https://pinkprogramming.se";
  let links;

  // SETUP for webpage testing
  beforeAll(async function() {
    const response = await fetchPage(remoteUrl);
    links = extractLinks(response);
  });

  test("my test", () => {
    expect(true).toBe(true);

    // TODO: The actual tests

    // Test a locally hosted html file

    // Test url syntax

    // Test a remote webpage

    // Do additional link cleaning

    // Test link fetch status codes
  });
});
