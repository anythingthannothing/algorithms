#include <bits/stdc++.h>

using namespace std;

int n, k, ret;
string v[1000];

void rot(int pos, int dir)
{
  if (!dir)
    rotate(v[pos].begin(), v[pos].begin() + 1, v[pos].end());
  else
    rotate(v[pos].begin(), v[pos].begin() + v[pos].size() - 1, v[pos].end());
}

int findL(int pos)
{
  for (int i = pos; i >= 1; i--)
    if (v[i][6] == v[i - 1][2])
      return i;
  return 0;
}

int findR(int pos)
{
  for (int i = pos; i <= n - 2; i++)
    if (v[i][2] == v[i + 1][6])
      return i;
  return n - 1;
}

int main()
{
  cin >> n;

  for (int i = 0; i < n; i++)
  {
    cin >> v[i];
  }

  cin >> k;

  for (int i = 0; i < k; i++)
  {
    int num, dir;
    cin >> num >> dir;
    num--;
    dir = (dir == -1 ? 0 : 1);
    int l = findL(num);
    int r = findR(num);
    int cnt = 0;
    for (int pos = num; pos >= l; pos--)
    {
      rot(pos, cnt % 2 == 0 ? dir : !dir);
      cnt++;
    }
    cnt = 1;
    for (int pos = num + 1; pos <= r; pos++)
    {
      rot(pos, cnt % 2 == 0 ? dir : !dir);
      cnt++;
    }
  }

  for (int i = 0; i < n; i++)
  {
    if (v[i][0] == '1')
      ret++;
  }
  cout << ret;

  return 0;
}