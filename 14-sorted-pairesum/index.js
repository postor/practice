/*
第14题：
题目：输入一个已经按升序排序过的数组和一个数字，
在数组中查找两个数，使得它们的和正好是输入的那个数字。
要求时间复杂度是O(n)。如果有多对数字的和等于输入的数字，输出任意一对即可。
例如输入数组1、2、4、7、11、15和数字15。由于4+11=15，因此输出4和11。
*/

var arr=[1,2,4,7,11,15];
var target = 15;
findPaire(arr,target);

function findPaire(arr,target){
  for(var index_start = 0;index_start<arr.length;index_start++){
    //没找到的话进1    
    for(var index_end = arr.length-1;index_end>index_start;index_end--){
      if(arr[index_start]+arr[index_end]>target){
        //大了，退一个
      }else if(arr[index_start]+arr[index_end] === target){
        console.log([arr[index_start],arr[index_end]]);
        return [arr[index_start],arr[index_end]];
      }else{
        //已经小了就不用继续退了
        break;
      }
    }
  }
}