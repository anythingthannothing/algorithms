const uniqueMorseRepresentations = function (words) {
  let set = new Set();
  let char = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  for (let str of words) {
    let temp = "";
    let len = str.length;
    for (let i = 0; i < len; i++) {
      let index = str.charCodeAt(i) - 97;
      temp += char[index];
    }
    set.add(temp);
  }
  return set.size;
};
