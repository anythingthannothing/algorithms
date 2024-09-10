#include <bits/stdc++.h>

using namespace std;

#define y1 cc

typedef long long ll;

int n, k, l, y, x, t, ret, idx, dir = 1;
int a[104][104], visited[104][104], cnt;
char c;

deque<pair<int, int>> dq;
vector<pair<int, int>> _time;

const int dy[] = {-1, 0, 1, 0};
const int dx[] = {0, 1, 0, -1};

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
    cin >> n >> k;

    for (int i = 0; i < k; i++)
    {
        cin >> y >> x;
        a[--y][--x] = 1;
    }

    cin >> l;

    for (int i = 0; i < l; i++)
    {
        cin >> t >> c;
        if (c == 'D')
        {
            _time.push_back({t, 1});
        }
        else
        {
            _time.push_back({t, 3});
        }
    }

    dq.push_back({0, 0});

    while (dq.size())
    {
        cnt++;
        tie(y, x) = dq.front();

        int ny = y + dy[dir];
        int nx = x + dx[dir];

        if (ny >= n || ny < 0 || nx >= n || nx < 0 || visited[ny][nx])
        {
            break;
        }

        if (!a[ny][nx])
        {
            visited[dq.back().first][dq.back().second] = 0;
            dq.pop_back();
        }
        else
        {
            a[ny][nx] = 0;
        }

        visited[ny][nx] = 1;
        dq.push_front({ny, nx});
        if (cnt == _time[idx].first)
        {
            dir = (dir + _time[idx].second) % 4;
            idx++;
        }
    }
    cout << cnt << "\n";
    return 0;
}