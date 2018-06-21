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