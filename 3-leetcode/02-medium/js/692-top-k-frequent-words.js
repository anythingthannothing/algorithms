const topKFrequent = function (words, k) {
  let map = new Map();
  words.forEach((word) => map.set(word, map.get(word) + 1 || 1));

  return [...map]
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0].localeCompare(b[0]);
      return b[1] - a[1];
    })
    .slice(0, k)
    .map((arr) => arr[0]);
};
