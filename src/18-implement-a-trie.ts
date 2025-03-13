/**
 * Represents a single node in the Trie data structure.
 */
class TrieNode {
    /**
     * A dictionary of child nodes.
     */
    children: { [key: string]: TrieNode } = {};

    /**
     * Marks the end of a word.
     */
    endOfWord: boolean = false;
}

/**
 * Represents a prefix tree used for efficient string operations like insert, search, and delete.
 */
class Trie {
    /**
     * Init the root node of the Trie.
     */
    root: TrieNode = new TrieNode();

    /**
     * Inserts a word into the Trie.
     */
    insert(word: string): void {
        //-->Initialize: root of the Trie.
        let current: TrieNode = this.root;

        //-->Loop: through each character in the word.
        for (let i: number = 0; i < word.length; i++) {
            //-->Check: if the current node doesn't have a child node for the current character.
            if (!current.children[word[i]]) {
                //-->Create: new TrieNode.
                current.children[word[i]] = new TrieNode();
            }

            //-->Move: to the next child node corresponding to the current character.
            current = current.children[word[i]];
        }

        current.endOfWord = true;
    }

    /**
     * Searches for a word in the Trie.
     */
    search(word: string): boolean {
        //-->Initialize: root of the Trie.
        let current: TrieNode = this.root;

        //-->Loop: through each character in the word.
        for (let i: number = 0; i < word.length; i++) {
            //-->Check: if the current node doesn't have a child node for the current character.
            if (!current.children[word[i]]) {
                return false;
            }

            //-->Move: to the next child node corresponding to the current character.
            current = current.children[word[i]];
        }

        return current.endOfWord;
    }

    /**
     * Deletes a word from the Trie.
     */
    delete(word: string): void {
        this.deleteHelper(this.root, word, 0);
    }

    /**
     * Helper function to recursively delete the word from the Trie.
     */
    private deleteHelper(node: TrieNode, word: string, index: number): boolean {
        if (index === word.length) {
            //-->Check: if the word is not present at the end of the current node.
            if (!node.endOfWord) {
                return false;
            }

            node.endOfWord = false;

            //-->Check: if the current node has no children, indicating it can be deleted.
            return Object.keys(node.children).length === 0;
        }

        //-->Get: the current character to process from the word.
        const char: string = word[index];

        //-->Get: the child node corresponding to the current character.
        const childNode = node.children[char];

        if (!childNode) {
            return false;
        }

        //-->Recursively: call deleteHelper for the child node and next character in the word.
        const shouldDeleteChildNode = this.deleteHelper(childNode, word, index + 1);

        if (shouldDeleteChildNode) {
            delete node.children[char];

            //-->Return: true if the current node has no other children and is not the end of a word.
            return Object.keys(node.children).length === 0 && !node.endOfWord;
        }

        return false;
    }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));

trie.delete("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
