const minRefuelStops = function (target, startFuel, stations) {
  let len = stations.length;
  let pq = new MaxPriorityQueue();
  let answer = 0;
  for (let i = 0; i <= len; i++) {
    let dist = i === len ? target : stations[i][0];
    while (startFuel < dist) {
      if (!pq.size()) return -1;
      startFuel += pq.dequeue().element;
      answer++;
    }
    if (i < len) pq.enqueue(stations[i][1]);
  }
  return answer;
};
