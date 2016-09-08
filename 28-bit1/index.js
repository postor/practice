/*
28.整数的二进制表示中1的个数
题目：输入一个整数，求该整数的二进制表达中有多少个1。
例如输入10，由于其二进制表示为1010，有两个1，因此输出2。

分析：
这是一道很基本的考查位运算的面试题。
包括微软在内的很多公司都曾采用过这道题。
*/

for(var i=10;i<20;i++){
  console.log([i,getBit1Count(i)]);
}

function getBit1Count(n){
  var i=1,count=0;
  //console.log('----'+n);
  while(n>=i){
    //console.log([i,n&i]);
    if((n&i)>0)count++;
    i = i<<1;
  }  
  //console.log('----'+n);
  return count;
}