/*
��17�⣺
��Ŀ����һ���ַ������ҵ���һ��ֻ����һ�ε��ַ���������abaccdeff�������b��  
�������������2006��google��һ�������⡣
*/

console.log(find("abaccdeff"));

function find(str){
  input = str.split('');

  //��ͷѭ���������ظ���ǰ��һλ��δ�����ظ���Ϊ���
  var history = {};
  for(var i=0;i<input.length;i++){
    var cur = input[i];
    //֮ǰ����ľͲ���������
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

