/*
��22�⣺
��4�ź�ɫ���ƺ�4����ɫ���ƣ������������������ţ��ٷֱ���A��B��C���˶�ͷ�������������ƣ�
A��B��C���˶����Կ����������˶�ͷ�ϵ��ƣ�����������ǲ��Լ���ͷ����ʲô��ɫ���ƣ�
A˵��֪����B˵��֪����C˵��֪����Ȼ��A˵֪���ˡ�
����������A����ô֪���ġ�
����ó�������ôʵ���أ�
*/

//֪���Ŀ��������е�������ɫ������������ͷ�ϵ���ͬɫ��

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


