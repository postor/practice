/*
28.�����Ķ����Ʊ�ʾ��1�ĸ���
��Ŀ������һ����������������Ķ����Ʊ�����ж��ٸ�1��
��������10������������Ʊ�ʾΪ1010��������1��������2��

������
����һ���ܻ����Ŀ���λ����������⡣
����΢�����ڵĺܶ๫˾�������ù�����⡣
*/

for(var i=10;i<20;i++){
  console.log([i,getBit1Count(i)]);
}

function getBit1Count(n){
  var i=1,count=0;
  //console.log('----'+n);
  while(n>=i){
    //console.log([i,n&i]);
    if((n&i)>0)count++;
    i = i<<1;
  }  
  //console.log('----'+n);
  return count;
}