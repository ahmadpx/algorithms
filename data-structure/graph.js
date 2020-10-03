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
}
