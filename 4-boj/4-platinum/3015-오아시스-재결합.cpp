#include <bits/stdc++.h>

using namespace std;

typedef long long ll;

ll n, ret, cur;
stack<pair<ll, ll>> s;

int main()
{
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> cur;
        int cnt = 1;
        while (s.size() && s.top().first <= cur)
        {
            ret += s.top().second;

            if (s.top().first == cur)
            {
                cnt = s.top().second + 1;
            }
            else
            {
                cnt = 1;
            }

            s.pop();
        }
        if (s.size())
        {
            ret++;
        }

        s.push({cur, cnt});
    }

    cout << ret << '\n';

    return 0;
}