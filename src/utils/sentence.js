module.exports = function validator(inputString) {
  let lastCharacter = inputString.substring(inputString.length - 1);
  if (lastCharacter === ".") {
    return true;
  }

  return false;
};
