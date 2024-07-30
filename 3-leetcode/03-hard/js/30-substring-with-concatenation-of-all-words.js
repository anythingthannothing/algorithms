const findSubstring = function (s, words) {
  let result = [];
  let map = new Map();

  let wordLength = words[0].length;
  let wordCount = words.length;

  let slideWindow = wordLength * wordCount;

  for (let word of words) {
    map.set(word, map.get(word) + 1 || 1);
  }

  let leftIndex = 0;
  let rightIndex = slideWindow - 1;

  const helper = (tempStr) => {
    let visited = new Map();

    for (let i = 0; i < tempStr.length; i += wordLength) {
      let word = tempStr.substr(i, wordLength);

      visited.set(word, visited.get(word) + 1 || 1);
    }

    for (let [key, val] of visited) {
      if (map.get(key) != val) return false;
    }

    return true;
  };

  while (rightIndex < s.length) {
    if (rightIndex - leftIndex + 1 == slideWindow) {
      let tempStr = s.substring(leftIndex, rightIndex + 1);

      if (helper(tempStr)) result.push(leftIndex);

      leftIndex++;
    }

    rightIndex++;
  }

  return result;
};
