class MyCalendarThree {
  constructor() {
    this.map = {};
  }

  book(start, end) {
    if (!this.map[start]) this.map[start] = 0;
    this.map[start]++;
    if (!this.map[end]) this.map[end] = 0;
    this.map[end]--;
    let answer = 0;
    let curr = 0;
    for (let key in this.map) {
      curr += this.map[key];
      answer = Math.max(answer, curr);
    }
    return answer;
  }
}
