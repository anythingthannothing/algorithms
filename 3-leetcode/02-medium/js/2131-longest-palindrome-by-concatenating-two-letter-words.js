var longestPalindrome = function (words) {
  var mp = {};
  var count = 0;
  let selfPalindrones = 0;
  for (var i = 0; i < words.length; i++) {
    let rev = words[i][1] + words[i][0];
    if (mp[words[i]]) {
      if (rev == words[i]) selfPalindrones -= 1;
      mp[words[i]]--;
      count += 2;
    } else {
      if (rev == words[i]) {
        selfPalindrones += 1;
      }
      if (!mp[rev]) {
        mp[rev] = 1;
      } else {
        mp[rev]++;
      }
    }
  }
  return selfPalindrones > 0 ? 2 + count * 2 : count * 2;
};
