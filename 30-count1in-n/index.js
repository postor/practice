/*
30.在从1到n的正数中1出现的次数
题目：输入一个整数n，求从1到n这n个整数的十进制表示中1出现的次数。

例如输入12，从1到12这些整数中包含1 的数字有1，10，11和12，1一共出现了5次。
分析：这是一道广为流传的google面试题。
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