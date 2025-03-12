/**
 * Implementation of Depth-First Search (DFS) Using Recursion example.
 */
class Graph {

    //-->Declaring: an adjacent list to represent the graph.
    private adjacentList: Map<number, number[]> = new Map();

    //-->Add: edges between the two nodes
    public addEdge(nodeA: number, nodeB: number) {

        //-->Check: if nodeA is not in the adjacent list, initialize an empty array for it.
        if (!this.adjacentList.has(nodeA)) {
            this.adjacentList.set(nodeA, []);
        }

        //-->Check: if nodeB is not in the adjacent list, initialize an empty array for it.
        if (!this.adjacentList.has(nodeB)) {
            this.adjacentList.set(nodeB, []);
        }

        // -->Add: nodeB as a neighbor of nodeA.
        this.adjacentList.get(nodeA)!.push(nodeB);
        // -->Add: nodeA as a neighbor of nodeB.
        this.adjacentList.get(nodeB)!.push(nodeA);
    }


    //-->DFS: starting at a provided node
    public dfs(start: number) {

        //-->Initialize: a set to keep track of visited nodes.
        const visited: Set<number> = new Set();

        //-->Call: recursive DFS method starting from the start node.
        this.dfsRecursive(start, visited);
    }

    //-->Recursive: Performs the DFS recursively
    public dfsRecursive(node: number, visited: Set<number>) {

        visited.add(node);
        console.log({ node });
        console.log({ visited });

        //-->Loop: through the neighbors of the current node.
        for (const neighbor of this.adjacentList.get(node) || []) {
            //-->Check: if the neighbor hasn't been visited yet, perform the DFS recursively.
            if (!visited.has(neighbor)) {
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

graph.dfs(0);
