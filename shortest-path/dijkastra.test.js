import { dijkastra } from "./dijkastra";
import { WeightedGraph } from "../data-structure/weighted-graph";

describe.only("Dijkastra's Algorithm", () => {
  it.only("should find the shortest[fastest] path between two points", function () {
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

    expect(dijkastra("A", "E", g)).toEqual(["A", "C", "D", "F", "E"]);
  });
});
