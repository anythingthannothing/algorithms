// Better Approach => T.C: O(n) | S.C: O(1)
let fizzBuzz = (n) => {
    let answer = [];
    let temp = "";
    
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0) temp += "Fizz";
      if (i % 5 === 0) temp += "Buzz";
      if (!temp.length) temp += i;
      answer.push(temp);
      temp = "";
    }
    return answer;
  };
  
  // Naive Approach => T.C: O(n) | S.C: O(1)
  // let fizzBuzz = (n) => {
  //   let answer = [];
  //   for (let i = 1; i <= n; i++) {
  //     if (i % 15 == 0) answer[i - 1] = "FizzBuzz";
  //     else if (i % 3 === 0) answer[i - 1] = "Fizz";
  //     else if (i % 5 === 0) answer[i - 1] = "Buzz";
  //     else answer[i - 1] = i + "";
  //   }
  //   return answer;
  // };