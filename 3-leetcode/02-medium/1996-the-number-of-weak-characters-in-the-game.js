const numberOfWeakCharacters = (properties) => {
  let answer = 0,
    max = -Infinity;
  properties.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  for (let [_, d] of properties)
    if (d < max) {
      answer++;
    } else max = d;
  return answer;
};
