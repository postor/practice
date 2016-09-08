/*
第15题：
题目：输入一颗二元查找树，将该树转换为它的镜像，
即在转换后的二元查找树中，左子树的结点都大于右子树的结点。
用递归和循环两种方法完成树的镜像转换。  
例如输入：
  8
  / \
  6 10
/\ /\
5 7 9 11

输出：
   8
  / \
10 6
/\ /\
11 9 7 5

定义二元查找树的结点为：
struct BSTreeNode // a node in the binary search tree (BST)
{
  int m_nValue; // value of node
  BSTreeNode *m_pLeft; // left child of node
  BSTreeNode *m_pRight; // right child of node
};

*/


console.log(getTree());
console.log(loop(getTree()));
console.log(recurs(getTree()));

//循环借助队列
function loop(tree){
  var list = [tree];
  while(list.length){
    dealNode(list.pop());
  }
  function dealNode(n){    
    var t = n.left;
    n.left = n.right;
    n.right = t;
    n.left && list.push(n.left);
    n.right && list.push(n.right);
  }
  return tree;
  
}

//递归
function recurs(n){
  var t = n.left;
  n.left = n.right;
  n.right = t;
  n.left && recurs(n.left)
  n.right && recurs(n.right)
  return n;
}

//产生同一个树
function getTree(){
  return {
    value:8,
    left:{
      value: 6,
      left:{
        value: 5
      },
      right:{
        value: 7
      }
    },right:{
      value: 10,
      left:{
        value: 9
      },
      right:{
        value: 11
      }
    }
  };
}

