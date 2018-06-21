//bubbleSort

Array.prototype.bubbleSort = function () {
  let sorted = false;
  
  while (!sorted) {
    sorted = true;
    
    for (let i = 0; i < this.length-1; i++) {
      if (this[i] > this[i+1]) {
        let temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        
        sorted = false;
      }
    }
  }
  
  return this;
};

//subStrings

String.prototype.subStrings = function () {
  const words = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length + 1; j++) {
      words.push(this.slice(i,j));
    }
  }
  return words;
};