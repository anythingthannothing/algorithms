function naiveStirngSearch(sub, string) {
    let answer = 0;
    for (let i = 0, n = string.length, m = sub.length; i < n - m + 1; i++) {
      if (string[i] === sub[0]) {
        let same = true;
        for (let j = 1; j < m; j++) {
          if (string[j + i] !== sub[j]) {
            same = false;
            break;
          }
        }
        if (same) answer++;
      }
    }
    return answer;
  }