#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
   int calculate(string s) {
       stack<pair<int,int>> stack;
       
       long long int sum = 0;
       int sign = +1;
       
       for(int i = 0; i < s.size(); i++) {
           char ch = s[i];
           
           if(isdigit(ch)) {
               long long int num = 0;
               while(i < s.size() and isdigit(s[i])) {
                   num = (num * 10) + s[i] - '0';
                   i++;
               }
               i--; // as for loop also increase i , so if we don't decrease i here a sign will be skipped
               sum += (num * sign);
               sign = +1; // reseting sign
           } else if(ch == '(') {
               // Saving current state of (sum , sign) in stack
               stack.push(make_pair(sum , sign));
               
               // Reseting sum and sign for inner bracket calculation
               sum = 0; 
               sign = +1;
           } else if(ch == ')') {
               sum = stack.top().first + (stack.top().second * sum);
               stack.pop();
           } else if(ch == '-') {
               sign = (-1 * sign);
           }
       }
       return sum;
   }
};