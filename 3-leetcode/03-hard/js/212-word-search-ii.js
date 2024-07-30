class Trie {
  constructor(words) {
    this.data = {};
    for (let word of words) {
      let current = this.data;
      for (let c of word) {
        if (!current[c]) current[c] = { count: 0 };
        current = current[c];
        current.count++;
      }
      current.complete = word;
    }
  }

  remove(word) {
    let current = this.data;
    for (let c of word) {
      if (current[c].count === 1) {
        let tmp = current;
        current = current[c];
        tmp[c] = null;
      } else {
        current[c].count--;
        current = current[c];
      }
    }
    current.complete = null;
  }
}

const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const findWords = (board, words) => {
  // build Trie
  const trie = new Trie(words);
  // Need to track visited locations
  const visited = Array.from({ length: board.length }, () =>
    Array.from({ length: board[0].length }, () => false),
  );
  const result = [];

  const dfs = (i, j, trieNode) => {
    if (visited[i][j]) return 0;
    const c = board[i][j];
    if (!trieNode[c]) return 0;
    const nextTrie = trieNode[c];

    if (nextTrie.complete) {
      result.push(nextTrie.complete);
      trie.remove(nextTrie.complete);
    }

    visited[i][j] = true;
    for (let direction of DIRECTIONS) {
      const nextI = i + direction[0];
      const nextJ = j + direction[1];
      if (
        nextI > -1 &&
        nextI < board.length &&
        nextJ > -1 &&
        nextJ < board[0].length
      ) {
        dfs(nextI, nextJ, nextTrie);
      }
    }
    visited[i][j] = false;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, trie.data);
    }
  }

  return result;
};
