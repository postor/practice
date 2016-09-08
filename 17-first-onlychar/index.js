/*
第17题：
题目：在一个字符串中找到第一个只出现一次的字符。如输入abaccdeff，则输出b。  
分析：这道题是2006年google的一道笔试题。
*/

console.log(find("abaccdeff"));

function find(str){
  input = str.split('');

  //从头循环，发现重复则前进一位，未发现重复则为结果
  var history = {};
  for(var i=0;i<input.length;i++){
    var cur = input[i];
    //之前算过的就不必再算了
    if(history[cur]) continue;
    history[cur] = true;  
    
    var ok = true;
    for(var j=i+1;j<input.length;j++){
      if(input[j]===cur){
        ok=false;
        break;
      }
    }
    if(ok) return cur;
  }
  return false;
}

