/*
31.华为面试题：
一类似于蜂窝的结构的图，进行搜索最短路径（要求5分钟）
*/

//分析TSP问题是经典问题，蚁群算法应该是比较推荐的方法，基于随机+信息素衰减，5分钟这里还是用遍历吧

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

//题目比较宽泛，这里假设A-D有两条路径，找到最短的
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
        //没走过的
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