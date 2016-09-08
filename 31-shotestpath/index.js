/*
31.��Ϊ�����⣺
һ�����ڷ��ѵĽṹ��ͼ�������������·����Ҫ��5���ӣ�
*/

//����TSP�����Ǿ������⣬��Ⱥ�㷨Ӧ���ǱȽ��Ƽ��ķ������������+��Ϣ��˥����5�������ﻹ���ñ�����

var linkMap = {
  A:{
    B:5,
    F:4
  },
  B:{
    A:5,
    C:3
  },
  C:{
    B:3,
    D:7
  },
  D:{
    C:7,
    E:3
  },
  E:{
    D:3,
    F:9
  },
  F:{
    E:9,
    A:4
  }
};

//��Ŀ�ȽϿ����������A-D������·�����ҵ���̵�
findShotestPath('A','D',linkMap);

function findShotestPath(start,end,map){
  var his = {
    pathLength:0,
    nodes:[]
  };
  his.nodes.push(start);
  findPath(his,start,end,map);
  
  function findPath(his,current,target,map){
    if(current === target){
      console.log(his);
      return;
    }
    for(var i in map[current]){
      if(his.nodes.indexOf(i)<0){
        //û�߹���
        var tnodes = his.nodes.slice(0);
        tnodes.push(i);
        var newhis ={
          pathLength: his.pathLength+map[current][i],
          nodes: tnodes
        };
        findPath(newhis,i,target,map);
      }
    }
  }
}