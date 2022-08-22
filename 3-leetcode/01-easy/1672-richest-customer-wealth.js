const maximumWealth = (accounts) => {
  let max = -Infinity;
  accounts.forEach(
    (v) =>
      (max = Math.max(
        v.reduce((acc, v) => acc + v, 0),
        max
      ))
  );
  return max;
};
