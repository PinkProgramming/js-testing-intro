/*
  This file contains some setup and code skeleton to get started.
  You are free to change the urls to a static website of your choice
*/

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

  // Test 1. Verify document in response

  // Test 1 b. change in setup function, to fetch from remote url

  // Test 2. Test each item in the links-array
  // if it fails you need to fix the src code!

  // Test 3. Test links, whether each location is OK
});
