#include <bits/stdc++.h>

using namespace std;

int n, a[11], pl, mi, mul, divi;
int ret = -1000000000;
int ret2 = 1000000000;

void go(int index, int curr, int plus, int minus, int mul, int div)
{
  if (index == n - 1)
  {
    ret = max(ret, curr);
    ret2 = min(ret2, curr);
    return;
  }
  if (plus)
    go(index + 1, curr + a[index + 1], plus - 1, minus, mul, div);
  if (minus)
    go(index + 1, curr - a[index + 1], plus, minus - 1, mul, div);
  if (mul)
    go(index + 1, curr * a[index + 1], plus, minus, mul - 1, div);
  if (div)
    go(index + 1, curr / a[index + 1], plus, minus, mul, div - 1);
  return;
}

int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
  {
    cin >> a[i];
  }
  cin >> pl >> mi >> mul >> divi;
  go(0, a[0], pl, mi, mul, divi);
  cout << ret << '\n'
       << ret2;
  return 0;
}