/*
26.����ת�ַ���

��Ŀ��
�����ַ���������ת���������ַ���ǰ������ɸ��ַ��ƶ����ַ�����β����

����ַ���abcdef����ת2λ�õ��ַ���cdefab����ʵ���ַ�������ת�ĺ�����
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