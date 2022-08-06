const maximumGroups = (grades) => {
  let answer = 0;
  let sum = 0;
  let plus = 1;
  while (grades.length >= sum + plus) {
    answer++;
    sum += plus++;
  }
  return answer;
};
