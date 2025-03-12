/**
 * Implementation of Depth-First Search (DFS) Using Recursion.
 *
 * @example:
 *  graph.addEdge(0, 1);
 *  graph.addEdge(0, 2);
 *  graph.addEdge(0, 3);
 *  graph.addEdge(1, 3);
 *  graph.addEdge(1, 4);
 *
 *  graph.dfs(0);
 */
class Graph {

    /**
     * Adjacent list to represent the graph
     */
    private adjacentList: { [key: number]: number[] } = {};

    /**
     *  Adds an edge between two nodes in the graph.
     */
    public addEdge(nodeA: number, nodeB: number): void {
        //-->Check: if nodeA is not in the adjacent list, initialize an empty array for it.
        if (!this.adjacentList[nodeA]) {
            this.adjacentList[nodeA] = []
        }

        //-->Check: if nodeB is not in the adjacent list, initialize an empty array for it.
        if (!this.adjacentList[nodeB]) {
            this.adjacentList[nodeB] = [];
        }

        // -->Add: nodeB as a neighbor of nodeA.
        this.adjacentList[nodeA].push(nodeB);
        // -->Add: nodeA as a neighbor of nodeB.
        this.adjacentList[nodeB].push(nodeA);
    }


    /**
     *  Starts a Depth-First Search (DFS) traversal from a provided node.
     */
    public dfs(start: number): void{

        //-->Initialize: an object to keep track of visited nodes.
        const visited: { [key: number]: boolean } = {};
        console.log("Adjacency List: ", this.adjacentList);

        //-->Call: recursive DFS method starting from the start node.
        this.dfsRecursive(start, visited);
    }

    /**
     *  Recursively performs DFS on the graph starting from a provided node.
     */
    public dfsRecursive(node: number, visited: { [key: number]: boolean }): void {

        visited[node] = true;

        //-->Loop: through the neighbors of the current node.
        for (const neighbor of this.adjacentList[node] || []) {
            //-->Check: if the neighbor hasn't been visited yet, perform the DFS recursively.
            if (!visited[neighbor]) {
                this.dfsRecursive(neighbor, visited);
            }
        }
    }
}

const graph = new Graph();

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(1, 12);

graph.dfs(0);
