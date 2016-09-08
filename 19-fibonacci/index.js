/*
第19题：
题目：定义Fibonacci数列如下：  
  / 0 n=0
f(n)= 1 n=1
  \ f(n-1)+f(n-2) n=2

输入n，用最快的方法求该数列的第n项。
分析：在很多C语言教科书中讲到递归函数的时候，都会用Fibonacci作为例子。
因此很多程序员对这道题的递归解法非常熟悉，但....呵呵，你知道的。。
*/

//关键在于结果缓存

var fibonacci = (function(){
  var cache = {
    '0':0,
    '1':1
  };
  
  return fibonacciWithCache;
  
  function fibonacciWithCache(n){
    if(typeof cache[n] !== 'undefined'){
      return cache[n]
    }
    return fibonacciWithCache(n-1)+fibonacciWithCache(n-2);
  }
})();

console.log(fibonacci(4));