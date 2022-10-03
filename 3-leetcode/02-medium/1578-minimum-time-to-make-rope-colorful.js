const minCost = function (colors, neededTime) {
  let answer = 0;
  let max = neededTime[0];
  let n = colors.length;

  for (let i = 1; i < n; i++) {
    if (colors[i] !== colors[i - 1]) {
      max = 0;
    }

    answer += Math.min(max, neededTime[i]);
    max = Math.max(max, neededTime[i]);
  }

  return answer;
};

// First Approach => Solution with Greedy
// const minCost = function(colors, neededTime) {
//   let answer = 0;
//   let consec = [];
//   let n = colors.length;

//   for (let i = 0; i < n; i++) {
//     if (colors[i] === colors[i + 1]) {
//       let start = i;
//       let end = i + 1;
//       while (end < n && colors[end] === colors[end + 1]) {
//         end++;
//       }
//       consec.push([start, end]);
//       i = end;
//     }
//   }

//   consec.forEach(v => {
//     let arr = neededTime.slice(v[0], v[1] + 1);
//     answer += arr.reduce((acc, v) => acc + v, 0) - Math.max(...arr);
//   })

//   return answer;
// };
