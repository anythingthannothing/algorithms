class Solution {
  String makeFancyString(String s) {
    if (s.length < 3) {
      return s;
    }

    StringBuffer res = StringBuffer();
    res.write(s[0]);
    res.write(s[1]);

    for (int i = 2; i < s.length; i++) {
      if (s[i] != s[i - 1] || s[i] != s[i - 2]) {
        res.write(s[i]);
      }
    }

    return res.toString();
  }
}
