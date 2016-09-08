/*
36.引用自网友：longzuo
谷歌笔试：
n支队伍比赛，分别编号为0，1，2。。。。n-1，已知它们之间的实力对比关系，
存储在一个二维数组w[n][n]中，w[j] 的值代表编号为i，j的队伍中更强的一支。

所以w[j]=i 或者j，现在给出它们的出场顺序，并存储在数组order[n]中，
比如order[n] = {4,3,5,8,1......}，那么第一轮比赛就是 4对3， 5对8。.......
胜者晋级，败者淘汰，同一轮淘汰的所有队伍排名不再细分，即可以随便排，
下一轮由上一轮的胜者按照顺序，再依次两两比，比如可能是4对5,直至出现第一名

编程实现，给出二维数组w，一维数组order 和 用于输出比赛名次的数组result[n]，
求出result。
*/

//分析：以4强为例,实例顺序1302
var w = [
  [0,1,3,0],
  [1,1,1,1],
  [0,1,2,3],
  [3,1,3,3]
],
order=[0,1,2,3];
console.log(match(w,order));


function match(w,order){
  var level = Math.log2(order.length),result=[];
  for(var i=0;i<order.length;i++){
    result[i] = level+1;
  }
  loop(order);
  return result;
  
  function loop(order){
    var newOrder = [];
    //单数情况暂时忽略
    for(var i=0;i<order.length-1;i+=2){
      newOrder.push(w[order[i]][order[i+1]]);
    }
    
    level--;
    if(level>=0){
      for(var i=0;i<newOrder.length;i++){
        result[newOrder[i]] = level+1;
      }
      loop(newOrder);
    }
    
  }
}
