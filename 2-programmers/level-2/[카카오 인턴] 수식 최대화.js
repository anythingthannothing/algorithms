function solution(expression) {
    let answer = 0;
    let arr = [];
    let operator = [];
    let combination = [];
    expression = expression.split("");
    // exp를 피연사자 + 연산자 배열로 나누기
    for (let i = 0; i < expression.length; i++) {
        if (!Number.isInteger(+expression[i])) {
            if (operator.indexOf(expression[i]) === -1) operator.push(expression[i]);
            arr.push(expression.splice(0, i).join(""));
            arr.push(expression.shift());
            i = 0;
        }
    }
    arr.push(expression.join(""));
    
    // 연산자의 우선순위 Case 구하기
    let check = Array.from({length: operator.length}, v => 0);
    let temp = [];
    function DFS(level) {
        if (level === operator.length) {
          if (temp.length === operator.length) combination.push(temp.slice());
        } 
        else {
            for (let i = 0; i < operator.length; i++) {
                if (check[i] === 0) {
                    temp.push(operator[i]);
                    check[i] = 1;
                    DFS(level + 1);
                    temp.pop();
                    check[i] = 0;
                }
            }
        }
    }
    DFS(0);
    
    // Helper 함수 작성하기
    function specialCalculator(arr, operator) {
        let temp;
        if (operator === "+") {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === operator) {
                    temp = (+arr[i - 1]) + (+arr[i + 1]);
                    arr.splice(i - 1, 3, temp);
                    i--;
                }
            }
        }
        if (operator === "-") {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === operator) {
                    temp = (+arr[i - 1]) - (+arr[i + 1]);
                    arr.splice(i - 1, 3, temp);
                    i--;
                }
            }
        }
        if (operator === "*") {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === operator) {
                    temp = (+arr[i - 1]) * (+arr[i + 1]);
                    arr.splice(i - 1, 3, temp);
                    i--;
                }
            }
        }
    }
    
    // 우선순위에 따라 연산하기
    let ops;
    
    while (combination.length) {
        ops = combination.shift();
        let tempArr = arr.slice()
        while (ops.length) {
            specialCalculator(tempArr, ops.shift());
        }
        answer = Math.max(answer, Math.abs(+tempArr[0]));
    }
    
    return answer;
}