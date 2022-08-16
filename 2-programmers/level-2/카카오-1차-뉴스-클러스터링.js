function solution(str1, str2) {
  let answer = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let arr1 = [];
  let arr2 = [];
  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < str1.length - 1; i++) {
    if (
      str1.charCodeAt(i) >= 97 &&
      str1.charCodeAt(i) <= 122 &&
      str1.charCodeAt(i + 1) >= 97 &&
      str1.charCodeAt(i + 1) <= 122
    ) {
      arr1.push(str1[i] + str1[i + 1]);
      map1.set(str1[i] + str1[i + 1], map1.get(str1[i] + str1[i + 1]) + 1 || 1);
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (
      str2.charCodeAt(i) >= 97 &&
      str2.charCodeAt(i) <= 122 &&
      str2.charCodeAt(i + 1) >= 97 &&
      str2.charCodeAt(i + 1) <= 122
    ) {
      arr2.push(str2[i] + str2[i + 1]);
      map2.set(str2[i] + str2[i + 1], map2.get(str2[i] + str2[i + 1]) + 1 || 1);
    }
  }

  if (arr1.length === 0 && arr2.length === 0) return 65536;

  let common = 0;
  let sum = 0;

  for (let [key, value] of map1) {
    if (!map2.has(key)) sum += value;
    else {
      common += Math.min(value, map2.get(key));
      sum += Math.max(value, map2.get(key));
    }
  }

  for (let [key, value] of map2) {
    if (!map1.has(key)) sum += value;
  }

  return parseInt((common / sum) * 65536);
}
