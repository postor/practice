/*

��18�⣺
��Ŀ��n�����֣�0,1,��,n-1���γ�һ��ԲȦ��������0��ʼ��
ÿ�δ����ԲȦ��ɾ����m�����֣���һ��Ϊ��ǰ���ֱ����ڶ���Ϊ��ǰ���ֵ���һ�����֣���
��һ������ɾ���󣬴ӱ�ɾ�����ֵ���һ������ɾ����m�����֡�
��������ԲȦ��ʣ�µ����һ�����֡�
July�����룬�����Ŀ���������Ѿ� ��ʶ���ˡ�
*/

//circleLeft(20,6);
//circleLeft(4,2);//1
circleLeft(5,3);//4
function circleLeft(n,m){
  //���컷·
  var circle = [],index = 0;
  for(var i=0;i<n;i++){
    circle[i] = i;
  }
  
  //��ʼ�޳�
  while(circle.length>1){
    removeOne();
  }
  console.log(circle);
  
  
  function removeOne(){
    var p = index+m;
    if(p<circle.length){
      //console.log([p,circle[p]]);
      circle.splice(p,1);
      index = p-1;
    }else{
      p = p%circle.length;     
      //console.log([p,circle[p]]); 
      circle.splice(p,1);
      index = p-1;
    }
  }
}
