// T.C: O(n) | S.C: O(1)
const maxProfit = (prices) => {
  let min = Infinity,
    profit = 0;
  for (let i = 0, len = prices.length; i < len; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
};
