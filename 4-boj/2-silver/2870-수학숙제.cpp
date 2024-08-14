#include <bits/stdc++.h>

using namespace std;

int n;
string s, temp;
vector<string> ret;

void trim()
{
  while (true)
  {
    if (temp.size() && temp.front() == '0')
      temp.erase(temp.begin());
    else
      break;
  }
  if (temp.size() == 0)
    temp = "0";
  ret.push_back(temp);
  temp = "";
}

bool cmp(string a, string b)
{
  if (a.size() == b.size())
    return a < b;
  return a.size() < b.size();
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> n;

  while (n--)
  {
    cin >> s;
    temp = "";
    for (int i = 0; i < s.size(); i++)
    {
      if (s[i] < 65)
        temp += s[i];
      else if (temp.size())
        trim();
    }
    if (temp.size())
      trim();
  }

  sort(ret.begin(), ret.end(), cmp);
  for (string s : ret)
  {
    cout << s << "\n";
  }

  return 0;
}