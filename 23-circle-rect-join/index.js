/*
��23�⣺
����򵥣�����ٵķ���������������Բ���Ƿ���������ཻ��"  
3D����ϵ ԭ��(0.0,0.0,0.0)
Բ��:
�뾶r = 3.0
Բ��o = (*.*, 0.0, *.*)

������:
4��������;  
1:(*.*, 0.0, *.*)
2:(*.*, 0.0, *.*)
3:(*.*, 0.0, *.*)
4:(*.*, 0.0, *.*)

*/

//��������û��˵Բ�ĽǶȣ�Ҳû��˵�Ǳ߿�������ཻ����Ŀ�ֵֹģ��͵���ƽ��������ཻ��
var c1x=-1,c1y=-1,c2x=-1,c2y=1,c3x=1,c3y=1,c4x=1,c4y=-1,ox=5,oy=5,r=3;

var tests = [
  //x1!=x2
  {
    args:[0,1, 1,0, 0,-1, -1,0, 0.5,0.5,1],
    should: 'join inside',
  },
  {
    args:[0,1, 1,0, 0,-1, -1,0, 1.5,1.5,1],
    should: 'no join(side)',
  },
  {
    args:[0,1, 1,0, 0,-1, -1,0, 1.5,0,1],
    should: 'join conner',
  },
  {
    args:[0,1, 1,0, 0,-1, -1,0, 1.5,0,1],
    should: 'join conner(edge)',
  },
  {
    args:[0,1, 1,0, 0,-1, -1,0, 2.5,0,1],
    should: 'no join(conner)',
  },
  
  //x1=x2 y1=y2
  {
    args:[-1,-1, -1,1, 1,1, 1,-1, 1,1,1],
    should: 'join inside(edge)',
  },
  {
    args:[-1,-1, -1,1, 1,1, 1,-1, 1.5,0,1],
    should: 'join side',
  },
  {
    args:[-1,-1, -1,1, 1,1, 1,-1, 2,0,1],
    should: 'join side(edge)',
  },
  {
    args:[-1,-1, -1,1, 1,1, 1,-1, 2.1,0,1],
    should: 'no join(side)',
  },
  {
    args:[-1,-1, -1,1, 1,1, 1,-1, 1.5,1.5,1],
    should: 'join conner',
  },
  {
    args:[-1,-1, -1,1, 1,1, 1,-1, 2,2,1],
    should: 'no join(conner)',
  }
];

tests.forEach(function(i){
  console.log(i);
  checkJoin.apply({},i.args);
});
//checkJoin(0,1,1,0,0,-1,-1,0,1.5,1.5,1);

function checkJoin(c1x,c1y,c2x,c2y,c3x,c3y,c4x,c4y,ox,oy,r){
  var join = false;

  //��Բ�� ox,oy�뾶r ����cx,cy��w���ཻ������
  var cx=(c1x+c2x+c3x+c4x)/4;
  var cy=(c1y+c2y+c3y+c4y)/4;

  var lines = [getline(c1x,c1y,c2x,c2y,cx,cy),getline(c2x,c2y,c3x,c3y,cx,cy),getline(c3x,c3y,c4x,c4y,cx,cy),getline(c4x,c4y,c1x,c1y,cx,cy)];

  //console.log(lines);
  //console.log([ox,oy]);
  //1.Բ���ڷ��η�Χ��
  var sides = [lines[0].f(ox,oy),lines[1].f(ox,oy),lines[2].f(ox,oy),lines[3].f(ox,oy)];
  //console.log(sides);
  var direction1 = sides[0] && sides[2];
  var direction2 = sides[1] && sides[3];
  if(direction1 && direction2){
    console.log('join inside');
    join = true;
    return true;
  }

  //2.Բ���ڷ����⣬������Զ�뷽�α�����
  if(direction1){
    if(sides[1]){
      //��c1 c4����
      checkJoinLine(lines[3],r,ox,oy);
    }else{
      //��c2 c3����
      checkJoinLine(lines[1],r,ox,oy);      
    }
  }else if(direction2){
    if(sides[0]){
      //��c3 c4����
      checkJoinLine(lines[2],r,ox,oy);
    }else{
      //��c1 c2����
      checkJoinLine(lines[0],r,ox,oy);      
    }
  }

  //3.Բ���ڷ����⣬Ҳû�����У�ֻ��մ���˷��εĽ�
  if(sides[0]&&sides[1]){
    //c4
    checkJoinPoint(c4x,c4y,ox,oy,r);
  }else if(sides[1]&&sides[2]){
    //c1
    checkJoinPoint(c1x,c1y,ox,oy,r);
  }else if(sides[2]&&sides[3]){
    //c2
    checkJoinPoint(c2x,c2y,ox,oy,r);
  }else{
    //c3
    checkJoinPoint(c3x,c3y,ox,oy,r);
  }
  if(!join){
    console.log('no join!');
  }
  //console.log('----end----');
  

  //functions 
  function getline(x1,y1,x2,y2,cx,cy){
    //y=kx+a
    var k1 = (x1-x2)!==0?(y1-y2)/(x1-x2):0;
    var a1 = y1-x1*k1;
    var gt1 = (x1-x2)!==0?(cy>cx*k1+a1):(cx>x1);
    
    
    var rtn = {
      gt:gt1,
      k:k1,
      a:a1,
      f:function(x,y){
        if(gt1){
          if(this.fx){
            return y>=this.fx(x);
          }else{
            return x>=this.fy(y);
          }          
        }else{
          if(this.fx){
            return y<=this.fx(x);
          }else{
            return x<=this.fy(y);
          }
        }
      },
      fx:(x1-x2)!==0?function(x){
        return k1*x+a1;
      }:null,
      fy:(y1-y2)!==0?function(y){
        return (y-a1)/k1;
      }:null
    };
    
    ((x1-x2)===0)&& (rtn.fy = function(){
      return x1;
    });
    ((y1-y2)===0)&& (rtn.fx = function(){
      return y1;
    });
    return rtn;
  }
  
  function checkJoinLine(line,r,ox,oy){
    if(!line.fx){
      var distance = Math.abs(line.fy(oy)-ox);
      if(r>=distance){
        join = true;
        console.log('join side');      
      }
    }else if(!line.fy){      
      distance = Math.abs(line.fx(ox)-oy);
      if(r>=distance){
        join = true;
        console.log('join side');      
      }
    }else{
      var dy=Math.abs(oy-line.fx(ox));
      var dx=Math.abs(ox-line.fy(oy));
      if(dx*dx+dy*dy>=(dy*dx/r)*(dy*dx/r)){
        join = true;
        console.log('join side');      
      }
    }
    
  }
  
  function checkJoinPoint(x,y,cx,cy,r){
    if((x-cx)*(x-cx)+(y-cy)*(y-cy)<=r*r){
      join = true;
      console.log('join conner');            
    }
  }

}