/*
��16�⣺
��Ŀ��΢����
����һ�Ŷ�Ԫ�����������°����ӡ����ÿ����㣬ͬһ���а��մ������ҵ�˳���ӡ��  
��������

   8
  / \
6 10
/ \ / \
5 7 9 11

���8 6 10 5 7 9 11��
*/

var lists = [];
var tree = getTree();
recurs(tree);
console.log(lists);

//�ݹ��������
function recurs(n,level){
  level = level||0;
  lists[level] = lists[level]||[];
  lists[level].push(n.value);
  n.left && recurs(n.left,level+1)
  n.right && recurs(n.right,level+1)
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