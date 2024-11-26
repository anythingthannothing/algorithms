const findChampion = (n: number, edges: number[][]): number => {
  const inDegrees = Array.from({ length: n }, () => 0);

  for (let edge of edges) {
    inDegrees[edge[1]]++;
  }

  let champ = -1;
  let isChampExists = false;

  for (let i = 0; i < n; i++) {
    if (inDegrees[i] != 0) {
      continue;
    }
    if (isChampExists) {
      return -1;
    }
    champ = i;
    isChampExists = true;
  }

  return champ;
};
