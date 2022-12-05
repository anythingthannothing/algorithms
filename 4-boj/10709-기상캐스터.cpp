#include <bits/stdc++.h>

using namespace std;

int r, c, arr[100][100];
char ch;

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> r >> c;

  for (int i = 0; i < r; i++)
    for (int j = 0; j < c; j++)
    {
      cin >> ch;
      arr[i][j] = ch == 'c' ? 0 : -1;
    }

  for (int i = 0; i < r; i++)
    for (int j = 0; j < c; j++)
    {
      if (arr[i][j] == 0)
      {
        int t = 1;
        while (j + 1 < c && arr[i][j + 1] == -1)
          arr[i][++j] = t++;
      }
    }

  for (int i = 0; i < r; i++)
  {
    for (int j = 0; j < c; j++)
    {
      cout << arr[i][j] << ' ';
    }
    cout << "\n";
  }
  return 0;
}