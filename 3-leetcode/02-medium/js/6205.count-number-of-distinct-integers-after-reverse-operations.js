const countDistinctIntegers = function (nums) {
  function reverse(num) {
    let result = 0;
    while (num > 0) {
      result = result * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    return result;
  }
  let arr = [...nums];
  for (let num of nums) arr.push(reverse(num));
  let set = new Set(arr);
  return [...set].length;
};
