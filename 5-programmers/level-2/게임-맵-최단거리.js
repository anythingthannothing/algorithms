function solution(maps) {
    let dx = [0, 1, 0, -1],
        dy = [1, 0, -1, 0];
    let n = maps.length,
        m = maps[0].length;
    let queue = [[0, 0, 1]];


    while (queue.length) {
        let [row, column, block] = queue.shift();
        if (row === n - 1 && column === m - 1) return block;
        else {
            maps[row][column] = 0;
            for (let i = 0; i < 4; i++) {
                if (row + dy[i] >= 0 &&
                    row + dy[i] < n &&
                    column + dx[i] >= 0 &&
                    column + dx[i] < m &&
                    maps[row + dy[i]][column + dx[i]] !== 0) {
                        maps[row + dy[i]][column+dx[i]] = 0;
                        queue.push([row + dy[i], column + dx[i], block + 1]);
                }
            }
        }
    }
    return -1;
}