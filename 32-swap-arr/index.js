/*
32.
有两个序列a,b，大小都为n,序列元素的值任意整数，无序；
要求：通过交换a,b中的元素，使[序列a元素的和]与[序列b元素的和]之间的差最小。
例如:  
var a=[100,99,98,1,2, 3];
var b=[1, 2, 3, 4,5,40];
*/


/*
思路：
1.使用辅助链表排序
循环：
2.计算两个和的相差的值
3.找到差最接近的调换，如果所有差值大于两个和的差则停止调换
*/


 

var a=[100,99,98,1,2, 3];
var b=[1, 2, 3, 4,5,40];
swap(a,b);

function swap(a,b){
  var x = a.slice(0), y = b.slice(0);
    console.log({from:{x:x,y:y}});
  loop(x,y);
  
  
  function loop(x,y){
    //--假设这是有序链表的操作
    x.sort((a,b)=>a-b),y.sort((a,b)=>a-b);
    //--假设这是有序链表的操作
    
    var xtotal = sum(x), ytotal = sum(y);
    var diff = xtotal - ytotal;
    var absMin1 = null,xl=0,yl=0;
    while(true){
      var absMin2 = null,xi=0;yi=0;
      for(var i=0;i<x.length;i++){
        var absMin3 = null,xj=0,yj=0;
        for(var j=0;j<y.length;j++){
          if(absMin3 === null){
            absMin3 = getAbs(diff,x[i],y[j]);
            yi=j;
            /*
            console.log({
              abs:absMin3,
              swap:[x[i],y[j]],
              swapIndex:[i,j]
            });*/
          }else{
            var n = getAbs(diff,x[i],y[j]);
            if(n<absMin3){
              absMin3=n;
              yj=j; 
 /*              
              console.log({
                abs:absMin3,
                swap:[x[i],y[j]],
                swapIndex:[i,j]
              });
              */
            }else if(n === absMin3){
              continue;
            }else{
              break;
            }
          }
        }
        if(absMin2==null){
          absMin2 = absMin3;
          xi=i,yi=yj;
        }else{
          if(absMin3<absMin2){
            absMin2 = absMin3;
            xi=i,yi=yj;
          }else if(absMin3===absMin2){
            continue;
          }else{
            break;
          }
        }
      }
      if(absMin1==null){
        absMin1 = absMin2;
        xl=xi,yl=yi;
      }else{
        if(absMin1<absMin2){
          absMin1 = absMin2;
          xl=xi,yl=yi;
        }else if(absMin1===absMin2){          
          break;
        }else{
          break;
        }
      }
      
    }
    
    if(absMin1<Math.abs(diff)){
      var t = x[xl];
      x[xl]=y[yl];
      y[yl]=t;      
      
      console.log({
        swap:[y[yl],x[xl]],
        to:{x:x,y:y},
        diff:diff,
        newDiff:absMin1
      });
      loop(x,y);
    }else{
      console.log({
        done:true,
        result:{x:x,y:y},
        diff:diff,
        newDiff:absMin1
      });  
    }
    

  }
  function getAbs(dif,xi,yi){
    return Math.abs(dif+(yi-xi)*2);//乘2重要！
  }
  
  function sum(arr){
    var s = 0;
    arr.forEach(x=>{s+=x});
    return s;
  }
  
}
