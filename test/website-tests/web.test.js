const fetchPage = require("../../src/utils/fetchPage.js");
const extractLinks = require("../../src/utils/extractLinks.js");

describe("Static website checks", function() {
  const localUrl = "http://localhost:8080";
  const remoteUrl = "https://pinkprogramming.se";
  let links, response;

  beforeAll(async function setup() {
    response = await fetchPage(remoteUrl).catch(e =>
      console.error("Problem setting up tests:", e.message)
    );
    links = extractLinks(response);
  });

  // Test 1. Verify response Data
  test("The document should be an HTML file", function() {
    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toContain("text/html");
  });

  // Test 1 b. change in setup function, to fetch from remote url

  // Test 2. Test each item in the links-array
  // if it fails you need to fix the src code!
  test("Each link 'href' should start with an 'http'", () => {
    for (const link of links) {
      expect(link.substring(0, 4)).toEqual("http");
    }
  });

  // Test 3. Test links, whether each location is reachable
  test("Each link should be OK and respond with a html-document", async () => {
    let fetchAttempts = [];
    for (const link of links) {
      fetchPage(link)
        .then(res => expect(res.stats).toEqual(200))
        .catch(e =>
          console.error(
            "Unable to resolve: " +
              link +
              ". The link is either dead, or do your server have a bad network connection."
          )
        );
    }
  });
});
