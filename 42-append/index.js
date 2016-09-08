/*
42.请修改append函数，利用这个函数实现：

两个非降序链表的并集，1->2->3 和 2->3->5 并为 1->2->3->5
另外只能输出结果，不能修改两个链表的数据。

*/

var a={
  val:1,
  next:{
    val:2,
    next:{
      val:3
    }
  }
},b={
  val:2,
  next:{
    val:3,
    next:{
      val:5
    }
  }
};

console.log(append(a,b));

function append(a,b){
  var t1=a,t2=b,rtn=null,current=null;
  while(t1 || t2){
    if(t1 && t2){
      if(t1.val==t2.val){
        setNode(t1.val);
        t1 = t1.next;
        t2 = t2.next;
      }else if(t1.val>t2.val){      
        setNode(t2.val);
        t2 = t2.next;
      }else{         
        setNode(t1.val);
        t1 = t1.next;
      }
    }else if(t1){      
      setNode(t1.val);
      t1 = t1.next;
    }else{          
      setNode(t2.val);
      t2 = t2.next;
    }    
  }
  return rtn;

  function setNode(i){
    if(current === null){
      rtn = current = {val:i};
    }else{
      current.next={val:i};
      current = current.next;
    }
  }
  
}