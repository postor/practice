/*
��9��
�ж����������ǲ��Ƕ�Ԫ�������ĺ���������
��Ŀ������һ���������飬�жϸ������ǲ���ĳ��Ԫ�������ĺ�������Ľ����
����Ƿ���true�����򷵻�false��

��������5��7��6��9��11��10��8��������һ�����������������ĺ�����������

         8
      /  \
     6    10
    / \  / \
   5  7 9  11
��˷���true��
�������7��4��6��5��û���Ŀ����ĺ�������Ľ����������У���˷���false��
*/

var arr1=[5,7,6,9,11,10,8];
var arr2=[7,4,6,5];
check(arr1);
check(arr2);

function check(arr){
  //���һ���ڵ��Ǹ��ڵ㣬���������
  var tree={
    value: arr[arr.length-1]
  };

  for(var i=arr.length-2;i>=0;i--){
    addTreeNode(arr[i],tree);
  };

  //�ӹ���õ��������������»������
  var result = [];
  backLoop(tree);
  
  //���жԱ�
  console.log(arr);
  console.log(result);

  //��������
  function backLoop(node){
    node.left && backLoop(node.left);
    node.right && backLoop(node.right);
    result.push(node.value);
  }

  //���������
  function addTreeNode(v,node){
    if(v>node.value){
      if(node.right){
        addTreeNode(v,node.right);
      }else{
        node.right = {
          value: v
        };
      }
    }else{
      if(node.left){
        addTreeNode(v,node.left);
      }else{
        node.left = {
          value: v
        };
      }
    }  
  }
}





