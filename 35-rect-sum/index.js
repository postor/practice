/*
35.
求一个矩阵中最大的二维矩阵(元素和最大).如:
1 2 0 3 4
2 3 4 5 1
1 1 5 3 0
中最大的是:
4 5
5 3
要求:(1)写出算法;(2)分析时间复杂度;(3)用C写出关键代码
*/

var source = [
  [1,2,0,3,4],
  [2,3,4,5,1],
  [1,1,5,3,0]
];
console.log(findMaxRect(source));

function findMaxRect(s){
  var max = null,ti,tj;
  for(var i=0;i<s.length-1;i++){
    var si = s[i];
    for(var j=0;j<si.length-1;j++){
      var r = sum(i,j);
      if(max === null){
        max = r;
        ti=i;tj=j;
      }else{
        if(r>max){
          max = r;
          ti=i;tj=j;
        }
      }
    }
  }
  return {
    max:max,
    rect:[
      [s[ti][tj],s[ti][tj+1]],
      [s[ti+1][tj],s[ti+1][tj+1]]
    ]
  }
  
  function sum(i,j){
    return s[i][j]+s[i+1][j]+s[i][j+1]+s[i+1][j+1];
  }
}

