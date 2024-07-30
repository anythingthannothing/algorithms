const checkIfPangram = function (sentence) {
  return new Set([...sentence]).size === 26 ? true : false;
};
