const secondsToRemoveOccurrences = function (s) {
  let answer = 0;
  let len = s.length;
  s = s.split("");
  while (true) {
    let swap = false;
    for (let i = 0; i < len - 1; ) {
      if (s[i] === "0" && s[i + 1] == "1") {
        [s[i], s[i + 1]] = [s[i + 1], s[i]];
        i += 2;
        swap = true;
      } else i++;
    }
    if (swap === false) return answer;
    answer++;
  }
};
