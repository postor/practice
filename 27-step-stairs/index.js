/*
27.跳台阶问题
题目：一个台阶总共有n级，如果一次可以跳1级，也可以跳2级。
求总共有多少总跳法，并分析算法的时间复杂度。

这道题最近经常出现，包括MicroStrategy等比较重视算法的公司
都曾先后选用过个这道题作为面试题或者笔试题。
*/
for(var i=1;i<10;i++){
  console.log([i,getTotalCount(i)]);  
}
/*
分析1
n=1,total=1   [1]
n=2,total=2   [1,1][2]
n=3,total=3   [1,1,1][1,2][2,1]
n=4,total=5   [1,1,1,1][1,1,2][1,2,1][2,1,1][2,2]
*/


//x*1+y*2=n,计算x个红球和y个篮球的排列

function getTotalCount(n){
  var cached = [0,1];
  var total = 0;
  //所有组合的可能
  for(var i=n;i>=0;i--){
    //i表示1的个数，从n递减
    if((n-i)%2===0){
      //剔除不能组成n的情况
      var j = (n-i)/2;
      total+=count(i,j);
    }
  }
  //console.log(cached);
  return total;
  
  /*  
  分析2 计算x个红球和y个篮球的排列
  x=2,y=2,sum=6   [2211][2121][2112][1221][1212][1122] 全排列/红排列/蓝排列=4*3*2*1/2*1/2*1=6 
  x=2,y=1,sum=3   [1,1,2][1,2,1][2,1,1] 用于验证：3*2*1/2*1/1 = 3 验证通过
  */
  function count(x,y){
    if(x===0 || y===0){
      //纯色只有1中排序
      return 1;
    }
    
    return getArr(x+y)/getArr(x)/getArr(y);
  }
  
  function getArr(n){
    if(cached[n]){
      return cached[n];
    }
    var rtn = n*getArr(n-1);
    cached[n] = rtn;
    return rtn;
  }
  
}


/*  
  分析3 计算结果5阶有8种
[ 1, 1 ]
[ 2, 2 ]
[ 3, 3 ]
[ 4, 5 ]
[ 5, 8 ]
[ 6, 13 ]
[ 7, 21 ]
[ 8, 34 ]
[ 9, 55 ]
验证一下
[11111]
[1112][1121][1211][2111]
[122][212][221]
1+4+3=8,应该后面没什么问题

*/
