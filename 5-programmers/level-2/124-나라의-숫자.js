function solution(n) {
    let answer = "";
    let number = [1, 2, 4];
    
    while (n > 0) {
        answer = number[(n - 1) % 3] + answer;
        n = Math.floor((n - 1) / 3);
    }
    
    return answer;
}