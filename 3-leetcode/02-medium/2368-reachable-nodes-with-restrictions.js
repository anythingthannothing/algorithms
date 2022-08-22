var reachableNodes = function (n, edges, restricted) {
  let answer = 1;
  let graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < n - 1; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  let queue = graph[0];
  let visited = {};
  visited[0] = true;
  while (queue.length) {
    let curr = queue.shift();
    if (!restricted.includes(curr) && !visited[curr]) {
      queue.push(...graph[curr]);
      visited[curr] = true;
      answer++;
    }
  }
  return answer;
};
