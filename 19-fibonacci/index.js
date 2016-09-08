/*
��19�⣺
��Ŀ������Fibonacci�������£�  
  / 0 n=0
f(n)= 1 n=1
  \ f(n-1)+f(n-2) n=2

����n�������ķ���������еĵ�n�
�������ںܶ�C���Խ̿����н����ݹ麯����ʱ�򣬶�����Fibonacci��Ϊ���ӡ�
��˺ܶ����Ա�������ĵݹ�ⷨ�ǳ���Ϥ����....�Ǻǣ���֪���ġ���
*/

//�ؼ����ڽ������

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