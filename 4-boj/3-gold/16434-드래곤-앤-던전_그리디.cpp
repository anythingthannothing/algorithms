#include <bits/stdc++.h>

using namespace std;

typedef long long ll;
ll n, atk, t, a, h, cur, mx, damage;

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    cin >> n >> atk;

    for (int i = 0; i < n; i++)
    {
        cin >> t >> a >> h;
        if (t == 1)
        {
            damage = a * (ceil((double)h / atk) - 1);
            if (cur < damage)
            {
                mx += damage - cur;
                cur = 0;
            }
            else
            {
                cur -= damage;
            }
        }
        else
        {
            atk += a;
            cur = min(cur + h, mx);
        }
    }

    cout << mx + 1 << "\n";

    return 0;
}