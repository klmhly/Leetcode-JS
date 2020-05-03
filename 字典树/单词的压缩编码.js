/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    words.sort((a,b)=>{
        return b.length - a.length
    })

    let sum = 0
    let root = new Trie()
    for(let i=0; i<words.length; i++){
        if(!root.startsWith(words[i])){
            root.insert(words[i])
            sum += 1 + words[i].length
        }

    }
    return sum
};

var TrieNode = function() {
    this.next = {};
    this.isEnd = false;
};

class Trie {
    constructor () {
        this.root = new TrieNode();
    }

    insert (word) {
        if (!word) return false;

        let node = this.root;
        for (let i = word.length-1; i >=0; i--) {
            if (!node.next[word[i]]) {
                node.next[word[i]] = new TrieNode();
            }
            node = node.next[word[i]];
        }
        node.isEnd = true;
        return true;
    }

    startsWith (prefix) {
        if (!prefix) return true;

        let node = this.root;
        for (let i = prefix.length-1; i>=0; i--) {
            if (node.next[prefix[i]]) {
                node = node.next[prefix[i]];
            } else {
                return false;
            }
        }
        return true
    }
}










