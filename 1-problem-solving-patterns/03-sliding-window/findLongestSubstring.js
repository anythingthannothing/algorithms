function findLongestSubstring(string) {
    let answer = 0,
        n = string.length,
        seen = new Map(),
        start = 0;
    for (let i = 0; i < n; i++) {
      let char = string[i];
        if (seen.has(char)) {
            start = Math.max(start, seen.get(char) + 1);
        }
        seen.set(char, i);
        answer = Math.max(answer, i - start + 1);
    }
    return answer;
}