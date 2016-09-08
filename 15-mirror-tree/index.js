/*
��15�⣺
��Ŀ������һ�Ŷ�Ԫ��������������ת��Ϊ���ľ���
����ת����Ķ�Ԫ�������У��������Ľ�㶼�����������Ľ�㡣
�õݹ��ѭ�����ַ���������ľ���ת����  
�������룺
  8
  / \
  6 10
/\ /\
5 7 9 11

�����
   8
  / \
10 6
/\ /\
11 9 7 5

�����Ԫ�������Ľ��Ϊ��
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

//ѭ����������
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

//�ݹ�
function recurs(n){
  var t = n.left;
  n.left = n.right;
  n.right = t;
  n.left && recurs(n.left)
  n.right && recurs(n.right)
  return n;
}

//����ͬһ����
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

