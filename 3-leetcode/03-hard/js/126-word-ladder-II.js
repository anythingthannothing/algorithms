const findLadders = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  wordSet.add(beginWord);

  if (!wordSet.has(endWord)) return [];

  const distanceMap = new Map();
  const wordMap = new Map();

  const queue = [];
  const visited = new Set();

  let reached = false;

  queue.push(endWord);
  visited.add(endWord);
  let distance = 0;
  distanceMap.set(endWord, distance);
  while (queue.length !== 0) {
    let size = queue.length;
    distance++;
    for (let i = 0; i < size; i++) {
      const word = queue.shift();
      for (let w of getNextWords(word, wordSet)) {
        if (!wordMap.has(w)) wordMap.set(w, []);
        wordMap.get(w).push(word);

        if (visited.has(w)) continue;
        if (w === beginWord) reached = true;

        distanceMap.set(w, distance);

        queue.push(w);
        visited.add(w);
      }
    }
  }

  if (!reached) return [];

  const result = [];
  dfs(result, [beginWord], beginWord, endWord, wordMap, distanceMap);

  return result;
};

function dfs(result, tmpPath, word, endWord, wordMap, distanceMap) {
  if (word === endWord) {
    result.push([...tmpPath]);
    return;
  }

  for (let nextWord of wordMap.get(word)) {
    if (distanceMap.get(word) === distanceMap.get(nextWord) + 1) {
      tmpPath.push(nextWord);
      dfs(result, tmpPath, nextWord, endWord, wordMap, distanceMap);
      tmpPath.pop();
    }
  }
}

function getNextWords(word, wordSet) {
  const result = [];
  for (let i = 0; i < word.length; i++) {
    let currentCode = word.charCodeAt(i);
    for (let c = 97; c <= 122; c++) {
      if (c !== currentCode) {
        const chars = word.split("");
        chars[i] = String.fromCharCode(c);
        let newWord = chars.join("");
        if (wordSet.has(newWord)) {
          result.push(newWord);
        }
      }
    }
  }

  return result;
}
