/*
26.左旋转字符串

题目：
定义字符串的左旋转操作：把字符串前面的若干个字符移动到字符串的尾部。

如把字符串abcdef左旋转2位得到字符串cdefab。请实现字符串左旋转的函数。
*/

console.log(rotateLeft('abcdef',2));


function rotateLeft(str,num){
  //return str.substring(num)+str.substring(0,num);
  var arr = str.split(''),rtn=[];
  for(var i=0;i<arr.length;i++){
    rtn[getLeftIndex(arr.length,i,num)] = arr[i];
  }
  return rtn;
  
  function getLeftIndex(len,index,num){
    var target = index-num;
    if(target<0){
      target+=len;
    }
    return target;
  }
}