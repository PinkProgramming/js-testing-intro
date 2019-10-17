const axios = require("axios");

module.exports = function fetchPage(url) {
  return axios.get(url);
};
