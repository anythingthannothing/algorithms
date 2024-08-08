function solution(survey, choices) {
  let answer = "";

  let index = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] <= 3) index[survey[i][0]] += 4 - choices[i];
    else if (choices[i] >= 5) index[survey[i][1]] += choices[i] - 4;
    else continue;
  }

  let arr = [];
  for (let key in index) {
    arr.push([key, index[key]]);
  }

  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    else return b[1] - a[1];
  });

  for (let set of arr) {
    if (set[0] === "R" || set[0] === "T") {
      answer += set[0];
      break;
    }
  }
  for (let set of arr) {
    if (set[0] === "C" || set[0] === "F") {
      answer += set[0];
      break;
    }
  }
  for (let set of arr) {
    if (set[0] === "J" || set[0] === "M") {
      answer += set[0];
      break;
    }
  }
  for (let set of arr) {
    if (set[0] === "A" || set[0] === "N") {
      answer += set[0];
      break;
    }
  }
  return answer;
}
