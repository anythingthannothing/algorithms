const maxLength = function (arr) {
  let maxLen = 0;
  let listOfStrs = [];
  arr = arr.filter(isUnique);
  let memo = {};
  maxLen = dfs(arr, "", 0, maxLen, memo);
  return maxLen;
};

function dfs(arr, path, i, maxLen, memo) {
  if (memo[path]) return memo[path];
  let pathIsUnique = isUnique(path);
  if (pathIsUnique) {
    maxLen = Math.max(path.length, maxLen);
  }
  if (i === arr.length || !pathIsUnique) {
    memo[path] = maxLen;
    return maxLen;
  }
  for (let j = i; j < arr.length; j++) {
    maxLen = dfs(arr, path + arr[j], j + 1, maxLen, memo);
  }

  memo[path] = maxLen;
  return maxLen;
}

function isUnique(str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) return false;
    map[str[i]] = 1;
  }

  return true;
}
