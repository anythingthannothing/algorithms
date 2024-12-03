const addSpaces = (s: string, spaces: number[]): string => {
  let result = '';

  let spaceIndex = 0;

  for (let stringIndex = 0; stringIndex < s.length; stringIndex++) {
    if (spaceIndex < spaces.length && stringIndex == spaces[spaceIndex]) {
      result += ' ';
      spaceIndex++;
    }

    result += s[stringIndex];
  }

  return result;
};
