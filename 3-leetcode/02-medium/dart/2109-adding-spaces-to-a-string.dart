class Solution {
  String addSpaces(String s, List<int> spaces) {
    StringBuffer result = StringBuffer();

    int spaceIndex = 0;

    for (int stringIndex = 0; stringIndex < s.length; stringIndex++) {
      if (spaceIndex < spaces.length && stringIndex == spaces[spaceIndex]) {
        result.write(' ');
        spaceIndex++;
      }

      result.write(s[stringIndex]);
    }

    return result.toString();
  }
}
