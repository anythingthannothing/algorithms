class TimeMap {
  constructor() {
    this.map = new Map();
  }
  set(key, value, timestamp) {
    if (!this.map.has(key)) this.map.set(key, new Map());
    this.map.get(key).set(timestamp, value);
  }

  get(key, timestamp) {
    if (!this.map.has(key)) return "";

    for (let i = timestamp; i >= 1; i--) {
      if (this.map.get(key).has(i)) {
        return this.map.get(key).get(i);
      }
    }

    return "";
  }
}
