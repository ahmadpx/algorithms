export function dijkastra(start, end, graph) {
  const [distanceMap, previous, visited, nodes] = setupDataStructures(
    start,
    graph
  );

  while (nodes.size()) {
    const { val: vertex } = nodes.dequeue();
    visited[vertex] = true;
    graph.adjacencyList[vertex].forEach((neighbor) => {
      if (visited[neighbor.node]) return;
      const newWeight = distanceMap[vertex] + neighbor.weight;
      // update, set previous and enqueue only if the new distance is smaller from the old
      if (newWeight < distanceMap[neighbor.node]) {
        distanceMap[neighbor.node] = newWeight;
        previous[neighbor.node] = vertex;
        nodes.enqueue(neighbor.node, newWeight);
      }
    });
  }

  return getShortestPathFromParentsMap(start, end, previous);
}

/**
 * naive priority queue implementation just for the purpose of understanding the main algorithm of Dijkastra
 * @return {*}
 * @constructor
 */
function PriorityQueue() {
  let values = [];

  return {
    enqueue(vertex, priority) {
      values.push({ val: vertex, priority });
      values = values.sort((v1, v2) => v1.priority - v2.priority);
      return values;
    },
    dequeue() {
      return values.shift();
    },
    size() {
      return values.length;
    },
    values() {
      return values;
    },
    empty() {
      values = [];
    },
  };
}

/**
 * get shortest path from final parents map
 * @param {String} start
 * @param {String} end
 * @param {Object} previous
 * @return {String[]}
 */
function getShortestPathFromParentsMap(start, end, previous) {
  const shortestPath = [];
  let current = end;

  while (current !== start) {
    shortestPath.push(current);
    current = previous[current];
    if (current === start) shortestPath.push(current);
  }

  return shortestPath.reverse();
}

/**
 * setup data structures required for dijkastra's algorithm
 * @param {String} start
 * @param {Object} graph
 * @return {[Object, Object, Object, Object]}
 */
function setupDataStructures(start, graph) {
  const distance = {};
  const previous = {};
  const visited = {};
  const nodes = PriorityQueue();

  Object.keys(graph.adjacencyList).forEach((vertex) => {
    distance[vertex] = vertex === start ? 0 : Infinity;
    previous[vertex] = null;
    visited[vertex] = false;
    nodes.enqueue(vertex, vertex === start ? 0 : Infinity);
  });

  return [distance, previous, visited, nodes];
}
