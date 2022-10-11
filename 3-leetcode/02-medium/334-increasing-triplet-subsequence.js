const increasingTriplet = function (nums) {
  let n = nums.length;
  let min = Infinity;
  let max = Infinity;
  for (let num of nums) {
    if (num <= min) min = num;
    else if (num <= max) max = num;
    else return true;
  }
  return false;
};
