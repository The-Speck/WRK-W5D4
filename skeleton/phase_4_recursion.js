//Range
function range(start, end) {
  if (start > end ) {
    return -1;
  } else if ( start === end) {
    return [start];
  }
  
  return [start].concat(range(start+1, end));
}

//sumRec
function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 0) {
    return -1;
  }
  
  return arr[0] + sumRec(arr.slice(1, arr.length));
}

//exponent
function exponent(base, exp) {
  if (exp === 1) {
    return base;
  } else if (exp === 0) {
    return 1;
  } 
  
  return base * exponent(base, exp - 1);
}


function exponent2(base, exp) {
  if (exp === 1) {
    return base;
  } else if (exp === 0) {
    return 1;
  } 
  
  if (exp % 2 === 0 ) {
    return Math.pow(exponent2(base, exp / 2), 2);
  }
  else {
    return base * Math.pow(exponent2(base, (exp - 1) / 2), 2);  
  }
}


//Fibonacci

function fibonacci (num) {
  if (num === 0) {
    return -1;
  }
  else if ( num === 1) {
    return [1];
  } 
  else if ( num === 2) {
    return [1, 1];
  }

  let result = fibonacci(num - 1);
  let num1 = result[result.length - 1];
  let num2 = result[result.length - 2];
  let sum = num1 + num2;
  result.push(sum);
  return result;
}

// console.log(fibonacci(5));

function deepDup(arr) {
  if (arr.length === 0) {
    return arr;
  }
  
  const duppedArr = [];
  
  arr.forEach((el) => {
    if (typeof(el) === 'object') {
      duppedArr.push(deepDup(el));
    } else {
      duppedArr.push(el);
    }
  });
  
  return duppedArr;
}

function bsearch(arr, target) {
  if (arr.length === 0 || (arr.length === 1 && arr[0] !== target)) {
    return -1;
  }
  
  let middle = Math.floor(arr.length / 2);
  
  if (arr[middle] === target) {
    return middle;
  } else if (arr[middle] > target) {
    return bsearch(arr.slice(0, middle), target);
  } else {
    let result = bsearch(arr.slice(middle+1, arr.length), target);
    if (result === -1) {
      return result;
    }
    return (result + middle + 1);
  }
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const index = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, index));
  const right = mergeSort(arr.slice(index, arr.length));
  
  return mergeSorter(left, right); 
} 

function mergeSorter (left, right) {
  let sorted = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] > right[0]) {
      sorted.push(right.shift());
      
    }
    else {
      sorted.push(left.shift());
    }
  }
  sorted = sorted.concat(left);
  sorted = sorted.concat(right);
  return sorted;
}

// a = [6,5,4,3,2,1];
// mergeSort(a);

// [1,2] => [[], [1], [2], [1,2]]

function subSets(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  
  let temp = subSets(arr.slice(0, arr.length-1));
  let result = [];
  temp.forEach ((el) => {
    result.push(el);
    result.push(el.concat(arr[arr.length-1]));
  });
  
  return result;
}

subSets([1,2,3]);