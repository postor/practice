/*
29.ջ��push��pop����
��Ŀ�����������������С�����һ�����б�ʾջ��push˳��
�ж���һ��������û�п����Ƕ�Ӧ��pop˳��
Ϊ�˼���������Ǽ���push���е����������������ǲ���ȵġ�  

���������push������1��2��3��4��5����ô4��5��3��2��1���п�����һ��popϵ�С�
��Ϊ���������µ�push��pop���У�
push 1��push 2��push 3��push 4��pop��push 5��pop��pop��pop��pop��
�����õ���pop���о���4��5��3��2��1��
������4��3��5��1��2�Ͳ�������push����1��2��3��4��5��pop���С�
*/

//����˼·������push���������е�pop˳�򷽰�����ƥ��Ķ���


var test = [
  [
    [1,2,3,4,5],[4,5,3,2,1]
  ],
  [
    [1,2,3,4,5],[4,3,5,1,2]
  ]
];

test.forEach(function(item){
  console.log([item[0],item[1],check(item[0],item[1])])
});

function check(push,pop){
  return stack([],push,pop)
}

function stack(current,topush,topop){
  if(topop.length ===0){
    return true;
    //console.log('OK!');
  }
  
  if(topush.length && topush[0]===topop[0]){
    //���Ҫ����ĺ�Ҫȡ������ͬ����ֱ�ӵ���
    return stack(current,topush.slice(1),topop.slice(1))
  }else if(current[current.length-1] === topop[0]){
    //���ջ����Ҫȡ������ͬ
    current.pop();
    return stack(current,topush,topop.slice(1));
  }else if(topush.length!==0){
    //����֮�����
    var n = current.map(x=>x);
    n.push(topush[0]);
    return stack(n,topush.slice(1),topop);
  } else{
    //console.log('NOT!');
    return false;
  }
  
}