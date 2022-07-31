const minimumOperations = (nums) => {
    let answer = 0;
    let len = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len && nums[len - 1] !== 0;) {
      while (nums[i] === 0 && i < len) {
        i++;
      }
      let minus = nums[i];
      for (let j = i; j < len; j++) {
        nums[j] -= minus;
        if (nums[j] < 0) nums[j] = 0;
      }
      answer++;
    }
    return answer;
  };