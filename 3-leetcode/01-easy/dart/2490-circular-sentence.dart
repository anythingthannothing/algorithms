class Solution {
  bool isCircularSentence(String sentence) {
    int len = sentence.length;

    if (sentence[0] != sentence[len - 1]) {
      return false;
    }

    for (int i = 1; i < len; i++) {
      if (sentence[i] == ' ' && sentence[i - 1] != sentence[i + 1]) {
        return false;
      }
    }

    return true;
  }
}
