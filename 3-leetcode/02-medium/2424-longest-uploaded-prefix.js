class LUPrefix {
  constructor(n) {
    this.result = Array.from({ length: n });
    this.answer = 0;
    this.length = n;
    return null;
  }
  upload(video) {
    this.result[video - 1] = true;
    return null;
  }
  longest() {
    for (let i = this.answer; i < this.length; i++) {
      if (!this.result[i]) break;
      this.answer++;
    }
    return this.answer;
  }
}
