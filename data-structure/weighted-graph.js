/**
 * @class WeightedGraph
 * represented using adjacency list
 */
export class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * add vertex
   * @param {String} key
   * @return {WeightedGraph}
   */
  addVertex(key) {
    if (key in this.adjacencyList) return this;

    this.adjacencyList[key] = [];

    return this;
  }

  /**
   * add edge
   * @param {String} vertex1
   * @param {String} vertex2
   * @param {Number} weight
   * @return {WeightedGraph}
   */
  addEdge(vertex1, vertex2, weight) {
    if (vertex1 in this.adjacencyList) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
    }

    if (vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    return this;
  }

  /**
   * remove edge
   * @param {String} vertex1
   * @param {String} vertex2
   * @return {WeightedGraph}
   */
  removeEdge(vertex1, vertex2) {
    if (
      vertex1 in this.adjacencyList &&
      this.adjacencyList[vertex1].find(({ node }) => node === vertex2)
    ) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        ({ node }) => node !== vertex2
      );
    }

    if (
      vertex2 in this.adjacencyList &&
      this.adjacencyList[vertex2].find(({ node }) => node === vertex1)
    ) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        ({ node }) => node !== vertex1
      );
    }

    return this;
  }

  /**
   * remove vertex
   * @param {String} v
   * @return {WeightedGraph}
   */
  removeVertex(v) {
    if (!(v in this.adjacencyList)) return this;

    while (this.adjacencyList[v].length > 0) {
      this.removeEdge(v, this.adjacencyList[v].pop());
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
        stack.concat(this.adjacencyList[vertex].reverse());
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

    console.log("list", this.adjacencyList[vertex]);

    while (queue.length) {
      const vertex = queue.shift();
      if (!visited.includes(vertex)) {
        visited.push(vertex);
        queue.concat(
          this.adjacencyList[vertex]
            .sort((v1, v2) => v1.weight - v2.weight)
            .map((v) => v.node)
        );
      }
    }

    return visited;
  }
}
