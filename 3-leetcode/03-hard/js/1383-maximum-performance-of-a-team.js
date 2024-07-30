var maxPerformance = function (n, speed, efficiency, k) {
  let order = Array.from({ length: n }, (_, i) => i);
  order.sort((a, b) => efficiency[b] - efficiency[a]);
  let sppq = new MinPriorityQueue();
  let result,
    totalSpeed = 0n,
    best = 0n;
  for (let eng of order) {
    sppq.enqueue(speed[eng]);
    if (sppq.size() <= k) totalSpeed += BigInt(speed[eng]);
    else totalSpeed += BigInt(speed[eng] - sppq.dequeue().element);
    result = totalSpeed * BigInt(efficiency[eng]);
    if (result > best) best = result;
  }
  return best % 1000000007n;
};
