// Using Binary
const numberOfSteps = (num) => {
  if (!num) return 0;
  let counter = 0;

  while (num > 0) {
    if (num % 2 === 1) counter += 2;
    else counter++;
    num = Math.floor(num / 2);
  }
  counter--;
  return counter;
};

// Following Description
//   const numberOfSteps = (num) => {
//     let counter = 0;
//     while (num > 0) {
//       counter++;
//       if (num % 2 === 1) num -= 1;
//       else num /= 2;
//     }
//     return counter;
//   };
