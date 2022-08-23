function solution(n, edge) {
  let answer = 0;

  class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = [];
      this.adjacencyList[vertex1].push(vertex2);
      if (!this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = [];
      this.adjacencyList[vertex2].push(vertex1);
    }
    breadthFirstSearch(start) {
      let visited = {};
      let distances = {};
      let queue = [[start, 0]];

      visited[start] = true;

      while (queue.length) {
        let curr = queue.shift();
        distances[curr[0]] = curr[1];
        this.adjacencyList[curr[0]].forEach((v) => {
          if (!visited[v]) {
            visited[v] = true;
            queue.push([v, curr[1] + 1]);
          }
        });
      }
      return distances;
    }
  }

  let graph = new Graph();

  while (edge.length) {
    let curr = edge.pop();
    graph.addEdge(curr[0], curr[1]);
  }

  let dist = graph.breadthFirstSearch(1);

  let max = -Infinity;

  for (let key in dist) max = Math.max(max, dist[key]);

  for (let key in dist) if (dist[key] === max) answer++;
  return answer;
}
