#include<bits/stdc++.h>
using namespace std;
string findOrder(vector<string> &dict) {
    vector<int> validc(26,0);
    vector<int> indegree(26,0);
    vector<vector<int>> adj(26);
    for (auto &word : dict) {
        for (char c : word) {
            validc[c - 'a'] = 1;
        }
    }

    for(int i=0;i<dict.size()-1;i++){
        string curr = dict[i];
        string next = dict[i+1];
        bool diffFound = false;
        for(int idx1=0,idx2=0;idx1<dict[i].size() and idx2<dict[i+1].size();idx1++,idx2++){
            int u = dict[i][idx1] - 'a';
            int v = dict[i+1][idx2] - 'a';
            validc[u]=1;
            validc[v]=1;
            if(dict[i][idx1]==dict[i+1][idx2]){
                continue;
            }
            else{
                adj[u].push_back(v);
                indegree[v]++;
                diffFound = true;
                break;
            }
        }
        if(!diffFound && curr.size() > next.size()){
            return "";
        }

    }
    queue<int> q;
    for(int i=0;i<26;i++){
        if(indegree[i]==0 and validc[i]==1){
            q.push(i);
        }
    }
    vector<int> ans;
    while(!q.empty()){
        int node = q.front();
        ans.push_back(node);
        q.pop();
        for(auto neigh : adj[node]){
            indegree[neigh]--;
            if(indegree[neigh]==0){
                q.push(neigh);
            }
        }
    }
    string ns ="";
    for(auto i : ans){
        char c = 'a'+i;
        ns.push_back(c);
    }
    int cnt = 0;
    for(int i=0;i<26;i++){
        if(validc[i]) cnt++;
    }
    if(ans.size() != cnt) return "";
    return ns;
    
}
int main(){
    int n;
    cin>>n;
    vector<string> arr(n);
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    findOrder(arr);  
}