/*
2010������������
�����⣺
������������ n �� m��������1��2��3.......n �� ����ȡ������,
ʹ��͵��� m ,Ҫ���������еĿ�������г���.
*/
findNums(20,10);

function findNums(n,m){
  var arr = getArr(n);
  for(var count=1;count<=n;count++){
    var firstResult = 0;
    for(var index=0;index<n-count;index++){
      var result = findByCount(index,count,0,[])
      
      if(index===0)firstResult=result
      
      //Խ����Խ�󣬳����Ͳ�������ѭ����
      if(result===false) break
    }
    //���count�������һ�ξͳ����ˣ�Խ��Խ����
    if(firstResult===false) break
  }
  
  function getArr(n){
    var arr = [];
    for(var i=0;i<n;i++){
      arr[i] = i+1;
    }
    return arr;
  }  
  
  function findByCount(index,count,sum,tarr){
    //�����˾Ͳ�������
    if(sum>m) return false;
    
    if(count ===1){
      if(sum+arr[index]===m){
        tarr.push(arr[index]);
        console.log(tarr);
      }else if(arr[index]>m){
        //�����˾Ͳ�������
        return false;
      }      
    }else{
      sum+=arr[index];
      tarr.push(arr[index]);      
      count--;
      for(var i=index+1;i<n-count;i++){    
        var tarr1 = tarr.map(x=>x);
        var result = findByCount(i,count,sum,tarr1);
        if(result===false){
          //�����˾Ͳ�������
          break;
        }
      }
    }
    return true;
  }
}