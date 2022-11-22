class PriorityQueue {
  constructor() {
    this.val = [];
  }
  enqueue(val, priority) {
    this.val.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.val.shift();
  }
  sort() {
    this.val.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.addVertex(vertex1);
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.addVertex(vertex2);
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstr(start, finish) {
    let nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let smallest;
    let path = [];

    for (let vertex of this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous(vertex) = null;
    }
    while (nodes.val.length) {
        smallest = nodes.dequeue().val;
        if (smallest === finish) {
            while (previous[smallest]) {
                path.push(smallest);
                smallest = previous[smallest];
            }
            break;
        }
        if (smallest || distances[smallest] !== Infinity) {
            for (let neighbor in this.adjacencyList[smallest]) {
                let nextNode = this.adjacencyList[smallest][neighbor];
                let candidate = distances[smallest] + nextNode.weight;
                if (candidate < distances[nextNode.node]) {
                    distances[nextNode.node] = candidate;
                    previous[nextNode.node] = smallest;
                    nodes.enqueue(nextNode.node, candidate);
                }
            }
        }
    }
  }
}