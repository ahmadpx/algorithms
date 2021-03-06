import { WeightedGraph } from "./weighted-graph";

describe.skip("WeightedGraph", () => {
  describe("initialization", () => {
    it("should have adjacency list initialized with empty object", function () {
      const g = new WeightedGraph();
      expect(g).toBeInstanceOf(WeightedGraph);
      expect(g.adjacencyList).toEqual({});
    });
  });

  describe("addVertex", () => {
    it("should add vertex to the graph", function () {
      const g = new WeightedGraph();
      g.addVertex("a");
      expect(g.adjacencyList.a).not.toBeUndefined();
    });

    it("should initialize a vertex with an empty set", function () {
      const g = new WeightedGraph();
      g.addVertex("a");
      expect(g.adjacencyList.a.size).toBe(0);
    });

    it("should ignore adding the vertex if it's already exists", function () {
      const g = new WeightedGraph();
      g.addVertex("a");
      g.addVertex("b");
      g.addEdge("a", "b", 5);
      expect(g.adjacencyList.a.size).toBe(1);
      g.addVertex("a");
      expect(g.adjacencyList.a.size).toBe(1);
    });
  });

  describe("addEdge", () => {
    it("should add edge between two vertexes", function () {
      const g = new WeightedGraph();
      g.addVertex("a");
      g.addVertex("b");
      g.addEdge("a", "b", 5);
      expect(g.adjacencyList.a.has("b")).toBe(true);
      expect(g.adjacencyList.b.has("a")).toBe(true);
      expect(g.adjacencyList.a.size).toBe(1);
      expect(g.adjacencyList.b.size).toBe(1);
    });
  });

  describe("removeVertex", () => {
    it("should remove vertex from the graph and all it's edges", function () {
      const g = new WeightedGraph();
      g.addVertex("a");
      g.addVertex("b");
      g.addEdge("a", "b");
      expect(g.adjacencyList.a).not.toBeUndefined();
      expect(g.adjacencyList.b).not.toBeUndefined();
      g.removeVertex("a");
      g.removeVertex("b");
      expect(g.adjacencyList.a).toBeUndefined();
      expect(g.adjacencyList.b).toBeUndefined();
    });
  });

  describe("removeEdge", () => {
    it("should remove edge between two vertexes", function () {
      const g = new WeightedGraph();
      g.addVertex("a");
      g.addVertex("b");
      g.addEdge("a", "b");
      expect(g.adjacencyList.a.has("b")).toBe(true);
      expect(g.adjacencyList.b.has("a")).toBe(true);
      g.removeEdge("a", "b");
      expect(g.adjacencyList.a.has("b")).toBe(false);
      expect(g.adjacencyList.b.has("a")).toBe(false);
    });
  });

  describe("recursiveDepthFirstTraversal", () => {
    it("should return visited vertexes in depth first order", function () {
      /*
    {
      "a": ["b", "c"],
      "b": ["a", "d"],
      "c": ["a", "e"],
      "d": ["b", "e", "f"],
      "e": ["c", "d", "f"],
      "f": ["d", "e"],
    }
     */
      const g = new WeightedGraph();
      g.addVertex("a");
      g.addVertex("b");
      g.addVertex("c");
      g.addVertex("d");
      g.addVertex("e");
      g.addVertex("f");

      g.addEdge("a", "b");
      g.addEdge("a", "c");

      g.addEdge("b", "a");
      g.addEdge("b", "d");

      g.addEdge("c", "a");
      g.addEdge("c", "e");

      g.addEdge("d", "b");
      g.addEdge("d", "e");
      g.addEdge("d", "f");

      g.addEdge("e", "c");
      g.addEdge("e", "d");
      g.addEdge("e", "f");

      g.addEdge("f", "d");
      g.addEdge("f", "e");

      expect(g.recursiveDepthFirstTraversal("a")).toEqual([
        "a",
        "b",
        "d",
        "e",
        "c",
        "f",
      ]);
    });
  });

  describe("iterativeDepthFirstTraversal", () => {
    it("should return visited vertexes in depth first order", function () {
      /*
    {
      "a": ["b", "c"],
      "b": ["a", "d"],
      "c": ["a", "e"],
      "d": ["b", "e", "f"],
      "e": ["c", "d", "f"],
      "f": ["d", "e"],
    }
     */
      const g = new WeightedGraph();
      g.addVertex("a");
      g.addVertex("b");
      g.addVertex("c");
      g.addVertex("d");
      g.addVertex("e");
      g.addVertex("f");

      g.addEdge("a", "b");
      g.addEdge("a", "c");

      g.addEdge("b", "a");
      g.addEdge("b", "d");

      g.addEdge("c", "a");
      g.addEdge("c", "e");

      g.addEdge("d", "b");
      g.addEdge("d", "e");
      g.addEdge("d", "f");

      g.addEdge("e", "c");
      g.addEdge("e", "d");
      g.addEdge("e", "f");

      g.addEdge("f", "d");
      g.addEdge("f", "e");

      expect(g.iterativeDepthFirstTraversal("a")).toEqual([
        "a",
        "b",
        "d",
        "e",
        "c",
        "f",
      ]);
    });
  });

  describe("breadthFirstTraversal", () => {
    it("should return visited vertexes in depth first order", function () {
      /*
    {
      "a": ["b", "c"],
      "b": ["a", "d"],
      "c": ["a", "e"],
      "d": ["b", "e", "f"],
      "e": ["c", "d", "f"],
      "f": ["d", "e"],
    }
     */
      const g = new WeightedGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addVertex("D");
      g.addVertex("E");
      g.addVertex("F");

      g.addEdge("A", "B", 4);
      g.addEdge("A", "C", 2);
      g.addEdge("B", "E", 3);
      g.addEdge("C", "D", 2);
      g.addEdge("C", "F", 4);
      g.addEdge("D", "E", 3);
      g.addEdge("D", "F", 1);
      g.addEdge("E", "F", 1);

      expect(g.breadthFirstTraversal("a")).toEqual([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ]);
    });
  });
});
