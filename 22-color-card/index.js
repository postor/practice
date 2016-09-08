/*
第22题：
有4张红色的牌和4张蓝色的牌，主持人先拿任意两张，再分别在A、B、C三人额头上贴任意两张牌，
A、B、C三人都可以看见其余两人额头上的牌，看完后让他们猜自己额头上是什么颜色的牌，
A说不知道，B说不知道，C说不知道，然后A说知道了。
请教如何推理，A是怎么知道的。
如果用程序，又怎么实现呢？
*/

//知道的看到了所有的其他颜色，即另外两个头上的是同色的

var cards = [
  {color: 'red'},
  {color: 'red'},
  {color: 'red'},
  {color: 'red'},
  {color: 'blue'},
  {color: 'blue'},
  {color: 'blue'},
  {color: 'blue'}
];

for(var i=0;i<cards.length;i++){
  nextOne(i,4,[]);
}


function nextOne(index,left,arr){
  arr.push(cards[index]);
  left--;
  if(left ===0){
    check(arr);
  }else{
    for(var i=index+1;i<=cards.length-left;i++){
      nextOne(i,left,arr.map(x=>x));
    }
  }
  
}

function check(arr){
  var colors = {
    red:0,
    blue:0
  }
  arr.forEach(x=>{colors[x.color]++});
  if(colors.red==4){
    console.log(['I\'m blue',arr]);
  }else if(colors.blue==4){
    console.log(['I\'m red',arr]);
  }else{
    console.log(['can\'t tell',arr]);
  }
}


