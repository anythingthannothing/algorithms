class CustomStack {
  var limit = 0;
  final List<int> s = [];
  CustomStack(int maxSize) {
    limit = maxSize;
  }

  void push(int x) {
    if (s.length != limit) {
      s.add(x);
    }
  }

  int pop() {
    return s.isEmpty ? -1 : s.removeLast();
  }

  void increment(int k, int val) {
    int n = min(k, s.length);
    for (int i = 0; i < n; i++) {
      s[i] += val;
    }
  }
}
