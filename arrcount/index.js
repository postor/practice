/*第6题
腾讯面试题： 
给你10分钟时间，根据上排给出十个数，在其下排填出对应的十个数 
要求下排每个数都是先前上排那十个数在下排出现的次数。 
上排的十个数如下： 
【0，1，2，3，4，5，6，7，8，9】

举一个例子， 
数值: 0,1,2,3,4,5,6,7,8,9 
分配: 6,2,1,0,0,0,1,0,0,0 
0在下排出现了6次，1在下排出现了2次， 
2在下排出现了1次，3在下排出现了0次.... 
以此类推.. 
 */
var arr=[0,1,2,3,4,5,6,7,8,9];
var arr2=[0,1,2];

function arrCount(input){
    //从大到小，大数字0的概率比较大
    var clone = input.map(x=>x);
    clone.sort((a,b)=>a<b);
    console.log(input);
    var gResult = {};
    //遍历N层
    if(loop(0)){
        console.log('found it:');
        console.log(input.map(x=>gResult[x]));
    }else{
        console.log('no such array')
    }
    

    function loop(index,curArr){
        
        curArr = curArr||[];
        
        index = index||0;
        
        if(index>=clone.length) return false;
        
        for(var i=0;i<clone.length;i++){
            var tArr = curArr.map(x=>x);
            tArr[index] = i;
            if(index===clone.length-1){
                if(check(tArr)){
                    //console.log([true,tArr]);
                    for(var e=0;e<clone.length;e++){
                        gResult[clone[e]] = tArr[e];
                    }
                    return true;
                }else{
                    //console.log([false,tArr,i]);
                }
            }else{
                if(loop(index+1,tArr)) return true;
            }
        }
    }

        


    function check(arr){
        var ok = true;
        for(var i=0;i<clone.length;i++){
            if(arr.filter(x=>x===clone[i]).length===arr[i]){

            }else{
                ok=false;
            }
        }
        return ok;
    }
    
}


arrCount(arr2);