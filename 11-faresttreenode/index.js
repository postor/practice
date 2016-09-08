/*
��11��
------------------------------------
��������нڵ��������...

������ǰѶ���������һ��ͼ��
���ӽڵ�֮������߿�����˫��ģ�
���ǹ��Ҷ���"����"Ϊ���ڵ�֮��ߵĸ�����
дһ������
��һ�ö������������Զ�������ڵ�֮��ľ��롣
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
��ȡ������֧���·��
�ݹ��ȡ�ӽڵ��·��
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

//����ǲ������ֵ
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
//������һ�¸��ڵ�
checkMax(getMax2Path(tree));

//���
console.log(currentMax);