var smallestNumber = function (pattern) {
  let answer = "";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let len = pattern.length;

  for (let i = 0; i <= len; i++) {
    if (i === len) answer += arr.shift();
    else if (pattern[i] === "I") answer += arr.shift();
    else if (pattern[i] === "D") {
      let index = 0;
      for (let j = i; j <= len; j++) {
        if (pattern[j] === "D") index++;
        else break;
      }
      answer += arr.splice(index, 1);
    }
  }
  return answer;
};
