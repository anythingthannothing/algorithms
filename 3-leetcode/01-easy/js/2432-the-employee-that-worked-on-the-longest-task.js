const hardestWorker = function (n, logs) {
  let answer = 0;
  let endTime = 0;
  let max = 0;
  for (let task of logs) {
    if (max < task[1] - endTime) {
      answer = task[0];
      max = task[1] - endTime;
    } else if (max === task[1] - endTime) {
      answer = Math.min(answer, task[0]);
      max = task[1] - endTime;
    }
    endTime = task[1];
  }
  return answer;
};
