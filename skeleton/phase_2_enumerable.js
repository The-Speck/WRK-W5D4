//myEach
Array.prototype.myEach = function (callBack) {
    this.forEach( (el) => {
        return(callBack(el));
    });
};
// [1,2,3,4,5].myEach((el) => { console.log(el*2) });


//myMap
Array.prototype.myMap = function (callBack) {
    const newArray = [];
    this.myEach( (el) => {
      newArray.push(callBack(el));
    });
    return newArray;
};

// [1,2,3,4,5].myMap((el) => { return el*2 });

// myReduce

Array.prototype.myReduce = function (callBack, initialValue) {
  if (!initialValue) {
    initialValue = this.shift();
  }
  this.myEach( (el) => {
    initialValue = callBack(initialValue, el);
  });
  return initialValue;
};

// // without initialValue
// console.log([1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// })); // => 6
// 
// // with initialValue
// console.log([1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25)); // => 31