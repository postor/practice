/*
29.栈的push、pop序列
题目：输入两个整数序列。其中一个序列表示栈的push顺序，
判断另一个序列有没有可能是对应的pop顺序。
为了简单起见，我们假设push序列的任意两个整数都是不相等的。  

比如输入的push序列是1、2、3、4、5，那么4、5、3、2、1就有可能是一个pop系列。
因为可以有如下的push和pop序列：
push 1，push 2，push 3，push 4，pop，push 5，pop，pop，pop，pop，
这样得到的pop序列就是4、5、3、2、1。
但序列4、3、5、1、2就不可能是push序列1、2、3、4、5的pop序列。
*/

//基本思路，根据push，遍历所有的pop顺序方案，不匹配的丢弃


var test = [
  [
    [1,2,3,4,5],[4,5,3,2,1]
  ],
  [
    [1,2,3,4,5],[4,3,5,1,2]
  ]
];

test.forEach(function(item){
  console.log([item[0],item[1],check(item[0],item[1])])
});

function check(push,pop){
  return stack([],push,pop)
}

function stack(current,topush,topop){
  if(topop.length ===0){
    return true;
    //console.log('OK!');
  }
  
  if(topush.length && topush[0]===topop[0]){
    //如果要推入的和要取出的相同，则直接抵消
    return stack(current,topush.slice(1),topop.slice(1))
  }else if(current[current.length-1] === topop[0]){
    //如果栈顶和要取出的相同
    current.pop();
    return stack(current,topush,topop.slice(1));
  }else if(topush.length!==0){
    //推入之后继续
    var n = current.map(x=>x);
    n.push(topush[0]);
    return stack(n,topush.slice(1),topop);
  } else{
    //console.log('NOT!');
    return false;
  }
  
}