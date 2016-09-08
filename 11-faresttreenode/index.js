/*
第11题
------------------------------------
求二叉树中节点的最大距离...

如果我们把二叉树看成一个图，
父子节点之间的连线看成是双向的，
我们姑且定义"距离"为两节点之间边的个数。
写一个程序，
求一棵二叉树中相距最远的两个节点之间的距离。
*/

var tree = {
  left:{
    left: {
      left:{}
    },
    right: {
      left:{
        right:{}
      }
    }
  },
  right:{
    left:{}
  }
};

/*
{left:{length:4},right:null}
获取两个分支的最长路径
递归获取子节点最长路径
*/
var currentMax = 0;
function getMax2Path(node){
  var obj = {};
  if(node.left){
    var rtn = getMax2Path(node.left);
    obj.left={length:checkMax(rtn)+1}
  }
  if(node.right){
    var rtn = getMax2Path(node.right);    
    obj.right={length:checkMax(rtn)+1}
  }
  //console.log(obj);
  return obj;
}

//检查是不是最大值
function checkMax(rtn){  
//console.log(rtn);
    var tmax = 0;
    var longer = 0;
    if(rtn.left){
      tmax += rtn.left.length;
      longer = rtn.left.length;
    }
    if(rtn.right){
      tmax += rtn.right.length;
      (rtn.right.length>longer) && (longer = rtn.right.length);
    }
    if(tmax>currentMax)currentMax=tmax;
    return longer;
}
//额外检查一下根节点
checkMax(getMax2Path(tree));

//结果
console.log(currentMax);