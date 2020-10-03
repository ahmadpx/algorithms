/**
 * @class Graph
 * represented using adjacency list
 */
export class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * add vertex
   * @param {String} key
   * @return {Graph}
   */
  addVertex(key) {
    if (key in this.adjacencyList) return this;

    this.adjacencyList[key] = new Set();

    return this;
  }

  /**
   * add edge
   * @param {String} vertex1
   * @param {String} vertex2
   * @return {Graph}
   */
  addEdge(vertex1, vertex2) {
    if (vertex1 in this.adjacencyList) {
      this.adjacencyList[vertex1].add(vertex2);
    }

    if (vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex2].add(vertex1);
    }

    return this;
  }

  /**
   * remove edge
   * @param {String} vertex1
   * @param {String} vertex2
   * @return {Graph}
   */
  removeEdge(vertex1, vertex2) {
    if (
      vertex1 in this.adjacencyList &&
      this.adjacencyList[vertex1].has(vertex2)
    ) {
      this.adjacencyList[vertex1].delete(vertex2);
    }

    if (
      vertex2 in this.adjacencyList &&
      this.adjacencyList[vertex2].has(vertex1)
    ) {
      this.adjacencyList[vertex2].delete(vertex1);
    }

    return this;
  }

  /**
   * remove vertex
   * @param {String} v
   * @return {Graph}
   */
  removeVertex(v) {
    if (!(v in this.adjacencyList)) return this;

    while (this.adjacencyList[v].size > 0) {
      const edges = [...this.adjacencyList[v]];
      const adjacentVertex = edges.pop();
      this.removeEdge(v, adjacentVertex);
      this.adjacencyList[v] = new Set(edges);
    }

    delete this.adjacencyList[v];

    return this;
  }

  /**
   * recursive depth first traversal
   * @param {String} vertex
   * @return {Array}
   */
  recursiveDepthFirstTraversal(vertex) {
    const visited = {};
    const result = [];

    const visit = (vertex) => {
      if (!vertex) return;
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach(visit);
      }
    };

    visit(vertex);

    return result;
  }

  /**
   * iterative depth first traversal
   * @param {String} vertex
   * @return {Array}
   */
  iterativeDepthFirstTraversal(vertex) {
    const visited = [];
    const stack = [vertex];

    while (stack.length) {
      const vertex = stack.pop();
      if (!visited.includes(vertex)) {
        visited.push(vertex);
        stack.push(...[...this.adjacencyList[vertex]].reverse());
      }
    }

    return visited;
  }

  /**
   * breadth first traversal
   * @param {String} vertex
   * @return {Array}
   */
  breadthFirstTraversal(vertex) {
    const visited = [];
    const queue = [vertex];

    while (queue.length) {
      const vertex = queue.shift();
      if (!visited.includes(vertex)) {
        visited.push(vertex);
        queue.push(...this.adjacencyList[vertex]);
      }
    }

    return visited;
  }
}
