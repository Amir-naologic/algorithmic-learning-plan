/**
 * Implementation of Cycle Detection in a directed or undirected Graphs
 * using (DFS) and Recursion.
 *
 * @example:
 *  const cycleDetectionGraph = new CycleDetectionGraph(true);
 *  cycleDetectionGraph.addEdge(0, 1);
 *  cycleDetectionGraph.addEdge(1, 2);
 *  cycleDetectionGraph.addEdge(2, 0);
 *  cycleDetectionGraph.hasCycle();
 */
class CycleDetectionGraph {
    /**
     * Adjacency list to represent the graph.
     */
    private adjacentList: { [key: number]: number[] } = {};

    /**
     * Indicates whether the graph is directed or undirected.
     */
    private directed: boolean;

    /**
     * Initializes direction boolean flag.
     **/
    constructor(directed: boolean = false) {
        this.directed = directed;
    }

    /**
     * Adds an edge between two nodes in the graph.
     */
    public addEdge(nodeA: number, nodeB: number): void {
        if (!this.adjacentList[nodeA]) {
            this.adjacentList[nodeA] = [];
        }

        if (!this.adjacentList[nodeB]) {
            this.adjacentList[nodeB] = [];
        }

        // -->Add: nodeB as a neighbor of nodeA.
        this.adjacentList[nodeA].push(nodeB);

        // -->Add: nodeA as a neighbor of nodeB if the graph is undirected.
        if (!this.directed) {
            this.adjacentList[nodeB].push(nodeA);
        }
    }

    /**
     * Detects if there is a cycle in the graph.
     **/
    public hasCycle(): boolean {
        // --> Initialize: Objects to track of visited nodes and nodes in the current recursion stack.
        const visited: { [key: number]: boolean } = {};
        const recursionStack: { [key: number]: boolean } = {};

        // --> Iterate: Through each node in the adjacency list.
        for (const node in this.adjacentList) {
            // -->Check: If a node hasn't been visited, perform a DFS from that node.
            if (!visited[node]) {
                // -->Convert: node from string to number and check for cycles.
                if (this.dfsRecursive(Number(node), visited, recursionStack, -1)) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Recursive helper function to perform DFS and detect cycles.
     *
     */
    private dfsRecursive(node: number, visited: { [key: number]: boolean }, recursionStack: { [key: number]: boolean }, parent: number): boolean {
        if (recursionStack[node]) {
            return true;
        }

        if (visited[node]) {
            return false;
        }

        //-->Mark: The node as visited and add it to the recursion stack.
        visited[node] = true;
        recursionStack[node] = true;

        // -->Explore: All neighbors of the current node.
        for (const neighbor of this.adjacentList[node] || []) {
            // -->Skip: In undirected graphs, do not revisit the parent node.
            if (!this.directed && neighbor === parent) {
                continue;
            }

            // -->Recurse: Perform DFS on the neighbor. If a cycle is found, return true.
            if (this.dfsRecursive(neighbor, visited, recursionStack, node)) {
                return true;
            }
        }

        // -->Backtrack: Remove the node from the recursion stack.
        recursionStack[node] = false;
        return false;
    }
}

const cycleDetectionUndirectedGraph = new CycleDetectionGraph(false);
cycleDetectionUndirectedGraph.addEdge(0, 1);
cycleDetectionUndirectedGraph.addEdge(0, 2);
cycleDetectionUndirectedGraph.addEdge(0, 3);
cycleDetectionUndirectedGraph.addEdge(1, 3);
cycleDetectionUndirectedGraph.addEdge(1, 4);
cycleDetectionUndirectedGraph.addEdge(1, 12);
console.log(cycleDetectionUndirectedGraph.hasCycle());

const cycleDetectionDirectedGraph = new CycleDetectionGraph(true);

cycleDetectionDirectedGraph.addEdge(0, 1);
cycleDetectionDirectedGraph.addEdge(1, 2);
cycleDetectionDirectedGraph.addEdge(2, 3);
cycleDetectionDirectedGraph.addEdge(3, 1);

console.log(cycleDetectionDirectedGraph.hasCycle());
