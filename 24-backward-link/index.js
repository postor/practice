/*
��24�⣨������
���������������͵����ã�
*/

var h = {
  v:1,
  n:{
    v:2,
    n:{
      v:3
    }
  }
}

console.log(backward(h));

function backward(head){
  
  if(!(head&&head.n))return head;
  
  var t = head;
  var last = null;
  while(t&&t.n){
    var next = t.n;
    t.n = last;
    last = t;
    t = next;
  }
  t.n = last;
  return t; 
}
