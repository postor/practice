/*
45.�Ż���
1.����һ���������󣬴���һ�����㣬�Ծ���������Ԫ�ؼ�һʱ����Ҫ�����ڣ��������ң�
ĳһ��Ԫ��Ҳ��һ���ָ���һ���������ж����Ƿ��ܹ���һ��ȫ����󾭹���������õ���

2.һ���������飬����Ϊn�������Ϊm�ݣ�ʹ���ݵĺ���ȣ���m�����ֵ
  ����{3��2��4��3��6} ���Էֳ�{3��2��4��3��6} m=1; 
  {3,6}{2,4,3} m=2
  {3,3}{2,4}{6} m=3 ����m�����ֵΪ3
*/

/**
1.����˼ά�������ڵĻ�����ȥ���٣�ÿ�μ�������һ�ԣ���һ���ܵõ�ȫ0����
�Ż���˼·��ȷ���Ƿ���У����Ǿ��������ĺ͵ڶ���ģ����������ȵ����������Χ��Ȩ
*/

/**
2.��n��ʼ���ݼ����ԣ����ֵĺ�Ϊ(�ܺ�/m)��Ϊ�����Ŀ���ֱ��pass��Ȼ���Ƿ������������
*/


var arr = [1,2,3,2,1,2,3,2,1,16,2,3,2,8];
console.log(findM(arr));

function findM(arr){
  var sum = 0;
  arr.sort((a,b)=>b-a);
  arr.forEach(x=>{sum+=x});
  console.log([sum,arr]);
  for(var m=arr.length;m>1;m--){
    var rtn = checkM(m);
    if(rtn){
      return rtn;
    }
  }
  return {m:1};
  
  function checkM(m){
    if((sum%m)!==0)return false;
    var psum = sum/m,used=[],groups=[];
    for(var i=0;i<arr.length;i++){
      if(arr[i]>psum) return false;
      if(used.indexOf(i)>=0) continue;
      
      var t = getIndexs(psum,i);
        //console.log([m,t]);
      if(t){
        groups.push(t.map(x=>arr[x]));
        used = used.concat(t);
        //console.log([m,psum,t,t.map(x=>arr[x]),used]);
        if(used.length === arr.length){
          return {
            groups:groups,
            m:m
          };
        }
      }
    }   
    
    return false;
    
    
    function getIndexs(psum,start){
      var left = psum-arr[start];
      if(left<0) return false;
      if(left === 0) return [start];
      
      for(var count=2;count<=arr.length-used.length+1;count++){
        var t = checkCountLeft(count-1,start+1,left);
        //console.log(t);
        if(t){
          return [start].concat(t);
        }
      }
      
      return false;
    }
    
    function checkCountLeft(count,start,left){
      if(left<=0) return false;
      if(count===1){
        for(var i=start;i<arr.length;i++){
          if(used.indexOf(i)>=0) continue;
          if(arr[i]===left) return [i];
        }
        return false;
      }else{
        for(var i=start;i<arr.length-count+1;i++){
          if(used.indexOf(i)>=0) continue;
          var tleft = left - arr[i];
          if(tleft>0){
            var t = checkCountLeft(count-1,i+1,tleft);
            if(t){
              return [i].concat(t);
            }
          }
        }
      }
      
      
    }
  }
  
  
}

