const sortPeople = function (names, heights) {
  let arr = [];
  let result = [];
  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], heights[i]]);
  }

  arr.sort((a, b) => b[1] - a[1]);

  for (let person of arr) {
    result.push(person[0]);
  }
  return result;
};
