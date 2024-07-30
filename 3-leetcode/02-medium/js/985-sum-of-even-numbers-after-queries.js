const sumEvenAfterQueries = function (nums, queries) {
  let result = [];
  let sum = nums.filter((v) => v % 2 === 0).reduce((acc, v) => acc + v, 0);

  queries.forEach((v) => {
    let temp = nums[v[1]];
    nums[v[1]] = nums[v[1]] + v[0];
    if (temp % 2 === 0 && nums[v[1]] % 2 === 0) {
      sum = sum - temp + nums[v[1]];
      result.push(sum);
    } else if (temp % 2 === 0 && nums[v[1]] % 2 !== 0) {
      sum = sum - temp;
      result.push(sum);
    } else if (temp % 2 !== 0 && nums[v[1]] % 2 === 0) {
      sum = sum + nums[v[1]];
      result.push(sum);
    } else result.push(sum);
  });

  return result;
};
