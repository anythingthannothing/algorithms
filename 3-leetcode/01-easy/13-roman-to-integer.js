// Rear to Front(Fastest & Simple)
const romanToInt = (s) => {
  let answer = 0,
    len = s.length;
  for (let i = len - 1; i >= 0; i--) {
    if (s[i] === 'I') {
      if (s[i + 1] === 'V' || s[i + 1] === 'X') answer--;
      else answer++;
    } else if (s[i] === 'V') answer += 5;
    else if (s[i] === 'X') {
      if (s[i + 1] === 'L' || s[i + 1] === 'C') answer -= 10;
      else answer += 10;
    } else if (s[i] === 'L') answer += 50;
    else if (s[i] === 'C') {
      if (s[i + 1] === 'D' || s[i + 1] === 'M') answer -= 100;
      else answer += 100;
    } else if (s[i] === 'D') answer += 500;
    else answer += 1000;
  }
  return answer;
};

// Solution Using HashMap(Faster)
// const romanToInt = (s) => {
//     let romanHash = {
//         "I": 1,
//         "V": 5,
//         "X": 10,
//         "L": 50,
//         "C": 100,
//         "D": 500,
//         "M": 1000,
//         "IV": 4,
//         "IX": 9,
//         "XL": 40,
//         "XC": 90,
//         "CD": 400,
//         "CM": 900,
//     }

//     let answer = 0;
//     for (let i = 0, len = s.length; i < len; ) {
//         if (romanHash[s[i] + s[i + 1]]) {
//             answer += romanHash[s[i] + s[i + 1]];
//             i += 2;
//             continue;
//         }
//         answer += romanHash[s[i]];
//         i++;
//     }
//     return answer;
// };

// Front to Rear(Slower)
// const romanToInt = (s) => {
//     let answer = 0;
//     let value = 0;
//     for (let i = 0, len = s.length; i < len; i++) {
//         if (s[i] === "I") {
//             if (s[i + 1] === "V") value += 4;
//             else if (s[i + 1] === "X") value += 9;
//             else value++;
//         } else if (s[i] === "V") {
//             if (s[i - 1] === "I") continue;
//             else value += 5;
//         } else if (s[i] === "X") {
//             if (s[i - 1] === "I") continue;
//             else if (s[i + 1] === "L") answer += 40;
//             else if (s[i + 1] === "C") answer += 90;
//             else {
//                 if (value === 0) answer += 10;
//                 else answer += value * 10;
//             }
//             value = 0;
//         } else if (s[i] === "L") {
//             if (s[i - 1] === "X") continue;
//             else answer += 50;
//         } else if (s[i] === "C") {
//             if (s[i - 1] === "X") continue;
//             else if (s[i + 1] === "D") answer += 400;
//             else if (s[i + 1]=== "M") answer += 900;
//             else {
//                 if (value === 0) answer += 100;
//                 else answer += value * 100;
//             }
//             value = 0;
//         } else if (s[i] === "D") {
//             if (s[i - 1] === "C") continue;
//             else answer += 500;
//         } else {
//             if (s[i - 1] === "C") continue;
//             else {
//                 if (value === 0) answer += 1000;
//                 else answer += value * 1000;
//             }
//             value = 0;
//         }
//     }
//     answer += value;
//     return answer;
// };
