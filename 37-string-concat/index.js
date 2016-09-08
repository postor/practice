/*
37.
有n个长为m+1的字符串，
如果某个字符串的最后m个字符与某个字符串的前m个字符匹配，则两个字符串可以联接，
问这n个字符串最多可以连成一个多长的字符串，如果出现循环，则返回错误。
*/
//假设m=2

var mError = [
  'efg',
  'gab',
  'def',
  'abc',
  'fga',
  'bcd',
  'cde'
],mNormal = [
  'efg',
  'abc',
  'fga',
  'bcd',
  'cde'
];
console.log(getConcat(mError,2));
console.log(getConcat(mNormal,2));


function getConcat(strs,m){
  var result = strs[0];
  for(var z=0;z<strs.length;z++){
    //used[index]=> index used
    var used = [],current=strs[z],left=current.substring(0,m),right=current.substring(current.length-m);
    used[z]=1;
    while(true){
      var match = 0;
      for(var i=0;i<strs.length;i++){
        var istr = strs[i],ileft = istr.substring(0,m),iright=istr.substring(istr.length-m);      
        if(ileft===right){
          if(used[i]){
            return {error:'ininite loop'};
          }else{          
            current=current+istr;
            right = iright;
            used[i]=1;
            match=1;
          }
        }      
        if(iright===left){
          if(used[i]){
            return {error:'ininite loop'};
          }else{          
            current=istr+current;
            left = ileft;
            used[i]=1;
            match=1;
          }
        }
      }
      if(!match){
        if(current.length>result.length) result = current;
        break;
      }
    }
  }
  return result;
}