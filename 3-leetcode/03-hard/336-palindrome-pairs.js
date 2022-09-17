const palindromePairs = function (words) {
  let result = [];
  let map = new Map();
  let len = words.length;

  for (let i = 0; i < len; i++) map.set(words[i], i);

  for (let i = 0; i < len; i++) {
    if (words[i] === "") {
      for (let j = 0; j < len; j++) {
        if (isPal(words[j]) && j !== i) result.push([i, j], [j, i]);
      }
      continue;
    }
    let reverse = words[i].split("").reverse().join("");
    let index = map.get(reverse);
    if (index !== undefined && index !== i) result.push([i, index]);
    for (let j = 1; j < reverse.length; j++) {
      if (isPal(reverse, 0, j - 1)) {
        let index = map.get(reverse.slice(j));
        if (index !== undefined) result.push([i, index]);
      }
      if (isPal(reverse, j)) {
        let index = map.get(reverse.slice(0, j));
        if (index !== undefined) result.push([index, i]);
      }
    }
  }
  return result;
};

const isPal = (word, i = 0, j = word.length - 1) => {
  while (i < j) if (word[i++] !== word[j--]) return false;
  return true;
};
