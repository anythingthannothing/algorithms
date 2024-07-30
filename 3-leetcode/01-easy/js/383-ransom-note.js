// Using Hash Map => O(n)
const canConstruct = (ransomNote, magazine) => {
  let magazineMap = new Map();

  for (let i = 0, len = magazine.length; i < len; i++) {
    magazineMap.set(magazine[i], magazineMap.get(magazine[i]) + 1 || 1);
  }

  for (let i = 0, len = ransomNote.length; i < len; i++) {
    if (magazineMap.get(ransomNote[i]) < 0 || !magazineMap.get(ransomNote[i]))
      return false;
    magazineMap.set(ransomNote[i], magazineMap.get(ransomNote[i]) - 1);
  }
  return true;
};

// Using Brute Force? => O(n^2)
// const canConstruct = (ransomNote, magazine) => {
//     let temp;
//     for (let i = 0, len = magazine.length; i < len; i++) {
//         temp = magazine[i];
//         if (ransomNote.indexOf(temp) >= 0) ransomNote = ransomNote.replace(temp, "");
//         if (!ransomNote.length) return true;
//     }
//     return false;
// };
