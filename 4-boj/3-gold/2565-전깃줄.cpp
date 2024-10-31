#include <bits/stdc++.h>

using namespace std;

int n, a, b, len;
vector<int> lis;
vector<pair<int, int>> v;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> n;

    for (int i = 0; i < n; i++)
    {
        cin >> a >> b;
        v.push_back({a, b});
    }

    sort(v.begin(), v.end());

    for (int i = 0; i < v.size(); i++)
    {
        auto it = lower_bound(lis.begin(), lis.end(), v[i].second);

        if (it == lis.end()) // `lower_bound`가 `lis`의 끝을 가리킬 때
        {
            lis.push_back(v[i].second); // 새로운 값을 추가하여 LIS 길이 증가
        }
        else
        {
            *it = v[i].second; // 기존 위치에 값을 갱신하여 최적의 LIS 유지
        }
    }

    cout << n - lis.size() << "\n"; // 벡터 크기 자체가 LIS의 길이

    return 0;
}
