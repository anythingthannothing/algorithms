const searchRange = (nums, target) => {
    if (nums.length === 0) return [-1, -1];
    
    let answer = [];
    let start = 0,
        end = nums.length - 1,
        mid,
        temp = -1;
    let firstMet;
    
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            if (temp === -1) firstMet = mid;
            temp = mid;
            end = mid - 1;
        }
        else if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    
    if (temp === -1) return [-1, -1];
    answer.push(temp);
      
    start = firstMet;
    end = nums.length - 1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            temp = mid;
            start = mid + 1;
        }
        else if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    answer.push(temp);
    return answer;
};