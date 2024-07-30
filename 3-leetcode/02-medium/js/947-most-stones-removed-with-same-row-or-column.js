const removeStones = function (stones) {
  const set = new Map();
  const find = (id) => {
    if (set.has(id)) {
      const res = find(set.get(id));
      set.set(id, res);
      return res;
    } else {
      return id;
    }
  };
  const union = (id1, id2) => {
    const set1 = find(id1);
    const set2 = find(id2);
    if (set1 !== set2) {
      set.set(set1, set2);
    }
  };
  const size = () => {
    const ids = new Set();
    for (let key of set.keys()) {
      ids.add(find(key));
    }
    return ids.size;
  };
  for (let [x, y] of stones) {
    union(`row-${x}`, `col-${y}`);
  }
  return stones.length - size();
};
