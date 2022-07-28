// Using Hash Map => T.C: O(n) | S.C: O(n)
let isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let tMap = new Map();
    for (let char of t) {
      tMap.set(char, tMap.get(char) + 1 || 1);
    }
    for (let char of s) {
      if (!tMap.get(char)) return false;
      tMap.set(char, tMap.get(char) - 1);
    }
    return true;
  };
  
// Using Sorting => T.C: O(nlogn) | S.C: O(1);
//   const isAnagram = (s, t) => {
//     if (s.length !== t.length) return false;
//     s = s.split("").sort().join("");
//     t = t.split("").sort().join("");
//     if (s !== t) return false;
//     return true;
//   };
  
  