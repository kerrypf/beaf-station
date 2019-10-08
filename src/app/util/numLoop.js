/**
100个人从1~100的编号围成一个圈，以123123依次报数，报数为的编号退出。最后剩下的编号是什么？
 */
class NumLoop {
  numArr = [];
  constructor(first = 1, end = 100) {
    for (let i = first; i < end; i++) {
      this.numArr.push(i);
    }
  }
  loopFilter(start = 1, num = 3, arr) {
    let count = start;
    arr = arr || this.numArr;
    if (arr.length <= 2 && count == 1) {
      return arr;
    }
    let filterArr = [];
    arr.forEach(element => {
      if (count !== num) {
        filterArr.push(element);
        count += 1;
      } else {
        count = 1;
      }
    });
    return this.loopFilter(count, num, filterArr);
  }
}

export default NumLoop;
