/**
 * In an array of arrays, e.g. given [[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []], print: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
 *    Implement an iterator that supports hasNext(), next() and remove() methods.
 */


class MyIterator {
  constructor(arr){
    this.arr = arr.filter(x=>x.length>0)
    this.i = [0,0]
  }
  
  next(){
    if(!this.hasNext()){
      return undefined
    }
     
    console.log(this.i)
    
    let [i0,i1] = this.i   
    const rtn = this.arr[i0][i1]
    i1++
    if(i1 == this.arr[i0].length){
      i0++
      i1=0
    }
    this.i = [i0,i1]
    return rtn
  }
  
  hasNext(){
    const [i0,i1] = this.i
    if(i0==this.arr.length){
      return false
    }
    return true
  }
}


const arr = [[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []]

const it = new MyIterator(arr)
const target = []
while(it.hasNext()){
  target.push(it.next())
}
console.log(target)
