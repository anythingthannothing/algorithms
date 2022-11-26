const jobScheduling = (startTime, endTime, profit) => {
  let n = startTime.length;
  let profitTracker = new Array(n);
  let nodes = [];

  for (let i = 0; i < n; i++) {
    let node = new Node(startTime[i], endTime[i], profit[i]);
    nodes.push(node);
  }

  const compare = (a, b) => {
    return a.start === b.start ? a.end - b.end : a.start - b.start;
  };

  nodes.sort(compare);

  profitTracker[n - 1] = nodes[n - 1].profit;

  for (let i = n - 2; i >= 0; i--) {
    let index = binarySearch(nodes, nodes[i].end, i);
    let profit = index === -1 ? 0 : profitTracker[index];

    profitTracker[i] = Math.max(profitTracker[i + 1], profit + nodes[i].profit);
  }

  return profitTracker[0];
};

class Node {
  constructor(start, end, profit) {
    this.start = start;
    this.end = end;
    this.profit = profit;
  }
}

const binarySearch = (nodes, currEndTime, currIndex) => {
  let start = currIndex;
  let end = nodes.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nodes[mid].start >= currEndTime) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
};
