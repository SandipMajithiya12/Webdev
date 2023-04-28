#include <stdio.h>
int main(){
   int n;
   int pro[n];
   int arvl[n];
   int bt[n];
   printf("enter the number of pro");
   scanf("%d",&n);
   for(int i=0;i<n;i++)
   {
      printf("process ",i+1);
      scanf("%d",&pro[i]);
      printf("enter arival time");
      scanf("%d",&arvl[i]);
      printf("enter bt :");
      scanf("%d",&bt[i]);

   }
    
   
   return 0;
}