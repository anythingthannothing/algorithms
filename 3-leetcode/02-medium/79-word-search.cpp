#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  bool exist(vector<vector<char>> &board, string word)
  {
    int r = board.size();
    int c = board[0].size();
    for (unsigned int i = 0; i < r; i++)
      for (unsigned int j = 0; j < c; j++)
        if (dfs(board, word, i, j))
          return true;
    return false;
  }

  bool dfs(vector<vector<char>> &board, string &word, int r, int c)
  {
    if (!word.size())
      return true;
    if (r < 0 || r >= board.size() || c < 0 || c >= board[0].size() || board[r][c] != word[0])
      return false;
    char curr = board[r][c];
    board[r][c] = '*';
    string s = word.substr(1);
    bool ret = dfs(board, s, r - 1, c) || dfs(board, s, r + 1, c) || dfs(board, s, r, c - 1) || dfs(board, s, r, c + 1);
    board[r][c] = curr;
    return ret;
  }
};