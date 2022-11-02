const DNA = ['A', 'C', 'G', 'T'];

function* getNeighbors(gene) {
  let chars = gene.split('');

  for (let i = 0; i < 8; i++) {
    let old = chars[i];

    for (let d of DNA) {
      if (d !== old) {
        chars[i] = d;
        yield chars.join('');
      }
    }

    chars[i] = old;
  }
}

const minMutation = (start, end, bank) => {
  let q = [[start, 0]],
    visited = {},
    map = {};

  for (let g of bank) {
    map[g] = true;
  }

  while (q.length) {
    let [gene, steps] = q.shift();

    if (gene === end) {
      return steps;
    }

    visited[gene] = true;

    for (let neighbor of getNeighbors(gene)) {
      if (visited[neighbor] || !map[neighbor]) {
        continue;
      }
      q.push([neighbor, steps + 1]);
    }
  }

  return -1;
};
