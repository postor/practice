/*
44.��Ѷ�����⣺
1.���һ��ħ�������棩�ĳ���
2.��һǧ�������ţ����ظ������ı��ļ�����ʽ���棬һ��һ�������ظ���
����5����ʱ�䣬�ҳ��ظ���������ǰ10����

3.�ղ���1����url�����ڸ���һ��url������ҳ����Ƶ�url�������Թٲ����ͺ�Ϊ���ƣ�
*/


/**
1.������������任�ļ����Ҿͱ�����
��ת����Ȳ����˰�....
*/

var cube = new Cube();
console.log(cube.getMatrix());
console.log(cube.getFace('bottom'));

function Cube(){
  
  var cubes = [[[],[],[]],[[],[],[]],[[],[],[]]];
  var faces = {
    top:{
      x:0,
      y:1,
      z:0,
      color: 'red'
    },bottom:{
      x:0,
      y:-1,
      z:0,
      color: 'blue'
    },left:{
      x:-1,
      y:0,
      z:0,
      color: 'yellow'
    },right:{
      x:1,
      y:0,
      z:0,
      color: 'green'
    },front:{
      x:0,
      y:0,
      z:1,
      color: 'orange'
    },back:{
      x:0,
      y:0,
      z:-1,
      color: 'purple'
    },
  };
  
  init();
  
  this.getMatrix = ()=>cubes;
  
  this.getFace = (direction)=>{
    var face = faces[direction];
    if(face){
      var results = [[],[],[]];
      var xstart = -1,xend=1,ystart=-1,yend=1,zstart=-1,zend=1,fd='';
      if(face.x!==0){
        xstart=xend=face.x;
      }
      if(face.y!==0){
        ystart=yend=face.y;
      }
      if(face.z!==0){
        zstart=zend=face.z;
      }
      var count = 0;
      for(var x=xstart;x<=xend;x++){        
        for(var y=ystart;y<=yend;y++){
          for(var z=zstart;z<=zend;z++){
            var c = getCube(x,y,z);      
            var fj = count%3;
            var fi = (count-fj)/3;
            count++;
            results[fi][fj] = c[direction];
          }
        }
      }
      return results;
    }else{
      return null;
    }
  }
  
  function init(){
    for(var x=-1;x<=1;x++){
      for(var y=-1;y<=1;y++){
        for(var z=-1;z<=1;z++){
          var cube ={};
          if(x<0){
            cube.left = 'yellow';
          }else if(x>0){
            cube.right = 'green';
          }
          if(y<0){
            cube.bottom = 'blue';
          }else if(y>0){
            cube.top = 'red';
          }
          if(z<0){
            cube.back = 'purple';
          }else if(z>0){
            cube.front = 'orange';
          }
          setCube(x,y,z,cube);
        }
      }
    }
  }
  
  
  //����ת��
  function setCube(x,y,z,cube){
    cubes[x+1][y+1][z+1] = cube;
  }
  
  //����ת��
  function getCube(x,y,z){
    return cubes[x+1][y+1][z+1];
  }
}





