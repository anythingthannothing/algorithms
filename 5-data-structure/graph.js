class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    this.adjacencyList[vertex1].push(vertex2);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjacencyVertex = this.adjacencyList[vertex].pop();
      this.adjacencyList.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    function DFS(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          DFS(v);
        }
      });
    }
    DFS(start);
    return result;
  }
  depthFristIterative(start) {
    let result = [];
    let visited = {};
    let stack = [start];
    let adjacencyList = this.adjacencyList;

    visited[start] = true;

    while (stack.length) {
      let curr = stack.pop();
      result.push(curr);
      adjacencyList[curr].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      });
    }
    return result;
  }
  breadthFirstSearch(start) {
    let result = [];
    let visited = {};
    let queue = [start];
    let adjacencyList = this.adjacencyList;

    visited[start] = true;

    while (queue.length) {
      let curr = queue.shift();
      result.push(curr);
      adjacencyList[curr].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    return result;
  }
}
