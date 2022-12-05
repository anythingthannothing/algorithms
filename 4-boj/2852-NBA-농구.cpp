#include <bits/stdc++.h>
using namespace std;

#define prev previous_time

int n, team, aScore, bScore, aSum, bSum;
string s, prev;

string print(int a)
{
  string d = "0" + to_string(a / 60);
  string e = "0" + to_string(a % 60);
  return d.substr(d.size() - 2, 2) + ":" + e.substr(e.size() - 2, 2);
}

int changeToInt(string a)
{
  return atoi(a.substr(0, 2).c_str()) * 60 + atoi(a.substr(3, 2).c_str());
}

void go(int &sum, string s)
{
  sum += (changeToInt(s) - changeToInt(prev));
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> n;

  for (int i = 0; i < n; i++)
  {
    cin >> team >> s;
    if (aScore > bScore)
      go(aSum, s);
    else if (bScore > aScore)
      go(bSum, s);
    team == 1 ? aScore++ : bScore++;
    prev = s;
  }
  if (aScore > bScore)
    go(aSum, "48:00");
  else if (bScore > aScore)
    go(bSum, "48:00");
  cout << print(aSum) << "\n";
  cout << print(bSum) << "\n";

  return 0;
}