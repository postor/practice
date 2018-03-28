/*
第9题
判断整数序列是不是二元查找树的后序遍历结果
题目：输入一个整数数组，判断该数组是不是某二元查找树的后序遍历的结果。
如果是返回true，否则返回false。

例如输入5、7、6、9、11、10、8，由于这一整数序列是如下树的后序遍历结果：

         8
      /  \
     6    10
    / \  / \
   5  7 9  11
因此返回true。
如果输入7、4、6、5，没有哪棵树的后序遍历的结果是这个序列，因此返回false。
*/

var arr1=[5,7,6,9,11,10,8];
var arr2=[7,4,6,5];
check(arr1);
check(arr2);

function check(arr){
  //最后一个节点是根节点，构造查找树
  var tree={
    value: arr[arr.length-1]
  };

  for(var i=arr.length-2;i>=0;i--){
    addTreeNode(arr[i],tree);
  };

  //从构造好的树后续遍历重新获得数组
  var result = [];
  backLoop(tree);
  
  //进行对比
  console.log(arr);
  console.log(result);

  //后续遍历
  function backLoop(node){
    node.left && backLoop(node.left);
    node.right && backLoop(node.right);
    result.push(node.value);
  }

  //构造查找树
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





