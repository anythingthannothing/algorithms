const removeStars = function (s) {
  let answer = [];

  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] !== "*") answer.push(s[i]);
    else {
      answer.pop();
    }
  }
  return answer.join("");
};
