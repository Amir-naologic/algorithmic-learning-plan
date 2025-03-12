/**
 * Implementation of Breadth-First Search (BFS) Using Queue.
 *
 * @example:
 *  graph.addEdge(0, 1);
 *  graph.addEdge(0, 2);
 *  graph.addEdge(0, 3);
 *  graph.addEdge(1, 3);
 *  graph.addEdge(1, 4);
 *
 *  graph.bfs(0);
 */
class BfsGraph {
    /**
     * Adjacent list to represent the graph
     */
    private adjacentList: { [key: number]: number[] } = {};

    /**
     * Adds an edge between two nodes in the graph.
     */
    public addEdge(nodeA: number, nodeB: number): void {
        //-->Check: if nodeA is not in the adjacent list, initialize an empty array for it.
        if (!this.adjacentList[nodeA]) {
            this.adjacentList[nodeA] = [];
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
     * Starts a Breadth-First Search (BFS) traversal from a provided node.
     */
    public bfs(start: number): void {
        //-->Initialize: a queue to keep track of nodes to visit.
        const bfsQueue: number[] = [start];

        //-->Initialize: an object to keep track of visited nodes.
        const visited: { [key: number]: boolean } = { [start]: true };

        //-->Loop: while there are nodes left to visit in the queue.
        while (bfsQueue.length > 0) {
            //-->Dequeue: the front node from the queue.
            const currentNode = bfsQueue.shift();

            if (currentNode !== undefined) {
                console.log("Visited Node (BFS):", currentNode);

                //-->Loop: through the neighbors of the current node.
                for (const neighbor of this.adjacentList[currentNode] || []) {
                    //-->Check: if the neighbor hasn't been visited yet.
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;

                        //-->Enqueue: the neighbor for future exploration.
                        bfsQueue.push(neighbor);
                    }
                }
            }
        }
    }
}

const bfsGraph = new BfsGraph();

bfsGraph.addEdge(0, 1);
bfsGraph.addEdge(0, 2);
bfsGraph.addEdge(0, 3);
bfsGraph.addEdge(1, 3);
bfsGraph.addEdge(1, 4);
bfsGraph.addEdge(1, 12);

bfsGraph.bfs(0);
