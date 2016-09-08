/*
第16题：
题目（微软）：
输入一颗二元树，从上往下按层打印树的每个结点，同一层中按照从左往右的顺序打印。  
例如输入

   8
  / \
6 10
/ \ / \
5 7 9 11

输出8 6 10 5 7 9 11。
*/

var lists = [];
var tree = getTree();
recurs(tree);
console.log(lists);

//递归推入队列
function recurs(n,level){
  level = level||0;
  lists[level] = lists[level]||[];
  lists[level].push(n.value);
  n.left && recurs(n.left,level+1)
  n.right && recurs(n.right,level+1)
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