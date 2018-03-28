/**
 * In an array of arrays, e.g. given [[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []], print: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
 *    Implement an iterator that supports hasNext(), next() and remove() methods.
 */

const arr = [[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []]

const it = new MyIterator(arr)
const target = []
while(it.hasNext()){
  target.push(it.next())
}

class MyIterator {
  constructor(){
    
  }
}