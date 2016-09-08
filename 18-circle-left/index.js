/*

第18题：
题目：n个数字（0,1,…,n-1）形成一个圆圈，从数字0开始，
每次从这个圆圈中删除第m个数字（第一个为当前数字本身，第二个为当前数字的下一个数字）。
当一个数字删除后，从被删除数字的下一个继续删除第m个数字。
求出在这个圆圈中剩下的最后一个数字。
July：我想，这个题目，不少人已经 见识过了。
*/

//circleLeft(20,6);
//circleLeft(4,2);//1
circleLeft(5,3);//4
function circleLeft(n,m){
  //构造环路
  var circle = [],index = 0;
  for(var i=0;i<n;i++){
    circle[i] = i;
  }
  
  //开始剔除
  while(circle.length>1){
    removeOne();
  }
  console.log(circle);
  
  
  function removeOne(){
    var p = index+m;
    if(p<circle.length){
      //console.log([p,circle[p]]);
      circle.splice(p,1);
      index = p-1;
    }else{
      p = p%circle.length;     
      //console.log([p,circle[p]]); 
      circle.splice(p,1);
      index = p-1;
    }
  }
}
