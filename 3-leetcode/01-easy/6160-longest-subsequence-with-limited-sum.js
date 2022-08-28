const answerQueries = function (nums, queries) {
  let answer = Array.from({ length: queries.length }, (v) => 0);
  let numsLen = nums.length;
  let queriesLen = queries.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < queriesLen; i++) {
    let temp = 0;
    let count = 0;
    for (let j = 0; j < numsLen && temp + nums[j] <= queries[i]; j++) {
      temp += nums[j];
      count++;
    }
    answer[i] = count;
  }

  return answer;
};
