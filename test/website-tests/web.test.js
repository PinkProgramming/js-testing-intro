const fetchPage = require("../../src/utils/fetchPage.js");
const extractLinks = require("../../src/utils/extractLinks.js");

describe("Static website checks", function() {
  const localUrl = "http://localhost:8080";
  const remoteUrl = "https://pinkprogramming.se";
  let links, response;

  // SETUP for webpage testing
  beforeAll(async function() {
    response = await fetchPage(localUrl).catch(e =>
      console.error("Problem setting up tests:", e.message)
    );
    links = extractLinks(response);
  });

  // 1. Verify response Data
  test("The document should be an HTML file", function() {
    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toContain("text/html");
  });

  // Test a locally hosted html file (then change url in setup)

  it("should start with a 'http'", () => {
    for (const link of links) {
      expect(link.substring(0, 4)).toEqual("http");
    }
    // Test url syntax
    // Test a remote webpage
    // Do additional link cleaning
    // Test link fetch status codes
  });
});
