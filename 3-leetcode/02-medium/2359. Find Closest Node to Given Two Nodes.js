const closestMeetingNode = (edges, node1, node2) => {
  let answer = [];
  let len = edges.length;
  let graph = Array.from({ length: len }, (v) => []);
  for (let i = 0; i < len; i++) {
    if (edges[i] != -1) graph[i].push(edges[i]);
  }
  let dis1 = BFS(graph, node1),
    dis2 = BFS(graph, node2);
  for (let i = 0; i < len; i++) {
    if ((dis1[i] !== Infinity) & (dis2[i] !== Infinity)) {
      answer.push([Math.max(dis1[i], dis2[i]), i]);
    }
  }
  answer.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  return answer.length === 0 ? -1 : answer[0][1];
};

const BFS = (graph, node) => {
  let len = graph.length,
    distances = Array(len).fill(Infinity),
    q = [node];
  distances[node] = 0;
  while (q.length) {
    let curr = q.shift();
    for (const child of graph[curr]) {
      if (distances[child] > distances[curr] + 1) {
        distances[child] = distances[curr] + 1;
        q.push(child);
      }
    }
  }
  return distances;
};
