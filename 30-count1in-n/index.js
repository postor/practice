/*
30.�ڴ�1��n��������1���ֵĴ���
��Ŀ������һ������n�����1��n��n��������ʮ���Ʊ�ʾ��1���ֵĴ�����

��������12����1��12��Щ�����а���1 ��������1��10��11��12��1һ��������5�Ρ�
����������һ����Ϊ������google�����⡣
*/

for(var i=5;i<15;i++){
  console.log(i,count1in(i));  
}

console.log(101,count1in(101));  

function count1in(n){
  sum=0;
  for(var i=1;i<=n;i++){
    sum+=check1(i);
  }
  return sum;
  
  function check1(x){
    var i = 10,count=0;
    while(x>0){
      var m = x%i;
      if(m===1) count++;
      x=(x-m)/10;
    }
    return count;
  }
}