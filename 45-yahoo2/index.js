/*
45.雅虎：
1.对于一个整数矩阵，存在一种运算，对矩阵中任意元素加一时，需要其相邻（上下左右）
某一个元素也加一，现给出一正数矩阵，判断其是否能够由一个全零矩阵经过上述运算得到。

2.一个整数数组，长度为n，将其分为m份，使各份的和相等，求m的最大值
  比如{3，2，4，3，6} 可以分成{3，2，4，3，6} m=1; 
  {3,6}{2,4,3} m=2
  {3,3}{2,4}{6} m=3 所以m的最大值为3
*/

/**
1.反向思维，在现在的基础上去减少，每次减少相邻一对，有一种能得到全0即可
优化的思路不确定是否可行：总是尽量找最多的和第二多的，如果遇到相等的情况计算周围的权
*/

/**
2.从n开始，递减尝试，各分的和为(总和/m)不为整数的可以直接pass，然后看是否有这样的组合
*/


var arr = [1,2,3,2,1,2,3,2,1,16,2,3,2,8];
console.log(findM(arr));

function findM(arr){
  var sum = 0;
  arr.sort((a,b)=>b-a);
  arr.forEach(x=>{sum+=x});
  console.log([sum,arr]);
  for(var m=arr.length;m>1;m--){
    var rtn = checkM(m);
    if(rtn){
      return rtn;
    }
  }
  return {m:1};
  
  function checkM(m){
    if((sum%m)!==0)return false;
    var psum = sum/m,used=[],groups=[];
    for(var i=0;i<arr.length;i++){
      if(arr[i]>psum) return false;
      if(used.indexOf(i)>=0) continue;
      
      var t = getIndexs(psum,i);
        //console.log([m,t]);
      if(t){
        groups.push(t.map(x=>arr[x]));
        used = used.concat(t);
        //console.log([m,psum,t,t.map(x=>arr[x]),used]);
        if(used.length === arr.length){
          return {
            groups:groups,
            m:m
          };
        }
      }
    }   
    
    return false;
    
    
    function getIndexs(psum,start){
      var left = psum-arr[start];
      if(left<0) return false;
      if(left === 0) return [start];
      
      for(var count=2;count<=arr.length-used.length+1;count++){
        var t = checkCountLeft(count-1,start+1,left);
        //console.log(t);
        if(t){
          return [start].concat(t);
        }
      }
      
      return false;
    }
    
    function checkCountLeft(count,start,left){
      if(left<=0) return false;
      if(count===1){
        for(var i=start;i<arr.length;i++){
          if(used.indexOf(i)>=0) continue;
          if(arr[i]===left) return [i];
        }
        return false;
      }else{
        for(var i=start;i<arr.length-count+1;i++){
          if(used.indexOf(i)>=0) continue;
          var tleft = left - arr[i];
          if(tleft>0){
            var t = checkCountLeft(count-1,i+1,tleft);
            if(t){
              return [i].concat(t);
            }
          }
        }
      }
      
      
    }
  }
  
  
}

