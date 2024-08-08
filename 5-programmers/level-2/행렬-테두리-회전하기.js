function solution(rows, columns, queries) {
    let answer = [];
    let board = Array.from({length: rows * columns}, (v, i) => i + 1);

    function rotateMatrix(startRow, startColumn, endRow, endColumn, array) {
        let min = Infinity;
        let startr = startRow,
            startc = startColumn;
            
        let currentIndex = ((startRow - 1) * columns) + startColumn - 1;
        let nextIndex = currentIndex + 1;
        let current = board[currentIndex],
            next = board[nextIndex];
        while (startColumn !== endColumn) {
            min = Math.min(min, current);
            board[nextIndex] = current;
            current = next;
            currentIndex++;
            startColumn++;
            nextIndex++;
            next = board[nextIndex];
        }
        nextIndex += (columns - 1);
        next = board[nextIndex];
        while (startRow !== endRow) {
            min = Math.min(min, current);
            board[nextIndex] = current;
            current = next;
            currentIndex += columns;
            startRow++;
            nextIndex += columns;
            next = board[nextIndex];
        };
        nextIndex -= (columns + 1);
        next = board[nextIndex];
        while (startColumn !== startc) {
            min = Math.min(min, current);
            board[nextIndex] = current;
            current = next;
            currentIndex--;
            startColumn--;
            nextIndex--;
            next = board[nextIndex];
        };
        nextIndex -= (columns - 1);
        next = board[nextIndex];
        while (startRow !== startr) {
            min = Math.min(min, current);
            board[nextIndex] = current;
            current = next;
            currentIndex -= columns;
            startRow--;
            nextIndex -= columns;
            next = board[nextIndex];
        }
        answer.push(min);
    }
    
    while (queries.length) {
        let temp = queries.shift();
        let startRow = temp[0],
            startColumn = temp[1],
            endRow = temp[2],
            endColumn = temp[3];
        rotateMatrix(startRow, startColumn, endRow, endColumn, board);
    }
    return answer;
}