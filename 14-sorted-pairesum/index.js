/*
��14�⣺
��Ŀ������һ���Ѿ�������������������һ�����֣�
�������в�����������ʹ�����ǵĺ�������������Ǹ����֡�
Ҫ��ʱ�临�Ӷ���O(n)������ж�����ֵĺ͵�����������֣��������һ�Լ��ɡ�
������������1��2��4��7��11��15������15������4+11=15��������4��11��
*/

var arr=[1,2,4,7,11,15];
var target = 15;
findPaire(arr,target);

function findPaire(arr,target){
  for(var index_start = 0;index_start<arr.length;index_start++){
    //û�ҵ��Ļ���1    
    for(var index_end = arr.length-1;index_end>index_start;index_end--){
      if(arr[index_start]+arr[index_end]>target){
        //���ˣ���һ��
      }else if(arr[index_start]+arr[index_end] === target){
        console.log([arr[index_start],arr[index_end]]);
        return [arr[index_start],arr[index_end]];
      }else{
        //�Ѿ�С�˾Ͳ��ü�������
        break;
      }
    }
  }
}