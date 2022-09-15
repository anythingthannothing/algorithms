const findOriginalArray = function (changed) {
  let result = [];
  let len = changed.length;

  if (len % 2 === 1) return [];

  let map = new Map();
  changed.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (map.has(changed[i] / 2)) {
      map.set(changed[i] / 2, map.get(changed[i] / 2) - 1);
      if (map.get(changed[i] / 2) === 0) map.delete(changed[i] / 2);
      result.push(changed[i] / 2);
    } else {
      map.set(changed[i], map.get(changed[i]) + 1 || 1);
    }
  }

  return map.size === 0 ? result : [];
};
