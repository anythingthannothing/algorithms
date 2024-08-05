const kthDistinct = (arr: string[], k: number): string => {
  const map = new Map();

  for (let str of arr) {
    if (!map.has(str)) {
      map.set(str, 1);
      continue;
    }

    map.set(str, map.get(str) + 1);
  }

  for (let str of arr) {
    if (map.get(str) === 1) {
      k--;
    }

    if (k === 0) {
      return str;
    }
  }

  return '';
};
