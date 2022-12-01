#include <bits/stdc++.h>

using namespace std;

int n, m, k, pos, ret, mv;

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> n >> m >> k;
  int front = 1;
  for (int i = 0; i < k; i++)
  {
    int rear = front + m - 1;
    cin >> pos;
    if (pos >= front && pos <= rear)
      continue;
    if (pos > rear)
    {
      mv = pos - rear;
      ret += mv;
      front += mv;
    }
    if (pos < front)
    {
      mv = front - pos;
      ret += mv;
      front = pos;
    }
  }
  cout << ret;
  return 0;
}