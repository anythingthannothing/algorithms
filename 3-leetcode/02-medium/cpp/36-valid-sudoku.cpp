#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  bool isValidSudoku(vector<vector<char>> &board)
  {
    int row[9][9] = {0};
    int col[9][9] = {0};
    int block[9][9] = {0};
    for (int r = 0; r < 9; r++)
    {
      for (int c = 0; c < 9; c++)
        if (board[r][c] != '.')
        {
          int curr = board[r][c] - '0' - 1;
          int b = r / 3 * 3 + c / 3;
          if (row[r][curr] || col[c][curr] || block[b][curr])
            return false;
          row[r][curr] = col[c][curr] = block[b][curr] = 1;
        }
    }

    return true;
  };
};