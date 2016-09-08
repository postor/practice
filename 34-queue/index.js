/*
34.
ʵ��һ�����С�
���е�Ӧ�ó���Ϊ��
һ���������߳̽�int���͵������У�һ���������߳̽�int���͵�������

*/

/*������˫������*/

var q = new Queue();
console.log(q.pop());
q.push(1);
q.push(2);
q.push(1);
q.push(1);
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
q.push(2);
q.push(4);
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());


function Queue(){
  var begin = {},end={};
  begin.right = end;
  end.left = begin;
  
  this.push = function(item){
    var t1 = begin.right;
    begin.right = {
      right:t1,
      left:begin,
      item:item
    };
    t1.left = begin.right;
  }
  
  this.pop = function(){
    if(end.left!=begin){
      var t = end.left;
      var t2 = t.left;
      var it = t.item;
      t2.right = end;
      end.left = t2;
      delete t;
      return it;
    }else{
      return null;
    }
  }
}