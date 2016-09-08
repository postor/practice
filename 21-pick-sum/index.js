/*
2010年中兴面试题
编程求解：
输入两个整数 n 和 m，从数列1，2，3.......n 中 随意取几个数,
使其和等于 m ,要求将其中所有的可能组合列出来.
*/
findNums(20,10);

function findNums(n,m){
  var arr = getArr(n);
  for(var count=1;count<=n;count++){
    var firstResult = 0;
    for(var index=0;index<n-count;index++){
      var result = findByCount(index,count,0,[])
      
      if(index===0)firstResult=result
      
      //越往后越大，超出就不用往后循环了
      if(result===false) break
    }
    //如果count个情况第一次就超出了，越多越超出
    if(firstResult===false) break
  }
  
  function getArr(n){
    var arr = [];
    for(var i=0;i<n;i++){
      arr[i] = i+1;
    }
    return arr;
  }  
  
  function findByCount(index,count,sum,tarr){
    //超出了就不用算了
    if(sum>m) return false;
    
    if(count ===1){
      if(sum+arr[index]===m){
        tarr.push(arr[index]);
        console.log(tarr);
      }else if(arr[index]>m){
        //超出了就不用算了
        return false;
      }      
    }else{
      sum+=arr[index];
      tarr.push(arr[index]);      
      count--;
      for(var i=index+1;i<n-count;i++){    
        var tarr1 = tarr.map(x=>x);
        var result = findByCount(i,count,sum,tarr1);
        if(result===false){
          //超出了就不用算了
          break;
        }
      }
    }
    return true;
  }
}