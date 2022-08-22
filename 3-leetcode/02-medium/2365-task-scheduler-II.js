var taskSchedulerII = function (tasks, space) {
  let answer = 0; // answer means day passed(needed to finish all tasks)
  let map = new Map(); // we use this map to store next date which can finish current task

  for (let i = 0; i < tasks.length; i++) {
    if (map.has(tasks[i])) {
      // Jump to the next day which can finish the current task
      answer = Math.max(answer, map.get(tasks[i]));
    }
    map.set(tasks[i], answer + space + 1);
    answer++;
  }
  return answer;
};
