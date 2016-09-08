/*
37.
��n����Ϊm+1���ַ�����
���ĳ���ַ��������m���ַ���ĳ���ַ�����ǰm���ַ�ƥ�䣬�������ַ����������ӣ�
����n���ַ�������������һ���೤���ַ������������ѭ�����򷵻ش���
*/
//����m=2

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