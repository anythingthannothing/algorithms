// Solution with array method
const reverseWords = function (s) {
  return s
    .split(" ")
    .map((v) => v.split("").reverse().join(""))
    .join(" ");
};

// Solution with two-pointers
// const reverseWords = function (s) {
//   let end = -1;
//   let split = s.split("");
//   let len = s.length;

//   for (let i = 0; i <= len; i++) {
//     if (i == len || split[i] === " ") {
//       let start = end + 1;
//       end = i - 1;
//       while (start < end) {
//         [split[start], split[end]] = [split[end], split[start]];
//         start++;
//         end--;
//       }
//       end = i;
//     }
//   }
//   return split.join("");
// };
