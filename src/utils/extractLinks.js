const cheerio = require("cheerio");

module.exports = function extractLinks(res) {
  // $ will be a syntax tree
  const $ = cheerio.load(res.data);

  // Looking for all elements with a class
  const linkElements = $("a");
  let links = [];

  for (let i = 0; i < linkElements.length; i++) {
    // are there any links in web page?
    links[i] = linkElements[i].attribs.href;
    links = [...links].filter(link => link && link.substring(0, 4) === "http");
  }

  return links;
};
