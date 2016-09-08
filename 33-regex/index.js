/*
33.
实现一个挺高级的字符匹配算法：
给一串很长字符串，要求找到符合要求的字符串，例如目的串：123
1******3***2 ,12*****3这些都要找出来
其实就是类似一些和谐系统。。。。。
*/

var str='1a123213ii23hhhgg2gf31i2u',search='123';
console.log(expFind(str,search));

function expFind(str,search){
  var arr = str.split(''),searchArr = search.split('');
  var rtn = [];
  for(var i=0;i<arr.length;i++){
    if(arr[i]===search[0]){
      rtn = rtn.concat(findMatch(arr.slice(i),1,1,[0]));
    }
  }
  return rtn;
  
  function findMatch(arr,startIndex,searchIndex,indexs){
    if(searchIndex === searchArr.length-1){
      var rtn = [];
      for(var i=startIndex;i<arr.length;i++){
        if(arr[i]===searchArr[searchIndex]){
          var t = arr.slice(0,i+1).join('');    
          var is = indexs.slice(0);
          is.push(i);
          rtn.push({str:t,indexs:is});
        }
      }
      return rtn;
    }
    
    var rtn = [];
    for(var i=startIndex;i<str.length-(searchArr.length-searchIndex);i++){
      if(arr[i]===searchArr[searchIndex]){
        var is = indexs.slice(0);
        is.push(i);
        var t = findMatch(arr,i+1,searchIndex+1,is);
        rtn = rtn.concat(t);
      }
    }
    return rtn;
  }
}
