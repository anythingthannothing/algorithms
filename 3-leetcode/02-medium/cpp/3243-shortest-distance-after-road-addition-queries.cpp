#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int findMinDistance(vector<vector<int>> &adjList, int n)
    {
        vector<int> dp(n);
        dp[n - 1] = 0;

        for (int currentNode = n - 2; currentNode >= 0; currentNode--)
        {
            int minDistance = n;

            for (auto neighbor : adjList[currentNode])
            {
                minDistance = min(minDistance, dp[neighbor] + 1);
            }
            dp[currentNode] = minDistance;
        }
        return dp[0];
    }

    vector<int> shortestDistanceAfterQueries(int n,
                                             vector<vector<int>> &queries)
    {
        vector<int> answer;
        vector<vector<int>> adjList(n, vector<int>(0));

        for (int i = 0; i < n - 1; i++)
        {
            adjList[i].push_back(i + 1);
        }

        for (auto &road : queries)
        {
            int u = road[0];
            int v = road[1];
            adjList[u].push_back(v);

            answer.push_back(findMinDistance(adjList, n));
        }
        return answer;
    }
};