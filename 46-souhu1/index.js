/*
46.搜狐：
四对括号可以有多少种匹配排列方式？比如两对括号可以有两种：（）（）和（（））
*/

/** 
计算n对
n=1,f(n)=1 ()
n=2,f(n)=2 ()(),(())
n=3,f(n)=4 ()()(),(())(),()(()),((()))
n=4,f(n)=8 ()()()(),(())()(),()(())(),()()(()),(())(()),((()))(),()((())),(((())))
*/

console.log(count(5));
console.log(count(4));
console.log(count(3));
console.log(count(2));
console.log(count(1));

function count(n){
  //不同的组合方式
  var groups = getGroups();
  
  return {
    total:groups.length,
    detail: groups
  };
  
  //总计有t个，的不同组合
  function getGroups(list,left){
    if(typeof left === 'undefined'){
      list = list||[];
      left = n;
    }
    //console.log([left]);
    var rtn = [];
    for(var i=1;i<=n;i++){
      if(i<left){
        var tmp = list.slice(0);
        tmp.push(i);
        rtn = rtn.concat(getGroups(tmp,left-i));
      }else if(i===left){
        list.push(i);
        rtn.push(list);
      }else{
        break;
      }
    }
    return rtn;
  }
}