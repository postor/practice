/*
36.���������ѣ�longzuo
�ȸ���ԣ�
n֧����������ֱ���Ϊ0��1��2��������n-1����֪����֮���ʵ���Աȹ�ϵ��
�洢��һ����ά����w[n][n]�У�w[j] ��ֵ������Ϊi��j�Ķ����и�ǿ��һ֧��

����w[j]=i ����j�����ڸ������ǵĳ���˳�򣬲��洢������order[n]�У�
����order[n] = {4,3,5,8,1......}����ô��һ�ֱ������� 4��3�� 5��8��.......
ʤ�߽�����������̭��ͬһ����̭�����ж�����������ϸ�֣�����������ţ�
��һ������һ�ֵ�ʤ�߰���˳�������������ȣ����������4��5,ֱ�����ֵ�һ��

���ʵ�֣�������ά����w��һά����order �� ��������������ε�����result[n]��
���result��
*/

//��������4ǿΪ��,ʵ��˳��1302
var w = [
  [0,1,3,0],
  [1,1,1,1],
  [0,1,2,3],
  [3,1,3,3]
],
order=[0,1,2,3];
console.log(match(w,order));


function match(w,order){
  var level = Math.log2(order.length),result=[];
  for(var i=0;i<order.length;i++){
    result[i] = level+1;
  }
  loop(order);
  return result;
  
  function loop(order){
    var newOrder = [];
    //���������ʱ����
    for(var i=0;i<order.length-1;i+=2){
      newOrder.push(w[order[i]][order[i+1]]);
    }
    
    level--;
    if(level>=0){
      for(var i=0;i<newOrder.length;i++){
        result[newOrder[i]] = level+1;
      }
      loop(newOrder);
    }
    
  }
}
