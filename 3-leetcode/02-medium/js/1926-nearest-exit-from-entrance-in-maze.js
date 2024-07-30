const nearestExit = function (maze, entrance) {
  let n = maze.length,
    m = maze[0].length;
  let steps = -1;
  let dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let queue = [entrance];
  maze[entrance[0]][entrance[1]] = '+';

  while (queue.length) {
    steps++;
    let temp = queue.slice();
    queue = [];
    while (temp.length) {
      let [x, y] = temp.shift();
      if (steps && (x === 0 || x === n - 1 || y === 0 || y === m - 1))
        return steps;
      for (const [nx, ny] of dir) {
        let nextX = x + nx,
          nextY = y + ny;
        if (
          nextX >= 0 &&
          nextX < n &&
          nextY >= 0 &&
          nextY < m &&
          maze[nextX][nextY] !== '+'
        ) {
          maze[nextX][nextY] = '+';
          queue.push([nextX, nextY]);
        }
      }
    }
  }
  return -1;
};
