const breakPalindrome = function (palindrome) {
  // There must be a way to make non-plindrome word if length is greater than 1
  if (palindrome.length === 1) return "";

  palindrome = palindrome.split("");
  let n = palindrome.length;
  let endPoint =
    n % 2 === 0 ? Math.floor((n - 1) / 2) : Math.floor((n - 2) / 2);
  let flag = false; // To check any character to be changed

  for (let i = 0; i <= endPoint; i++) {
    if (palindrome[i] === "a") continue;
    palindrome[i] = "a";
    flag = true;
    break;
  }
  // If any character hasn't been changed, it means that all characters are 'a'
  if (!flag) palindrome[n - 1] = "b";
  return palindrome.join("");
};
