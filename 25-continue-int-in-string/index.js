/*
��25�⣨�ַ�������
дһ������,����ԭ����int continumax(char *outputstr,char *intputstr)
���ܣ�
���ַ������ҳ�����������ִ�������������ĳ��ȷ��أ�
�����������ִ���������һ����������outputstr��ָ�ڴ档
���磺"abcd12345ed125ss123456789"���׵�ַ����intputstr�󣬺���������9��
outputstr��ָ��ֵΪ123456789
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
        //��һ�������ָ���endindex
        endIndex=i;
      }else{
        //��һ����������
        startIndex=i;
        endIndex=i;
      }
      lastIn = true;
    }else{
      if(lastIn){
        //��һ�������֣������
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
    //��һ�������֣������
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