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
    printf("enter the number of pro : ",i);
      scanf("%d",&pro[i]);
     printf("enter the number of arrvl : ",i);
      scanf("%d",&arvl[i]);
      printf("enter the number of bt : ",i);
      scanf("%d",&bt[i]);

   }
   
   return 0;
}