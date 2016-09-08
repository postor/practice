/*
第25题（字符串）：
写一个函数,它的原形是int continumax(char *outputstr,char *intputstr)
功能：
在字符串中找出连续最长的数字串，并把这个串的长度返回，
并把这个最长数字串付给其中一个函数参数outputstr所指内存。
例如："abcd12345ed125ss123456789"的首地址传给intputstr后，函数将返回9，
outputstr所指的值为123456789
*/

var s = "abcd12345ed125ss123456789r321";
console.log(continumax(s));

function continumax(s){
  var rtn = {
    startIndex:0,
    endIndex:0,
    str:''
  },arr = s.split(''),
  char0='0',char9='9',
  lastIn=false,startIndex=0,endIndex=0,maxLen=0;
  
  for(var i=0;i<arr.length;i++){
        console.log([i,arr[i],startIndex,endIndex,maxLen,lastIn]);
    if(arr[i]>=char0 && arr[i]<=char9){
      if(lastIn){
        //上一个是数字更新endindex
        endIndex=i;
      }else{
        //上一个不是数字
        startIndex=i;
        endIndex=i;
      }
      lastIn = true;
    }else{
      if(lastIn){
        //上一个是数字，则结算
        var len = endIndex-startIndex+1;
        if(len>maxLen){
          maxLen = len;
          rtn.startIndex = startIndex;
          rtn.endIndex = endIndex;
        }
      }
      lastIn = false;
    }
  }
  if(lastIn){
    //上一个是数字，则结算
    var len = endIndex-startIndex+1;
    if(len>maxLen){
      maxLen = len;
      rtn.startIndex = startIndex;
      rtn.endIndex = endIndex;
    }
  }
  if(maxLen){
    rtn.str = s.substring(rtn.startIndex,rtn.endIndex+1);
  }
  
  return rtn;
}