/**
 * Represents a node in the A* search algorithm.
 */
class AstarNode {
    /**
     * Initializes a new node with a name, cost, heuristic estimate, and parent.
     */
    constructor(
        public name: string,
        public cost: number = 0,
        public estimateHeuristics: number = 0,
        public parent: AstarNode | null = null
    ) {}

    /**
     * Calculates the total cost of the node.
     */
    get fullCost() {
        return this.cost + this.estimateHeuristics;
    }
}

/**
 * Represents the graph in the A* search algorithm
 */
class AstarSearchGraph {
    /**
     * List representation of the nodes in the graph
     */
    private nodes: { [key: string]: AstarNode } = {};

    /**
     * List representation of the edges in the graph
     */
    private edges: { [key: string]: string[] } = {};

    /**
     * Adds a new node to the graph.
     */
    addNode(name: string) {
        this.nodes[name] = new AstarNode(name);
        this.edges[name] = [];
    }

    /**
     * Adds an edge between two nodes in the graph.
     */
    addEdge(start: string, end: string) {
        this.edges[start].push(end);
    }

    /**
     * Estimates straight-line from a node to goal node
     */
    heuristic(node: AstarNode, endNode: AstarNode): number {
        return Math.abs(parseInt(node.name) - parseInt(endNode.name));
    }

    /**
     * Finds the shortest path from the start node to the end node.
     */
    aStar(startNodeName: string, endNodeName: string): string[] {
        // -->Initialize: Open set (nodes to explore),
        // closed set (explored nodes as an array), and start/end nodes.
        const openSet: AstarNode[] = [];
        const closedSet: string[] = [];
        const startNode = this.nodes[startNodeName];
        const endNode = this.nodes[endNodeName];
        openSet.push(startNode);

        // -->Iterate: until all possibilities are explored or the goal is found.
        while (openSet.length > 0) {
            // -->Find: node with the lowest total cost.
            openSet.sort((a, b) => a.fullCost - b.fullCost);
            const currentNode = openSet.shift()!;

            // -->Check: If the current node is the goal.
            if (currentNode === endNode) {
                const path: string[] = [];
                let temp: AstarNode | null = currentNode;
                // -->Reconstruct: the path by backtracking from the goal node to the start node.
                while (temp) {
                    path.unshift(temp.name);
                    temp = temp.parent;
                }
                return path;
            }

            closedSet.push(currentNode.name);

            // -->Iterate: through all neighbors of the current node
            for (const neighborName of this.edges[currentNode.name]) {
                if (closedSet.includes(neighborName))
                    continue;

                // -->Calculate: cost to reach the neighbor
                const neighbor = this.nodes[neighborName];
                const tentativeG = currentNode.cost + 1;

                // -->If: a better path is found, update the neighbor's details
                if (!openSet.includes(neighbor)) {
                    openSet.push(neighbor);
                } else if (tentativeG >= neighbor.cost) {
                    continue;
                }

                // -->Set: the neighbor with new cost, heuristic, and parent
                neighbor.cost = tentativeG;
                neighbor.estimateHeuristics = this.heuristic(neighbor, endNode);
                neighbor.parent = currentNode;
            }
        }

        return [];
    }
}

const aStarSearchGraph = new AstarSearchGraph();
aStarSearchGraph.addNode("1");
aStarSearchGraph.addNode("2");
aStarSearchGraph.addNode("3");
aStarSearchGraph.addNode("4");
aStarSearchGraph.addNode("5");
aStarSearchGraph.addEdge("1", "5");
aStarSearchGraph.addEdge("2", "3");
aStarSearchGraph.addEdge("3", "4");
aStarSearchGraph.addEdge("4", "5");

const shortestPath = aStarSearchGraph.aStar("1", "5");
console.log(shortestPath);
