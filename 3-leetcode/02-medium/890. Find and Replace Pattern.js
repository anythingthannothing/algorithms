// Solution Using one HashMaps => T.C: O(nk) | S.C: O(nk)
const findAndReplacePattern = (words, pattern) => {
  if (pattern.length === 1) return words;
  let answer = [];

  const match = (word, pattern) => {
    let map = new Map();

    for (let i = 0; i < word.length; i++) {
      let w = word[i];
      let p = pattern[i];
      if (!map.has(w)) map.set(w, p);
      if (map.get(w) !== p) return false;
    }
    let seen = Array(26).fill(0);
    for (let [key, value] of map) {
      if (seen[value.charCodeAt(0) - 97]) return false;
      seen[value.charCodeAt(0) - 97] = true;
    }
    return true;
  };

  for (let word of words) {
    if (match(word, pattern)) answer.push(word);
  }
  return answer;
};

// Solution Using two HashMaps => T.C: O(nk) | S.C: O(nk)
// const findAndReplacePattern = (words, pattern) => {
//   if (pattern.length === 1) return words;
//   let answer = [];

//   const match = (word, pattern) => {
//     let map1 = new Map();
//     let map2 = new Map();

//     for (let i = 0; i < word.length; i++) {
//       let w = word[i];
//       let p = pattern[i];
//       if (!map1.has(w)) map1.set(w, p);
//       if (!map2.has(p)) map2.set(p, w);
//       if (map1.get(w) !== p || map2.get(p) != w) return false;
//     }
//     return true;
//   }

//   for (let word of words) {
//     if (match(word, pattern)) answer.push(word);
//   }
//   return answer;
// };
